let handler = m => m

export async function all(m) {
    for (const user of Object.values(global.db.data.users)) {
        if (user.premiumTime != 0 && user.premium) {
            if (new Date() * 1 >= user.premiumTime) {
                user.premiumTime = 0
                user.premium = false
                let JID = Object.keys(global.db.data.users).find(key => global.db.data.users[key] === user)
                let usuarioJid = JID.split`@`[0]
                let textoo = `*[❗] @${usuarioJid} ВЫ ТЕПЕРЬ В ПРЕМИУМ ЛИСТЕ У БОТА, У ВАС НЕТ ОГРАНИЧЕНИЙ*`
                await this.sendMessage(JID, { text: textoo, mentions: [JID] }, { quoted: ''})
            }
        }
    }
}

/*let handler = m => m

export async function all(m) {
  let user = global.db.data.users[m.sender]
  if (m.chat.endsWith('broadcast')) return

  if (user.premiumTime != 0 && user.premium && new Date() * 1 >= user.premiumTime) {
    user.premiumTime = 0
    user.premium = false

    await m.reply(`*[❗] @${m.sender.split`@`[0]} 𝚃𝚄 𝚃𝙸𝙴𝙼𝙿𝙾 𝙲𝙾𝙼𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙷𝙰 𝙴𝚇𝙿𝙸𝚁𝙰𝙳𝙾, 𝚈𝙰 𝙽𝙾 𝙴𝚁𝙴𝚂 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*`, m.sender, { mentions: [m.sender] })
  }
}*/
