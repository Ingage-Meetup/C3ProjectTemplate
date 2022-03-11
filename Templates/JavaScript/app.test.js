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
    it("two characters with width of 2 returns  the characters", function() {
        assert.equal(wordWrap("xx", 2), "xx")
    })
    it("three characters with width of 1 returns characters separated by newline", function() {
        assert.equal(wordWrap("xxx", 1), "x\nx\nx")
    })
    it("three characters with width of 2 returns 2 characters, newline, then 3rd character", function() {
        assert.equal(wordWrap("xxx", 2), "xx\nx")
    })
})
        