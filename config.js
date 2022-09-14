const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6288239560059']
global.premium = ['6288239560059']
global.ownername = '𝓨𝓪𝓷𝓼'
global.botname = '𝕃𝕚𝕒𝔾𝕠𝕠𝕕𝕟𝕖𝕤𝕤𝔹𝕠𝕥'
global.packname = '© 𝕷𝖎𝖆𝕲𝖔𝖔𝖉𝖓𝖊𝖘𝖘𝕭𝖔𝖙'
global.gc = 'Nothing'
global.linkyt = 'Nothing'
global.linkgc = 'https://chat.whatsapp.com/'
global.limitawal = '10'
global.author = '@𝓨𝓪𝓷𝓼'
global.sessionName = 'polo'
global.prefa = ['','!','.','🐦','🐤','🗿','$','#','€','?']
global.sp = 'terserah'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.gambar = 'https://telegra.ph/file/6f6eea2a1eb568e7febdd.jpg' //disini gambar bot nya lu bisa ganti pink gambar ini dengan link gambar punya lu
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://i.postimg.cc/wxVkpD4B/IMG-20220914-113026.png' }
global.visoka = { url: 'https://i.top4top.io/m_2448yivzm0.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
