import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
let handler = async (m, { text, conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝘿𝙄𝙌𝙐𝙀 𝙊 𝙇𝙄𝙉𝙆 𝘿𝙊 𝙑𝙄́𝘿𝙀𝙊 𝘿𝙊 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙋𝘼𝙍𝘼 𝘽𝘼𝙄𝙓𝘼𝙍 𝙉𝙊 𝙁𝙊𝙍𝙈𝘼𝙏𝙊 𝘿𝙀 𝘿𝙊𝘾𝙐𝙈𝙀𝙉𝙏𝙊\n𝙀𝙓𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙇𝙄𝙉𝙆 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)

let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0];
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `${lenguajeGB['smsAvisoFG']()} 𝙉𝙊 𝙉𝘼̃𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙀𝙄 𝘼 𝙐𝙍𝙇 𝙋𝘼𝙍𝘼 𝙀𝙎𝙎𝙀 𝙉𝙐́𝙈𝙀𝙍𝙊  ${matchingItem.urls.length}*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()} 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀𝙎𝙎𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝘽𝙐𝙎𝘾𝘼 𝘾𝙊𝙈 𝙊 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀𝙎𝙎𝘼 𝙁𝙊𝙍𝙈𝘼  ${usedPrefix}playlist <texto>*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()} 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀𝙎𝙎𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝘽𝙐𝙎𝘾𝘼 𝘾𝙊𝙈 𝙊 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀𝙎𝙎𝘼 𝙁𝙊𝙍𝙈𝘼  ${usedPrefix}playlist <texto>*`;
}}}  
  
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙀𝙎𝙏𝙊𝙐 𝘽𝘼𝙄𝙓𝘼𝙉𝘿𝙊 𝙎𝙀𝙐 𝘼𝙐𝘿𝙄𝙊, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙈 𝙈𝙊𝙈𝙀𝙉𝙏𝙊\n\n𝙔𝙊𝙐𝙍 𝘼𝙐𝘿𝙄𝙊 𝙄𝙎 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙄𝙉𝙂, 𝙒𝘼𝙄𝙏 𝘼 𝙈𝙊𝙈𝙀𝙉𝙏 𝙋𝙇𝙀𝘼𝙎𝙀`, fkontak, m)
try {
let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch {   
try {
let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙀́ 𝙋𝙊𝙎𝙎𝙄́𝙑𝙀𝙇 𝙌𝙐𝙀 𝙊 𝘼𝙍𝙌𝙐𝙄𝙑𝙊 𝙎𝙀𝙅𝘼 𝙈𝙐𝙄𝙏𝙊 𝙂𝙍𝘼𝙉𝘿𝙀, 𝙏𝙀𝙉𝙏𝙀 𝘽𝘼𝙄𝙓𝘼𝙍 𝘾𝙊𝙈 𝙊𝙐𝙏𝙍𝘼 𝙊𝙋𝘾̧𝘼̃𝙊\n\n𝙄𝙏 𝙄𝙎 𝙋𝙊𝙎𝙎𝙄𝘽𝙇𝙀 𝙏𝙃𝘼𝙏 𝙏𝙃𝙀 𝙁𝙄𝙇𝙀 𝙄𝙎 𝙑𝙀𝙍𝙔 𝙃𝙀𝘼𝙑𝙔. 𝙏𝙍𝙔 𝘼𝙉𝙊𝙏𝙃𝙀𝙍`, m)}
}}}
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i
export default handler
