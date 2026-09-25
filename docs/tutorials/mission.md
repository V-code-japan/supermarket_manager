# スーパーマーケットを作成しよう！

```blocks
supermarket.giveSupermarketBlock(SupermarketBlock.WalkInCooler, 1)
mobs.give(
mobs.target(NEAREST_PLAYER),
GRASS,
1
)

```

## プログラミングで必要なブロックをとりだして、スーパーマーケットを作ろう！
プログラミングでスーパーマーケットの材料を取り出して、スーパーマーケットのレイアウトを作ろう
![supermarket_inside](https://raw.githubusercontent.com/V-code-japan/supermarket_manager/master/docs/static/supermarket_inside.png)

## 必要なブロックをとりだそう①
スーパーマーケットの内装を作るのに必要なブロックは、**プログラミング**でとりだしましょう。

- ``||supermarket.スーパー作成||``から``||supermarket.～を1個 自分に渡す||``をとりだす
- ``||loops.最初だけ||``にはめ込む
- 必要なブロックの種類、数にする

## 必要なブロックをとりだそう②
その他の、通常のMinecraftのブロックもとりだして使うことができます。

- ``||mobs.モブ||``から``||mobs.ブロックを与える||``をとりだす
- ``||loops.最初だけ||``にはめ込む
- 必要なブロックの種類、数にする