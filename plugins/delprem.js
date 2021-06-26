let handler = async (m, { conn }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : ''
    else who = m.chat
    if (global.prems.includes(who)) throw 'What you tagged is not a premium user!'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat, `Hi, @${who.split('@')[0]}. Your premium period is over!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['delprem *@user*']
handler.tags = ['owner']

handler.command = /^(remove|hapus|-|del)prem$/i

handler.owner = true

module.exports = handler
