import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}𝙈𝘼𝙍𝙌𝙐𝙀 𝙐𝙈 𝙑𝙄́𝘿𝙀𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 𝙋𝘼𝙍𝘼 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3\n\n𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝘼 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝙑𝙊𝙄𝘾𝙀 𝙈𝙀𝙈𝙊 𝙏𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙄𝙉𝙏𝙊 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙀𝙐 𝙉𝘼̃𝙊 𝘾𝙊𝙉𝙎𝙄𝙂𝙊 𝘽𝘼𝙄𝙓𝘼𝙍 𝙊 𝙑𝙄́𝘿𝙀𝙊, 𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙊𝙑𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙐𝙉𝘼𝘽𝙇𝙀 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊, 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉 𝙋𝙇𝙀𝘼𝙎𝙀`
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙀𝙐 𝙉𝘼̃𝙊 𝘾𝙊𝙉𝙎𝙄𝙂𝙊 𝘽𝘼𝙄𝙓𝘼𝙍 𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕, 𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙊𝙑𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙐𝙉𝘼𝘽𝙇𝙀 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙑𝙊𝙄𝘾𝙀 𝙉𝙊𝙏𝙀, 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉 𝙋𝙇𝙀𝘼𝙎𝙀`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙀𝙐 𝙉𝘼̃𝙊 𝘾𝙊𝙉𝙎𝙄𝙂𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 𝙎𝙐𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕|𝙈𝙋3 𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙊𝙑𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙐𝙉𝘼𝘽𝙇𝙀 𝙏𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙔𝙊𝙐𝙍 𝙉𝙊𝙏𝙀 𝙁𝙍𝙊𝙈 𝙑𝙊𝙄𝘾𝙀 𝙏𝙊 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉 𝙋𝙇𝙀𝘼𝙎𝙀`
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}𝙀𝙐 𝙉𝘼̃𝙊 𝘾𝙊𝙉𝙎𝙄𝙂𝙊 𝙘𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 𝙎𝙀𝙐 𝙑Í𝘿𝙀𝙊 𝙀𝙈 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙊𝙑𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍\n\n𝙐𝙉𝘼𝘽𝙇𝙀 𝙏𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙔𝙊𝙐𝙍 𝙑𝙄𝘿𝙀𝙊 𝙏𝙊 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉 𝙋𝙇𝙀𝘼𝙎𝙀`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
