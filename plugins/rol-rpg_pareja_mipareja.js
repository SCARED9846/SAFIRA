let handler = async (m, { conn, usedPrefix }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

if (global.db.data.users[m.sender].pasangan == "") return await conn.reply(m.chat, `*${usuario}* 𝙉𝘼̃𝙊 𝙏𝙀𝙈 𝙉𝙊𝙄𝙑𝙊(𝘼)\n\n𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝙄𝙉 𝘼 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋\n\n*_Se você quiser ter um par use o comando ${usedPrefix}casal marcando alguém._*\n\n${wm}`, fkontak,  m)
/*await conn.sendButton(m.chat, `*${usuario}* 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝙄𝙉 𝘼 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋`, `*_Si quiere tener una pareja use el comando ${usedPrefix}pareja etiquetando a alguien._*\n\n` + wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
  
if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return await conn.reply(m.chat, `*${usuario}* 💗 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(persona)}* 💖`, fkontak, m, 
/*await conn.sendButton(m.chat, `*${usuario}* 💗 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(persona)}* 💖`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m,*/ {contextInfo: { mentionedJid: [ m.sender, who ] }})

await conn.reply(m.chat, `*🤨 𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 *${await conn.getName(persona)}* 𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 𝙀𝙇𝙀 𝙉𝙊 𝘼𝘾𝙀𝙄𝙏𝙊𝙐 𝙎𝙐𝘼 𝙋𝙍𝙊𝙋𝙊𝙎𝙏𝘼 𝙋𝘼𝙍𝘼 𝙀𝙉𝙏𝙍𝘼𝙍 𝙀𝙈 𝙐𝙈 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝙈𝙀𝙉𝙏𝙊\n\n*_Dada a situação, esta pendência será cancelada_*\n\n${wm}`, fkontak, m, 
/*conn.sendButton(m.chat, `🤨 𝙋𝘼𝙍𝙀𝘾𝙀 𝙌𝙐𝙀 *${await conn.getName(persona)}* 𝙉𝙊 𝙃𝘼 𝘼𝘾𝙀𝙋𝙏𝘼𝘿𝙊 𝙉𝙄 𝙍𝙀𝘾𝙃𝘼𝙕𝘼𝘿𝙊 𝙏𝙐 𝙋𝙍𝙊𝙋𝙐𝙀𝙎𝙏𝘼 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝘼𝙈𝘽𝙊𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉`, `*_Vista la situación se anulará este pendiente_*\n\n` + wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, */ {contextInfo: { mentionedJid: [ persona, m.sender ] }})
global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(sinceridad|casal|miamor|minovio|minovia|mylove)$/i
handler.group = true
export default handler
