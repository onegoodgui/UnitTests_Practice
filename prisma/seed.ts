import { client } from "../src/database.js";

async function main(){

}

main().catch(e => console.log(e)).finally(async() => {await client.$disconnect()})