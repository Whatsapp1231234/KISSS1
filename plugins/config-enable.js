let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `ЛИСТ КОМАНД`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} приветствие`},
{title: "🌎 | 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} public`},
{title: "🥵 | МОЖНО ПОРНО", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} можнопорно`},
{title: "🔗 | АНТИССЫЛКА", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антиссылка`},   
{title: "🔗 | АНТИССЫЛКА𝟸", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антиссылка2`},    
{title: "🔎 | ОБНАРУЖИТЬ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} обнаружить`},      
{title: "❗ | ОГРАНИЧИТЬ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} ограничить`},    
{title: "☑️ | АВТОЧТЕНИЕ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} авточтение`},
{title: "🔊 | АУДИО", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} аудио`},
{title: "👾 | АВТОСТИКЕР", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} автостикер`},
{title: "💬 | ПК ТОЛЛЬКО", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} пктолько`},
{title: "🏢 | 𝙶𝙲𝙾𝙽𝙻𝚈", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | АНТИВИРУС", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антивирус`},
{title: "📵 | АНТИЛЛАМАДА", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антилламада`},
{title: "💬 | 𝙰НТИПРИВАД", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антипривад`},
{title: "🤬 | АНТИТОКСИЧНЫЙ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антитоксичный`},
{title: "🕸️ | АНТИТРАБАС", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антитрабас`},
{title: "👎🏻 | АНТИИНДУС", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антииндус`}, 
{title: "🤖 | РЕЖИМ РАБОТЫ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} режимработы`}, 
{title: "👑 | ТОЛЬКО АДМИН", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} толькоадмин`}, 
{title: "😃 | 𝚂𝙸𝙼𝚂𝙸𝙼𝙸", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} simsimi`},
]},
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} приветствие`},
{title: "🌎 | 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} public`},
{title: "🥵 | МОЖНО ПОРНО", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} можнопорно`},
{title: "🔗 | АНТИССЫЛКА", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антиссылка`},   
{title: "🔗 | АНТИССЫЛКА𝟸", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антиссылка2`},    
{title: "🔎 | ОБНАРУЖИТЬ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} обнаружить`},      
{title: "❗ | ОГРАНИЧИТЬ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} ограничить`},    
{title: "☑️ | АВТОЧТЕНИЕ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} авточтение`},
{title: "🔊 | АУДИО", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} аудио`},
{title: "👾 | АВТОСТИКЕР", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} автостикер`},
{title: "💬 | ПК ТОЛЛЬКО", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} пктолько`},
{title: "🏢 | 𝙶𝙲𝙾𝙽𝙻𝚈", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | АНТИВИРУС", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антивирус`},
{title: "📵 | АНТИЛЛАМАДА", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антилламада`},
{title: "💬 | 𝙰НТИПРИВАД", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антипривад`},
{title: "🤬 | АНТИТОКСИЧНЫЙ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антитоксичный`},
{title: "🕸️ | АНТИТРАБАС", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антитрабас`},
{title: "👎🏻 | АНТИИНДУС", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} антииндус`}, 
{title: "🤖 | РЕЖИМ РАБОТЫ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} режимработы`}, 
{title: "👑 | ТОЛЬКО АДМИН", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} толькоадмин`}, 
{title: "😃 | 𝚂𝙸𝙼𝚂𝙸𝙼𝙸", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} simsimi`},
]},
]
//{title: "🔞 | 𝙰𝙽𝚃𝙸𝙿𝙾𝚁𝙽𝙾", description: "𝚂𝙸 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝚃𝙸𝙴𝙽𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙳𝙾 𝙿𝙾𝚁𝙽𝙾 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙻𝙸𝙼𝙸𝙽𝙰 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾", rowId: `${usedPrefix + command} antiporno`},
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}enable *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modejadibot*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modejadibot*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modoadmin*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *simsimi*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *simsimi*_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
sections,
Buttons: true }

let isEnable = /true|включить|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружить':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'антивирус':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'можнопорно':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'толькоадмин':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ограничить':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'пктолько':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'антилламада':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'антипривад':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'режимработы':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break        
case 'антитоксичный':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'антитрабас':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'антииндус':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: m })
throw false
}
conn.sendButton(m.chat, `🗂️ ВЫБОР: ${type} 
🎚️ КОМАНДА: ${isEnable ? 'ВКЛЮЧЕНА' : 'ОТКЛЮЧЕНА'}
📣 ДЛЯ: ${isAll ? 'ЭТОГО БОТА' : isUser ? '' : 'ЭТОГО ЧАТА'}`, wm2, null, [[`${isEnable ? '✖️ ОТКЛЮЧИТЬ ✖️' : '✔️ ВКЛЮЧИТЬ ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`]], m)}
handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <option>')
handler.tags = ['group', 'owner']
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?[01])$/i
export default handler
