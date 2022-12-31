import { saveRegister, getRegister } from "~~/utils/database.js";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const header = getHeader(event, "Auth");
    const reg = await (await getRegister(query.mail)).rows;
    if(header != "witcherapikey") return "Invalid API Key";
    if(query.mail && query.pass && query.mail.includes("@") && query.mail.includes(".") && reg[0].password === query.pass && reg.length > 0) {
        return true;
    } else {
        return false;
    }
});