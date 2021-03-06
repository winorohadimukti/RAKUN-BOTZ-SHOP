exports.menu = (ucapan, pushname, mundur, ownerName, botName, tanggal, jam, runtime, isOwner, isPremium, sisalimit, limitCount, sisaGlimit, gcount, expired, prefix) => {
    return `${ucapan} ${pushname}

π Creator : ${ownerName}
π€ Bot Name : ${botName}
π Tanggal : ${tanggal}
β Jam : ${jam}
β³ Runtime
${runtime}

*USER INFO*

*β£ Name : ${pushname}*
*β£ Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*
*β£ Limit : ${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
*β£ Limit Game : ${isOwner ? 'Unlimited' : `${sisaGlimit}/${gcount}`}*
*β£ Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*

*LIST MENU BOT*

βα³πΚα΄α΄α΄Ι΄ κ±Κα΄α΄ΰΏ
β β¦ ${prefix}menusimple
β β¦ ${prefix}menusticker
β β¦ ${prefix}menugroup
β β¦ ${prefix}menusistem
β β¦ ${prefix}menustore
β β¦ ${prefix}menudownload
β β¦ ${prefix}menugame
β β¦ ${prefix}menurandom
β β¦ ${prefix}menusearch
β β¦ ${prefix}menuowner
β Β©Creator By α΄Ήα΄Ώα­ RakunOfcΰ½Ό ΓαΦΝΓ
`
}

exports.simpleMenu = (prefix) => {
    return `
β ${prefix}sticker
β ${prefix}attp
β ${prefix}nulis
β ${prefix}limit
`
}

exports.stickerMenu = (prefix) => {
    return `
β ${prefix}sticker
β ${prefix}swm
β ${prefix}attp
β ${prefix}pentol
`
}

exports.groupMenu = (prefix) => {
    return `
β ${prefix}add
β ${prefix}kick
β ${prefix}welcome
β ${prefix}left
β ${prefix}setwelcome
β ${prefix}changewelcome
β ${prefix}delsetwelcome
β ${prefix}setleft
β ${prefix}changeleft
β ${prefix}delsetleft
β ${prefix}mute
β ${prefix}hidetag
β ${prefix}opengrup
β ${prefix}closegrup
β ${prefix}checksewa
`
}

exports.sistemMenu = (prefix) => {
    return `
β ${prefix}antilink
β ${prefix}antiwame
β ${prefix}antiyt
β ${prefix}antitele
β ${prefix}antibitly
β ${prefix}setcmd
β ${prefix}delcmd
`
}

exports.storeMenu = (prefix) => {
    return `
β ${prefix}list
β ${prefix}addlist
β ${prefix}dellist
β ${prefix}update
β ${prefix}tambah
β ${prefix}kurang
β ${prefix}kali
β ${prefix}bagi
β p < reply chat >
β d < reply chat >
`
}

exports.downloadMenu = (prefix) => {
    return `
β ${prefix}instagram
β ${prefix}youtube
β ${prefix}tiktok
`
}

exports.gameMenu = (prefix) => {
    return `
β ${prefix}tebakgambar
β ${prefix}family100
β ${prefix}tictactoe
β ${prefix}suit
β ${prefix}topglobal
β ${prefix}toplocal
`
}

exports.randomMenu = (prefix) => {
    return `
β ${prefix}asupan
β ${prefix}couple
β ${prefix}meme1
β ${prefix}meme2
β ${prefix}gachacewek
β ${prefix}gachacowok
`
}

exports.searchMenu = (prefix) => {
    return `
β ${prefix}nickff 
β ${prefix}nickml
β ${prefix}nickpubg
`
}

exports.ownerMenu = (prefix) => {
    return `
β ${prefix}bc
β ${prefix}join
β ${prefix}exif
β ${prefix}self
β ${prefix}public
β ${prefix}setlogo
β ${prefix}setprefix
β ${prefix}ban
β ${prefix}unban
β ${prefix}listban
β ${prefix}addsewa
β ${prefix}delsewa
β ${prefix}listsewa
β ${prefix}addprem
β ${prefix}delprem
β ${prefix}listprem
`
}
