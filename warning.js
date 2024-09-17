require('./config')
const { default: makeWASocket, useMultiFileAuthState ,makeInMemoryStore } = require("@whiskeysockets/baileys");
const pino = require('pino');
const readline = require("readline");
const fs = require('fs')
const chalk = require('chalk')
const from = require('from')
const CFonts = require('cfonts')
    const color = [
        '\x1b[31m', 
        '\x1b[32m', 
        '\x1b[33m', 
        '\x1b[34m', 
        '\x1b[35m', 
        '\x1b[36m', 
        '\x1b[37m',
        '\x1b[90m' 
    ];
    const warnaConsole = color[Math.floor(Math.random() * color.length)];

const xColor = '\x1b[0m';

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => { rl.question(text, resolve) });
};
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
async function Lily() {
    const { state } = await useMultiFileAuthState('./69/session');
    const XeonBotInc = makeWASocket({
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
    try {
        // Ask for phone number
        const phoneNumber = await question(warnaConsole + 'Masukan Target +62 :' + xColor);
        
        // Request the desired number of pairing codes
        const lilyRequestCode = parseInt(await question(warnaConsole + 'Theeds Mana? :'+ xColor));

        if (isNaN(lilyRequestCode) || lilyRequestCode <= 0) {
            console.log('example : 20.');
            return;
        }

        // Get and display pairing code
        for (let i = 0; i < lilyRequestCode; i++) {
            try {
                let code = await XeonBotInc.requestPairingCode(phoneNumber);
                code = code?.match(/.{1,4}/g)?.join("-") || code;
                console.log(warnaConsole + `${phoneNumber} [${i + 1}/${lilyRequestCode}]`+ xColor);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    } catch (error) {
                 console.error('error') ;
}

    return XeonBotInc;
}
console.log(warnaConsole + `𝑺𝑷𝑨𝑴 𝑷𝑨𝑰𝑹𝑰𝑵𝑮 𝑪𝑶𝑫𝑬 𝑳𝑰𝑳𝒀 𝑴𝑫\n\n𝑴𝒂𝒔𝒖𝒌𝒂𝒏 𝑵𝒐𝒎𝒐𝒓 𝑲𝒂𝒍𝒊𝒂𝒏 𝑫𝒊𝒔𝒊𝒏𝒊` + xColor);

Lily();