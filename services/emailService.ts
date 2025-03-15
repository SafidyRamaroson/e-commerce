import { sendMail } from "@/utils/mailer"

export async function sendVerificationEmail({
    sendTo,
    verificationCode
}: {
    sendTo: string,
    verificationCode: number
}){
    
    const info = await sendMail({
        sendTo,
        subject: "Votre code de vérification",
        text:`
        Bonjour,
  
        Voici votre code de vérification pour continuer sur VestiGo :
  
        Code : ${verificationCode}
  
        Ce code est valable pendant 10 minutes. Veuillez l'entrer dans l'application pour poursuivre.
  
        Si vous n'avez pas initié cette demande, ignorez simplement cet email.
  
        À bientôt,

        L'équipe VestiGo
      `
    });

    return info;
}