function wordWrap(s, w) {
    if (w >= s.length) {
        return s
    } else {
        let br = s.lastIndexOf(" ", w)
        if (br === -1) {
            br = w
        }
        return s.substring(0, br).trim() + "\n" + wordWrap(s.substring(br).trim(), w)
    }
}

module.exports = { wordWrap };