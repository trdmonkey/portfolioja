import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, services, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Los campos obligatorios faltan" },
        { status: 400 }
      );
    }

    // Convertimos el array de servicios en un texto separado por comas
    const serviciosSeleccionados = services && services.length > 0 
      ? services.join(", ") 
      : "Ninguno seleccionado";

    const data = await resend.emails.send({
      from: "Portafolio J&A <onboarding@resend.dev>", // eSTE ES EL CORREO POR DEFECTO DEL CUAL SE ENVIAN LOS MAILS
      to: "trdmonkey218@gmail.com", // Correo registrado en RESEND
      subject: `🚨 Nueva solicitud de asesoría: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111827; max-width: 600px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="color: #059669; margin-bottom: 5px;">Nueva Solicitud de Consultoría</h2>
          <p style="font-size: 14px; color: #4b5563;">Un cliente ha solicitado una cotización desde el portafolio web.</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 35%;">Cliente / Empresa:</td>
              <td style="padding: 6px 0; color: #374151;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Correo:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Teléfono / WhatsApp:</td>
              <td style="padding: 6px 0; color: #374151;">${phone || "No proporcionado"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Servicios de Interés:</td>
              <td style="padding: 6px 0; color: #0d9488; font-weight: 500;">${serviciosSeleccionados}</td>
            </tr>
          </table>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-weight: bold; font-size: 14px; margin-bottom: 8px;">Detalles del Requerimiento:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #34d399; font-style: italic; font-size: 14px; line-height: 1.5;">
            "${message}"
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-size: 11px; color: #9ca3af; font-family: monospace; text-align: center;">J&A Soluciones Integradas · Sistema de Captura Automática</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}