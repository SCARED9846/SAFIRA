import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
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
let { money } = global.db.data.users[m.sender]
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
  
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let Terminos = `
_Toda a informação mencionada aqui não exclui o Proprietário do Bot e os Proprietários Credores do uso do SΛFIRΛ-MD._

_Não somos responsáveis pelo desconhecimento que você tenha em relação a esta informação._

*TERMOS DE PRIVACIDADE*
- Somos conscientes do uso constante que você pode fazer do Bot, e também garantimos que as informações como (imagens, vídeos, links, localização, áudios, stickers, GIFs, contatos) que você fornece relacionadas a Número(s) Oficial(is) não serão compartilhadas com ninguém, nem esses dados serão usados fora do ambiente do BOT.

- O que você realiza com o BOT fica apenas com você, pois no(s) Número(s) Oficial(is), o chat é apagado a cada 24 horas, de acordo com o tempo de Mensagens Temporais do WhatsApp.

- É possível que no(s) Número(s) Oficial(is) o Bot não esteja ativado 24 horas por dia, 7 dias por semana; isso não implica que não esteja ativo ou que Proprietários NÃO OFICIAIS não possam ativá-lo.

- O chat anônimo do comando #start, valendo a redundância, não mostrará nenhum dado dos Usuários por parte do GataBot. Isso não implica que as pessoas que utilizem essa função possam divulgar seus dados em Número(s) Oficial(is).

- Os dados que SΛFIRΛ obtém em Contas Oficiais de Usuários(as), Grupos e Configurações do Mesmo podem ser reiniciados, modificados e/ou retificados para que o Bot esteja em condições ótimas para seu uso. (Usuários(as) podem pedir compensação pelo Instagram ou pelo comando #Reporte. Deve apresentar provas).

- NÃO somos responsáveis por alterações deste Bot que não sejam em Número(s) Oficial(is) e que usem um repositório GitHub que não seja o Oficial, ou que implementem integrações de Usuários de Terceiros que comprometam os(as) Usuários(as) ao utilizar versões não Oficiais.

- A função "Sub Bot" garante a segurança de seus dados aplicada a Contas Oficiais.

*TERMOS DE USO*
- A informação contida neste Bot e o/a usuário/a que faça uso das mesmas assumirá conhecer os Termos e Condições, de tal forma que não haverá inconvenientes ao fazer um uso particular das funções do Bot.

- O Bot contém material que só pode ser visível para maiores de 18 anos. NÃO somos responsáveis se você não tiver a idade mínima para usar o Material para Adultos.

- As imagens, vídeos e áudios deste Bot são de uso público, mas considerará falta de respeito realizar edições no material já existente que contenha o nome do Bot ou informações relevantes.

- Ao fazer uso de uma solicitação de entrada de grupo com uma Conta Oficial, é recomendável que o grupo não trate de temas de ódio, vírus, conteúdo indevido, temas de discriminação ou campanhas sem fundamentos.

- Se você receber um Comunicado Oficial sendo Número(s) Oficial(es), mantenha o respeito da mesma forma se receber uma mensagem sem ter usado um comando; mantenha o respeito, pois pode, neste último caso, ser uma pessoa real.

- As Contas Oficiais do GataBot não se responsabilizam pelo uso que você fizer da função "Sub Bot".

*CONDICIONES DE USO*
- NÃO faça nem tente ligar ou fazer videochamadas para o Bot sendo Número(s) Oficial(es), pois isso obstaculiza o funcionamento do BOT.

- NÃO use o Bot sendo Número(s) Oficial(es) para realizar alguma ação hostil que possa comprometer o funcionamento do BOT.

- NÃO use o comando de SPAM repetidamente, pois isso provocará um mau funcionamento no BOT; também não envie mensagens ao BOT que possam comprometer o funcionamento do mesmo.

- Ao fazer uso de certos comandos com o objetivo de causar desconforto, intranquilidade, aborrecimento ou outro termo agressivo, serão aplicadas as devidas sanções ou alertas para preservar a integridade dos(as) Usuários(as) e o funcionamento do GataBot.

*ESTE É O REPOSITÓRIO OFICIAL*
*https://github.com/GataNina-Li/GataBot-MD*
*ESTE É O REPOSITÓRIO EM PT-BR*
*https://github.com/SCARED9846/SAFIRA


*CONTA OFICIAL DE ASSISTÊNCIA - INSTAGRAM*
*https://www.instagram.com/gabrielp3887*


*DOE AO ​​CRIADOR NESTA CONTA OFICIAL*
*https://paypal.me/OficialGD*
*DOE AO ​TRADUTOR*
*https://paypal.me/

*~ Muchas Gracias Por tomarte el tiempo en informate sobre GataBot*` 
conn.sendButton(m.chat, Terminos, `${wm}\nEstamos de acuerdo en Hacer Colaboraciones con Personas Comprometidas, manteniendo el Respeto Puedes Contactar si ese es el caso a esta Cuenta Oficial\nhttps://www.instagram.com/gata_dios`, pp, [
['𝙈𝙚𝙣𝙪 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝙇𝙞𝙨𝙩 🌟', '/menulista'],
['𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 �', '#menu']
], m)
/*.trim()
conn.sendHydrated(m.chat, Terminos,  `${wm}\nEstamos de acuerdo en Hacer Colaboraciones con Personas Comprometidas, manteniendo el Respeto Puedes Contactar si ese es el caso a esta Cuenta Oficial | https://www.instagram.com/gata_dios`, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 💫', '.allmenu'],
['𝙈𝙚𝙣𝙪 𝙙𝙚𝙨𝙥𝙡𝙚𝙜𝙖𝙗𝙡𝙚 | 𝙈𝙚𝙣𝙪 𝙇𝙞𝙨𝙩 🌟', '/menulista'],
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 | 𝙈𝙖𝙞𝙣 𝙢𝙚𝙣𝙪 �?', '#menu']
], m,)*/
}

handler.customPrefix = /terminos|términos|términos, condiciones y privacidad|terminos, condiciones y privacidad|términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp
//handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
