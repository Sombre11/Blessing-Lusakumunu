 const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "go",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('𝐉𝐞 𝐧𝐞 𝐦𝐞́𝐫𝐢𝐭𝐞 𝐩𝐚𝐬 𝐝'𝐞̂𝐭𝐫𝐞 𝐝𝐚𝐧𝐬 𝐮𝐧 𝐠𝐫𝐨𝐮𝐩𝐞 𝐚𝐮𝐬𝐬𝐢 𝐬𝐭𝐮𝐩𝐢𝐝𝐞 𝐪𝐮𝐞 𝐜̧𝐚\n \n𝐀𝐥𝐨𝐫𝐝 𝐣𝐞 𝐦'𝐞𝐧 𝐯𝐚𝐢𝐬 🖕🏽 Fuck you 🖕🏽, id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
