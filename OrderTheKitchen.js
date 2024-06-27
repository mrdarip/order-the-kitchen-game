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

let addingObjectTurn = false

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
..........
..........
..........
..........`
]

setMap(levels[level])

onInput("a", () => {
  getFirst(player).x -= 1
})

onInput("d", () => {
  getFirst(player).x += 1
})


onInput("l", () => {
  playerX = getFirst(player).x
  tiles = getTile(playerX, 1)

  if (addingObjectTurn) {
    if (tiles.length == 0) {
      addSprite(playerX, 1, fork)
      addingObjectTurn = !addingObjectTurn
    } else {
      console.log('nothing')
    }
  } else {
    if (tiles.length > 0) {
      clearTile(playerX, 1)
      addingObjectTurn = !addingObjectTurn
    } else {
      console.log('nothing')
    }
  }
})

afterInput(() => {

})