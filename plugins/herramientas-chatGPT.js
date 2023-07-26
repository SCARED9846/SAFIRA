import fetch from 'node-fetch'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*${lenguajeGB['smsAvisoMG']()} 𝘾𝙊𝙇𝙊𝙌𝙐𝙀 𝙎𝙐𝘼 𝙋𝙀𝙍𝙂𝙐𝙉𝙏𝘼 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝘼 𝘼𝙎𝙎𝙄𝙎𝙏𝙀̂𝙉𝘾𝙄𝘼 𝘿𝙊 𝘾𝙃𝘼𝙏𝙂𝙋𝙏\n\n❏ 𝙀𝙓𝙀𝙈𝙋𝙇𝙊 𝘿𝙀 𝙋𝙀𝘿𝙄𝘿𝙊𝙎 𝙀 𝙊𝙍𝘿𝙀𝙉𝙎\n❏ ${usedPrefix + command} Na parte superior da janela foi esculpido um brasão da Coroa Poetuguesa. O que a presença desse símbolo monárquico em uma igreja católica pode indicar?\n❏ ${usedPrefix + command} A janela produzida por Diogo de Arruda foi decorada com amarras de navio, mastros cobertos por corais, âncoras, algas e outros elementos náuticos. O que esses enfeites representam?`    
try {
let jailbreak = await fetch('https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt').then(v => v.text());
await conn.sendPresenceUpdate('composing', m.chat)
let syms = `Actuaras como un Bot de WhatsApp el cual fue creado por GataNina-Li, tu seras GataBot-MD.\n${jailbreak}`
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {   
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())    
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())    
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {        
}}}}} 
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
