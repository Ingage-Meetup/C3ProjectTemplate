function wordWrap(s, w) {
    if (w >= s.length) {
        return s
    } else {
        return s.substring(0, w) + "\n" + s.substring(w)
    }
}

module.exports = { wordWrap };