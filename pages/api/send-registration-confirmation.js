import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { render } from '@react-email/render';
import { RegConfirmEmail } from '../../react-email-starter/emails/reg-confirm';

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
  const body = req.body;

  const emailHtml = render(
    <RegConfirmEmail
      formData={body.formData}
      totalAmount={body.totalAmount}
      formDataId={body.formDataId}
      addOnsSelected={body.addOnsSelected}
    />,
  );

  const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        CcAddresses: [],
        ToAddresses: [toAddress],
      },
      Message: {
        Body: {
          Html: {
            Data: emailHtml,
          },
          Text: {
            Charset: 'UTF-8',
            Data: `Thank you for registering for the Automotive Packaging Summit 2026. View your dashboard: https://www.autopacksummit.com/registrants/${body.formDataId}`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Automotive Packaging Summit 2026 – Registration Received',
        },
      },
      Source: fromAddress,
      ReplyToAddresses: [],
    });
  };

  try {
    await sesClient.send(
      createSendEmailCommand(
        body.formData.email,
        'bianca@packagingschool.com',
        'lars@packagingschool.com',
      ),
    );
    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error('SES send error:', error);
    res.status(410).json({ message: 'error' });
  }
}
