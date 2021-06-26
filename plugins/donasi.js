let handler = async m => m.reply(`
╭─「 ᴅᴏɴᴀᴛᴇ • ʀᴇᴀᴄʜᴀʀɢᴇ 」
│ • ᴀɪʀᴛᴇʟ [919567997462]
│ • ɪᴅᴇᴀ [9207302717]
╰────

╭─「 ᴅᴏɴᴀᴛᴇ • ᴀᴄᴄᴏᴜɴᴅ 」
│ • ᴘᴀʏᴛᴍ [919567997462]
│ • ɢᴘᴀʏ [919567997462]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
