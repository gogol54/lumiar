import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req){

 const body = await req.json()

 const transporter = nodemailer.createTransport({
   host: process.env.SMTP_HOST,
   port: 465,
   secure: true,
   auth:{
     user: process.env.SMTP_USER,
     pass: process.env.SMTP_PASS
   }
 })

 await transporter.sendMail({
   from: process.env.SMTP_USER,
   to: process.env.SMTP_USER,
   subject:`Nova denúncia - ${body.tipo}`,
   html: `
     <h2>Nova manifestação recebida</h2>

     <p><strong>Nome:</strong> ${body.nome}</p>
     <p><strong>Email:</strong> ${body.email}</p>
     <p><strong>Empresa:</strong> ${body.empresa}</p>

     <p><strong>Descrição:</strong></p>
     <p>${body.descricao}</p>
   `
 })

 return NextResponse.json({
   success:true
 })
}