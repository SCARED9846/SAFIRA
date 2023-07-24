import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝘿𝙄𝙌𝙐𝙀 𝙐𝙈𝘼 𝙐𝙍𝙇 𝘿𝙊 𝙂𝙄𝙏𝙃𝙐𝘽\n𝙀𝙓𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://github.com/USER/REPO*\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙂𝙄𝙏𝙃𝙐𝘽 𝙇𝙄𝙉𝙆\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://github.com/GataNina-Li/GataBotV2*`
if (!regex.test(args[0])) throw `${lenguajeGB['smsAvisoFG']()}𝙐𝙍𝙇 𝙄𝙉𝙑𝘼́𝙇𝙄𝘿𝘼. 𝘿𝙀𝙑𝙀 𝙎𝙀𝙍 𝙐𝙈𝘼 𝙐𝙍𝙇 𝘿𝙊 𝙂𝙄𝙏𝙃𝙐𝘽.\n\n𝙄𝙉𝙑𝘼𝙇𝙄𝘿 𝙇𝙄𝙉𝙆. 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼 𝙂𝙄𝙏𝙃𝙐𝘽 𝙇𝙄𝙉𝙆`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${lenguajeGB['smsAvisoEG']()}𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝙊 𝘼𝙍𝙌𝙐𝙄𝙑𝙊, 𝙐𝙈 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 🚀\n𝙎𝙀 𝙊 𝘼𝙍𝙌𝙐𝙄𝙑𝙊 𝙉𝘼̃𝙊 𝙁𝙊𝙍 𝙀𝙉𝙑𝙄𝘼𝘿𝙊, 𝙋𝙊𝘿𝙀 𝙎𝙀𝙍 𝘿𝙀𝙑𝙄𝘿𝙊 𝙊 𝙇𝙄𝙈𝙄𝙏𝙀 𝘿𝙀 𝘾𝙊𝙉𝙏𝘼 𝘿𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊..\n\n𝙎𝙀𝙉𝘿𝙄𝙉𝙂 𝙁𝙄𝙇𝙀, 𝙅𝙐𝙎𝙏 𝘼 𝙈𝙊𝙈𝙀𝙉𝙏 🚀\n𝙄𝙁 𝙏𝙃𝙀 𝙁𝙄𝙇𝙀 𝘿𝙊𝙀𝙎 𝙉𝙊𝙏 𝘼𝙍𝙍𝙄𝙑𝙀, 𝙄𝙏 𝙄𝙎 𝘽𝙀𝘾𝘼𝙐𝙎𝙀 𝙏𝙃𝙀 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙔 𝙄𝙎 𝙃𝙀𝘼𝙑𝙔.`)
conn.sendFile(m.chat, url, filename, null, m)
/*let info = `💖 *Informe-se sobre as Notícias e lembre-se de ter a versão mais recente.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙤𝙬𝙡𝙤𝙖𝙙 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,) */
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 2
handler.level = 2
export default handler
