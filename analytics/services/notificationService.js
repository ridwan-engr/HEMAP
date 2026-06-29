import nodemailer from "nodemailer";

const transporter =
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:
        process.env.EMAIL_USER,
      pass:
        process.env.EMAIL_PASSWORD
    }
  });

export async function sendEmail(
  to,
  subject,
  message
) {

  return await transporter.sendMail({
    from:
      process.env.EMAIL_USER,
    to,
    subject,
    text: message
  });
}

export async function sendFaultAlert(
  email,
  fault
) {

  return await sendEmail(
    email,
    "HEMAP Fault Alert",
    `
Fault Detected

Asset: ${fault.assetType}

Code: ${fault.faultCode}

Severity: ${fault.severity}

Description:
${fault.description}
`
  );
}

export async function sendBatteryLowAlert(
  email,
  soc
) {

  return await sendEmail(
    email,
    "Battery Low SOC Alert",
    `Battery State of Charge has dropped to ${soc}%`
  );
}

export async function sendGeneratorStartAlert(
  email
) {

  return await sendEmail(
    email,
    "Generator Started",
    "Generator has started due to power deficit."
  );
}