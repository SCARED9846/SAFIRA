import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝙑𝙀 𝙈𝘼𝙍𝘾𝘼𝙍 𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙏𝘼𝙂 𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝘿𝙄𝙌𝙐𝙀 𝘼 𝙌𝙐𝘼𝙉𝙏𝙄𝘿𝘼𝘿𝙀 𝘿𝙀 𝘾𝙊𝙄𝙉𝙎\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙉𝙐𝙈𝘽𝙀𝙍 𝙊𝙁 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙀𝙈 𝙎𝙄́𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙈𝙀𝙉𝙏𝙀 𝙉Ú𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`
let gatacoins = parseInt(txt)
let money = gatacoins
let pjk = Math.ceil(gatacoins * pajak)
money += pjk
if (money < 1) throw `${mg}𝙊 𝙉Ú𝙈𝙀𝙍𝙊 𝙈Í𝙉𝙄𝙈𝙊 𝘿𝙀 𝘾𝙊𝙄𝙉𝙎 𝙀́ *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙍𝙊𝙈 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎 𝙄𝙎 *1*`
let users = global.db.data.users
//let users = global.db.data.users[who]
users[who].money += gatacoins
m.reply(`╭━━━[ 𝘾𝙊𝙄𝙉𝙎 ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ ${text}\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${gatacoins} GataCoin(s)* 🐈\n┃\n╰━━━━━━━━━━━━━━⬣\n\n${wm}`)}
/*conn.sendHydrated(m.chat, `╭━━━[ 𝘾𝙊𝙄𝙉𝙎 🐈 ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${gatacoins} GataCoin(s)* 🐈\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)
}*/
handler.help = ['addgb <@user>']
handler.tags = ['gatacoins']
handler.command = ['staffcoins', 'addcoins', 'adicionar', 'darcoins', 'darsafira', 'darcoins'] 
handler.group = true
handler.rowner = true
export default handler
