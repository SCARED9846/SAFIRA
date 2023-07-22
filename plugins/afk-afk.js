let handler = async (m, { text, usedPrefix }) => {
let user = global.db.data.users[m.sender]
  if (!text) return m.reply(`${lenguajeGB['smsAvisoMG']()}𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘾𝙊𝙇𝙊𝙌𝙐𝙀 𝙊 𝙈𝙊𝙏𝙄𝙑𝙊 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝘼𝙍 𝘼𝙁𝙆\n\n𝙀𝙓𝙀𝙈𝙋𝙇𝙊:\n*${usedPrefix}afk VOU COMER*`)
    if (text.length < 10) return m.reply(`${lenguajeGB['smsAvisoMG']()}𝙊 𝙈𝙊𝙏𝙄𝙑𝙊 𝙀𝙎𝙏𝘼 𝙈𝙐𝙄𝙏𝙊 𝘾𝙐𝙍𝙏𝙊, 𝙈𝙄𝙉𝙄𝙈𝙊 10 𝘾𝘼𝙍𝘼́𝘾𝙏𝙀𝙍𝙀𝙎`)
user.afk = + new Date
user.afkReason = text
m.reply(`${lenguajeGB['smsAfkM1A']()} *${conn.getName(m.sender)}* ${lenguajeGB['smsAfkM1B']()}${text ? ': ' + text : ''}
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
