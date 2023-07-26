/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *${wm}* 〕┄⊱\n┊\nდ *"${pickRandom(global.piropo)}"*\n┊\n*╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`)
}
handler.tags = ['frases']
handler.command = ['piropo']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piropo = ["Queria ser papel para poder embrulhar esse chocolate.","Você é como wi-fi sem senha, todos estão te procurando.","Quem fosse ônibus para andar pelas curvas do teu coração.","Quero voar sem asas e sair deste universo, entrar no teu e amar-te em silêncio.","Quisera ser manteiga para derreter-me na tua tapioca.","Se a beleza fosse pecado, você já estaria no inferno.","Gostaria de ser um gato para passar 7 vidas ao teu lado.","Roubar é errado, mas um beijo da tua boca sim, eu roubaria.","Como é lindo o céu quando está claro, mas mais lindo é o amor quando te tenho ao meu lado.","Bonita, caminha pela sombra, o sol derrete os chocolates.","Se eu fosse um e-mail, você seria minha senha.","Gostaria que fosses uma montanha para te dar uma machadada.","Perdi meu número de telefone. Você me dá o teu?","Como você se chama para pedir você de presente ao Papai Noel?","No céu há muitas estrelas, mas a mais brilhante está na Terra e és tu.","Acaba de sair o sol ou é o sorriso que me dás hoje?","Não é o rum nem a cerveja, és tu quem me subiu à cabeça.","Se falamos de matemática, és a soma de todos os meus desejos.","Pareces o Google, porque tens tudo o que eu procuro.","Meu café favorito é o dos teus olhos.","Quero ser o Photoshop para retocar todo o teu corpo.","Gostaria que fosses cereal, para te comer nas manhãs.","Quem fosse a fome, para te ter três vezes ao dia."]
