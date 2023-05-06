const mongoose = require("mongoose");
const afkSchema = mongoose.Schema({
    guildID: { type: String, default: "1096502014839623680" },
    crewHouse: {type: Array, default: ""},
    tarih: { type: String, default: "6.05.2023" }

});
module.exports = mongoose.model("ekip", afkSchema);