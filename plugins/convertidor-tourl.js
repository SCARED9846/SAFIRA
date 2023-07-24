/* 
# Créditos a https://github.com/Undefined17
•• @Azami19 ••
*/

import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '╰⊱❗️⊱ *𝙐𝙎𝙊 𝙀𝙍𝙍𝘼𝘿𝙊 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙄𝙈𝘼𝙂𝙀𝙈 𝙊𝙐 𝙑Í𝘿𝙀𝙊\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀 𝙊𝙍 𝙑𝙄𝘿𝙀𝙊'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = ` *🛑 URL:*\n${link}
  *🥏 TAMANHO:*\n${media.length} bytes\n
  *🚀 EXPIRAÇÃO:*\n ${isTele ? '✅ NÃO EXPIRA' : '⚠️ DESCONHECIDO'}\n
  *🔰 ENCURTADO:*\n${await shortUrl(link)}`

conn.reply(m.chat, caption, m, { contextInfo: {
          externalAdReply :{
    mediaUrl: md,
    mediaType: 2,
    title: wm,
    body: botdate,
    thumbnail: await(await fetch(link)).buffer(),
    sourceUrl: link
     }}
  })
}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}
