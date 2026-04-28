import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.formData();

    const arquivo = data.get("arquivo");

    let attachments = [];

    if (arquivo && arquivo.size > 0) {
      const bytes = await arquivo.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: arquivo.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Nova denúncia - ${data.get("tipo")}`,
      attachments,

      html: `
       <h2>Nova manifestação recebida</h2>

       <p><strong>Nome:</strong> ${data.get("nome")}</p>
       <p><strong>Email:</strong> ${data.get("email")}</p>
       <p><strong>Empresa:</strong> ${data.get("empresa")}</p>
       <p><strong>Whatsapp:</strong> ${data.get("whatsapp")}</p>

       <p><strong>Descrição:</strong></p>
       <p>${data.get("descricao")}</p>
     `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 });
  }
}
