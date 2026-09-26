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

- ``||supermarket.スーパー作成||``から``||supermarket.～を～個 自分に渡す||``をとりだす
- ``||loops.最初だけ||``にはめ込む
- 必要なブロックの種類、数にする

```blocks
supermarket.giveSupermarketBlock(SupermarketBlock.WalkInCooler, 1)
```

## 必要なブロックをとりだそう②
その他のブロックもとりだして使うことができます。

- ``||mobs.モブ||``から``||mobs.ブロックを与える||``をとりだす
- ``||loops.最初だけ||``にはめ込む
- 必要なブロックの種類、数にする

```blocks
mobs.give(
mobs.target(NEAREST_PLAYER),
GRASS,
1
)
```

## 特別なブロックの使い方
このワールドには、いくつか**特別な使い方をするブロックやアイテム**があります。
次からのページで使い方を確認しましょう！

## 買い物かご
**買い物かご**というアイテムを手に持って、**置きたい場所を右クリック**すると、買い物かごを重ねておくことができます。
![shopping_basket](https://raw.githubusercontent.com/V-code-japan/supermarket_manager/master/docs/static/set_shopping_basket.gif)

## カート
**カート**というブロックは**右クリック**すると、押すことができます。
もう一度設置したいときは、**設置したい場所を右クリック**しましょう！
![cart](https://raw.githubusercontent.com/V-code-japan/supermarket_manager/master/docs/static/set_shopping_cart.gif)

## おまけ セール案内
**セールの札**というブロックを置けば、セール品のように見せることができます。
「ここにはセール品を並べたい！」というときに使いましょう！
![sale](https://raw.githubusercontent.com/V-code-japan/supermarket_manager/master/docs/static/supermarket_sale.png)