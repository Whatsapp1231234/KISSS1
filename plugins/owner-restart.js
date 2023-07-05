import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
if (conn.user.jid == conn.user.jid) {
//conn.readMessages([m.key])    
await m.reply('🔄 Reiniciando Bot...\n Espere un momento')
process.send('reset')
} else throw 'eh'
}
handler.help = ['перезагрузка']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true
export default handler
