import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { DynamoDBClient, GetItemCommand, PutItemCommand} from "@aws-sdk/client-dynamodb";

const ses = new SESClient({ region: "us-east-1" });
const ddb = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event) => {
  const { email } = JSON.parse(event.body || "{}");

  // 1. .edu email validation
  if (!/^[\w.%+-]+@[\w.-]+\.edu$/i.test(email)) {
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: "Must use a .edu address"
    };
  }
    // Check for duplicates
    const existing = await ddb.send(new GetItemCommand({
      TableName: "DateKnightWaitlist",
      Key: { email: { S: email } }
    }));
  
    if (existing.Item) {
      return {
        statusCode: 409,
        headers: corsHeaders(),
        body: "Email already subscribed"
      };
    }
    
  // 2. Save email to DynamoDB
  await ddb.send(new PutItemCommand({
    TableName: "DateKnightWaitlist",
    Item: {
      email: { S: email },
      joinedAt: { S: new Date().toISOString() }
    }
  }));
  //3.Send confirmation email
  await ses.send(new SendEmailCommand({
    Source: "hello@kinsubii.com",
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Subject: {
        Data: "You're on the Date Knight early-access list!",
        Charset: "UTF-8"
      },
      Body: {
        Html: {
          Data: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #f9a8d4; text-align: center;">🛡️❤️Welcome to Date Knight❤️🛡️</h2>
          <p style="font-size: 16px; color: #333;">Hey there,</p>
          <p style="font-size: 16px; color: #333;">Thanks for signing up for early access to <strong>Date Knight</strong> — the college-only dating app made for finding real connections on campus.</p>
          <p style="font-size: 16px; color: #333;">You’re on our exclusive waitlist, and we’re excited to have you. We’ll be sending you <strong>short updates</strong> on our progress, sneak peeks, and launch details.</p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://kinsubii.com" style="background: linear-gradient(to right, #f9a8d4, #60A5FA); color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Explore our site</a>
          </div>
          <p style="font-size: 14px; color: #777;">If you didn’t request this, you can safely ignore this email.</p>
          <p style="font-size: 12px; color: #777;">
          <a href="https://kzuc6r3vv2.execute-api.us-east-1.amazonaws.com/prod/unsubscribe?email=${email}">Unsubscribe</a>
          </p>
        </div>`,
      Charset: "UTF-8"
    },
    Text: {
      Data: "Thanks for signing up to Date Knight. You're on the early-access list!",
      Charset: "UTF-8"
        }
      }
    }
  }));

  return {
    statusCode: 200,
    headers: corsHeaders(),
    body: "ok"
  };
};

// Reusable CORS headers
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*"
  };
}