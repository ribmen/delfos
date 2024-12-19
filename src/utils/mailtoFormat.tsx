interface MailtoProps {
  destinatario: string,
  assunto: string,
  mensagem: string
}

export const generateMailtoMessage = (
  {
    destinatario,
    assunto,
    mensagem
  }: MailtoProps) => {
  return `
    mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}
  `
};