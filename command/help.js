const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

╭─❒ 「 *IDUL FITRI* 」 
├ Hitung Mundur Idul Fitri 🌙 
├─❒ ${mundur}
│
├─❒ 「 *STATISTICS* 」 
├ • Upload : ${upload}
├ • Downloads : ${download}
│
├─❒ 「 *INFO OWNER* 」 
├ • Creator : ${ownerName}
├ • Bot Name : ${botName}
├ • Time : ${jam}
├ • Date : ${tanggal(new Date())}
├ • Runtime : ${runtime(process.uptime())}
├─❒
│
├─❒ 「 *INFO USER* 」 
├ • Name : ${pushname !== undefined ? pushname : '-'}
├ • Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
├ • Limit : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
├ • Limit Game : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
├ • Balance : ${toCommas(getBalance(sender, balance))}
╰─❒ • Role : ${role}

╭─❒ 「 *LIST MENU* 」 ${petik} 
│
├ • ${prefix}menu
├ • ${prefix}infobot
├ • ${prefix}donate
├ • ${prefix}dashboard
├ • ${prefix}owner
├ • ${prefix}cekdrive
├ • ${prefix}cekbandwidth
├ • ${prefix}cekpremium
├ • ${prefix}listpremium
├ • ${prefix}listsewa
├ • ${prefix}speed
├ • ${prefix}runtime
├ • ${prefix}listbahasa${petik}
│
├─❒ 「 *CONVERT MENU* 」${petik}
├ • ${prefix}sticker
├ • ${prefix}stickerwm
├ • ${prefix}smeme
├ • ${prefix}toimg
├ • ${prefix}tovideo
├ • ${prefix}tomp3
├ • ${prefix}ttp
├ • ${prefix}attp
├ • ${prefix}emojimix
├ • ${prefix}ai
├ • ${prefix}aiimg
├ • ${prefix}chatgpt
├ • ${prefix}nuliskiri
├ • ${prefix}nuliskanan
├ • ${prefix}foliokiri
├ • ${prefix}foliokanan
├ • ${prefix}say
├ • ${prefix}translate${petik}
│
├─❒ 「 *Anonymous CHAT* 」${petik}
├ • ${prefix}menfess
├ • ${prefix}confess
├ • ${prefix}balasmenfess
├ • ${prefix}tolakmenfess
├ • ${prefix}stopmenfess
├ • ${prefix}anonymous
├ • ${prefix}start
├ • ${prefix}next
├ • ${prefix}stop
├ • ${prefix}sendprofile${petik}
│
├─❒ 「 *MENU STORE* 」${petik}
├ • ${prefix}list
├ • ${prefix}addlist
├ • ${prefix}dellist
├ • ${prefix}update
├ • ${prefix}jeda
├ • ${prefix}tambah
├ • ${prefix}kurang
├ • ${prefix}kali
├ • ${prefix}bagi
├ • ${prefix}delsetdone
├ • ${prefix}changedone
├ • ${prefix}setdone
├ • ${prefix}delsetproses
├ • ${prefix}changeproses
├ • ${prefix}setproses
├ • proses < reply chat >
├ • done < reply chat >${petik}
│
├─❒ 「 *MENU RPG* 」${petik}
├ • ${prefix}inventory
├ • ${prefix}mining
├ • ${prefix}buy 
├ • ${prefix}sell
├ • ${prefix}heal
├ • ${prefix}hunt
├ • ${prefix}adventure
├ • ${prefix}luckyday
├ • ${prefix}killslime
├ • ${prefix}killgoblin
├ • ${prefix}killdevil
├ • ${prefix}killbehemoth
├ • ${prefix}killdemon
├ • ${prefix}killdemonking
├ • ${prefix}joinrpg
├ • ${prefix}sellikan
├ • ${prefix}sellbesi
├ • ${prefix}sellemas
├ • ${prefix}jelajah
├ • ${prefix}mancing
├ • ${prefix}jualikan
├ • ${prefix}jualcoal
├ • ${prefix}lebur
├ • ${prefix}jualstone
├ • ${prefix}jualingot
├ • ${prefix}jualkayu
├ • ${prefix}nebang
├ • ${prefix}goplanet
├ • ${prefix}jualbahankimia${petik}
│
├─❒ 「 *MENU DOWNLOAD* 」${petik}
├ • ${prefix}play *SEARCH VIDEO*
├ • ${prefix}ytmp3 *LINK VIDEO*
├ • ${prefix}ytmp4 *LINK VIDEO*
├ • ${prefix}instagram *LINK IG*
├ • ${prefix}igphoto *LINK POSTINGAN*
├ • ${prefix}igvideo *LINK VIDEO*
├ • ${prefix}igreels *LINK IG REELS*
├ • ${prefix}tiktok *LINK TIKTOK*
├ • ${prefix}tiktoknowm *LINK TIKTOK*
├ • ${prefix}tiktokaudio *LINK TIKTOK*
├ • ${prefix}mediafire *LINK MEDIAFIRE*
├ • ${prefix}gitclone${petik} *LINK GITCLONE*
│
├─❒ 「 *MENU GROUP* 」${petik}
├ • ${prefix}afk
├ • ${prefix}welcome
├ • ${prefix}left
├ • ${prefix}pppanjanggc
├ • ${prefix}setopen
├ • ${prefix}changesetopen
├ • ${prefix}delsetopen
├ • ${prefix}setclose
├ • ${prefix}changesetclose
├ • ${prefix}delsetclose
├ • ${prefix}setwelcome
├ • ${prefix}changewelcome
├ • ${prefix}delsetwelcome
├ • ${prefix}setleft
├ • ${prefix}changeleft
├ • ${prefix}delsetleft
├ • ${prefix}linkgc
├ • ${prefix}setppgc
├ • ${prefix}setppgc2 
├ • ${prefix}setnamegc
├ • ${prefix}setdesc
├ • ${prefix}antilink
├ • ${prefix}antiwame
├ • ${prefix}antilink2
├ • ${prefix}antiwame2
├ • ${prefix}open
├ • ${prefix}close
├ • ${prefix}add
├ • ${prefix}kick
├ • ${prefix}promote
├ • ${prefix}demote
├ • ${prefix}revoke
├ • ${prefix}hidetag
├ • ${prefix}checksewa${petik}
│
├─❒ 「 *MENU GAMES* 」${petik}
├ • ${prefix}tictactoe
├ • ${prefix}delttt
├ • ${prefix}casino
├ • ${prefix}delcasino${petik}
│
├─❒ 「 *MENU SEARCH* 」${petik}
├ • ${prefix}lirik
├ • ${prefix}grupwa
├ • ${prefix}pinterest
├ • ${prefix}ytsearch${petik}
│
├─❒ 「 *MENU BALANCE* 」${petik}
├ • ${prefix}topglobal
├ • ${prefix}toplocal
├ • ${prefix}buylimit
├ • ${prefix}buyglimit
├ • ${prefix}transfer
├ • ${prefix}limit
├ • ${prefix}balance${petik}
│
├─❒ 「 *MENU STORAGE* 」${petik}
├ • ${prefix}addstik
├ • ${prefix}addvn
├ • ${prefix}addimg
├ • ${prefix}addvid
├ • ${prefix}liststik
├ • ${prefix}listvn
├ • ${prefix}listimg
├ • ${prefix}listvid${petik}
│
├─❒ 「 *MENU BAILEYS* 」${petik}
├ • ${prefix}fitnah
├ • ${prefix}nowa
├ • ${prefix}getquoted
├ • ${prefix}fakehidetag
├ • ${prefix}react
├ • ${prefix}setcmd
├ • ${prefix}delcmd${petik}
│
├─❒ 「 *MENU OWNER* 」${petik}
├ • ${prefix}autoread
├ • ${prefix}autobio
├ • ${prefix}antidelete
├ • ${prefix}antiviewonce
├ • ${prefix}autorespond
├ • ${prefix}anticall
├ • ${prefix}autoblok212
├ • ${prefix}join
├ • ${prefix}left
├ • ${prefix}self
├ • ${prefix}public
├ • ${prefix}setppbot2
├ • ${prefix}setppbot
├ • ${prefix}broadcast
├ • ${prefix}bcimg
├ • ${prefix}bcstik
├ • ${prefix}bcvn
├ • ${prefix}bcvideo
├ • ${prefix}bcsewa
├ • ${prefix}addpremium
├ • ${prefix}delpremium
├ • ${prefix}addsewa
├ • ${prefix}delsewa${petik}
│
├─❒ 「 *MENU TEXTPRO* 」 ${petik}
├ • ${prefix}halloween2
├ • ${prefix}horror
├ • ${prefix}game8bit
├ • ${prefix}layered
├ • ${prefix}glitch2
├ • ${prefix}coolg
├ • ${prefix}coolwg
├ • ${prefix}realistic
├ • ${prefix}space3d
├ • ${prefix}gtiktok
├ • ${prefix}stone
├ • ${prefix}marvel
├ • ${prefix}marvel2
├ • ${prefix}avengers
├ • ${prefix}metalr
├ • ${prefix}metalg
├ • ${prefix}metalg2
├ • ${prefix}halloween2
├ • ${prefix}lion
├ • ${prefix}wolf_bw
├ • ${prefix}wolf_g
├ • ${prefix}ninja
├ • ${prefix}3dsteel
├ • ${prefix}horror2
├ • ${prefix}lava
├ • ${prefix}bagel
├ • ${prefix}blackpink
├ • ${prefix}rainbow2
├ • ${prefix}water_pipe
├ • ${prefix}halloween
├ • ${prefix}sketch
├ • ${prefix}sircuit
├ • ${prefix}discovery
├ • ${prefix}metallic2
├ • ${prefix}fiction
├ • ${prefix}demon
├ • ${prefix}transformer
├ • ${prefix}berry
├ • ${prefix}thunder
├ • ${prefix}magma
├ • ${prefix}3dstone
├ • ${prefix}neon
├ • ${prefix}glitch
├ • ${prefix}harry_potter
├ • ${prefix}embossed
├ • ${prefix}broken
├ • ${prefix}papercut
├ • ${prefix}gradient
├ • ${prefix}glossy
├ • ${prefix}watercolor
├ • ${prefix}multicolor
├ • ${prefix}neon_devil
├ • ${prefix}underwater
├ • ${prefix}bear
├ • ${prefix}wonderfulg
├ • ${prefix}christmas
├ • ${prefix}neon_light
├ • ${prefix}snow
├ • ${prefix}cloudsky
├ • ${prefix}luxury2
├ • ${prefix}gradient2
├ • ${prefix}summer
├ • ${prefix}writing
├ • ${prefix}engraved
├ • ${prefix}summery
├ • ${prefix}3dglue
├ • ${prefix}metaldark
├ • ${prefix}neonlight
├ • ${prefix}oscar
├ • ${prefix}minion
├ • ${prefix}holographic
├ • ${prefix}purple
├ • ${prefix}glossyb
├ • ${prefix}deluxe2
├ • ${prefix}glossyc
├ • ${prefix}fabric
├ • ${prefix}neonc
├ • ${prefix}newyear
├ • ${prefix}newyear2
├ • ${prefix}metals
├ • ${prefix}xmas
├ • ${prefix}blood
├ • ${prefix}darkg
├ • ${prefix}joker
├ • ${prefix}wicker
├ • ${prefix}natural
├ • ${prefix}firework
├ • ${prefix}skeleton
├ • ${prefix}balloon
├ • ${prefix}balloon2
├ • ${prefix}balloon3
├ • ${prefix}balloon4
├ • ${prefix}balloon5
├ • ${prefix}balloon6
├ • ${prefix}balloon7
├ • ${prefix}steel
├ • ${prefix}gloss
├ • ${prefix}denim
├ • ${prefix}decorate
├ • ${prefix}decorate2
├ • ${prefix}peridot
├ • ${prefix}rock
├ • ${prefix}glass
├ • ${prefix}glass2
├ • ${prefix}glass3
├ • ${prefix}glass4
├ • ${prefix}glass5
├ • ${prefix}glass6
├ • ${prefix}glass7
├ • ${prefix}glass8
├ • ${prefix}captain_as2
├ • ${prefix}robot
├ • ${prefix}equalizer
├ • ${prefix}toxic
├ • ${prefix}sparkling
├ • ${prefix}sparkling2
├ • ${prefix}sparkling3
├ • ${prefix}sparkling4
├ • ${prefix}sparkling5
├ • ${prefix}sparkling6
├ • ${prefix}sparkling7
├ • ${prefix}decorative
├ • ${prefix}chocolate
├ • ${prefix}strawberry
├ • ${prefix}koifish
├ • ${prefix}bread
├ • ${prefix}matrix
├ • ${prefix}blood2
├ • ${prefix}neonligth2
├ • ${prefix}thunder2
├ • ${prefix}3dbox
├ • ${prefix}neon2
├ • ${prefix}roadw
├ • ${prefix}bokeh
├ • ${prefix}gneon
├ • ${prefix}advanced
├ • ${prefix}dropwater
├ • ${prefix}wall
├ • ${prefix}chrismast
├ • ${prefix}honey
├ • ${prefix}drug
├ • ${prefix}marble
├ • ${prefix}marble2
├ • ${prefix}ice
├ • ${prefix}juice
├ • ${prefix}rusty
├ • ${prefix}abstra
├ • ${prefix}biscuit
├ • ${prefix}wood
├ • ${prefix}scifi
├ • ${prefix}metalr
├ • ${prefix}purpleg
├ • ${prefix}shiny 
├ • ${prefix}jewelry
├ • ${prefix}jewelry2
├ • ${prefix}jewelry3
├ • ${prefix}jewelry4
├ • ${prefix}jewelry5
├ • ${prefix}jewelry6
├ • ${prefix}jewelry7
├ • ${prefix}jewelry8
├ • ${prefix}metalh
├ • ${prefix}golden
├ • ${prefix}glitter
├ • ${prefix}glitter2
├ • ${prefix}glitter3
├ • ${prefix}glitter4
├ • ${prefix}glitter5
├ • ${prefix}glitter6
├ • ${prefix}glitter7
├ • ${prefix}metale
├ • ${prefix}carbon
├ • ${prefix}candy
├ • ${prefix}metalb
├ • ${prefix}gemb
├ • ${prefix}3dchrome
├ • ${prefix}metalb2
├ • ${prefix}metalg
├ • ${prefix}metalg${petik}
╰─❒ 
 
© ᴹᴿ᭄ Dicky~Ofcོ ×፝֟͜×
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `Untuk List Sewa ubah sendiri di folder command, file help.js 👌 baris ke 521`