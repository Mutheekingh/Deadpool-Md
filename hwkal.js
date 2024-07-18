
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39'
global.ig = 'confronter._' // ubah aja
global.email = 'chrislankinghz@gmail.com.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'K I N G H' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254723780545'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = 'K I N G H-MD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'K I N G H-MD' // ubah aja ini nama sticker
global.author = 'K I N G H' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classicsession'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
