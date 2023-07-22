import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙀𝙑𝘼 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙀 𝙐𝙈 𝘼𝙉𝙄𝙈𝙀\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼𝙉 𝘼𝙉𝙄𝙈𝙀`
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'es', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'es', autoCorrect: true })   
let AnimeInfo = `
𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀 
❣ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙀𝙋𝙄𝙎𝙊𝘿𝙄𝙊𝙎 | 𝙀𝙋𝙄𝙎𝙊𝘿𝙀𝙎
❣ ${episodes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙍𝘼𝙉𝙎𝙈𝙄𝙏𝙄𝘿𝙊 𝙋𝙊𝙍 | 𝙏𝙍𝘼𝙉𝙎𝙈𝙄𝙏𝙏𝙀𝘿 𝘽𝙔
❣ ${type}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙀𝙎𝘾𝙍𝙀𝙑𝘼 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙀 𝙐𝙈 𝘼𝙉𝙄𝙈𝙀 | 𝙍𝘼𝙏𝙄𝙉𝙂
❣ ${rated}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝘾𝙊𝙍𝙀
❣ ${score}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙈𝙀𝙈𝘽𝙍𝙊𝙎 | 𝙈𝙀𝙈𝘽𝙀𝙍𝙎
❣ ${members}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙄𝙉𝙊𝙋𝙎𝙄𝙎 𝙀𝙉𝙂𝙇𝙄𝙎𝙃
❣ ${synopsis}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙐𝙍𝙇
❣ ${url}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
let info = `💖 *Informe-se sobre as Notícias e lembre-se de ter a versão mais recente.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `
/*conn.sendButton(m.chat, info, [
['🔄 𝙉𝙚𝙭𝙩', `${usedPrefix + command} ${text}`],
['🔍 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 ', `#pinterest ${text}`],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m)*/
/*.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  */
} catch {
throw `*[ ❗ ] ERROR, TENTE NOVAMENTE*`  
}}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
handler.exp = 50
handler.level = 1
export default handler
