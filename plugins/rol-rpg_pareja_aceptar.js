import fetch from 'node-fetch' 
import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.reply(m.chat, `${mg}𝙈𝘼𝙍𝙌𝙐𝙀 𝘼 𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙈 𝘿𝘼 𝙋𝙀𝙎𝙎𝙊𝘼 𝙌𝙐𝙀 𝙑𝙊𝘾𝙀̂ 𝘼𝘾𝙀𝙄𝙏𝘼𝙍 𝘾𝘼𝙎𝘼𝙍\n\n𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)
/*await conn.sendButton(m.chat, `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝙊 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.reply(m.chat, `${fg}𝙉𝘼̃𝙊 𝘾𝙊𝙉𝙎𝙀𝙂𝙐𝙄 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝙍 𝘼 𝙋𝙀𝙎𝙎𝙊𝘼, 𝙀𝙇𝘼 𝘿𝙀𝙑𝙀 𝙀𝙎𝙏𝘼𝙍 𝙉𝙀𝙎𝙎𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, fkontak,  m)
/*conn.sendButton(m.chat, `${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
if(user === m.sender) return await conn.reply(m.chat, `${fg}𝙑𝙊𝘾𝙀̂ 𝙈𝙀𝙎𝙈𝙊 𝙉𝘼̃𝙊 𝙋𝙊𝘿𝙀𝙍 𝙎𝙀𝙍 𝘾𝘼𝙎𝘼𝘿𝙊.\n\n𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙐𝙎𝙏𝙀𝘿 𝙈𝙄𝙎𝙈𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙎𝙀𝙍 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
if(user === conn.user.jid) return await conn.reply(m.chat, `${fg}𝙀𝙐 𝙉𝘼̃𝙊 𝙋𝙊𝙎𝙎𝙊 𝙎𝙀𝙍 𝙎𝙐𝘼 𝙉𝙊𝙄𝙑𝘼 😹\n\n𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙔𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙎𝙀𝙍 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼 😹\n\n𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.reply(m.chat, `𝙑𝙊𝘾𝙀̂ 𝙉𝘼̃𝙊 𝙋𝙊𝘿𝙀 𝘼𝘾𝙀𝙄𝙏𝘼𝙍 𝙎𝙀 𝙉𝙄𝙉𝙂𝙐𝙀𝙈 𝙏𝙄𝙑𝙀𝙍 𝙎𝙀 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝘿𝙊, 𝙎𝙀 𝘿𝙀𝘾𝙇𝘼𝙍𝙊 𝘾𝙊𝙈 *${tu}* 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝘼 𝙋𝙀𝙎𝙎𝙊𝘼 𝙋𝙊𝙎𝙎𝘼 𝙋𝙊𝘿𝙀 𝘼𝘾𝙀𝙄𝙏𝘼𝙍 𝙊𝙐 𝙍𝙀𝘾𝙐𝙎𝘼𝙍.\n\n𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘼𝘾𝘾𝙀𝙋𝙏 𝙄𝙁 𝙉𝙊𝘽𝙊𝘿𝙔 𝙃𝘼𝙎 𝘿𝙀𝘾𝙇𝘼𝙍𝙀𝘿, 𝘿𝙀𝘾𝙇𝘼𝙍𝙀 𝙒𝙄𝙏𝙃 *${tu}* 𝙏𝙊 𝙎𝘼𝙔 𝙄𝙁 𝙔𝙊𝙐 𝘼𝘾𝘾𝙀𝙋𝙏 𝙊𝙍 𝙍𝙀𝙅𝙀𝘾𝙏 𝙔𝙊𝙐`, fkontak,  m)
/*await conn.sendButton(m.chat, `𝙉𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝘼𝘾𝙀𝙋𝙏𝘼𝙍 𝙎𝙄 𝙉𝘼𝘿𝙄𝙀 𝙎𝙀 𝙃𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝘿𝙊, 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝙏𝙀 𝘾𝙊𝙉 *${tu}* 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝘿𝙄𝙂𝘼 𝙎𝙄 𝙏𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙊 𝙏𝙀 𝙍𝙀𝘾𝙃𝘼𝙕𝘼\n\n𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘼𝘾𝘾𝙀𝙋𝙏 𝙄𝙁 𝙉𝙊𝘽𝙊𝘿𝙔 𝙃𝘼𝙎 𝘿𝙀𝘾𝙇𝘼𝙍𝙀𝘿, 𝘿𝙀𝘾𝙇𝘼𝙍𝙀 𝙒𝙄𝙏𝙃 *${tu}* 𝙏𝙊 𝙎𝘼𝙔 𝙄𝙁 𝙔𝙊𝙐 𝘼𝘾𝘾𝙀𝙋𝙏 𝙊𝙍 𝙍𝙀𝙅𝙀𝘾𝙏 𝙔𝙊𝙐`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	*/
	
}else{
global.db.data.users[m.sender].pasangan = user
return await conn.reply(m.chat, `🥳😻 𝙋𝘼𝙍𝘼𝘽𝙀́𝙉𝙎!!! *${tu}*\n✅ 𝘼𝙂𝙊𝙍𝘼 𝙑𝙊𝘾𝙀̂ 𝙀𝙎𝙏𝘼𝙍 𝙀𝙈 𝙐𝙈 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝙈𝙀𝙉𝙏𝙊\n\n𝙌𝙐𝙀 𝙊 𝙎𝙀𝙐 𝘼𝙈𝙊𝙍 𝘿𝙐𝙍𝙀 𝙈𝙐𝙄𝙏𝙊 𝙊 𝙎𝙀𝙐 𝘼𝙈𝙊𝙍 𝙎𝙀𝙅𝘼 𝘿𝙐𝙍𝘼𝙍 𝘼 𝙑𝙄𝘿𝘼 𝘾𝙊𝙈 𝙈𝙐𝙄𝙏𝘼𝙎 𝙁𝙀𝙇𝙄𝘾𝙄𝘿𝘼𝘿𝙀𝙎. 🌹🥰 💖😁\n\n💝 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇𝙇𝙔 𝙏𝙃𝙀𝙔 𝘼𝙍𝙀 𝙄𝙉 𝘼 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋\n\n*${tu} 💞 ${yo}\n${wm}`, fkontak,
/*await conn.sendButton(m.chat, `🥳😻 𝙁𝙀𝙇𝙄𝘾𝙄𝙏𝘼𝘾𝙄𝙊𝙉𝙀𝙎!!! *${tu}*\n✅ 𝘿𝙀 𝙈𝘼𝙉𝙀𝙍𝘼 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 𝙀𝙎𝙏𝘼𝙉 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉\n\n𝙌𝙐𝙀 𝘿𝙐𝙍𝙀 𝙋𝙊𝙍 𝙎𝙄𝙀𝙈𝙋𝙍𝙀 𝙎𝙐 𝘼𝙈𝙊𝙍 𝙔 𝙁𝙀𝙇𝙄𝘾𝙄𝘿𝘼𝘿 💖😁\n\n💝 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇𝙇𝙔 𝙏𝙃𝙀𝙔 𝘼𝙍𝙀 𝙄𝙉 𝘼 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋`, `*${tu} 💞 ${yo}*\n` + wm, img5, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']],*/m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})
}}}

handler.command = /^(aceitar|acepto|accept)$/i
handler.group = true
export default handler
