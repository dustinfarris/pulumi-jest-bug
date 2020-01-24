const config = {
    "aws:region": "us-east-1",
};
process.env.PULUMI_NODEJS_PROJECT = "pulumi-jest-bug-test";
process.env.PULUMI_NODEJS_STACK = "test";
process.env.PULUMI_CONFIG = JSON.stringify(config);
process.env.PULUMI_TEST_MODE = true;
