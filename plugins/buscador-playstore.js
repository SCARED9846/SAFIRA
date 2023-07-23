import fetch from 'node-fetch'

let handler = async (m, { conn, text, args }) => {
	if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}𝘾𝙊𝙇𝙊𝙌𝙐𝙀 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙀 𝙐𝙈 𝘼𝙋𝙆 𝙋𝘼𝙍𝘼 𝘽𝙐𝙎𝘾𝘼𝙍`
	let enc = encodeURIComponent(text)
try {
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=nktesla&q={enc}`)
let gPlay = await json.json()
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎: ${gPlay.titulo}
🧬 𝙄𝘿𝙀𝙉𝙏𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍: ${gPlay.id}
⛓️ 𝙇𝙄𝙉𝙆: ${gPlay.link}
🖼️ 𝙄𝙈𝘼𝙂𝙀𝙈: ${gPlay.imagen}
✍️ 𝘾𝙍𝙄𝘼𝘿𝙊𝙍: ${gPlay.desarrollador}
📜 𝘿𝙀𝙎𝘾𝙍𝙄𝘾̧𝘼̃𝙊: ${gPlay.descripcion}
💲 𝙈𝙊𝙀𝘿𝘼: ${gPlay.moneda}
🎭 𝙂𝙍𝘼𝙏𝙄𝙎?: ${gPlay.gratis}
💸 𝙋𝙍𝙀𝘾̧𝙊: ${gPlay.precio}
📈 𝙋𝙊𝙉𝙏𝙐𝘼𝘾̧𝘼̃𝙊: ${gPlay.puntuacion}`},{quoted:m})
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}  
}

handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i

export default handler 
