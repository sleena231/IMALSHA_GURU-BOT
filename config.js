import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['94757383584', 'Developer IMALSHA', true],
  ['94715686679', 'Developer IMALSHA2', true], 
  [''] 
] //Number of owners

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['SGWN']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '❚█══GURU BOT══█❚_________█▓▒▒░░░IMALSHA BOY░░░▒▒▓█ '
global.premium = 'true'
global.packname = 'GURU┃ᴮᴼᵀ' 
global.author = '@IMALSHA' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n' 
global.dygp = 'https://chat.whatsapp.com/BibVE6tUICp3qOm2a1Ur8f'
global.fgsc = 'https://github.com/Guru322/GURU-BOT-V1' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 


global.wait = '*⌛ _𝚆𝙰𝙸𝚃...𝚃𝙷𝙴 𝙶𝚄𝚁𝚄 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙾𝙱𝙹𝙴𝙲𝚃....𝖥𝖱𝖮𝖬 𝖨𝖬𝖠𝖫𝖲𝖧𝖠...._*\n*▰▰▰▱▱▱▱▱▰▰▰▱▱▱▱▱▰▰▰▱▱▱▱▱*'
global.rwait = '🔄'
global.dmoji = '♥️'
global.done = '✅'
global.error = '❗' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
