import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export const lambda = new aws.lambda.CallbackFunction(
    "my-lambda",
    {
        description: "Just another lambda",
        callback: async () => {
            console.log("I'm a lambda.")
        }
    }
)
