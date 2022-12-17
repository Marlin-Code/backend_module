// Create clients and set shared const values outside of the handler.
import pg from 'pg'
const { Client } = pg
/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
export const databaseConnectionTestHandler = async (event) => {
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
        statusCode: 200,
        body: JSON.stringify({'now': JSON.stringify(now)})
    };

    return response;
}
