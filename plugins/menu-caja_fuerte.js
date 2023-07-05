let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*_ミ💖 𝙷𝙾𝙻𝙰 ${taguser} 💖彡_*

ㅤㅤ *🗳️<ℂ𝔸𝕁𝔸 𝔽𝕌𝔼ℝ𝕋𝔼/>🔐*

- 𝙰𝚀𝚄𝙸 𝙿𝚄𝙴𝙳𝙴 𝙶𝚄𝙰𝚁𝙳𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰𝚂 𝚅𝙴𝚁 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴

*<𝔸𝔾ℝ𝔼𝔾𝔸ℝ 𝔸 𝕃𝔸 𝕃𝕀𝕊𝕋𝔸/>*

° ඬ⃟🗳️ _$agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
° ඬ⃟🗳️ _$agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
° ඬ⃟🗳️ _$agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
° ඬ⃟🗳️ _$agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
° ඬ⃟🗳️ _$agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
° ඬ⃟🗳️ _$agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*<𝕃𝕀𝕊𝕋𝔸 𝔻𝔼 ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊/>*

° ඬ⃟🗳️ _$listamsg_
° ඬ⃟🗳️ _$listavn_
° ඬ⃟🗳️ _$listavideo_
° ඬ⃟🗳️ _$listaaudio_
° ඬ⃟🗳️ _$listaimg_
° ඬ⃟🗳️ _$listasticker_

*<𝕍𝔼ℝ 𝕋𝔼𝕏𝕋𝕆𝕊 𝕆 𝔸ℝℂℍ𝕀𝕍𝕆𝕊/>*

° ඬ⃟🗳️ _$vermsg *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$vervn *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$vervideo *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$veraudio *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$verimg *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$versticker *<texto/comando/palabra clave>*_

*<𝔼𝕃𝕀𝕄𝕀ℕ𝔸ℝ/>*

° ඬ⃟🗳️ _$eliminarmsg *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$eliminarvn *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$eliminarvideo *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$eliminaraudio *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$eliminarimg *<texto/comando/palabra clave>*_
° ඬ⃟🗳️ _$eliminarsticker *<texto/comando/palabra clave>*_`.trim()

conn.sendButton(m.chat, str, wm, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m, { mentions: [m.sender] })
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler
