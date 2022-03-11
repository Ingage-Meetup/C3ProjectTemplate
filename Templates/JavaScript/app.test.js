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
    it("three characters with width of 3 returns the characters", function() {
        assert.equal(wordWrap("xxx", 2), "xx\nx")
    })
    it("two characters separated by a space with width of 1 returns the characters separated by a newline", function() {
        assert.equal(wordWrap("x x", 1), "x\nx")
    })
    it("two characters separated by a space with width of 2 returns the characters separated by a newline", function() {
        assert.equal(wordWrap("x x", 2), "x\nx")
    })
    it("two characters separated by a space with width of 3 returns the characters separated by a space", function() {
        assert.equal(wordWrap("x x", 3), "x x")
    })
    it("a variety of passing tests", function() {
        assert.equal(wordWrap("x x x", 1), "x\nx\nx")
        assert.equal(wordWrap("x x x", 2), "x\nx\nx")
        assert.equal(wordWrap("x x x", 3), "x x\nx")
        assert.equal(wordWrap("x x x", 4), "x x\nx")
        assert.equal(wordWrap("x x x", 5), "x x x")
        assert.equal(wordWrap("xx xx", 1), "x\nx\nx\nx")
        assert.equal(wordWrap("xx xx", 2), "xx\nxx")
        assert.equal(wordWrap("xx xx", 3), "xx\nxx") 
    })
    it("two pairs of characters separated by a space with width of 4 returns the pairs separated by a space", function() {
        assert.equal(wordWrap("xx xx", 4), "xx\nxx")
    })
    it("more bunches of passing tests", function() {
        assert.equal(wordWrap("xx xx", 5), "xx xx")
        assert.equal(wordWrap("xx xx xx", 1), "x\nx\nx\nx\nx\nx")
        assert.equal(wordWrap("xx xx xx", 2), "xx\nxx\nxx")
        assert.equal(wordWrap("xx xx xx", 3), "xx\nxx\nxx")
        assert.equal(wordWrap("xx xx xx", 4), "xx\nxx\nxx")
        assert.equal(wordWrap("xx xx xx", 5), "xx xx\nxx")
        assert.equal(wordWrap("xx xx xx", 6), "xx xx\nxx")
        assert.equal(wordWrap("xx xx xx", 7), "xx xx\nxx")
        assert.equal(wordWrap("xx xx xx", 8), "xx xx xx")
    })


})
        