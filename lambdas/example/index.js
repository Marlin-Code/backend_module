'use strict'
const { Client } = require("pg");

// Hello World Lambda
exports.handler = async function(event, context, callback) {
  const credentials = {
    user: "marlin",
    host: "marlindatabase.c20scbyj2pes.us-east-1.rds.amazonaws.com",
    database: "postgres",
    password: "Marlincode22",
    port: 5432,
  };
    
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();
  
  console.log(now)
  console.log('Event:', JSON.stringify(event));

  const response = {
    now: `${now}`
  };  

  callback(null, response);
}

