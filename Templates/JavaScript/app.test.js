const { assert } = require("chai")
const { wordWrap  } = require("./app")


describe("Wordwrap test", function() {
    it("empty string with width of 1 returns empty string", function() {
        assert.equal("", wordWrap("", 1))
    })
})
        