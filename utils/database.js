const pg = require('pg');
const format = require('pg-promise/lib/formatting');

const sql = new pg.Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "locale"
});
/// Create database table mail and password
sql.connect((err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Database connected!")
});

function escape(value){
    if(value === 'NOW()' || value === 'now()') // NOW() returned as-is, so that working with dates is easier
        return value;
  
    if (value == null) 
        return 'null';
  
    switch (typeof value) {
        case 'string':
            return format.as.text(value, false);
        case 'boolean':
            return format.as.bool(value);
        case 'number':
        case 'bigint':
            return format.as.number(value);
        case 'symbol':
            throw new TypeError(`Type Symbol has no meaning for PostgreSQL: ${value.toString()}`);
        default:
            if (value instanceof Date) {
                return format.as.date(value, false);
            }
            if (value instanceof Array) {
                return format.as.array(value);
            }
            if (value instanceof Buffer) {
                return format.as.buffer(value, false);
            }
            return format.as.json(value, false);
    }
}

async function saveRegister(mail, password) {
    await sql.query(`INSERT INTO users (mail, password) VALUES (${escape(mail)}, ${escape(password)})`);
    return true;
}

async function getRegister(mail) {
    return await (await sql.query(`SELECT * FROM users WHERE mail = ${escape(mail)}`));
}

module.exports = { saveRegister, getRegister, sql };