const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

// const Battle = require('./src/battle.js')
// const Player = require('./src/player.js')
// const battle = new Battle()

const indexRouter = require('./routes/index.js')
const gameRouter = require('./routes/game.js')
const turnRouter = require('./routes/turn.js')

app.use('/', indexRouter)
app.use('/game', gameRouter)
app.use('/turn', turnRouter)

// app.get('/', (req, res) => {
//   res.render('index')
// })

// app.post('/game', (req, res) => {
//   const names = [req.body.player1, req.body.player2]
//   battle.setup(names)

//   res.redirect('/game')
// })

// app.get('/game', (req, res) => {
//   const player = battle.currentPlayer()

//   res.render('game', {
//     name: player.name,
//     health: player.health
//   })
// })

// app.post('/turn', (req, res) => {
//   battle.turn()
//   const currentPlayer = battle.currentPlayer()
//   const otherPlayer = battle.otherPlayer()
//   battle.switch()

//   res.render('turn', {
//     currentPlayer: currentPlayer,
//     otherPlayer: otherPlayer
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
