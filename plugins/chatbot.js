// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^e$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}*/

if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
    conn.reply(m.chat, `╭┅〘 ⚠️ 𝙊𝘽𝙀𝘿𝙀𝘾̧𝘼 𝘼̀𝙎 𝙍𝙀𝙂𝙍𝘼𝙎 ⚠️ 〙*
➽❌ 𝙋𝙍𝙊𝙄𝘽𝙄𝘿𝙊 𝘾𝙃𝘼𝙈𝘼𝙍 𝙊 𝘽𝙊𝙏
➽❌ 𝙋𝙍𝙊𝙄𝘽𝙄𝘿𝙊 𝙎𝙋𝘼𝙈 𝘼𝙊 𝘽𝙊𝙏
➽❌ 𝙍𝙀𝙎𝙋𝙀𝙄𝙏𝘼𝙍 𝙊𝙎 𝙏𝙀𝙍𝙈𝙊𝙎 𝙀 𝘾𝙊𝙉𝘿𝙄𝘾̧𝙊̃𝙀𝙎
*╰═┅ৡৢ͜͡✦═╡ 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

/* if (/^hola|halo|hello|hi$/i.test(m.text) ) { //sin prefijo 
     conn.reply(m.chat, `Hola :D`, fkontak, m)

 }*/
 
if (/^¿que es un bot?|Que es un bot|Que es gatabot?$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::𝙊 𝙌𝙐𝙀 𝙀́ 𝙐𝙈 𝘽𝙊𝙏 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋::☆
┆——————«•»——————
┆ 𝙐𝙢 𝙗𝙤𝙩 𝙚 𝙪𝙢𝙖 𝙞𝙣𝙩𝙚𝙡𝙞𝙜𝙚̂𝙣𝙘𝙞𝙖 𝙖𝙧𝙩𝙞𝙛𝙞𝙘𝙞𝙖𝙡 𝙦𝙪𝙚 𝙧𝙚𝙖𝙡𝙞𝙯𝙖 𝙩𝙖𝙧𝙚𝙛𝙖𝙨
┆ 𝙪𝙚 𝙫𝙤𝙘𝙚̂ 𝙥𝙧𝙚𝙘𝙞𝙨𝙖 𝙘𝙤𝙢 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙣𝙤 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥. #menu
┆ 
┆ 「 SΛFIRΛ - 𝗠𝗗 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

