const Player = require('../src/player.js')
let player

describe("Player", function() {
  beforeEach(function() {
    player = new Player("Ed")
  })

  it('sets starting health at 100', function() {
    expect(player.health).toEqual(100)
  })

  it('sets name', function() {
    expect(player.name).toEqual('Ed')
  })

  it('reduces health by an amount', function() {
    player.takeDamage(4)
    expect(player.health).toEqual(96)
  })

  it('reduces health by an amount multiple times', function() {
    player.takeDamage(4)
    player.takeDamage(3)
    expect(player.health).toEqual(93)
  })
})
