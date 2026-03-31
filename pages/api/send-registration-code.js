import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { render } from '@react-email/render';
import { CodeRequestEmail } from '../../react-email-starter/emails/code-request-email';

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
  const query = req.query;
  if (!query?.email) {
    return res.status(400).json({ message: 'Missing required query param: email' });
  }
  const emailHtml = render(<CodeRequestEmail />);

  const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
        ],
        BccAddresses: [
          'lars@packagingschool.com',
          'bianca@packagingschool.com',
        ],
        ToAddresses: [
          toAddress,
          query.email,
          // 'diana@packagingschool.com',
          // 'bianca@packagingschool.com',
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
          Data: 'Automotive Packaging Summit Registration Code',
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
    console.error('SES send-registration-code error:', error);
    return res.status(500).json({
      message: error?.message || 'Failed to send registration code email',
      code: error?.name || 'SES_ERROR',
    });
  }
}
