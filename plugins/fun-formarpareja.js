let toM = a => '@' + a.split('@')[0]

function handler(m, { groupMetadata }) {
  let ps = groupMetadata.participants.map(v => v.id)
  let a = ps.getRandom()
  let b

  do b = ps.getRandom()
  while (b === a)

  m.reply(`*${toM(a)}, 𝙑𝙤𝙘𝙚̂ 𝙚́ 𝙖 𝙥𝙚𝙨𝙨𝙤𝙖 𝙘𝙤𝙢 𝙦𝙪𝙚𝙢 💍 ${toM(b)} 𝙙𝙚𝙫𝙚 𝙛𝙤𝙧𝙢𝙖𝙧 𝙪𝙢 𝙘𝙖𝙨𝙖𝙡 𝙥𝙚𝙧𝙛𝙚𝙞𝙩𝙤 🤩💓*

*${toM(a)}, 𝙫𝙤𝙘𝙚̂ 𝙚́ 𝙤 𝙨𝙤𝙧𝙩𝙪𝙙𝙤 𝙦𝙪𝙚 💍 𝙢𝙖𝙧𝙧𝙮 ${toM(b)} 𝙙𝙚𝙫𝙚 𝙘𝙖𝙨𝙖𝙧 𝙥𝙚𝙧𝙛𝙚𝙞𝙩𝙤 😍💓*`, null, {
    mentions: [a, b]
  })
}

handler.help = ['formarpareja']
handler.tags = ['principal', 'diversão']
handler.command = ['formarpareja', 'formarparejas']
handler.group = true

export default handler
