import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝙑𝙀 𝙈𝘼𝙍𝘾𝘼𝙍 𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙏𝘼𝙂 𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝘿𝙄𝙌𝙐𝙀 𝘼 𝙌𝙐𝘼𝙉𝙏𝙄𝘿𝘼𝘿𝙀 𝘿𝙀 𝙓𝙋\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙉𝙐𝙈𝘽𝙀𝙍 𝙊𝙁 𝙀𝙓𝙋`
if (isNaN(txt)) throw `${mg}𝙎𝙀𝙈 𝙎𝙄́𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝙉Ú𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw `${mg}𝙊 𝙉Ú𝙈𝙀𝙍𝙊 𝙈Í𝙉𝙄𝙈𝙊 𝘿𝙀 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼 (𝙀𝙓𝙋) 𝙀 *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙍𝙊𝙈 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙀 (𝙀𝙓𝙋) 𝙄𝙎 *1*`
let users = global.db.data.users
users[who].exp += xp
m.reply(`╭━[ 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼 | 𝙀𝙓𝙋 ⚡]━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ ${text}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${xp} EXP* ⚡\n┃\n╰━━━━━━━━━━━━━━⬣`)}
/*conn.sendHydrated(m.chat, `╭━[ 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼 | 𝙀𝙓𝙋 ⚡]━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ ${text}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${xp} EXP* ⚡\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
}*/
handler.help = ["ddxp  [@user]"]
handler.tags = ['xp']
handler.command = ['staffxp', 'addxp', 'darxp', 'darexperiencia', 'darxp', 'darexp'] 
handler.group = true
handler.rowner = true
export default handler
