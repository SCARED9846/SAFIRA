//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'SΛFIRΛ', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `‼️El administrador @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] Uma mensagem contendo muitos caracteres foi detectada [ ! ]*\n`, `${isBotAdmin ? '' : 'Não sou administrador, não posso fazer nada :/'}`, author, ['[ ᴅᴇsᴀᴛɪᴠᴀʀ ᴀɴᴛɪ-ᴛʀᴀᴠᴀ ]', usedPrefix+'apagar anti-trava'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `Marcar chat como lido ✓\n${"\n".repeat(400)}\n• O número : wa.me/${m.sender.split("@")[0]}\n• Alias : ${name}\n‼️Você acabou de enviar um texto que contém muitos caracteres que podem causar falhas no dispositivo`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] Para executar ações de exclusão, meu proprietário precisa ativar o modo restrito!')
    }
    return !0
} 
