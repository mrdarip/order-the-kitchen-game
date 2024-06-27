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
..........`
]

setMap(levels[level])

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