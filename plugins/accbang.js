let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw 'ᴇᴠᴇɴ ᴛʜᴏᴜɢʜ ɪᴀᴍ ᴀʟʀᴇᴅʏ ᴀɴ ᴀᴅᴅᴍɪɴ'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
