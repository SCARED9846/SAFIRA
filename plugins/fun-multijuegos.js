import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
//let com = `${usedPrefix}`
//let juegos = `${pickRandom([`${com}formarareja`,`${com}reto`,`${com}verdad`])}`   



const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
} 
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let mentionedJid = [who]
  let username = conn.getName(who)  
  
if (command == 'multijuegos') { 
  global.db.data.users[m.sender].limit += 1

              //let gata = `${pickRandom([`𝙋𝙪𝙚𝙙𝙚𝙨 𝙂𝙖𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 𝙖𝙡 𝙅𝙪𝙜𝙖𝙧!!`,`𝙎𝙞𝙜𝙪𝙚 𝙟𝙪𝙜𝙖𝙣𝙙𝙤 𝙥𝙖𝙧𝙖 𝙜𝙖𝙣𝙖𝙧 𝙂𝙖𝙩𝙖𝘾𝙤𝙞𝙣𝙨!!`,`𝙎𝙖𝙗𝙞𝙖𝙨 𝙦𝙪𝙚 𝙥𝙪𝙚𝙙𝙚𝙨 𝙂𝙖𝙣𝙖𝙧 𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 𝙖𝙡 𝙅𝙪𝙜𝙖𝙧? 𝘼𝙝𝙤𝙧𝙖 𝙮𝙖 𝙡𝙤 𝙨𝙖𝙗𝙚𝙨!!`])}`
            //let s = `Bienvenido al Multijuegos Aleeatorios`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: 'SΛFIRΛ-𝙈𝘿', url: 'https://github.com/SCARED9846/SAFIRA'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gabrielp3887/'}},
{index: 3, quickReplyButton: {displayText: '𝙄𝙣𝙞𝙘𝙞𝙖𝙧 | 𝙎𝙩𝙖𝙧𝙩 ✨', id: '.juegos'}},
{index: 4, quickReplyButton: {displayText: '𝙈𝙚𝙣𝙪 𝙅𝙤𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', id: '#juegosmenu'}},
{index: 5, quickReplyButton: {displayText: '𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', id: '#menu'}},
]
 
let t = {
text: global.wm,
footer: `𝘽𝙀𝙈-𝙑𝙄𝙉𝘿𝙊(𝙖)! 🌟 ${username}\n𝙅𝙊𝙂𝙐𝙀 𝙐𝙈𝘼 𝙂𝙍𝘼𝙉𝘿𝙀 𝙑𝘼𝙍𝙄𝙀𝘿𝘼𝘿𝙀 𝘿𝙀 𝙅𝙊𝙂𝙊𝙎!!`,
templateButtons: templateButtonsReplyMessage
  }
conn.sendMessage(m.chat, t, m)
}
  
  
  if (command == 'juegos') { 
    global.db.data.users[m.sender].money += 5
    let gata = `${pickRandom([`𝙑𝙊𝘾𝙀̂ 𝙋𝙊𝘿𝙀 𝙂𝘼𝙉𝙃𝘼𝙍 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 𝙅𝙊𝙂𝘼𝙉𝘿𝙊.!!`,`𝙎𝙀𝙂𝙐𝙀 𝙅𝙊𝙂𝘼𝙉𝘿𝙊 𝙋𝘼𝙍𝘼 𝙂𝘼𝙉𝙃𝘼𝙍 SΛCOINS!!`,`𝙎𝘼𝘽𝙄𝘼 𝙌𝙐𝙀 𝙋𝙊𝘿𝙀 𝙂𝘼𝙉𝙃𝘼𝙍 𝙀𝙓𝙋𝙀𝙍𝙄𝙀̂𝙉𝘾𝙄𝘼 𝘼𝙊 𝙅𝙊𝙂𝘼𝙍? 𝘼𝙂𝙊𝙍𝘼 𝙅𝘼́ 𝙎𝘼𝘽𝙀!!`])}`
             let c = `${usedPrefix}`
              let juegos = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}topgays`,`${c}topotakus`,`${c}mates medium`,`${c}mates noob`])}`
               let juegos2 = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}formarpareja`,`${c}ppt tijeras`,`${c}ppt piedra`])}`
                let juegos3 = `${pickRandom([`${c}gay`,`${c}ppt papel`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                 let emojis1 = `${pickRandom([`🦁`,`🐮`,`🦖`,`👻`,`🐈`,`🐆`,`🐅`,`🐒`])}`
                  let emojis2 = `${pickRandom([`💟`,`☮️`,`☪️`,`☯️`,`🕉️`,`☸️`,`✡️`,`🔯`])}`
                   let emojis3 = `${pickRandom([`🛸`,`🚁`,`🚀`,`🧠`,`✈️`,`🚤`,`🚢`,`🚗`])}`
              

              let ss = await `SΛFIRΛ-𝙈𝘿 | GΛBRIΞL`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: 'SΛFIRΛ-𝙈𝘿', url: 'https://github.com/SCARED9846/SAFIRA'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gabrielp3887/'}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙊𝙂𝘼𝙍 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙊𝙂𝘼𝙍 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙊𝙂𝘼𝙍 ${emojis3}`, id: juegos3}},
]
 
let tt = {
text: ss,
footer: gata,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, tt, m)
} 
    
  
 if (command == 'juegos') {
   global.db.data.users[m.sender].money += 10
   let gata = `${pickRandom([`𝙑𝙊𝘾𝙀̂ 𝙋𝙊𝘿𝙀 𝘾𝙃𝙀𝙂𝘼𝙍 𝘼𝙊 𝙏𝙊𝙋 𝟭! 🏆🥇`,`𝙑𝙊𝘾𝙀̂ 𝘾𝙊𝙉𝙎𝙀𝙂𝙐𝙀 𝘾𝙃𝙀𝙂𝘼𝙍 𝙉𝙊 𝙏𝙊𝙋 𝙇𝙀𝘼𝘿𝘽𝙊𝘼𝙍𝘿!!`,`𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝙀 𝘿𝙊 𝙈𝙐𝙇𝙏𝙅𝙊𝙂𝙊𝙎 𝙀 𝙂𝘼𝙉𝙃𝙀 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼𝙎! 🎁🎉`])}`
            let c = `${usedPrefix}`
             let juegos = `${pickRandom([`${c}lesbica`,`${c}doxxear`,`${c}pajero Yo`,`${c}love Tú Mejor Amigo/a`,`${c}reto`,`${c}verdad`,`${c}ppt piedra`,`${c}puta Yo`,`${c}mates medium`,`${c}simi Que`])}`
              let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca`,`${c}manco`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
               let juegos3 = `${pickRandom([`${c}puto e o de cima`,`${c}puta e o de cima`,`${c}pergunta se pode viajar no tempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata`,`${c}mates`,`${c}prostituto`,`${c}prostituta`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata`])}`
                let emojis1 = `${pickRandom([`😃`,`😳`,`🤑`,`🤠`,`🤭`,`😇`,`😋`,`🥴`])}`
                 let emojis2 = `${pickRandom([`🕵🏻‍♀️`,`🕵🏽‍♀️`,`🕵🏻‍♂️`,`🕵🏾‍♂️`,`👩🏿‍⚕️`,`🧑🏿‍⚕️`,`👩🏻‍⚕️`,`🧑🏻‍⚕️`,`👩🏼‍⚕️`,`🧑🏼‍⚕️`,`👩🏻‍🍳`,`🧑🏽‍🍳`,`👩🏾‍🍳`,`🧑🏿‍🍳`,`👩🏻‍🎓`,`👩🏼‍🎓`,`🧑🏾‍🎓`,`🧑🏻‍🎓`,`👩🏿‍🚀`,`🧑🏾‍🚀`,`👩🏽‍🚀`,`🧑🏽‍🚀`,`👩🏻‍⚖️`,`🧑🏻‍⚖️`,`👩🏽‍⚖️`,`🧑🏾‍⚖️`,`👩🏼‍⚖️`,`🧑🏼‍⚖️`,`🧙🏾‍♀️`,`🧙🏾‍♂️`,`🧙🏻‍♀️`,`🧙🏻‍♂️`,`🧚🏻‍♀️`,`🧚🏻‍♂️`,`🧚🏿‍♀️`,`🧚🏿‍♂️`,`🧚🏽‍♀️`,`🧚🏽‍♂️`,`🧞‍♀️`,`🧞‍♂️`,`👩🏻‍🎨`,`👩🏼‍🎨`,`👩🏿‍🎨`,`🧑🏻‍🎨`,`🧑🏼‍🎨`,`🧑🏿‍🎨`])}`
                  let emojis3 = `${pickRandom([`🍑`,`🍒`,`🍕`,`🍡`,`🍨`,`🥧`,`🍜`,`🍛`,`🍫`,`🫒`,`🍆`,`🍩`,`🍪`,`🍿`])}`

           let sss = await `𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: 'SΛFIRΛ-𝙈𝘿', url: 'https://github.com/SCARED9846/SAFIRA'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gabrielp3887/'}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis3}`, id: juegos3}},
]
let ttt = {
text: sss,
footer: gata,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, ttt, m)
}
  
  if (command == 'juegos') { 
    global.db.data.users[m.sender].exp += 20
    let gata = `${pickRandom([`𝙀𝙡𝙞𝙟𝙚 𝙏𝙪 𝙀𝙢𝙤𝙟𝙞 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙤 𝙥𝙖𝙧𝙖 𝙅𝙪𝙜𝙖𝙧!!`,`𝘼𝙙𝙞𝙫𝙞𝙣𝙖 𝙚𝙡 𝙋𝙧𝙤𝙭𝙞𝙢𝙤 𝙅𝙪𝙚𝙜𝙤!!`,`𝘼𝙙𝙞𝙫𝙞𝙣𝙖 𝙚𝙡 𝙋𝙧𝙤𝙭𝙞𝙢𝙤 𝙅𝙪𝙚𝙜𝙤!!`,`𝙈𝙞𝙣𝙞𝙟𝙪𝙚𝙜𝙤𝙨 𝙚𝙨𝙩á𝙣 𝙚𝙨𝙥𝙚𝙧𝙖𝙣𝙙𝙤 𝙚𝙣 𝙨𝙚𝙧 𝙅𝙪𝙜𝙖𝙙𝙤𝙨!!`])}`
                 let c = `${usedPrefix}`
                  let juegos = `${pickRandom([`${c}lesbiana Yo`,`${c}doxxear`,`${c}pajero Yo`,`${c}love Tú Mejor Amigo/a`,`${c}reto`,`${c}verdad`,`${c}ppt piedra`,`${c}puta Yo`,`${c}mates medium`,`${c}simi Que`])}`
                   let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
                    let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                     let emojis1 = `${pickRandom([`🎄`,`🌲`,`🌴`,`🌱`,`🌿`,`☘️`,`🍀`,`🍃`,`🍂`,`🍁`,`🍄`,`🌷`,`🌹`,`💐`,`🌼`,`🌻`,`🌺`,`🌸`])}`
                      let emojis2 = `${pickRandom([`❤️`,`🧡`,`💛`,`💚`,`💙`,`💜`,`🖤`,`💔`,`❤️‍🔥`,`❤️‍🩹`,`❣️`,`💕`,`💞`,`💓`,`💗`,`💖`,`💘`,`💝`])}`
                       let emojis3 = `${pickRandom([`🥊`,`🥋`,`🎣`,`🎊`,`🎉`,`🎈`,`✨`,`⭐`,`💫`,`🌟`,`🌈`,`🔥`,`💥`,`☃️`,`❄️`,`⛱️`,`🗿`,`🔮`])}`
         
                 let ssss = await `𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis3}`, id: juegos3}},
]
let tttt = {
text: ssss,
footer: `${gata}`,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
  
  
      
   if (command == 'juegos') { 
      global.db.data.users[m.sender].exp += 20
     let gata = `${pickRandom([`𝘾𝙖𝙧𝙜𝙖 𝙢𝙖𝙨 𝙅𝙪𝙚𝙜𝙤𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝘽𝙤𝙩𝙤𝙣 𝙈𝙖𝙨 𝙅𝙪𝙚𝙜𝙤𝙨!!`,`𝘿𝙞𝙣𝙖𝙢𝙞𝙘𝙖𝙨, 𝙍𝙚𝙩𝙤𝙨, 𝘼𝙥𝙪𝙚𝙨𝙩𝙖𝙨, 𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖𝙨 𝙮 𝙢𝙪𝙘𝙝𝙤 𝙢𝙖𝙨!!`])}`
                 let c = `${usedPrefix}`
                  let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
                   let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                    let emojis1 = `${pickRandom([`🏳️`,`🏴`,`🏴‍☠️`,`🏁`,`🚩`,`🏳️‍🌈`,`🏳‍⚧`,`🇧🇷`,`🇨🇱`,`🇦🇷`,`🇧🇴`,`🇻🇪`,`🇭🇳`,`🇺🇾`,`🇨🇴`,`🇵🇪`,`🇵🇦`,`🇳🇮`,`🇬🇹`,`🇨🇺`,`🇨🇷`,`🇭🇹`,`🇩🇴`,`🇲🇽`,`🇸🇻`,`🇬🇾`,`🇺🇸`,`🇨🇦`,`🇱🇨`,`🇪🇨`])}`
                     let emojis2 = `${pickRandom([`🌁`,`🌉`,`🌌`,`🌃`,`🏙️`,`🌆`,`🌇`,`🎆`,`🎇`,`🌠`,`🌄`,`🌅`,`🏞️`,`🎑`,`🗾`,`🏜️`,`🏝️`,`🏖️`,`🗼`,`🗽`,`🗺️`,`🏗️`])}`
         
                 let ssss = await `𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos2}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos3}},
{index: 5, quickReplyButton: {displayText: '🎁 𝙈𝙖𝙨 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙍𝙚𝙨𝙩𝙖𝙧𝙩', id: '#juegos'}},
]
let tttt = {
text: ssss,
footer: gata,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
 }
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['multijuegos', 'juegos']
handler.group = true
//handler.exp = 200
//handler.money = 200
export default handler
                              
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
