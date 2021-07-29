const Battle = require('../src/battle.js')
let battle

class MockPlayer {
  takeDamage() {}
}

describe("Battle", function() {
  beforeEach(function() {
    battle = new Battle()
    battle.setup(['Alice', 'Bob'], MockPlayer)
  })

  it('sets property players', function() {
    expect(battle.players[0] instanceof MockPlayer).toBe(true)
    expect(battle.players[1] instanceof MockPlayer).toBe(true)
  })

  it('returns current player', function() {
    expect(battle.currentPlayer()).toEqual(battle.players[0])
  })

  it('returns other player', function() {
    expect(battle.otherPlayer()).toEqual(battle.players[1])
  })

  it('switches order of players', function() {
    const original = battle.currentPlayer()
    battle.switch()

    expect(original).toEqual(battle.otherPlayer())
  })

  it('invokes player method takeDamage', function() {
    spyOn(battle.otherPlayer(), 'takeDamage')
    battle.turn()

    expect(battle.otherPlayer().takeDamage).toHaveBeenCalledWith(10)
  })
})
