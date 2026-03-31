import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { render } from '@react-email/render';
import { CodeRequestedEmail } from '../../react-email-starter/emails/code-requested';

const REGION = 'us-east-1';
const sesConfig = { region: REGION };
if (process.env.AWSACCESSKEYID && process.env.AWSSECRETACCESSKEY) {
  sesConfig.credentials = {
    accessKeyId: process.env.AWSACCESSKEYID,
    secretAccessKey: process.env.AWSSECRETACCESSKEY,
  };
}
const sesClient = new SESClient(sesConfig);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const body = req.body;
  if (!body?.email || !body?.firstName || !body?.lastName || !body?.company) {
    return res.status(400).json({
      message:
        'Missing required fields: email, firstName, lastName, and company are required.',
    });
  }

  const emailHtml = render(<CodeRequestedEmail registrant={body} />);

  const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        ToAddresses: [
          toAddress,
          'lars@packagingschool.com',
          'bianca@packagingschool.com',
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Data: emailHtml,
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'TEXT_FORMAT_BODY',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Automotive Packaging Summit Code Request',
        },
      },
      Source: fromAddress,
      ReplyToAddresses: [
        /* more items */
      ],
    });
  };

  try {
    await sesClient.send(
      createSendEmailCommand(
        'jamie@packagingschool.com',
        'info@packagingschool.com',
      ),
    );
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error('SES send-code-request error:', error);
    return res.status(500).json({
      message: error?.message || 'Failed to send code request email',
      code: error?.name || 'SES_ERROR',
    });
  }
}
