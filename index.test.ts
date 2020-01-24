import * as assert from "assert";
import * as index from "./index";

describe("lambda", () => {
    it("is well described", (done) => {
        index.lambda.description.apply(description => {
            try {
                assert.equal(description, "Just another lambda");
                done();
            } catch (e) {
                done(e);
            }
        });
    });
});
