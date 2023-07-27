import { areJidsSameUser } from '@adiwajshing/baileys'
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
    
if (command == 'futurarelacion') {    
let caption = `💗 𝙁𝙐𝙏𝙐𝙍𝘼 𝙉𝘼𝙈𝙊𝙍𝘼𝘿𝘼 💗\n${toM(a)} 💞 ${toM(b)}\n\n💌 𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙈 𝘿𝙀 𝘼𝙈𝙊𝙍\n*_${await ktnmbk.getRandom()}_*`
await conn.reply(m.chat, caption, fkontak, m)
/*await conn.sendButton(m.chat, caption, `*_Si quiere tener una pareja use el comando ${usedPrefix}pareja etiquetando a tu futura Pareja._*\n\n` + wm, null, [
['🤭 𝙌𝙐𝙀 𝙎𝙀 𝘿𝙀𝘾𝙇𝘼𝙍𝙀𝙉', `amor`],
['🧐 𝙊𝙏𝙍𝘼 𝙋𝘼𝙍𝙀𝙅𝘼', `${usedPrefix}futurarelacion`],
['😆 𝙀𝙎 𝙐𝙉𝘼 𝙋𝘼𝙍𝙀𝙅𝘼 𝙍𝘼𝙉𝘿𝙊𝙈', `😂`]], m, { mentions: conn.parseMention(caption) })*/
}}
	
if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return await conn.reply(m.chat, `${mg}𝙈𝘼𝙍𝙌𝙐𝙀 𝘼 𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙈 𝘿𝘼 𝙋𝙀𝙎𝙎𝙊𝘼 𝙌𝙐𝙀 𝙑𝙊𝘾𝙀̂ 𝘼𝘾𝙀𝙄𝙏𝘼𝙍 𝙎𝙀 𝘾𝘼𝙎𝘼𝙍\n\n𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)
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
	
if(!users) return await conn.reply(m.chat, `${fg}𝙉𝘼̃𝙊 𝘾𝙊𝙉𝙎𝙀𝙂𝙐𝙄 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝙍 𝘼 𝙋𝙀𝙎𝙎𝙊𝘼, 𝙀𝙇𝘼 𝘿𝙀𝙑𝙀 𝙀𝙎𝙏𝘼𝙍 𝙉𝙀𝙎𝙎𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
if(user === m.sender) return await conn.reply(m.chat, `${fg}𝙑𝙊𝘾𝙀̂ 𝙈𝙀𝙎𝙈𝙊 𝙉𝘼̃𝙊 𝙋𝙊𝘿𝙀𝙍 𝙎𝙀𝙍 𝘾𝘼𝙎𝘼𝘿𝙊\n\n𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙐𝙎𝙏𝙀𝘿 𝙈𝙄𝙎𝙈𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙎𝙀𝙍 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
if(user === conn.user.jid) return await conn.reply(m.chat, `${fg}𝙀𝙐 𝙉𝘼̃𝙊 𝙋𝙊𝙎𝙎𝙊 𝙎𝙀𝙍 𝙎𝙐𝘼 𝙉𝙊𝙄𝙑𝘼 😹\n\n𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙔𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙎𝙀𝙍 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼 😹\n\n𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/

if (typeof global.db.data.users[user] == "undefined") return await conn.reply(m.chat, `${fg}𝙉𝘼̃𝙊 𝙁𝙊𝙄 𝙋𝙊𝙎𝙎𝙄́𝙑𝙀𝙇 𝘾𝙊𝙉𝘾𝙇𝙐𝙄𝙍 𝙎𝙐𝘼 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝘾̧𝘼𝙊, 𝙋𝙊𝙄𝙎 𝘼 𝙋𝙀𝙎𝙎𝙊𝘼 𝙈𝘼𝙍𝘾𝘼𝘿𝘼 𝙉𝘼𝙊 𝙀𝙎𝙏𝘼́ 𝙉𝙊 𝙈𝙀𝙐 𝘽𝘼𝙉𝘾𝙊 𝘿𝙀 𝘿𝘼𝘿𝙊𝙎\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙄 𝙏𝘼𝙂 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙈𝙔 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀`, fkontak,  m)
/*await conn.sendButton(m.chat, `${fg}𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙊 𝙉𝙊 𝙀𝙎𝙏𝘼 𝙀𝙉 𝙈𝙄 𝘽𝘼𝙎𝙀 𝘿𝙀 𝘿𝘼𝙏𝙊𝙎\n\n𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙄 𝙏𝘼𝙂 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙈𝙔 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀`, wm, null, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)*/
	
let pacar = global.db.data.users[user].pasangan
let spac = global.db.data.users[m.sender].pasangan
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
await conn.reply(m.chat, `𝙀 𝙄𝙉𝙁𝙄𝙀𝙇 🙀😠 𝘼 𝙋𝙀𝙎𝙎𝙊𝘼 𝙈𝘼𝙍𝘾𝘼𝘿𝘼 𝙅𝘼 𝙀𝙎𝙏𝘼́ 𝙀𝙈 𝙐𝙈 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝙈𝙀𝙉𝙏𝙊 *${await conn.getName(spac)}*\n\n𝙑𝙊𝘾𝙀̂ 𝙌𝙐𝙀𝙍 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍?? 🤔\n𝙎𝙀 𝙎𝙄𝙈, 𝙀𝙎𝘾𝙍𝙀𝙑𝘼 *${usedPrefix}terminar @tag* 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝙋𝙊𝙎𝙎𝘼 𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝙐𝙈𝘼 𝙍𝙀𝙇𝘼𝘾̧𝘼̃𝙊 𝘾𝙊𝙈 *${await conn.getName(user)}*`, fkontak, m, 
/*await conn.sendButton(m.chat, `𝙀𝙍𝙀𝙎 𝙄𝙉𝙁𝙄𝙀𝙇 🙀😠 𝙋𝙀𝙍𝙊 𝙎𝙄 𝙔𝘼 𝙀𝙎𝙏𝘼𝙎 𝙀𝙉 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(spac)}*\n\n𝘼𝘾𝘼𝙎𝙊 𝙌𝙐𝙄𝙀𝙍𝙀𝙎 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍 𝙇𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉? 🤔\n𝘿𝙀 𝙎𝙀𝙍 𝘼𝙎𝙄, 𝙀𝙎𝘾𝙍𝙄𝘽𝘼 *${usedPrefix}terminar @tag* 𝙋𝘼𝙍𝘼 𝙌𝙐𝙀 𝙋𝙐𝙀𝘿𝘼 𝙏𝙀𝙉𝙀𝙍 𝙐𝙉𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉 𝘾𝙊𝙉 *${await conn.getName(user)}*`, wm, null, [
['❤️ 𝙈𝘼𝙉𝙏𝙀𝙉𝙀𝙍', '.mipareja'],
['💔 𝙏𝙀𝙍𝙈𝙄𝙉𝘼𝙍', '/terminar']]*/ { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})
}else if(global.db.data.users[user].pasangan != ""){
	
if (pacar){
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `você já está namorando ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
conn.reply(m.chat, `𝙉𝘼̃𝙊 𝙋𝙊𝘿𝙀 𝙋𝙊𝙍𝙌𝙐𝙀 *${await conn.getName(user)}* 𝙀 ${await conn.getName(pacar)} 𝙀𝙎𝙏𝘼̃𝙊 𝙀𝙈 𝙐𝙈 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝙈𝙀𝙉𝙏𝙊\n𝘽𝙐𝙎𝙌𝙐𝙀 𝙊𝙐𝙏𝙍𝘼 𝙋𝙀𝙎𝙎𝙊𝘼`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
}else{
	
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nvocê acabou de convidar @${user.split('@')[0]}\n\nPor favor, aguarde uma resposta!`, m , { contextInfo: { mentionedJid: [user]}})
}	
	
}else if (global.db.data.users[user].pasangan == m.sender){
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `Parabéns, você está oficialmente namorando @${user.split('@')[0]}\n\nQue dure para sempre e seja sempre feliz 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}})
}else {
	
global.db.data.users[m.sender].pasangan = user
await conn.reply(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*@${toUser}* 𝙀𝙎𝙏𝙊𝙐 𝙈𝙀 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝙉𝘿𝙊 𝘼 𝙑𝙊𝘾𝙀̂!!! 😳\n𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 *@${who.split`@`[0]}* 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼̀ 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝘾̧𝘼𝙊 🙀\n\n❤️ *_Se você quer um relacionamento escreva:_*\n*➠ ${usedPrefix}aceitar @${toUser}*\n\n💔 *_Se você não quer um relacionamento escreva:_*\n*➠ ${usedPrefix}negar @${toUser}*\n\n${wm}`, fkontak, { mentions: [aa,] })
/*await conn.sendButton(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*${await conn.getName(m.sender)}* 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝙉𝘿𝙊!!! 😳\n𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 *${await conn.getName(who)}* 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙇𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝘾𝙄𝙊𝙉 🙀`, `❤️ *_Si quieres una Relacion escriba:_*\n*➠ ${usedPrefix}aceptar @${conn.getName(m.sender)}*\n\n💔 *_De no querer una Relacion escriba:_*\n*➠ ${usedPrefix}rechazar @${conn.getName(m.sender)}*\n\n` + wm, null, [
['🥳 𝙑𝘼𝙈𝙊𝙎 𝘼𝘾𝙀𝙄𝙏𝘼𝙍', `Amor`]],*/ 
}}}

handler.command = /^(futurarelação|pareja|elegirpareja|serpareja|sersupareja|couple|elegirpareja)$/i
handler.group = true

export default handler

let ktnmbk = [
    "Existem momentos em que não gosto de estar sozinho. Mas também não quero que todos me acompanhem, só te quero a ti.",
    "Acabei de perceber que você tem sido rica todo esse tempo! É o que tenho procurado durante todo esse tempo. Quer ser minha namorada?",
    "Agradeço aos meus olhos, porque esses olhos me levaram a te encontrar.",
    "Posso te enviar meu currículo ou não? Porque quero me candidatar para ser sua namorada.",
    "Não sou o maior, mas tenho certeza de que posso te fazer feliz com amor e carinho, você me quer mesmo?",
    "Sou apenas uma pessoa comum que tem muitos defeitos e pode ser que não mereça o seu amor, mas se estiver disposta a me aceitar como amante, prometo fazer o que for melhor para você. Aceitará o meu amor?",
    "Quero dizer algo. Gosto de você há muito tempo, mas não tenho coragem de dizer. Então, decidi só mandar uma mensagem. Quero que seja minha namorada.",
    "Quero dizer algo que não consigo conter mais. Eu te amo, será minha namorada?",
    "Quero ser uma pessoa que possa te fazer rir e sorrir todos os dias. Será minha namorada?",
    "Quero ter uma conversa séria contigo. Todo esse tempo, nutri sentimentos por você e sempre estive atento a você. Se não se importar, quer ser minha namorada?",
    "Te olho e vejo o resto da minha vida diante dos meus olhos.",
    "Não tenho tudo, mas pelo menos tenho amor suficiente para você.",
    "Gostei de você desde o início. Você é tão simples, mas a simplicidade é muito especial aos meus olhos. Será perfeito se for especial no meu coração.",
    "Realmente estou apaixonado por você. Será minha?",
    "Não te disse que não porque não tenho espaço nem crédito, mas estou desfrutando desse anseio por você. Talvez você se surpreenda ao ouvir isso. Sempre gostei de você.",
    "Não quero que seja o sol da minha vida, porque mesmo fazendo calor, está muito distante. Também não quero que seja o ar, porque embora eu precise de você e esteja muito perto, todos também podem respirá-lo. Só quero que seja o sangue que pode estar bem perto de mim.",
    "Não sei até quando durará a minha idade. Tudo o que sei é que o meu amor é para sempre, só para você.",
    "Realmente aproveitei o tempo que passamos juntos hoje. Também nos conhecemos há muito tempo. Neste dia ensolarado, quero te dizer que te amo.",
    "Sempre imaginei o quão lindo seria se um dia pudéssemos construir uma casa e viver juntos até o fim da vida. No entanto, nada disso teria acontecido se não tivéssemos estado juntos até agora. Será minha amante?",
    "Estou me preparando mentalmente para hoje. Você tem que ser minha namorada para lidar com esse amor incontrolável.",
    "Sei que não temos a mesma idade, mas posso viver contigo pelo resto da minha vida?",
    "Sei que somos amigos há muito tempo. Mas não está errado se eu gostar de você? Qualquer que seja a sua resposta, aceito. O mais importante é ser honesto do fundo do meu coração.",
    "Não consigo começar isso primeiro, mas vou te dar um código de que gosto de você. Se entender esse código, estaremos juntos.",
    "Sou muito estúpido ou você é muito egoísta para fazer com que me apaixone por você.",
    "Qualquer coisa sobre você, nunca encontro tédio nisso. Porque estar ao seu lado é o presente mais bonito para mim. Seja minha amante, ei, você.",
    "Com a permissão de Deus e a bênção de mamãe e papai, quer ser minha namorada ou não?",
    "E se nos tornarmos uma gangue de ladrões? Eu roubei seu coração e você roubou o meu.",
    "Felizes somos nós que nos tornamos um só.",
    "Amanhã, se isso não der certo, posso me candidatar para ser sua namorada. Deixe-me ter trabalho para pensar sempre em você.",
    "Deixe-me te fazer feliz para sempre. Só precisa fazer uma coisa: se apaixonar por mim.",
    "Que toda a minha alegria seja sua, toda a sua tristeza seja minha. Que o mundo inteiro seja seu, só você seja minha!",
    "Que o passado seja meu passado, mas pelo presente, você será meu futuro?",
    "Pode me dar um endereço para o seu coração? Parece que me perdi nos seus olhos.",
    "Não é o trono ou o tesouro que busco, mas o retorno do meu amor que espero de você. A resposta é sim.",
    "A forma como você consegue me fazer rir mesmo nos dias mais sombrios me faz sentir mais leve do que qualquer outra coisa. Quero que seja minha.",
    "Meu amor por você é inquestionável, porque esse amor é sincero do fundo do meu coração.",
    "Meu amor por você é como um número de 5 a 10. Não há segundo lugar. Quero que seja a única mulher no meu coração.",
    "Que cara ousa te machucar? Aqui te tratarei, desde que queira ser minha namorada.",
    "Ei, o que está fazendo? Saia de casa e olhe para a lua esta noite. A luz é linda e encantadora, mas seria ainda mais bonita se eu estivesse ao seu lado. E se estivéssemos juntos?",
]
