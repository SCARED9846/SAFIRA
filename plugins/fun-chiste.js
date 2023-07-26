// By https://github.com/elrebelde21

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *${wm}* 〕┄⊱\n┊\n *😹 ${pickRandom(global.chiste)} 😹*\n┊\n*╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`)
}
handler.tags = ['humor']
handler.command = ['chiste']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.chiste = ["Qual é o último animal que subiu na arca de Noé? O gol-finho...","Como se diz lenço em japonês? Saka-moko.","Como se diz tiro em árabe? Ahí-va-la-bala...","O que um verme diz para o outro? Vou dar uma volta na maçã.","Um gato começa a latir no telhado de uma casa. Outro gato, surpreso, diz: Você está louco, gato, por que está latindo em vez de miar? O gatinho responde: Acaso eu não posso aprender outro idioma?","O médico diz ao paciente: respire fundo que vou auscultar. O paciente responde: doutor, de quem vou me esconder se não devo nada a ninguém? O médico sai depois de um parto e o pai da criança pergunta: Doutor, como foi tudo? O médico responde: tudo correu bem, mas tivemos que dar oxigênio para o bebê. O pai, horrorizado, diz: Mas, doutor, nós queríamos chamá-lo de Gabriel...","Um peixe pergunta a outro peixe: O que sua mãe faz? O outro responde: Nada, e a sua? Nada também.","Qual é o colmo de Aladim? Ter mau gênio.","O professor diz ao aluno depois de corrigir o trabalho dele: Seu trabalho me comoveu. O aluno, surpreso, pergunta: E por que isso, professor? O professor com um ar de deboche diz: Porque me deu muita pena.","O filho diz à mãe: Mamãe, não quero mais brincar com o Pedrinho. A mãe pergunta ao filho: Por que você não quer mais brincar com ele? Porque quando brincamos de tacos de madeira e eu bato na cabeça dele, ele começa a chorar.","A professora diz a Joãozinho: Joãozinho, o que você faria se estivesse se afogando na piscina? Joãozinho responde: Começaria a chorar muito para me desafogar.","Filho, me vejo gorda, feia e velha. O que tenho, filho, o que tenho? Mamãe, você está certa.","Como se diz cabelo sujo em chinês? Chin cham pu.","Era uma vez um menino tão, tão, tão distraído que... não importa, esqueci a piada!","Uma amiga diz a outra amiga: Como vai a vida de casada? Bem, não posso reclamar, diz ela. Então está indo muito bem, não é? Não, não posso reclamar porque meu marido está aqui ao lado.","Por que as focas sempre olham para cima? Porque é lá que estão os holofotes!","Garçom, este bife tem muitos nervos. Claro, é a primeira vez que o comem.","Como se chama o primo do Bruce Lee? Broco Lee.","Uma mãe diz ao filho: Joãozinho, me disseram que você usa drogas. Quem usa drogas é você, que fala com os passarinhos."]







