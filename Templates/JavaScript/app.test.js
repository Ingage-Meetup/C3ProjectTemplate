const { assert } = require("chai")
const { wordWrap  } = require("./app")


describe("Wordwrap test", function() {
    it("empty string with width of 1 returns empty string", function() {
        assert.equal(wordWrap("", 1),"" )
    })
    it("single character with width of 1 returns single character", function() {
        assert.equal(wordWrap("x", 1), "x")
    })
    it("two characters with width of 1 returns characters separated by newline", function() {
        assert.equal(wordWrap("xx", 1), "x\nx")
    })
})
        