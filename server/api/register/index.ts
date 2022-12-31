import { saveRegister, getRegister } from "~~/utils/database.js";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const header = getHeader(event, "Auth");
    const mail = (await getRegister(query.mail)).rows;
    if(header != "witcherapikey") return "Invalid API Key";
    if(query.mail && query.pass && query.passagain && query.pass === query.passagain && query.mail.includes("@") && query.mail.includes(".") && mail.length < 1) {
        await saveRegister(query.mail, query.pass);
        return true;
    } else {
        return false;
    }
});
