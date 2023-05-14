import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import type { RequestHandler } from "express";
import { Schema, validate } from "@plutomi/validation";
import { env } from "../../utils";

export const post: RequestHandler = async (req, res) => {
  const { data, errorHandled } = validate({
    req,
    res,
    schema: Schema.subscribe.APISchema
  });

  if (errorHandled) {
    return;
  }

  const { email } = data;

  const client = new DynamoDBClient({ region: "us-east-1" });
  const command = new PutItemCommand({
    TableName: `${env.DEPLOYMENT_ENVIRONMENT}-plutomi-wait-list`,
    Item: {
      PK: { S: email },
      SK: { S: email },
      email: { S: email },
      createdAt: { S: new Date().toISOString() }
    }
  });

  try {
    await client.send(command);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong signing you up" });
    return;
  }

  res.status(201).json({
    message:
      "Thanks for your interest! Make sure to check out Plutomi on GitHub!"
  });
};
