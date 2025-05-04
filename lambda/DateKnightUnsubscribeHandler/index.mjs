import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const ddb = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event) => {
  const email = event.queryStringParameters?.email;

  if (!email) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "text/plain" },
      body: "Missing email parameter",
    };
  }

  try {
    await ddb.send(new DeleteItemCommand({
      TableName: "DateKnightWaitlist",
      Key: { email: { S: email } },
    }));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
      },
      body: `<h1 style="text-align:center;">You’ve been unsubscribed from Date Knight 💔</h1>`
    };
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return {
      statusCode: 500,
      body: "Error unsubscribing user",
    };
  }
};
