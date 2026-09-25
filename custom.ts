
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

//% weight=100 color=#0fbc11 icon=""
//% block=スーパー作成
namespace supermarket {

    /**
     * スーパーマーケットで使用するブロック・アイテム
     */
    export enum SupermarketBlock {
        //% block="ウォークイン"
        WalkInCooler,

        //% block="アイスクリームケース（角）"
        IcecreamCaseCorner,

        //% block="アイスクリームケース（角・逆側）"
        IcecreamCaseCornerReverse,

        //% block="アイスクリームケース（真ん中）"
        IcecreamCaseMiddle,

        //% block="時計"
        AnalogClock,

        //% block="ホットスナック"
        HotSnack,

        //% block="POS"
        Pos,

        //% block="ロゴ"
        Logo,

        //% block="冷蔵ケース"
        ChilledShowcase,

        //% block="電子レンジ"
        Microwave,

        //% block="店員"
        Clerk,

        //% block="魚介類のディスプレイ"
        FishDisplay,

        //% block="肉類のディスプレイ"
        MeatDisplay,

        //% block="パンの棚"
        BreadShelf,

        //% block="お菓子の棚"
        SnackShelf,

        //% block="お惣菜のディスプレイ"
        DelicaDisplay,

        //% block="牛乳と卵のディスプレイ"
        MilkDisplay,

        //% block="日用品の棚"
        GoodsShelf,

        //% block="買い物かご"
        ShoppingBasket,

        //% block="カート"
        ShoppingCart,

        //% block="セルフレジ"
        SelfRegister,

        //% block="セールの札"
        Sale,

        //% block="野菜のカゴ"
        Basket
    }

    //% block=ブロック $block を $amount 個 自分に渡す
    function giveSupermarketBlock(block: SupermarketBlock, amount: number): void {
        const id = getId(block);
        player.execute(`give @s ${id} ${amount}`);
    }

    /**
     * スーパーマーケットのブロック・アイテムに対応するMinecraft IDを取得する
     */
    function getId(block: SupermarketBlock): string {
        switch (block) {
            case SupermarketBlock.WalkInCooler:
                return "edu:walk_in_cooler";

            case SupermarketBlock.IcecreamCaseCorner:
                return "edu:icecream_case_corner";

            case SupermarketBlock.IcecreamCaseCornerReverse:
                return "edu:icecream_case_corner_reverse";

            case SupermarketBlock.IcecreamCaseMiddle:
                return "edu:icecream_case_middle";

            case SupermarketBlock.AnalogClock:
                return "edu:analog_clock";

            case SupermarketBlock.HotSnack:
                return "edu:hot_snack";

            case SupermarketBlock.Pos:
                return "edu:pos";

            case SupermarketBlock.Logo:
                return "edu:logo";

            case SupermarketBlock.ChilledShowcase:
                return "edu:chilled_showcase";

            case SupermarketBlock.Microwave:
                return "edu:microwave";

            case SupermarketBlock.Clerk:
                return "edu:clerk";

            case SupermarketBlock.FishDisplay:
                return "edu:fish_display";

            case SupermarketBlock.MeatDisplay:
                return "edu:meat_display";

            case SupermarketBlock.BreadShelf:
                return "edu:bread_shelf";

            case SupermarketBlock.SnackShelf:
                return "edu:snack_shelf";

            case SupermarketBlock.DelicaDisplay:
                return "edu:delica_display";

            case SupermarketBlock.MilkDisplay:
                return "edu:milk_display";

            case SupermarketBlock.GoodsShelf:
                return "edu:goods_shelf";

            case SupermarketBlock.ShoppingBasket:
                return "edu:shopping_basket";

            case SupermarketBlock.ShoppingCart:
                return "edu:shopping_cart";

            case SupermarketBlock.SelfRegister:
                return "edu:self_register";

            case SupermarketBlock.Sale:
                return "edu:sale";

            case SupermarketBlock.Basket:
                return "edu:basket";

            default:
                return "";
        }
    }
}
