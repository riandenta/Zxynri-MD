const _0x1af342=_0x1855;(function(_0x460995,_0x281df9){const _0x42745e=_0x1855,_0x5ccb78=_0x460995();while(!![]){try{const _0x1f5a0f=parseInt(_0x42745e(0xf6))/0x1+parseInt(_0x42745e(0xc2))/0x2+-parseInt(_0x42745e(0x13c))/0x3+parseInt(_0x42745e(0x11d))/0x4*(-parseInt(_0x42745e(0x179))/0x5)+parseInt(_0x42745e(0x101))/0x6+-parseInt(_0x42745e(0xa3))/0x7*(-parseInt(_0x42745e(0x94))/0x8)+parseInt(_0x42745e(0x181))/0x9*(parseInt(_0x42745e(0x160))/0xa);if(_0x1f5a0f===_0x281df9)break;else _0x5ccb78['push'](_0x5ccb78['shift']());}catch(_0x5eb4e3){_0x5ccb78['push'](_0x5ccb78['shift']());}}}(_0x18e0,0xc4de4));let {default:makeWASocket,BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,downloadContentFromMessage,downloadHistory,proto,getMessage,generateWAMessageContent,prepareWAMessageMedia}=require(_0x1af342(0x11f)),levelling=require(_0x1af342(0x8d)),fs=require('fs');const util=require('util'),os=require('os');let path=require(_0x1af342(0x132)),{createHash}=require(_0x1af342(0xab)),fetch=require(_0x1af342(0xdb)),{perfomance}=require(_0x1af342(0xcf)),moment=require('moment-timezone');const defaultMenu={'before':('\x0a╭──〔\x20\x20𝐈𝐍𝐅𝐎\x20𝐔𝐒𝐄𝐑\x20\x20〕─⬣\x0a┃➵͜͡✪\x20𝚄𝚂𝙴𝚁\x20:\x20*%name*\x0a┃➵͜͡✪\x20𝚁𝙴𝙼𝙰𝙸𝙽𝙸𝙽𝙶\x20𝙻𝙸𝙼𝙸𝚃\x20:\x20*%limit*\x20𝙻𝙸𝙼𝙸𝚃\x0a┃➵͜͡✪\x20𝚁𝙾𝙻𝙴\x20:\x20*%role*\x0a┃➵͜͡✪\x20𝙻𝙴𝚅𝙴𝙻\x20:\x20*%level\x20(%exp\x20/\x20%maxexp)*\x20\x0a┃➵͜͡✪\x20𝚃𝙾𝚃𝙰𝙻\x20𝚇𝙿\x20:\x20*%totalexp*\x20𝚇𝙿\x0a┃\x0a┃──〔\x20\x20𝐓\x20𝐎\x20𝐃\x20𝐀\x20𝐘\x20\x20〕─⬣\x0a┃➵͜͡✪\x20𝚃𝙾𝙳𝙰𝚈\x20:\x20*%week\x20%weton*\x20\x0a┃➵͜͡✪\x20𝙳𝙰𝚃𝙴\x20:\x20*%date*\x0a┃➵͜͡✪\x20𝙳𝙰𝚃𝙴\x20𝙸𝚂𝙻𝙰𝙼𝙸𝙲\x20:\x20*%dateIslamic*\x0a┃➵͜͡✪\x20𝚃𝙸𝙼𝙴\x20:\x20*%time*\x0a┃\x0a┃──〔\x20\x20𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄\x20\x20〕─⬣\x0a┃➵͜͡✪\x20𝚄𝙿𝚃𝙸𝙼𝙴\x20:\x20*%uptime*\x0a┃➵͜͡✪\x20𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴\x20:\x20%rtotalreg\x20𝚍𝚊𝚛𝚒\x20%totalreg\x20\x0a┃➵͜͡✪\x20𝙼𝙴𝙼𝙾𝚁𝚈\x20𝚄𝚂𝙴𝙳\x20:\x20*'+(process[_0x1af342(0x121)]()[_0x1af342(0x149)]/0x400/0x400)[_0x1af342(0x131)](0x2)+'MB\x20/\x20'+Math['round'](require('os')[_0x1af342(0x14e)]/0x400/0x400)+_0x1af342(0x8b))['trimStart'](),'header':_0x1af342(0x15f),'body':'┃⫹⫺\x20%cmd\x20%islimit\x20%isPremium','footer':'┃\x0a╰────────❑\x0a','footerText':'Powered\x20by\x20ᯤ\x20ʀɪᴇʟɢᴀɴs\x20ᴏғᴄ','after':_0x1af342(0xfc)};let handler=async(_0x2ff996,{conn:_0x4698bc,usedPrefix:_0x196fa7,args:_0x30d321,command:_0x907825})=>{const _0x5170fb=_0x1af342;let _0x1d75e6,_0x1bb5ce=(''+_0x30d321[0x0])[_0x5170fb(0xe5)](),_0x6275a3=[_0x5170fb(0x151),_0x5170fb(0x163),_0x5170fb(0x115),_0x5170fb(0xd3),_0x5170fb(0xe6),'game',_0x5170fb(0x95),'xp',_0x5170fb(0x15a),_0x5170fb(0xa7),_0x5170fb(0xe7),_0x5170fb(0x183),_0x5170fb(0x145),_0x5170fb(0x123),_0x5170fb(0x113),_0x5170fb(0xf2),'kerang',_0x5170fb(0x91),'owner',_0x5170fb(0x162),_0x5170fb(0x12e),_0x5170fb(0x183),'info','stalk',_0x5170fb(0x10a),'sticker','tools','text','nsfw',_0x5170fb(0x16d),_0x5170fb(0x177),_0x5170fb(0x171),_0x5170fb(0xaa)];if(!_0x6275a3[_0x5170fb(0x119)](_0x1bb5ce))_0x1bb5ce='404';if(_0x1bb5ce==_0x5170fb(0x151))_0x1d75e6={'main':_0x5170fb(0x126),'advanced':_0x5170fb(0x125),'absen':'ABSEN','anime':_0x5170fb(0x130),'sticker':_0x5170fb(0x102),'downloader':'DOWNLOADER','xp':_0x5170fb(0xbc),'fun':_0x5170fb(0xd9),'game':_0x5170fb(0x148),'github':_0x5170fb(0x17d),'group':_0x5170fb(0x13a),'image':_0x5170fb(0x12b),'info':_0x5170fb(0xf9),'internet':_0x5170fb(0xcc),'islam':_0x5170fb(0x161),'kerang':'KERANG','maker':'MAKER','owner':_0x5170fb(0x11a),'Pengubah\x20Suara':_0x5170fb(0x17b),'premium':'PREMIUM','quotes':'QUOTES','rpg':'RPG','stalk':_0x5170fb(0xb5),'shortlink':'SHORT\x20LINK','tools':_0x5170fb(0x176),'vote':'VOTING','nsfw':_0x5170fb(0x96),'asupan':_0x5170fb(0x9d),'random':_0x5170fb(0xd6),'textpro':'TEXT\x20PRO','photooxy':_0x5170fb(0xad)};if(_0x1bb5ce==_0x5170fb(0x163))_0x1d75e6={'absen':_0x5170fb(0x152),'vote':_0x5170fb(0x185)};if(_0x1bb5ce==_0x5170fb(0xd3))_0x1d75e6={'anime':'MANIME'};if(_0x1bb5ce==_0x5170fb(0xda))_0x1d75e6={'sticker':_0x5170fb(0x135)};if(_0x1bb5ce==_0x5170fb(0xe6))_0x1d75e6={'downloader':_0x5170fb(0xe0)};if(_0x1bb5ce=='xp')_0x1d75e6={'xp':'EXP\x20&\x20LIMIT'};if(_0x1bb5ce=='fun')_0x1d75e6={'fun':'MENU\x20FUN'};if(_0x1bb5ce==_0x5170fb(0x128))_0x1d75e6={'game':_0x5170fb(0x148)};if(_0x1bb5ce==_0x5170fb(0x15a))_0x1d75e6={'github':_0x5170fb(0x17d)};if(_0x1bb5ce==_0x5170fb(0xa7))_0x1d75e6={'group':_0x5170fb(0x13a)};if(_0x1bb5ce==_0x5170fb(0xe7))_0x1d75e6={'image':_0x5170fb(0x12b)};if(_0x1bb5ce==_0x5170fb(0x123))_0x1d75e6={'info':_0x5170fb(0xf9)};if(_0x1bb5ce==_0x5170fb(0x113))_0x1d75e6={'internet':_0x5170fb(0xcc)};if(_0x1bb5ce==_0x5170fb(0xf2))_0x1d75e6={'islam':_0x5170fb(0x161)};if(_0x1bb5ce=='kerang')_0x1d75e6={'kerang':_0x5170fb(0x182)};if(_0x1bb5ce==_0x5170fb(0x91))_0x1d75e6={'maker':'MAKER'};if(_0x1bb5ce==_0x5170fb(0xb7))_0x1d75e6={'owner':_0x5170fb(0x174),'host':'Host','advanced':'Advanced'};if(_0x1bb5ce==_0x5170fb(0x162))_0x1d75e6={'Pengubah\x20Suara':_0x5170fb(0x17b)};if(_0x1bb5ce=='text')_0x1d75e6={'text':_0x5170fb(0xef)};if(_0x1bb5ce==_0x5170fb(0x12e))_0x1d75e6={'premium':_0x5170fb(0xfe)};if(_0x1bb5ce==_0x5170fb(0x183))_0x1d75e6={'quotes':_0x5170fb(0xa2)};if(_0x1bb5ce==_0x5170fb(0x115))_0x1d75e6={'rpg':_0x5170fb(0xe2)};if(_0x1bb5ce=='stalk')_0x1d75e6={'stalk':'STALK'};if(_0x1bb5ce==_0x5170fb(0x10a))_0x1d75e6={'shortlink':_0x5170fb(0xde)};if(_0x1bb5ce=='tools')_0x1d75e6={'tools':_0x5170fb(0x176)};if(_0x1bb5ce==_0x5170fb(0x180))_0x1d75e6={'nsfw':_0x5170fb(0x96)};if(_0x1bb5ce==_0x5170fb(0x16d))_0x1d75e6={'asupan':'ASUPAN'};if(_0x1bb5ce=='random')_0x1d75e6={'random':_0x5170fb(0xd6)};if(_0x1bb5ce==_0x5170fb(0x171))_0x1d75e6={'textpro':_0x5170fb(0x13f)};if(_0x1bb5ce==_0x5170fb(0xaa))_0x1d75e6={'photooxy':'PHOTO\x20OXY'};try{let _0x289cf8=JSON[_0x5170fb(0x147)](await fs['promises'][_0x5170fb(0x172)](path[_0x5170fb(0xa8)](__dirname,_0x5170fb(0x98)))[_0x5170fb(0x127)](_0x4e5f79=>'{}')),_0x5f1631;if(_0x2ff996['isGroup'])_0x5f1631=_0x2ff996[_0x5170fb(0x9f)][0x0]?_0x2ff996[_0x5170fb(0x9f)][0x0]:_0x2ff996[_0x5170fb(0xaf)];else _0x5f1631=_0x2ff996[_0x5170fb(0xaf)];let _0x59abd5=_0x4698bc[_0x5170fb(0xbe)](_0x2ff996[_0x5170fb(0xaf)]),_0x21e066=Object[_0x5170fb(0x140)](global['db']['data'][_0x5170fb(0x118)])[_0x5170fb(0xc5)],_0x418099=Object[_0x5170fb(0x112)](global['db'][_0x5170fb(0x103)][_0x5170fb(0x118)])[_0x5170fb(0x164)](_0x20c93e=>_0x20c93e['registered']==!![])['length'],_0x52e4f9=global['db'][_0x5170fb(0x103)]['users'][_0x2ff996['sender']][_0x5170fb(0x12e)],_0x520cd4=global['db']['data'][_0x5170fb(0x118)][_0x5f1631],{exp:_0x4f34dc,limit:_0x4ec509,level:_0x1cbdee,money:_0x662df6,role:_0x2e915c}=global['db'][_0x5170fb(0x103)]['users'][_0x2ff996[_0x5170fb(0xaf)]],{min:_0x25c733,xp:_0x33e6aa,max:_0x416166}=levelling['xpRange'](_0x1cbdee,global[_0x5170fb(0x14b)]),_0x3dac16='wa.me/'+_0x2ff996[_0x5170fb(0xaf)][_0x5170fb(0xc8)]('@')[0x0];_0x2ff996,{'contextInfo':{'mentionedJid':_0x4698bc[_0x5170fb(0x166)](_0x3dac16)}};let _0x2e43d8=new Date(new Date()+0x36ee80),_0x42db82='id',_0x4df28a=moment['tz'](_0x5170fb(0xb0))['format']('HH:mm:ss'),_0x5dd552=_0x2e43d8[_0x5170fb(0xb8)](_0x42db82,{'weekday':_0x5170fb(0xd0)}),_0x324c94=['Pahing','Pon',_0x5170fb(0x17e),_0x5170fb(0x10f),_0x5170fb(0x10c)][Math['floor'](_0x2e43d8/0x50ae4c0)%0x5],_0x1b4d13=_0x2e43d8[_0x5170fb(0xb8)](_0x42db82,{'day':'numeric','month':_0x5170fb(0xd0),'year':_0x5170fb(0x12a)}),_0x131314=Intl[_0x5170fb(0x122)](_0x42db82+_0x5170fb(0xf8),{'day':'numeric','month':_0x5170fb(0xd0),'year':_0x5170fb(0x12a)})[_0x5170fb(0x133)](_0x2e43d8),_0xbf811a=_0x2e43d8[_0x5170fb(0x10d)](_0x42db82,{'hour':_0x5170fb(0x12a),'minute':_0x5170fb(0x12a),'second':'numeric'}),_0x108503=process[_0x5170fb(0x138)]()*0x3e8,_0xc12eb9;process[_0x5170fb(0x9a)]&&(process[_0x5170fb(0x9a)]('uptime'),_0xc12eb9=await new Promise(_0x3e6b10=>{const _0x58acdf=_0x5170fb;process[_0x58acdf(0x8e)](_0x58acdf(0x11b),_0x3e6b10),setTimeout(_0x3e6b10,0x3e8);})*0x3e8);let _0xc84e5d=clockString(_0xc12eb9),_0x4b4929=clockString(_0x108503),_0x53fd8e=moment['tz'](_0x5170fb(0xb0))[_0x5170fb(0x133)](_0x5170fb(0x106)),_0x499585=Object['values'](global['plugins'])[_0x5170fb(0x164)](_0x1acada=>!_0x1acada[_0x5170fb(0xed)])[_0x5170fb(0x10e)](_0x4cfedb=>{const _0x1a4363=_0x5170fb;return{'help':Array['isArray'](_0x4cfedb[_0x1a4363(0x184)])?_0x4cfedb['help']:[_0x4cfedb[_0x1a4363(0xfd)]],'tags':Array[_0x1a4363(0xac)](_0x4cfedb['tags'])?_0x4cfedb['tags']:[_0x4cfedb[_0x1a4363(0x184)]],'prefix':_0x1a4363(0xb9)in _0x4cfedb,'limit':_0x4cfedb['limit'],'premium':_0x4cfedb['premium'],'enabled':!_0x4cfedb[_0x1a4363(0xed)]};});const _0x2561d1={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':_0x5170fb(0xd8)+_0x2ff996[_0x5170fb(0xaf)][_0x5170fb(0xc8)]('@')[0x0]+':'+_0x2ff996['sender'][_0x5170fb(0xc8)]('@')[0x0]+_0x5170fb(0x14f)}},'participant':'0@s.whatsapp.net'},_0xb4b370={'key':{'remoteJid':_0x5170fb(0xdc),'participant':'0@s.whatsapp.net'},'message':{'orderMessage':{'itemCount':0x7e6,'status':0x1,'surface':0x1,'message':_0x5170fb(0xea)+_0x59abd5+'!','orderTitle':_0x5170fb(0x144),'thumbnail':await(await fetch(fla+_0x5170fb(0x156)))[_0x5170fb(0x150)](),'sellerJid':_0x5170fb(0x12f)}}},_0x5e289e={'key':{'remoteJid':_0x5170fb(0xdc),'participant':_0x5170fb(0x12f)},'message':{'documentMessage':{'title':wm}}};if(_0x1bb5ce==_0x5170fb(0xf4)){let _0x1024a8=_0x5170fb(0x120)+namebot+_0x5170fb(0xae)+_0x59abd5+_0x5170fb(0xbd)+_0x4ec509+'\x0a│✾\x20Level:\x20'+_0x1cbdee+_0x5170fb(0x14c)+_0x1b4d13+_0x5170fb(0x104)+_0x4df28a+_0x5170fb(0xd5)+_0x4b4929+'\x0a\x20';const _0x2ae8eb=generateWAMessageFromContent(_0x2ff996[_0x5170fb(0xa4)][_0x5170fb(0x136)],proto['Message'][_0x5170fb(0x8f)]({'listMessage':{'title':'*'+ucapan()+'\x20'+_0x59abd5+'*','description':_0x1024a8,'buttonText':'KLIK\x20DISINI','listType':0x1,'FooterText':'','mtype':_0x5170fb(0x114),'sections':[{'rows':[{'title':'|💌|⟩»➵͜͡✪\x20ALL\x20MENU','description':_0x5170fb(0x167),'rowId':'.?\x20all'},{'title':_0x5170fb(0xbf),'description':_0x5170fb(0x16f),'rowId':_0x196fa7+'?\x20absen'},{'title':_0x5170fb(0xdd),'description':'Menampilkan\x20Menu\x20Anime','rowId':_0x196fa7+'?\x20anime'},{'title':_0x5170fb(0x139),'description':'Menampilkan\x20Menu\x20Sticker','rowId':_0x196fa7+_0x5170fb(0xb6)},{'title':_0x5170fb(0xe3),'description':_0x5170fb(0x10b),'rowId':_0x196fa7+'?\x20downloader'},{'title':_0x5170fb(0xc7),'description':_0x5170fb(0x93),'rowId':_0x196fa7+_0x5170fb(0xf5)},{'title':_0x5170fb(0x13d),'description':_0x5170fb(0x116),'rowId':_0x196fa7+_0x5170fb(0x15d)},{'title':_0x5170fb(0x117),'description':'Menampilkan\x20Menu\x20Game','rowId':_0x196fa7+'?\x20game'},{'title':_0x5170fb(0xc0),'description':_0x5170fb(0x146),'rowId':_0x196fa7+_0x5170fb(0x178)},{'title':_0x5170fb(0x100),'description':_0x5170fb(0xb3),'rowId':_0x196fa7+'?\x20group'},{'title':_0x5170fb(0x90),'description':_0x5170fb(0x16b),'rowId':_0x196fa7+_0x5170fb(0xfa)},{'title':'|🌐|⟩»➵͜͡✪\x20INTERNET\x20MENU','description':_0x5170fb(0x159),'rowId':_0x196fa7+'?\x20internet'},{'title':'|🕌|⟩»➵͜͡✪\x20ISLAMIC\x20MENU','description':_0x5170fb(0x15b),'rowId':_0x196fa7+_0x5170fb(0xc9)},{'title':_0x5170fb(0xdf),'description':_0x5170fb(0xf1),'rowId':_0x196fa7+_0x5170fb(0xfb)},{'title':_0x5170fb(0x187),'description':_0x5170fb(0x108),'rowId':_0x196fa7+_0x5170fb(0x11c)},{'title':'|🧸|⟩»➵͜͡✪\x20OWNER\x20MENU','description':_0x5170fb(0x124),'rowId':_0x196fa7+_0x5170fb(0xce)},{'title':_0x5170fb(0xb1),'description':_0x5170fb(0x107),'rowId':_0x196fa7+'?\x20suara'},{'title':_0x5170fb(0x134),'description':_0x5170fb(0xa9),'rowId':_0x196fa7+'?\x20premium'},{'title':_0x5170fb(0xa5),'description':_0x5170fb(0x15e),'rowId':_0x196fa7+_0x5170fb(0xcb)},{'title':_0x5170fb(0x157),'description':_0x5170fb(0x155),'rowId':_0x196fa7+_0x5170fb(0x111)},{'title':_0x5170fb(0x9b),'description':'Menampilkan\x20Menu\x20Stalker','rowId':_0x196fa7+_0x5170fb(0x17a)},{'title':'|🖇️|⟩»➵͜͡✪\x20SHORT\x20LINK\x20MENU','description':'Menampilkan\x20Menu\x20Short\x20Link','rowId':_0x196fa7+_0x5170fb(0x153)},{'title':_0x5170fb(0xec),'description':_0x5170fb(0xba),'rowId':_0x196fa7+_0x5170fb(0x16c)},{'title':_0x5170fb(0x8c),'description':_0x5170fb(0xc3),'rowId':_0x196fa7+_0x5170fb(0x169)},{'title':'|📨|⟩»➵͜͡✪\x20HENTAI\x20MENU','description':'Menampilkan\x20Menu\x20Hentai','rowId':_0x196fa7+_0x5170fb(0x17f)},{'title':_0x5170fb(0xbb),'description':'Menampilkan\x20Menu\x20Random/Gabut','rowId':_0x196fa7+'?\x20random'},{'title':_0x5170fb(0x186),'description':_0x5170fb(0xe9),'rowId':_0x196fa7+_0x5170fb(0x8a)},{'title':_0x5170fb(0x170),'description':'Menampilkan\x20Photo\x20Oxy\x20Menu','rowId':_0x196fa7+_0x5170fb(0x8a)}],'title':'LIST\x20MENU'},{'rows':[{'title':'\x20😼⟩»\x20OWNER\x20BOT','description':_0x5170fb(0xd1),'rowId':_0x5170fb(0x110)},{'title':_0x5170fb(0xca),'description':_0x5170fb(0x137),'rowId':_0x5170fb(0x142)},{'title':_0x5170fb(0xd2),'description':'Menampilkan\x20Menu\x20Info','rowId':_0x196fa7+_0x5170fb(0x14d)}],'title':_0x5170fb(0xeb)}],'contextInfo':{'stanzaId':_0x2ff996['key']['id'],'participant':_0x2ff996[_0x5170fb(0xaf)],'quotedMessage':_0x2ff996[_0x5170fb(0x11b)]}}}),{'userJid':_0x2ff996[_0x5170fb(0xd7)]||_0x2ff996[_0x5170fb(0xa4)][_0x5170fb(0x136)],'quoted':_0x2561d1});return await _0x4698bc[_0x5170fb(0xa1)](_0x2ff996[_0x5170fb(0xa4)][_0x5170fb(0x136)],_0x2ae8eb[_0x5170fb(0x11b)],{'messageId':_0x2ae8eb[_0x5170fb(0xa4)]['id']});}let _0x28791c={};for(let _0x266b9d in _0x1d75e6){_0x28791c[_0x266b9d]=[];for(let _0x44522e of _0x499585)if(_0x44522e[_0x5170fb(0x184)]&&_0x44522e[_0x5170fb(0x184)]['includes'](_0x266b9d)){if(_0x44522e[_0x5170fb(0xfd)])_0x28791c[_0x266b9d][_0x5170fb(0xe1)](_0x44522e);}}_0x4698bc[_0x5170fb(0xf7)]=_0x4698bc[_0x5170fb(0xf7)]?_0x4698bc[_0x5170fb(0xf7)]:{};let _0x5a776f=_0x4698bc[_0x5170fb(0xf7)]['before']||defaultMenu[_0x5170fb(0xa0)],_0x3b1414=_0x4698bc[_0x5170fb(0xf7)]['header']||defaultMenu[_0x5170fb(0x16a)],_0x49d6c2=_0x4698bc[_0x5170fb(0xf7)][_0x5170fb(0x14a)]||defaultMenu['body'],_0x33e235=_0x4698bc[_0x5170fb(0xf7)][_0x5170fb(0xc1)]||defaultMenu[_0x5170fb(0xc1)],_0x395c96=_0x4698bc[_0x5170fb(0xf7)][_0x5170fb(0xb4)]||(_0x4698bc[_0x5170fb(0xa6)][_0x5170fb(0x109)]==global[_0x5170fb(0xf3)][_0x5170fb(0xa6)][_0x5170fb(0x109)]?'':'Dipersembahkan\x20oleh\x20https://wa.me/'+global[_0x5170fb(0xf3)][_0x5170fb(0xa6)][_0x5170fb(0x109)][_0x5170fb(0xc8)]`@`[0x0])+defaultMenu[_0x5170fb(0xb4)],_0xfa50e5=[_0x5a776f,...Object['keys'](_0x1d75e6)[_0x5170fb(0x10e)](_0x11821b=>{const _0x39f6bf=_0x5170fb;return _0x3b1414[_0x39f6bf(0xcd)](/%category/g,_0x1d75e6[_0x11821b])+'\x0a'+[..._0x499585[_0x39f6bf(0x164)](_0x1c9522=>_0x1c9522['tags']&&_0x1c9522[_0x39f6bf(0x184)][_0x39f6bf(0x119)](_0x11821b)&&_0x1c9522[_0x39f6bf(0xfd)])[_0x39f6bf(0x10e)](_0x296c66=>{const _0x2543cb=_0x39f6bf;return _0x296c66['help'][_0x2543cb(0x10e)](_0x19ca03=>{const _0xa8f66=_0x2543cb;return _0x49d6c2[_0xa8f66(0xcd)](/%cmd/g,_0x296c66[_0xa8f66(0x141)]?_0x19ca03:'%p'+_0x19ca03)[_0xa8f66(0xcd)](/%islimit/g,_0x296c66[_0xa8f66(0x168)]?_0xa8f66(0xb2):'')[_0xa8f66(0xcd)](/%isPremium/g,_0x296c66['premium']?_0xa8f66(0x97):'')[_0xa8f66(0x175)]();})[_0x2543cb(0xa8)]('\x0a');}),_0x33e235][_0x39f6bf(0xa8)]('\x0a');}),_0x395c96][_0x5170fb(0xa8)]('\x0a');text=typeof _0x4698bc[_0x5170fb(0xf7)]=='string'?_0x4698bc[_0x5170fb(0xf7)]:typeof _0x4698bc[_0x5170fb(0xf7)]==_0x5170fb(0x143)?_0xfa50e5:'';let _0x117841={'%':'%','p':_0x196fa7,'uptime':_0x4b4929,'muptime':_0xc84e5d,'me':_0x4698bc[_0x5170fb(0xa6)][_0x5170fb(0x13b)],'npmname':_0x289cf8[_0x5170fb(0x13b)],'npmdesc':_0x289cf8[_0x5170fb(0x11e)],'version':_0x289cf8[_0x5170fb(0xff)],'exp':_0x4f34dc-_0x25c733,'maxexp':_0x33e6aa,'totalexp':_0x4f34dc,'xp4levelup':_0x416166-_0x4f34dc,'github':_0x289cf8[_0x5170fb(0xe8)]?_0x289cf8[_0x5170fb(0xe8)][_0x5170fb(0x105)]||_0x289cf8[_0x5170fb(0xe8)]:_0x5170fb(0x12c),'name':_0x59abd5,'ucapan':ucapan(),'level':_0x1cbdee,'limit':_0x4ec509,'money':_0x662df6,'name':_0x59abd5,'weton':_0x324c94,'week':_0x5dd552,'date':_0x1b4d13,'dateIslamic':_0x131314,'time':_0xbf811a,'totalreg':_0x21e066,'rtotalreg':_0x418099,'role':_0x2e915c,'readmore':readMore};text=text[_0x5170fb(0xcd)](new RegExp('%('+Object[_0x5170fb(0x140)](_0x117841)['sort']((_0x5c66f3,_0x5b9aed)=>_0x5b9aed[_0x5170fb(0xc5)]-_0x5c66f3['length'])[_0x5170fb(0xa8)]`|`+')','g'),(_0x5827ed,_0x4fcca7)=>''+_0x117841[_0x4fcca7]);let _0x4f4057=await prepareWAMessageMedia({'image':await(await require('node-fetch')(fotonya2))[_0x5170fb(0x150)]()},{'upload':_0x4698bc['waUploadToServer']});const _0x7f3427=generateWAMessageFromContent(_0x2ff996[_0x5170fb(0x9e)],proto[_0x5170fb(0xee)][_0x5170fb(0x8f)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x4f4057['imageMessage'],'hydratedContentText':text,'hydratedFooterText':wm2,'hydratedButtons':[{'urlButton':{'displayText':'🔮ISTAGRAM🔮','url':webm}},{'urlButton':{'displayText':_0x5170fb(0xd4),'url':gc}},{'quickReplyButton':{'displayText':_0x5170fb(0x16e),'id':_0x5170fb(0x110)}},{'quickReplyButton':{'displayText':_0x5170fb(0x99),'id':_0x5170fb(0x142)}},{'quickReplyButton':{'displayText':'\x20💌YANG\x20SUDAH\x20MEMBANTU\x20BOT💌','id':_0x5170fb(0xf0)}}]}}}),{'userJid':_0x2ff996[_0x5170fb(0xaf)],'quoted':_0x2ff996});return await _0x4698bc[_0x5170fb(0xa1)](_0x2ff996[_0x5170fb(0x9e)],_0x7f3427[_0x5170fb(0x11b)],{'messageId':_0x7f3427['key']['id']});}catch(_0x5a63fd){_0x4698bc[_0x5170fb(0xc4)](_0x2ff996[_0x5170fb(0x9e)],_0x5170fb(0x17c),_0x2ff996);throw _0x5a63fd;}};handler[_0x1af342(0xfd)]=['menu'],handler[_0x1af342(0x184)]=[_0x1af342(0x154)],handler['command']=/^(alive|panel|krizyn|zifa|menu|help|\?)$/i,handler[_0x1af342(0x129)]=!![],handler[_0x1af342(0xb7)]=![],handler[_0x1af342(0x15c)]=![],handler[_0x1af342(0x12e)]=![],handler[_0x1af342(0xa7)]=![],handler[_0x1af342(0x92)]=![],handler[_0x1af342(0x129)]=!![],handler[_0x1af342(0x145)]=![],handler[_0x1af342(0x9c)]=![],handler[_0x1af342(0x165)]=null,handler[_0x1af342(0x173)]=0x3,module[_0x1af342(0xe4)]=handler;const more=String[_0x1af342(0x158)](0x200e),readMore=more[_0x1af342(0x13e)](0xfa1);function _0x1855(_0x15847b,_0x5d9a33){const _0x18e049=_0x18e0();return _0x1855=function(_0x185562,_0x2f589a){_0x185562=_0x185562-0x8a;let _0x23d8bb=_0x18e049[_0x185562];return _0x23d8bb;},_0x1855(_0x15847b,_0x5d9a33);}function pickRandom(_0x18986a){const _0xf434e0=_0x1af342;return _0x18986a[Math['floor'](Math['random']()*_0x18986a[_0xf434e0(0xc5)])];}function _0x18e0(){const _0xcbc671=['PHOTO\x20OXY','\x20ꕥ────\x0a│✾\x20Nama:\x20','sender','Asia/Jakarta','|🎙️|⟩»➵͜͡✪\x20CHANGE\x20VOICE\x20MENU','(Ⓛ)','Menampilkan\x20Menu\x20Group','after','STALK','?\x20sticker','owner','toLocaleDateString','customPrefix','Menampilkan\x20Menu\x20Tools','|🔮|⟩»➵͜͡✪\x20RANDOM\x20MENU','EXP\x20&\x20LIMIT','\x0a│✾\x20Limit:\x20','getName','|🗃️|⟩»➵͜͡✪\x20ABSEN\x20MENU','|💬|⟩»➵͜͡✪\x20GITHUB\x20MENU','footer','374404QTHzhP','Menampilkan\x20Maker\x20Text','reply','length','Hallo👋','|📊|⟩»➵͜͡✪\x20EXP\x20&\x20LIMIT\x20MENU','split','?\x20islam','💳⟩»\x20SEWA\x20BOT','?\x20quotes','INTERNET','replace','?\x20owner','perf_hooks','long','Nomor\x20Pemilik\x20Bot!\x20save?\x20Save\x20ae🗿','🌈⟩»\x20INFO\x20BOT','anime','🎮GROUP\x20BOT🎮','\x0a╰❑\x0a╭─❑\x20「\x20INFORMASI\x20」\x20❑──\x0a│\x20Bot\x20ini\x20masih\x20tahap\x20beta\x0a│\x20apabila\x20ada\x20bug/eror\x20harap\x0a│\x20lapor\x20ke\x20owner\x0a╰❑\x0aRuntime\x20','RANDOM','participant','BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid=','FUN','sticker','node-fetch','status@broadcast','|⛩️|⟩»➵͜͡✪\x20ANIME\x20MENU','SHORT\x20LINK','|🐚|⟩»➵͜͡✪\x20KERANG\x20MENU','DOWNLOADER','push','RPG','|📩|⟩»➵͜͡✪\x20DOWNLOAD\x20MENU','exports','toLowerCase','downloader','image','homepage','Menampilkan\x20Text\x20Pro\x20Menu','Hai\x20Kak\x20','INFORMASI\x20BOT','|📍|⟩»➵͜͡✪\x20TOOLS\x20MENU','disabled','Message','MAKER\x20TEXT','.tqto','Menampilkan\x20Menu\x20Kerang','islam','conn','404','?\x20xp','611512Dbdqsu','menu','-TN-u-ca-islamic','INFO','?\x20image','?\x20kerang','\x0a╭──〔\x20\x20THANKS\x20TO\x20\x20〕─⬣\x0a⫹⫺\x20Allah\x20SWT\x0a⫹⫺\x20Orang\x20Tua\x0a⫹⫺\x20Kesabaran\x0a⫹⫺\x20Penyemangat\x0a⫹⫺\x20Nurutomo\x0a⫹⫺\x20Ilmanhdyt\x0a⫹⫺\x20Elyas\x0a⫹⫺\x20Hyzer\x0a⫹⫺\x20KrizynOfc\x0a⫹⫺\x20RielgansOfc\x0a⫹⫺\x20Zifabotz_offc1\x0a╰─────────────⬣\x0a','help','PREMIUM','version','|👥|⟩»➵͜͡✪\x20GROUP\x20MENU','2112786NKFTcf','STICKER\x20&\x20CONVERT','data','\x0a│✾\x20Jam\x20:\x20','url','HH:mm:ss','Menampilkan\x20Menu\x20Voice\x20Changer','Menampilkan\x20Menu\x20Maker','jid','shortlink','Menampilkan\x20Menu\x20Downloader','Legi','toLocaleTimeString','map','Kliwon','.owner','?\x20rpg','values','internet','listMessage','rpg','Menampilkan\x20Menu\x20Fun','|🎮|⟩»➵͜͡✪\x20GAME\x20MENU','users','includes','OWNER','message','?\x20maker','175860kmUZCT','description','@adiwajshing/baileys','╭────ꕥ\x20','memoryUsage','DateTimeFormat','info','Menampilkan\x20Menu\x20Owner','ADVANCED','UTAMA','catch','game','register','numeric','IMAGE','[unknown\x20github\x20url]','floor','premium','0@s.whatsapp.net','ANIME','toFixed','path','format','|👩‍💻|⟩»➵͜͡✪\x20PREMIUM\x20MENU','STICKER\x20&CONVERT','remoteJid','Sewa\x20kak,\x20awokawok','uptime','|🎫|⟩»➵͜͡✪\x20STICKER\x20\x20MENU','GROUP','name','882858DbPadf','|🌬️|⟩»➵͜͡✪\x20FUN\x20MENU','repeat','TEXT\x20PRO','keys','prefix','.sewazifa','object','▮Menu\x20▸','admin','Menampilkan\x20Menu\x20Github','parse','GAME','heapUsed','body','multiplier','\x0a│✾\x20Tanggal\x20:\x20','?\x20info','totalmem','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','buffer','all','ABSEN','?\x20shortlink','main','Menampilkan\x20Menu\x20Rpg','Menu','|🧾|⟩»➵͜͡✪\x20RPG\x20MENU','fromCharCode','Menampilkan\x20Menu\x20Internet','github','Menampilkan\x20Menu\x20Islam','mods','?\x20fun','Menampilkan\x20Menu\x20Quotes','╭─❑\x20〔\x20%category\x20〕\x20❑─\x0a┃','114830FGQpMN','ISLAMI','suara','absen','filter','fail','parseMention','Menampilkan\x20Menu\x20All','limit','?\x20text','header','Menampilkan\x20Menu\x20Image','?\x20tools','asupan','🐤CREATOR\x20BOT🐤','Menampilkan\x20Menu\x20Absen','|📂|⟩»➵͜͡✪\x20PHOTO\x20OXY\x20MENU','textpro','readFile','exp','Owner','trim','TOOLS','random','?\x20github','85GJPPCW','?\x20stalk','PENGUBAH\x20SUARA','Maaf,\x20menu\x20sedang\x20error','GITHUB','Wage','?\x20nsfw','nsfw','144gcAQWZ','KERANG','quotes','tags','VOTING','|📔|⟩»➵͜͡✪\x20TEXT\x20PRO\x20MENU','|📝|⟩»➵͜͡✪\x20MAKER\x20MENU','?\x20textpro','MB*\x0a╰─────────────⬣\x0a%readmore','|📝|⟩»➵͜͡✪\x20TEXT\x20MAKER\x20MENU','../lib/levelling','once','fromObject','|🖼️|⟩»➵͜͡✪\x20IMAGE\x20MENU','maker','private','Menampilkan\x20Menu\x20Exp','2053960PIyawY','fun','NSFW','(Ⓟ)','../package.json','🪀SEWABOT🪀','send','|💾|⟩»➵͜͡✪\x20STALKER\x20MENU','botAdmin','ASUPAN','chat','mentionedJid','before','relayMessage','QUOTES','14SiIvkD','key','|🐻|⟩»➵͜͡✪\x20QUOTES\x20MENU','user','group','join','Menampilkan\x20Menu\x20Premium','photooxy','crypto','isArray'];_0x18e0=function(){return _0xcbc671;};return _0x18e0();}function clockString(_0x28e199){const _0x58073e=_0x1af342;let _0x2bca7a=isNaN(_0x28e199)?'--':Math['floor'](_0x28e199/0x36ee80),_0x8a97c3=isNaN(_0x28e199)?'--':Math[_0x58073e(0x12d)](_0x28e199/0xea60)%0x3c,_0x3a4d40=isNaN(_0x28e199)?'--':Math[_0x58073e(0x12d)](_0x28e199/0x3e8)%0x3c;return[_0x2bca7a,_0x8a97c3,_0x3a4d40][_0x58073e(0x10e)](_0x2de156=>_0x2de156['toString']()['padStart'](0x2,0x0))[_0x58073e(0xa8)](':');}function ucapan(){const _0x10fc33=_0x1af342,_0x46ef15=moment['tz'](_0x10fc33(0xb0))[_0x10fc33(0x133)]('HH');return res='Hallo',_0x46ef15>=0x4&&(res='Hallo User DaniBotz👋'),_0x46ef15>0xa&&(res='Hallo User DaniBotz👋'),_0x46ef15>=0xf&&(res=_0x10fc33(0xc6)),_0x46ef15>=0x12&&(res=_0x10fc33(0xc6)),res;}
