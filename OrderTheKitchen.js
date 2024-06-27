/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: order the kitchen!
@author: mrdarip
@tags: [casual,infinite]
@addedOn: 2024-00-00
*/

const player = "i"
const empty = "e"

const plate = "p"
const fork = "f"
const spoon = "s"
const knife = "k"

const bg0 = "0"
const bg1 = "1"
const bg2 = "2"
const bg3 = "3"
const bg4 = "4"
const bg5 = "5"
const bg6 = "6"
const bg7 = "7"

let bgIndex = 0
let bg = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7]


setLegend(
  [player, bitmap`
................
.......00.......
.......00.......
......0200......
......0200......
.....020000.....
.....020000.....
....02000000....
....02000000....
...0000000000...
...0000000000...
.......00.......
.......00.......
.......00.......
.......00.......
................`],
  [plate, bitmap`
....22222222....
...2222222222...
..222111111222..
.22112222221122.
2221222222221222
2212222222222122
2212222222222122
2212222222222122
2212222222222122
2212222222222122
2212222222222122
2221222222221222
.22112222221122.
..222111111222..
...2222222222...
....22222222....`],
  [fork, bitmap`
...LL..LL..LL...
...LL..LL..LL...
...LL..LL..LL...
...LL..LL..LL...
...LL..LL..LL...
...LLLLLLLLLL...
...LLLLLLLLLL...
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......`],
  [spoon, bitmap`
.....LLLLLL.....
....LL1111LL....
....L122111L....
....L121111L....
....L111111L....
....L111111L....
....L111111L....
....LL1111LL....
.....LLLLLL.....
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......`],
  [knife, bitmap`
......1.........
......11........
......111.......
......1111......
......1111......
......1111......
......1111......
......1111......
......1111......
......1111......
......1111......
......00........
......00........
......00........
......00........
......00........`],
  [empty, bitmap`
11.111.11.111.11
1..............1
................
1..............1
1..............1
1..............1
................
1..............1
1..............1
................
1..............1
1..............1
1..............1
................
1..............1
11.111.11.111.11`],
  [bg0, bitmap`
2222222277777777
2222222277777777
2222222277777777
2222222277777777
2222222277777777
2222222277777777
2222222277777777
2222222277777777
7777777722222222
7777777722222222
7777777722222222
7777777722222222
7777777722222222
7777777722222222
7777777722222222
7777777722222222`],
  [bg1, bitmap`
2777777772222222
7222222227777777
7222222227777777
7222222227777777
7222222227777777
7222222227777777
7222222227777777
7222222227777777
7222222227777777
2777777772222222
2777777772222222
2777777772222222
2777777772222222
2777777772222222
2777777772222222
2777777772222222`],
  [bg2, bitmap`
2277777777222222
2277777777222222
7722222222777777
7722222222777777
7722222222777777
7722222222777777
7722222222777777
7722222222777777
7722222222777777
7722222222777777
2277777777222222
2277777777222222
2277777777222222
2277777777222222
2277777777222222
2277777777222222`],
  [bg3, bitmap`
2227777777722222
2227777777722222
2227777777722222
7772222222277777
7772222222277777
7772222222277777
7772222222277777
7772222222277777
7772222222277777
7772222222277777
7772222222277777
2227777777722222
2227777777722222
2227777777722222
2227777777722222
2227777777722222`],
  [bg4, bitmap`
2222777777772222
2222777777772222
2222777777772222
2222777777772222
7777222222227777
7777222222227777
7777222222227777
7777222222227777
7777222222227777
7777222222227777
7777222222227777
7777222222227777
2222777777772222
2222777777772222
2222777777772222
2222777777772222`],
  [bg5, bitmap`
2222277777777222
2222277777777222
2222277777777222
2222277777777222
2222277777777222
7777722222222777
7777722222222777
7777722222222777
7777722222222777
7777722222222777
7777722222222777
7777722222222777
7777722222222777
2222277777777222
2222277777777222
2222277777777222`],
  [bg6, bitmap`
2222227777777722
2222227777777722
2222227777777722
2222227777777722
2222227777777722
2222227777777722
7777772222222277
7777772222222277
7777772222222277
7777772222222277
7777772222222277
7777772222222277
7777772222222277
7777772222222277
2222227777777722
2222227777777722`],
  [bg7, bitmap`
2222222777777772
2222222777777772
2222222777777772
2222222777777772
2222222777777772
2222222777777772
2222222777777772
7777777222222227
7777777222222227
7777777222222227
7777777222222227
7777777222222227
7777777222222227
7777777222222227
7777777222222227
2222222777777772`],

)

let level = 0
const levels = [
  map`
..........
pp.ffkk.ss
i.........
..........
..e.....e.
..........
..........
..........`,
  map`
..........
.k.k..k.k.
..........
..........
..........
..........
.f.f..f.f.
..........`
]

setMap(levels[level])

const melody = tune`
500: F4~500 + F5~500,
500: G4~500,
500: F4~500,
500: B4~500 + F5~500,
500: G5~500,
500: F5~500,
500: B5~500 + F4~500,
500: G4~500,
500: F4~500,
500: B4~500 + F5~500,
500: G5~500,
500: F5~500,
500: B5~500 + F4~500,
500: G4~500,
500: F4~500,
500: B4~500 + F5~500,
500: G5~500 + A4~500,
500: F5~500 + G4~500,
500: B5~500 + E4~500,
500: A5~500 + F4~500,
500: G5~500 + E4~500,
500: E5~500 + D4~500,
500: F5~500 + C4~500,
500: E5~500 + E4~500,
500: D5~500 + D4~500,
500: C5~500 + C4~500,
500: E5~500 + D4~500,
500: D5~500 + C4~500,
500: C5~500 + E4~500,
500: D5~500 + F4~500,
500: C5~500,
500: E5~500`
const playback = playTune(melody, Infinity)

let items = [plate, fork, spoon, knife]
let stored = [2, 2, 2, 2]
let itemsOnScreen = stored.reduce((a, b) => a + b, 0)
let addingObjectTurn = false
let puttingItem = items[getRandomInt(items.length)]
let itemToReturn = getItemToGive()

let points = 0
displayPoints()

addText("put", {
  x: 1,
  y: 9,
  color: color`0`
})
addText("give", {
  x: 12,
  y: 9,
  color: color`0`
})

onInput("a", () => {
  getFirst(player).x -= 1
})

onInput("d", () => {
  getFirst(player).x += 1
})


onInput("l", () => {
  playerX = getFirst(player).x
  itemOverPlayer = getTile(playerX, 1)[0]

  if (addingObjectTurn) {
    if (typeof itemOverPlayer == "undefined") {
      passTurn()

      addSprite(playerX, 1, puttingItem)
      storeItem(puttingItem, 1)

      puttingItem = items[getRandomInt(items.length)]

      updateItemToPut(empty)
      itemToReturn = getItemToGive()

      checkScreenIsValid()
    }
  } else {
    if (typeof itemOverPlayer != "undefined" && itemToReturn == itemOverPlayer.type) {
      passTurn()

      storeItem(itemOverPlayer.type, -1)
      itemOverPlayer.remove()

      updateItemToPut(puttingItem)
      updateItemToGive(empty)
    }
  }
})

afterInput(() => {

})

var bgLoop = setInterval(() => {
  bgIndex++
  setBackground(bg[bgIndex % bg.length])
}, 100);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getItemToGive() {
  item = getItemFromScreen()
  updateItemToGive(item)

  return item
}

function getItemFromScreen() {
  randomCount = getRandomInt(itemsOnScreen)
  returnIndex = -1
  sum = 0
  do {
    returnIndex++
    sum += stored[returnIndex]
  } while (sum <= randomCount)

  return items[returnIndex]
}

function storeItem(item, quantity) {
  stored[items.indexOf(item)] += quantity
}

function displayPoints() {
  addText("points: " + points, {
    x: 1,
    y: 13,
    color: color`0`
  })
}

function passTurn() {
  addingObjectTurn = !addingObjectTurn
  points++;
  displayPoints()
}

function updateItemToPut(newItem) {
  updateItemAt(2, 4, newItem)
}

function updateItemToGive(newItem) {
  updateItemAt(8, 4, newItem)
}

function updateItemAt(x, y, newItem) {
  clearTile(x, y)
  addSprite(x, y, newItem)
}

function checkScreenIsValid() {
  let registered = []
  for (let i = 0; i < width(); i++) {
    let item = getTile(i, 1)[0]
    if (typeof item != "undefined") {
      if ((!registered.includes(item.type)) || registered[registered.length - 1] == item.type) {
        registered.push(item.type)
      } else {
        clearText()
        level = 1
        setMap(levels[level])

        addText("game\nover", {
          x: 8,
          y: 7,
          color: color`0`
        })
      }
    }
  }
}