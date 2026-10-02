const nodemailer = require("nodemailer");

async function main() {
  // Compte de test gratuit (Ethereal) : aucun vrai mot de passe nécessaire
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  const info = await transporter.sendMail({
    from: '"Test Node" <test@example.com>',
    to: "destinataire@example.com",
    subject: "Email de test Nodemailer",
    text: "Bonjour, ceci est un email de test envoyé avec Node.js !",
    html: "<b>Bonjour, ceci est un email de test envoyé avec Node.js !</b>"
  });

  console.log("Email envoyé : " + info.messageId);
  console.log("Prévisualisation : " + nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
