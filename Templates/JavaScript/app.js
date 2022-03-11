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

let text = "The quick brown fox jumps over the lazy dog"

let wrappedText = wordWrap(text, 5)

console.log(wrappedText)

wrappedText = wordWrap(text, 10)

console.log(wrappedText)

let manInTheArena = "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat."
wrappedText = wordWrap(manInTheArena, 80)
console.log(wrappedText)


wrappedText = wordWrap(manInTheArena, 40)

console.log(wrappedText)
module.exports = { wordWrap };