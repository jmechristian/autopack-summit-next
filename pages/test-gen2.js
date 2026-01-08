import { useState } from 'react';
import { gen2GraphQL, gen2Query, gen2Mutation } from '../util/gen2-api';
import { getAPSCompanies } from '../util/api';
import {
  listAPSNewGen1,
  syncCompaniesToNewGen1,
  createCompanyNewGen1,
} from '../util/new-gen1-api';

export default function TestGen2() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [testType, setTestType] = useState('listAPS');

  const EVENT_ID = 'd854c771-db74-4315-83ec-36ce55173532';

  const handleListGen1Companies = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTestType('listGen1Companies');

    try {
      const companies = await getAPSCompanies();
      setResult({ companies, count: companies.length });
      console.log('✅ Gen 1 Companies:', companies);
    } catch (err) {
      setError(err.message);
      console.error('❌ Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSyncGen1ToGen2Companies = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTestType('syncCompanies');

    try {
      // Step 1: Get all companies from Gen 1
      const gen1Companies = await getAPSCompanies();
      console.log(`Found ${gen1Companies.length} companies in Gen 1`);

      const createCompanyMutation = `
        mutation CreateAPSCompany($input: CreateAPSCompanyInput!) {
          createAPSCompany(input: $input) {
            id
            name
            email
            type
            eventId
          }
        }
      `;

      const results = {
        successful: [],
        failed: [],
        skipped: [],
      };

      // Step 2: Create each company in Gen 2
      for (const gen1Company of gen1Companies) {
        try {
          // Map Gen 1 company to Gen 2 schema
          // Gen 1 might have different field names, so we need to map them
          const gen2CompanyInput = {
            name: gen1Company.name || '',
            email: gen1Company.email || '',
            type: gen1Company.type || 'OEMTIER1', // Default if not set
            eventId: EVENT_ID,
            description: gen1Company.description || null,
            website: gen1Company.website || null,
            phone: gen1Company.phone || null,
            address: gen1Company.address || gen1Company.street_1 || null,
            city: gen1Company.city || null,
            state: gen1Company.state || null,
            zip: gen1Company.zip || null,
            country: gen1Company.country || null,
            logo: gen1Company.logo || null,
          };

          // Check if company already exists in Gen 2 (by email)
          const checkQuery = `
            query ListAPSCompanies($filter: ModelAPSCompanyFilterInput) {
              listAPSCompanies(filter: $filter) {
                items {
                  id
                  email
                }
              }
            }
          `;

          const existing = await gen2Query(checkQuery, {
            filter: { email: { eq: gen2CompanyInput.email } },
          });

          if (existing.listAPSCompanies.items.length > 0) {
            results.skipped.push({
              gen1Id: gen1Company.id,
              name: gen1Company.name,
              reason: 'Already exists in Gen 2',
              gen2Id: existing.listAPSCompanies.items[0].id,
            });
            continue;
          }

          // Create the company in Gen 2
          const result = await gen2Mutation(createCompanyMutation, {
            input: gen2CompanyInput,
          });

          results.successful.push({
            gen1Id: gen1Company.id,
            gen2Id: result.createAPSCompany.id,
            name: gen1Company.name,
            email: gen1Company.email,
          });
        } catch (err) {
          results.failed.push({
            gen1Id: gen1Company.id,
            name: gen1Company.name,
            error: err.message,
          });
          console.error(`Failed to create company ${gen1Company.name}:`, err);
        }
      }

      setResult({
        summary: {
          total: gen1Companies.length,
          successful: results.successful.length,
          failed: results.failed.length,
          skipped: results.skipped.length,
        },
        details: results,
      });
      console.log('✅ Sync complete:', results);
    } catch (err) {
      setError(err.message);
      console.error('❌ Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateGen2Company = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTestType('createGen2Company');

    try {
      // Example company data - you can modify this
      // CompanyType enum values: OEMTIER1, SOLUTIONPROVIDER, SPONSOR
      const companyInput = {
        name: 'Test Company',
        email: 'test@example.com',
        type: 'OEMTIER1', // Valid values: OEMTIER1, SOLUTIONPROVIDER, SPONSOR
        eventId: EVENT_ID,
        description: 'Test company description',
        website: 'https://example.com',
        phone: '555-1234',
      };

      const createCompanyMutation = `
        mutation CreateAPSCompany($input: CreateAPSCompanyInput!) {
          createAPSCompany(input: $input) {
            id
            name
            email
            type
            eventId
          }
        }
      `;

      const data = await gen2Mutation(createCompanyMutation, {
        input: companyInput,
      });
      setResult(data);
      console.log('✅ Created Gen 2 Company:', data);
    } catch (err) {
      setError(err.message);
      console.error('❌ Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleListAPS = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTestType('listAPS');

    const testQuery = `
      query MyQuery {
        listAPS {
          items {
            id
            year
          }
        }
      }
    `;

    try {
      const data = await gen2GraphQL(testQuery);
      setResult(data);
      console.log('✅ Success!', data);
    } catch (err) {
      setError(err.message);
      console.error('❌ Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleListAPSNewGen1 = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTestType('listAPSNewGen1');

    try {
      const data = await listAPSNewGen1();
      setResult({ aps: data, count: data.length });
      console.log('✅ New Gen 1 APS:', data);
    } catch (err) {
      setError(err.message);
      console.error('❌ Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSyncToNewGen1 = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTestType('syncToNewGen1');

    try {
      const results = await syncCompaniesToNewGen1(getAPSCompanies);
      setResult(results);
      console.log('✅ Sync complete:', results);
    } catch (err) {
      setError(err.message);
      console.error('❌ Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Gen 2 API Test</h1>

      <div style={{ marginBottom: '1rem' }}>
        <h2>Configuration</h2>
        <p>
          <strong>Endpoint:</strong>{' '}
          {process.env.NEXT_PUBLIC_GEN2_APPSYNC_ENDPOINT || 'NOT SET'}
        </p>
        <p>
          <strong>API Key:</strong>{' '}
          {process.env.NEXT_PUBLIC_GEN2_API_KEY
            ? '***' + process.env.NEXT_PUBLIC_GEN2_API_KEY.slice(-4)
            : 'NOT SET'}
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h2>Test Actions</h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleListGen1Companies}
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading && testType === 'listGen1Companies'
              ? 'Loading...'
              : 'List Gen 1 Companies'}
          </button>

          <button
            onClick={handleCreateGen2Company}
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading && testType === 'createGen2Company'
              ? 'Creating...'
              : 'Create Gen 2 Company'}
          </button>

          <button
            onClick={handleListAPS}
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#8b5cf6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading && testType === 'listAPS'
              ? 'Loading...'
              : 'List APS (Gen 2)'}
          </button>

          <button
            onClick={handleSyncGen1ToGen2Companies}
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading && testType === 'syncCompanies'
              ? 'Syncing...'
              : 'Sync Gen 1 → Gen 2 Companies'}
          </button>

          <button
            onClick={handleListAPSNewGen1}
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#6366f1',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading && testType === 'listAPSNewGen1'
              ? 'Loading...'
              : 'List APS (New Gen 1)'}
          </button>

          <button
            onClick={handleSyncToNewGen1}
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#ec4899',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading && testType === 'syncToNewGen1'
              ? 'Syncing...'
              : 'Sync → New Gen 1'}
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h2>Event ID</h2>
        <p>
          <code>{EVENT_ID}</code>
        </p>
      </div>

      {error && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            borderRadius: '4px',
            color: '#c00',
          }}
        >
          <h3>Error</h3>
          <pre>{error}</pre>
        </div>
      )}

      {result && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#efe',
            border: '1px solid #cfc',
            borderRadius: '4px',
          }}
        >
          <h3>Success! Response:</h3>
          <pre style={{ overflow: 'auto', maxHeight: '400px' }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
