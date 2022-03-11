function wordWrap(s, w) {
    if (w >= s.length) {
        return s
    } else {
        return s.substring(0, w).trim() + "\n" + wordWrap(s.substring(w).trim(), w)
    }
}

module.exports = { wordWrap };