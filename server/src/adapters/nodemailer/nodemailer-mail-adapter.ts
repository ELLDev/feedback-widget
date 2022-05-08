import nodemailer from "nodemailer";
import { MailAdapter, SendMail } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "017d7bf8bcb7de",
    pass: "cd4555dc960403",
  },
});

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMail) {
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "ELLDev <elldev404@gmail.com>",
      subject,
      html: body,
    });
  }
}
