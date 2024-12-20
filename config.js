const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_30_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVUxzTnAyakUza0RUQWw1ZXoyRElxYm1kSnE4a0ZUR2h4bEFnWUxWRStrND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwianNHaU9Ta1RScS1xNDVSQzVMMDB0d1wiLFxuICBcInBob25lSWRcIjogXCIzMDI1NTJlMy1mZGNiLTQ3MDMtOTg1Ni05NTRkYTI5NWY4MWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMjE2LFxuICAgICAgMTkwLFxuICAgICAgMjAzLFxuICAgICAgMTc5LFxuICAgICAgNDgsXG4gICAgICAyMTAsXG4gICAgICAxODYsXG4gICAgICA3MixcbiAgICAgIDEwLFxuICAgICAgODMsXG4gICAgICAxMTcsXG4gICAgICAxNjMsXG4gICAgICAzNSxcbiAgICAgIDE2NyxcbiAgICAgIDAsXG4gICAgICAzOCxcbiAgICAgIDIyNSxcbiAgICAgIDE3LFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDEzMSxcbiAgICAgIDQxLFxuICAgICAgMTQ4LFxuICAgICAgMTI5LFxuICAgICAgMTM0LFxuICAgICAgMTc0LFxuICAgICAgMjU1LFxuICAgICAgODYsXG4gICAgICAxOSxcbiAgICAgIDgzLFxuICAgICAgMTQ3LFxuICAgICAgMTUxLFxuICAgICAgMTcwLFxuICAgICAgMTEzLFxuICAgICAgMjcsXG4gICAgICAyNDksXG4gICAgICA0LFxuICAgICAgMjM4LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFWUDRMOUhHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzOTQ5NjMzNDo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzc1MDMxMzc4NjE2MzI6NTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXVZd3E0QkVNMnFsYnNHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhbjFZSDBMNE9iS1hNWkszdmtTdHVISnViOUo1TFJEc0dBaHh2SzlaV1VnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImU5aFZ2dUoyYjQ5ekdwSWw2c0pROWw1NnRlOEltejR0V0RaZUpOQmtQMndzT2MrT3ViendNSkpBK3RpbE5lN0ExdWFBT2ZFRTRnY3FRSjJlTWdubERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhYZGZwQndMaVNTVExFNzl4OXhkSEVPZnV4Nm1jT2RoN2phYVUyVnFZYVJIMGM2YWxqWTVWWmdWRUliQ2Q0UVhtUjc4dzVhVFpXdDlyUXEwZGZoRkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM5NDk2MzM0OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY5NDIyNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
