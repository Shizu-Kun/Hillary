require('./config')
const { default: makeWASocket, DisconnectReason, makeInMemoryStore, jidDecode, proto, getContentType, useMultiFileAuthState, downloadContentFromMessage } = require("@whiskeysockets/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const CFonts = require('cfonts')
const readline = require("readline");
const _ = require('lodash')
const yargs = require('yargs/yargs')
const { color, bgcolor } = require('../function/color')
const PhoneNumber = require('awesome-phonenumber')

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
CFonts.say(` `)
CFonts.say(`HILARY`,{
   font: 'block',
  align: 'left',
  colors: ['magenta'],
  });
console.log(chalk.magenta.bold(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
${chalk.blue.bold("ʜɪʟʟᴀʀʏ ᴀʙɪɢᴀɪʟ")}         
ᴠᴇʀsɪᴏɴ : 1.0
sᴜʙsᴄʀɪʙᴇ ʏᴛ : ${chalk.blue.bold("ғᴀʟʟᴢx-ғᴇᴀᴛᴜʀᴇs")}
ʟɪᴋᴇ ᴛʜɪs ᴠɪᴅᴇᴏ!!

${chalk.magenta.bold(`[ ! ] ᴛᴇʀsᴀᴍʙᴜɴɢ ᴄᴜʏʏ`)}
${chalk.blue.bold(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)}
${chalk.red.bold(`[ ɪɴғᴏ ʙᴏᴛ ]`)}
${chalk.blue.bold(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)}
${chalk.cyan.bold(`ʙᴏᴛɴᴀᴍᴇ : ${botname}`)}
${chalk.cyan.bold(`ʙᴏᴛɴᴜᴍʙᴇʀ : ${botnumber}`)}
${chalk.cyan.bold(`ᴘᴇᴍʙᴜᴀᴛ sᴄʀɪᴘᴛ : ${pembuat}`)}
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾ ᴠᴇʀsɪᴏɴ : 1.0 ɴᴏ ᴇɴᴄ
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙`));
CFonts.say("ʜɪʟʟᴀʀʏ ᴀʙɪɢᴀɪʟ ᴍᴅ", {
    colors: ["blue"],
   font: 'tiny',
  align: 'left',
});
//=================================================//
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()


const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };
// Validasi ip
const DATABASE_URL = 'https://raw.githubusercontent.com/FallEzz/Ip-data/main/database.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getUserInput = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
};
const validateCredentials = (username, password, users) => {
    const user = users.find(user => user.username === username);
    return user && user.password === password;
};

const getLocalIpAddress = () => {
    const interfaces = os.networkInterfaces();
    for (const iface of Object.values(interfaces)) {
        for (const details of iface) {
            if (details.family === 'IPv4' && !details.internal) {
                return details.address;
            }
        }
    }
    return null;
};

const validateIp = (ip, allowedIps) => {
    return allowedIps.includes(ip);
};

async function validIp() {
    try {
        const response = await axios.get(DATABASE_URL);
        const data = response.data;

        const localIp = getLocalIpAddress();
        if (!validateIp(localIp, data.allowedIps)) {
            console.log(color(`⚠️ IP ${localIp} tidak diizinkan`, 'red'));
            process.exit(1);
        }

        const username = await question(color('\n\n\nMasukkan username: ','red'));
        const password = await question(color('\n\n\nMasukkan password: ', 'red'));

        if (validateCredentials(username, password, data.users)) {
            console.log(color('Login sukses!', 'green'));
            return true;
        } else {
            console.log(color('Username atau password salah', 'red'));
            process.exit(1);
        }
    } catch (error) {
        console.error('Gagal mengambil data:', error);
        process.exit(1);
    } finally {
        rl.close();
    }
};
async function startBotz() {
const { state, saveCreds } = await useMultiFileAuthState("session")
const Lily = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: false,
auth: state,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
browser: ["Ubuntu", "Chrome", "20.0.04"],
});

if (!Lily.authState.creds.registered) {
const phoneNumber = await question('𝙼𝚊𝚜𝚞𝚔𝚊𝚗 𝙽𝚘𝚖𝚎𝚛 𝚈𝚊𝚗𝚐 𝙰𝚔𝚝𝚒𝚏 𝙰𝚠𝚊𝚕𝚒 𝙳𝚎𝚗𝚐𝚊𝚗 𝟼𝟸 :\n');
let code = await Lily.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`𝙲𝙾𝙳𝙴 𝙿𝙰𝙸𝚁𝙸𝙽𝙶 :`, code);
}

store.bind(Lily.ev)

Lily.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!Lily.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(Lily, mek, store)
require("./case")(Lily, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

// Setting
Lily.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Lily.getName = (jid, withoutContact= false) => {
id = Lily.decodeJid(jid)
withoutContact = Lily.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Lily.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Lily.decodeJid(Lily.user.id) ?
Lily.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Lily.public = true

Lily.serializeM = (m) => smsg(Lily, m, store);
Lily.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update;
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
startBotz();
} else if (reason === DisconnectReason.loggedOut) {
} else {
Lily.end(`Unknown DisconnectReason: ${reason}|${connection}`);
}
} else if (connection === 'open') {
console.log(chalk.cyan.bold('[Connected] ' + JSON.stringify(Lily.user.id, null, 2)));
}
});

Lily.ev.on('creds.update', saveCreds)

Lily.sendText = (jid, text, quoted = '', options) => Lily.sendMessage(jid, { text: text, ...options }, { quoted })
//=========================================\\
Lily.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
//=========================================\\
Lily.sendTextWithMentions = async (jid, text, quoted, options = {}) => Lily.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
//=========================================\\
Lily.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

return Lily
}

startBotz()

function smsg(Lily, m, store) {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = Lily.decodeJid(m.fromMe && Lily.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = Lily.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = Lily.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === Lily.decodeJid(Lily.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 return exports.smsg(conn, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => Lily.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => Lily.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => Lily.downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => Lily.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? Lily.sendMedia(chatId, text, 'file', '', m, { ...options }) : Lily.sendText(chatId, text, m, { ...options })
m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => Lily.copyNForward(jid, m, forceForward, options)

return m
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.magenta.bold(`Update${__filename}`))
delete require.cache[file]
require(file)
})
