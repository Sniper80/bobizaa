let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
*https://whatsapp.com/channel/0029VaAdbEYAInPlEfHNVP2X*
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['info']
handler.command = /^(channel)$/i

export default handler;
