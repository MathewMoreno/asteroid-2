function Projectile2 () {
    projectile = sprites.createProjectileFromSide(img`
. . 6 6 6 6 . . . 6 6 . 6 6 . 6 
. 6 6 6 6 6 6 6 6 6 6 6 6 . 6 6 
6 6 6 6 . 6 6 6 6 6 6 6 . 6 6 6 
6 6 6 . . 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 7 6 6 7 c 6 c 7 6 6 c 7 7 7 
. 6 6 7 7 7 7 7 7 7 6 7 7 7 5 5 
. . . 5 7 7 7 c 7 7 7 7 5 5 5 5 
. . . 5 7 7 7 7 7 c a a a a a 5 
. . 5 5 7 7 7 7 7 7 a a b a a 5 
. 5 5 7 c 7 7 7 7 7 7 b b b 5 5 
. 5 7 c 7 7 7 7 c 7 7 b b b 5 . 
. 5 5 7 7 7 7 c 7 7 5 5 b 5 5 . 
. . 5 7 7 c c 7 7 7 5 5 5 5 . . 
. . 5 5 5 5 5 7 5 5 5 . . . . . 
. . . . . . 5 5 5 . . . . . . . 
`, 0, 0)
}
function Score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Overlap()
})
function Hero () {
    Hero2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
9 9 9 . 9 9 9 9 9 9 9 9 . . . . 
9 c 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 c c 9 9 9 7 7 9 9 9 9 c c c 9 
9 9 9 9 9 7 7 7 7 9 9 9 9 c c 9 
. 9 9 9 9 7 7 7 7 9 9 9 9 9 c 9 
. . 9 9 7 7 7 7 7 7 9 9 9 9 9 9 
. . 9 9 7 7 7 7 7 7 9 9 9 9 . . 
. . 9 9 7 7 7 7 7 7 9 9 9 . . . 
`, SpriteKind.Player)
    Hero2.setPosition(80, 100)
    controller.moveSprite(Hero2, 100, 100)
}
info.onCountdownEnd(function () {
    game.over(true, effects.slash)
})
function Overlap () {
    game.over(false)
}
let projectile: Sprite = null
let Hero2: Sprite = null
Hero()
Hero2.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(10)
game.onUpdateInterval(200, function () {
    Projectile2()
    Score()
})
