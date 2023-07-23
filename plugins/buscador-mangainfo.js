import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙀𝙑𝘼 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙀 𝙐𝙈 𝙈𝘼𝙉𝙂𝘼\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼𝙉 𝙈𝘼𝙉𝙂𝘼`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, chapters, volumes, members, score, synopsis, url, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/manga/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀 
❣ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘾𝘼𝙋𝙄𝙏𝙐𝙇𝙊𝙎 | 𝘾𝙃𝘼𝙋𝙏𝙀𝙍𝙎
❣ ${chapters}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙑𝙊𝙇𝙐𝙈𝙀𝙎 | 𝙑𝙊𝙇𝙐𝙈𝙀𝙎
❣ ${volumes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘿𝘼𝙏𝘼 𝘿𝙀 𝙄𝙉𝙄́𝘾𝙄𝙊 | 𝙎𝙏𝘼𝙍𝙏 𝘿𝘼𝙏𝙀
❣ ${start_date}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘿𝘼𝙏𝘼 𝙁𝙄𝙉𝘼𝙇 | 𝙁𝙄𝙉𝘼𝙇 𝘿𝘼𝙏𝙀
❣ ${end_date}
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
𝙀𝙉𝙇𝘼𝘾𝙀 | 𝙐𝙍𝙇
❣ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `💖 *Informe-se sobre as Notícias e lembre-se de ter a versão mais recente.*\n\n💝 *Find out about what's new and remember to have the latest version.*`
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(mangainfo)$/i
handler.exp = 50
handler.level = 4 
export default handler
