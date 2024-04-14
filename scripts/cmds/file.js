 const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100084606198768"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝙎𝙊𝙍𝙍𝙔 𝙊𝙉𝙇𝙔 [ 🌹 Ronald 🌹 ]\n_____________________\n can use file {😶}", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝙇𝙀 𝙉𝙊𝙈 𝘿𝙐 𝙁𝙄𝘾𝙃𝙄𝙀𝙍 🌹.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`🌹|𝙁𝙄𝘾𝙃𝙄𝙀𝙍 𝙄𝙉𝙏𝙍𝙊𝙐𝙑𝘼𝘽𝙇𝙀 𝘽𝙊𝙎𝙎 😿: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
