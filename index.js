// add solution here
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
var emptyArray = []

function theBeatlesPlay(musicians, instruments) {
    for (let i=0; i < musicians.length; i++) {
        emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return emptyArray
}

const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ]

function johnLennonFacts(facts) {
    let i =0
    while (i < facts.length) {
        facts[i] = `${facts[i]}!!!`
        i++
    }
    return facts
}

function iLoveTheBeatles(num) {
    var array = []
    let i = 0
    do {
        array[i] = "I love the Beatles!"
        i++
        num++
    } while (num < 15)

    return array
}