let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod':
if (!text) throw `*${lenguajeGB['smsAvisoMG']()} 𝙄𝙉𝘿𝙄𝙌𝙐𝙀 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙊 𝘼𝙋𝙆 𝙌𝙐𝙀 𝙌𝙐𝙀𝙍 𝘽𝙐𝙎𝘾𝘼𝙍*`        
const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  conn.sendMessage(m.chat, { text: '*𝙉𝘼̃𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙀𝙄 𝙊 𝘼𝙋𝙆 𝙌𝙐𝙀 𝙑𝙊𝘾𝙀̂ 𝙋𝙀𝘿𝙄𝙐' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description: '', rowId: prefix + 'dapk2 ' + data[i].link });}
const sections = [{title: '𝙎𝙀𝙇𝙀𝘾𝘾𝙄𝙊𝙉𝙀 𝙀𝙇 𝙈𝙊𝘿 𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍', rows: srh}]
const listMessage = {text: `╭┄〔 𝙈𝙊𝘿𝙊𝘼𝙋𝙆 〕┄⊱ ]\n┆——————«•»——————\n┆- 📟 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 𝘿𝙀: ${text}\n╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ`, footer: wm, title: null, buttonText: "𝙎𝙀𝙇𝙀𝘾𝘾𝙄𝙊𝙉𝙀 𝘼𝙌𝙐𝙄", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case 'dapk2': 
if (!text) throw `*${lenguajeGB['smsAvisoMG']()} 𝙄𝙉𝘿𝙄𝙌𝙐𝙀 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙊 𝘼𝙋𝙆 𝙌𝙐𝙀 𝙌𝙐𝙀𝙍 𝘽𝙐𝙎𝘾𝘼𝙍\n 𝙀𝙅𝙀𝙈𝙋𝙇𝙊: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break        
}
} catch {
throw `${lenguajeGB['smsAvisoFG']()} 𝙉𝘼̃𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙀𝙄 𝙉𝙀𝙈 𝙐𝙈 𝘼𝙋𝙆 𝘾𝙊𝙈 𝙀𝙎𝙎𝙀 𝙉𝙊𝙈𝙀, 𝙋𝙊𝘿𝙀 𝙎𝙀𝙍 𝙐𝙈 𝙀𝙍𝙍𝙊 𝙉𝘼 𝙋𝘼𝙂𝙄𝙉𝘼`
}}    
handler.command = /^(apkmod|modapk|dapk2)$/i
handler.limit = 3
handler.register = true
handler.level = 6
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
