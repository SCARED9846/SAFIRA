import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙐𝙎𝙀 𝘿𝘼 𝙎𝙀𝙂𝙐𝙄𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙄𝙍𝘼\n*${usedPrefix + command} Gabrielp3887*\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙆𝙀 𝙏𝙃𝙄𝙎\n*${usedPrefix + command} Gabrielp3887*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}*`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
handler.limit = 1
export default handler
