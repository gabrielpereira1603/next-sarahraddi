import { sendEmail } from "@/app/utils/mail.utils";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        const sender = {
            name: 'Contato do Site',
            address: 'suporte@somosdevteam.com'
        };

        const recipients = [{
            name: 'Sarah',
            address: 'contato@sarahraddi.com.br'
        }];

        const subject = `Contato de ${name}`;
        const body = `
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
            <p><strong>Mensagem:</strong> ${message}</p>
        `;

        const result = await sendEmail({
            sender,
            recipients,  // Corrigido para 'recipients'
            subject,
            message: body
        });

        return new Response(JSON.stringify({ accepted: result.accepted }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error) {
        console.error('Erro ao enviar o email:', error);  // Log de erro para debugging
        return new Response(JSON.stringify({ message: 'Não foi possível enviar o email' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
