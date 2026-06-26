/* Modal 產品資訊 */
const products = {

    /* 本月精選 */
    "layer-cake-strawberry": {
        title: "草莓千層蛋糕",
        subtitle: "法式千層酥皮 / 新鮮草莓夾層",

        size: "尺寸: 6吋 (約15cm)",

        price: 680,

        image: "images/Strawberry-Crepe-Cake-Slices.png",
        imageAlt: "草莓千層蛋糕",

        description:
            "使用當季新鮮草莓，搭配20層法式薄餅皮，每層均勻塗抹北海道鮮奶油，口感層次豐富。適合2-4人享用，建議冷藏保存並於3日內食用完畢。",

        ingredients: [
            "新鮮草莓",
            "北海道鮮奶油",
            "法式薄餅皮",
            "細砂糖",
            "雞蛋"
        ]
    },

    "croissant-strawberry": {
        title: "草莓可頌",
        subtitle: "奶油香氣 / 草莓果醬內餡",

        size: "1個",

        price: 120,

        image: "images/Strawberry-Croissant.jpg",
        imageAlt: "草莓可頌",

        description:
            "外層酥脆金黃，內層柔軟綿密，夾入自製草莓果醬與鮮奶油。每日現烤現做，建議當日食用以確保最佳口感。 ",

        ingredients: [
            "高筋麵粉",
            "無鹽奶油",
            "自製草莓果醬",
            "細砂糖",
            "鮮奶油"
        ]
    },

    "tower-seasonal-fruit": {
        title: "季節水果塔",
        subtitle: "酥脆塔皮 / 卡士達醬 / 新鮮水果",

        size: "尺寸: 6吋 (約15cm)",

        price: 450,

        image: "images/Seasonal-fruit-tower.jpg",
        imageAlt: "季節水果塔",

        description:
            "使用法式酥皮塔底，填入香濃卡士達醬，鋪滿當季新鮮水果。色彩繽紛，口感豐富，適合派對與下午茶。 ",

        ingredients: [
            "法式酥皮",
            "卡士達醬",
            "新鮮草莓",
            "奇異果",
            "藍莓",
            "覆盆子"
        ]
    },

    /* 6吋蛋糕 */
    "cake-strawberry-6inches": {
        title: "經典草莓蛋糕",
        subtitle: "新鮮草莓搭配輕盈鮮奶油",

        size: "尺寸: 6吋 (約15cm)",

        price: 580,

        image: "images/cake/cake-strawberry-6inches.jpg",
        imageAlt: "經典草莓蛋糕",

        description:
            "使用當季新鮮草莓，搭配法式海綿蛋糕體，夾層使用北海道鮮奶油，口感輕盈不膩，適合2-4人享用，建議冷藏保存並於3日內食用完畢。 ",

        ingredients: [
            "新鮮草莓",
            "北海道鮮奶油",
            "法式海綿蛋糕體",
            "細砂糖",
            "雞蛋",
        ]
    },

    "cake-chocolate-mousse-6inches": {
        title: "巧克力慕斯蛋糕",
        subtitle: "濃郁比利時巧克力慕斯",

        size: "尺寸: 6吋 (約15cm)",

        price: 620,

        image: "images/cake/cake-chocolate-mousse-6inches.jpg",
        imageAlt: "巧克力慕斯蛋糕",

        description:
            "採用比利時70%黑巧克力製作，慕斯口感綿密滑順，底層搭配巧克力蛋糕體，巧克力愛好者必選！！ ",

        ingredients: [
            "比利時黑巧克力",
            "法國鮮奶油",
            "巧克力蛋糕體",
            "可可粉",
            "吉利丁",
        ]
    },

    "cake-matcha-red-bean-6inches": {
        title: "抹茶紅豆蛋糕",
        subtitle: "京都宇治抹茶與蜜紅豆",

        size: "尺寸: 6吋 (約15cm)",

        price: 600,

        image: "images/cake/cake-matcha-red-bean-6inches.jpg",
        imageAlt: "抹茶紅豆蛋糕",

        description:
            "選用京都宇治抹茶粉，搭配自製蜜紅豆，抹茶香氣濃郁，甜度適中，呈現日式風味。 ",

        ingredients: [
            "宇治抹茶粉",
            "蜜紅豆",
            "鮮奶油",
            "海綿蛋糕",
            "白巧克力",
        ]
    },

    "layer-cake-mango-6inches": {
        title: "芒果千層蛋糕",
        subtitle: "愛文芒果與法式千層",

        size: "尺寸: 6吋 (約15cm)",

        price: 650,

        image: "images/cake/layer-cake-mango-6inches.jpg",
        imageAlt: "芒果千層蛋糕",

        description:
            "使用台灣愛文芒果，搭配20層法式薄餅皮，每層均勻塗抹鮮奶油，口感層次豐富。 ",

        ingredients: [
            "愛文芒果",
            "法式薄餅皮",
            "鮮奶油",
            "牛奶",
            "雞蛋",
        ]
    },

    "cake-tiramisu-6inches": {
        title: "提拉米蘇蛋糕",
        subtitle: "義式經典咖啡風味",

        size: "尺寸: 6吋 (約15cm)",

        price: 590,

        image: "images/cake/cake-tiramisu-6inches.jpg",
        imageAlt: "提拉米蘇蛋糕",

        description:
            "使用義大利馬斯卡彭起司，搭配濃縮咖啡浸泡的手指餅乾，撒上可可粉，呈現經典義式風味。 ",

        ingredients: [
            "馬斯卡彭起司",
            "手指餅乾",
            "濃縮咖啡",
            "可可粉",
            "蘭姆酒",
        ]
    },

    "cake-lemon-cheese-6inches": {
        title: "檸檬乳酪蛋糕",
        subtitle: "清爽檸檬與濃郁乳酪",

        size: "尺寸: 6吋 (約15cm)",

        price: 610,

        image: "images/cake/cake-lemon-cheese-6inches.jpg",
        imageAlt: "檸檬乳酪蛋糕",

        description:
            "採用澳洲奶油乳酪，加入新鮮檸檬汁與檸檬皮，口感綿密細緻，酸甜平衡。 ",

        ingredients: [
            "奶油乳酪",
            "新鮮檸檬",
            "消化餅乾",
            "無鹽奶油",
            "細砂糖",
        ]
    },

    /* 8吋蛋糕 */
    "cake-strawberry-8inches": {
        title: "經典草莓蛋糕",
        subtitle: "新鮮草莓搭配輕盈鮮奶油",

        size: "尺寸: 8吋 (約20cm)",

        price: 880,

        image: "images/cake/cake-strawberry-8inches.jpg",
        imageAlt: "經典草莓蛋糕",

        description:
            "使用當季新鮮草莓，搭配法式海綿蛋糕體，夾層使用北海道鮮奶油，口感輕盈不膩，適合4-6人享用，建議冷藏保存並於3日內食用完畢。 ",

        ingredients: [
            "新鮮草莓",
            "北海道鮮奶油",
            "法式海綿蛋糕體",
            "細砂糖",
            "雞蛋",
        ]
    },

    "cake-black-forest-8inches": {
        title: "黑森林蛋糕",
        subtitle: "德國經典巧克力櫻桃蛋糕",

        size: "尺寸: 8吋 (約20cm)",

        price: 920,

        image: "images/cake/cake-black-forest-8inches.jpg",
        imageAlt: "黑森林蛋糕",

        description:
            "德國傳統配方，使用黑櫻桃、巧克力蛋糕體與鮮奶油，撒上巧克力碎片，風味濃郁。 ",

        ingredients: [
            "黑櫻桃",
            "巧克力蛋糕體",
            "鮮奶油",
            "櫻桃酒",
            "黑巧克力",
        ]
    },

    "cake-taro-milk-8inches": {
        title: "芋頭鮮奶蛋糕",
        subtitle: "大甲芋頭與鮮奶油",

        size: "尺寸: 8吋 (約20cm)",

        price: 850,

        image: "images/cake/cake-taro-milk-8inches.jpg",
        imageAlt: "芋頭鮮奶蛋糕",

        description:
            "選用大甲芋頭製作芋泥，搭配鮮奶油，芋頭香氣濃郁，口感綿密，台式經典風味。 ",

        ingredients: [
            "大甲芋頭",
            "鮮奶油",
            "海綿蛋糕",
            "細砂糖",
            "牛奶",
        ]
    },

    "cake-fruit-forest-8inches": {
        title: "水果森林蛋糕",
        subtitle: "多種新鮮水果組合",

        size: "尺寸: 8吋 (約20cm)",

        price: 950,

        image: "images/cake/cake-fruit-forest-8inches.jpg",
        imageAlt: "水果森林蛋糕",

        description:
            "使用草莓、奇異果、芒果、藍莓等多種當季水果，色彩繽紛，營養豐富。 ",

        ingredients: [
            "綜合新鮮水果",
            "鮮奶油",
            "海綿蛋糕體",
            "果膠",
            "細砂糖",
        ]
    },

    "cake-caramel-walnut-8inches": {
        title: "焦糖核桃蛋糕",
        subtitle: "香濃焦糖與核桃碎",

        size: "尺寸: 8吋 (約20cm)",

        price: 890,

        image: "images/cake/cake-caramel-walnut-8inches.jpg",
        imageAlt: "焦糖核桃蛋糕",

        description:
            "自製焦糖醬搭配烘烤核桃，蛋糕體加入核桃碎，口感豐富，甜而不膩。 ",

        ingredients: [
            "核桃",
            "焦糖醬",
            "鮮奶油",
            "海綿蛋糕",
            "無鹽奶油",
        ]
    },

    "cake-earl-grey-tea-8inches": {
        title: "伯爵茶蛋糕",
        subtitle: "英式伯爵茶香",

        size: "尺寸: 8吋 (約20cm)",

        price: 870,

        image: "images/cake/cake-earl-grey-tea-8inches.jpg",
        imageAlt: "伯爵茶蛋糕",

        description:
            "使用英國伯爵茶葉，茶香濃郁，搭配輕盈鮮奶油，呈現優雅英式風味。 ",

        ingredients: [
            "伯爵茶葉",
            "鮮奶油",
            "海綿蛋糕體",
            "細砂糖",
            "牛奶",
        ]
    },

    /* 10吋蛋糕 */
    "cake-strawberry-10inches": {
        title: "經典草莓蛋糕",
        subtitle: "新鮮草莓搭配輕盈鮮奶油",

        size: "尺寸: 10吋 (約25cm)",

        price: 1280,

        image: "images/cake/cake-strawberry-10inches.jpg",
        imageAlt: "經典草莓蛋糕",

        description:
            "使用當季新鮮草莓，搭配法式海綿蛋糕體，夾層使用北海道鮮奶油，口感輕盈不膩，適合8-12人享用，派對首選！ ",

        ingredients: [
            "新鮮草莓",
            "北海道鮮奶油",
            "法式海綿蛋糕體",
            "細砂糖",
            "雞蛋",
        ]
    },

    "cake-double-chocolate-10inches": {
        title: "雙層巧克力蛋糕",
        subtitle: "黑白巧克力雙重享受",

        size: "尺寸: 10吋 (約25cm)",

        price: 1380,

        image: "images/cake/cake-double-chocolate-10inches.jpg",
        imageAlt: "雙層巧克力蛋糕",

        description:
            "結合黑巧克力與白巧克力慕斯，雙層設計，視覺與味覺的雙重享受，適合大型聚會。 ",

        ingredients: [
            "黑巧克力",
            "白巧克力",
            "鮮奶油",
            "巧克力蛋糕體",
            "可可粉",
        ]
    },

    "cake--rainbow-fruit-10inches": {
        title: "彩虹水果蛋糕",
        subtitle: "繽紛水果與彩色蛋糕體",

        size: "尺寸: 10吋 (約25cm)",

        price: 1450,

        image: "images/cake/cake--rainbow-fruit-10inches.jpg",
        imageAlt: "彩虹水果蛋糕",

        description:
            "六層彩色蛋糕體，搭配豐富新鮮水果，色彩繽紛，適合生日派對與慶祝活動。 ",

        ingredients: [
            "綜合水果",
            "彩色蛋糕體",
            "鮮奶油",
            "天然色素",
            "細砂糖",
        ]
    },


    "cake-mango-napoleon-10inches": {
        title: "芒果拿破崙蛋糕",
        subtitle: "千層酥皮與芒果慕斯",

        size: "尺寸: 10吋 (約25cm)",

        price: 1420,

        image: "images/cake/cake-mango-napoleon-10inches.jpg",
        imageAlt: "芒果拿破崙蛋糕",

        description:
            "法式千層酥皮搭配芒果慕斯，層次分明，口感酥脆與綿密交織，夏季限定！ ",

        ingredients: [
            "愛文芒果",
            "千層酥皮",
            "芒果慕斯",
            "鮮奶油",
            "吉利丁",
        ]
    },

    "cake-chestnut-mont-blanc-10inches": {
        title: "栗子蒙布朗蛋糕",
        subtitle: "日本栗子搭配北海道鮮奶油",

        size: "尺寸: 10吋 (約25cm)",

        price: 1350,

        image: "images/cake/cake-chestnut-mont-blanc-10inches.jpg",
        imageAlt: "栗子蒙布朗蛋糕",

        description:
            "使用日本栗子製作栗子泥，搭配蛋白霜與鮮奶油，呈現法式經典甜點風味。 ",

        ingredients: [
            "日本栗子",
            "栗子泥",
            "蛋白霜",
            "北海道鮮奶油",
            "海綿蛋糕",
        ]
    },


    "cake-raspberry-rose-10inches": {
        title: "覆盆子玫瑰蛋糕",
        subtitle: "覆盆子與玫瑰花瓣",

        size: "尺寸: 10吋 (約25cm)",

        price: 1480,

        image: "images/cake/cake-raspberry-rose-10inches.jpg",
        imageAlt: "覆盆子玫瑰蛋糕",

        description:
            "新鮮覆盆子搭配玫瑰花瓣，粉紅色系，浪漫優雅，適合婚禮與紀念日。 ",

        ingredients: [
            "新鮮覆盆子",
            "玫瑰花瓣",
            "覆盆子醬",
            "鮮奶油",
            "海綿蛋糕",
        ]
    },

    /* 吐司系列 */
    "toast-classic-fresh-milk": {
        title: "經典鮮奶吐司",
        subtitle: "柔軟綿密的鮮奶吐司",

        size: "1條",

        price: 85,

        image: "images/toast/toast-classic-fresh-milk.jpg",
        imageAlt: "經典鮮奶吐司",

        description:
            "使用高品質鮮奶製作，口感柔軟綿密，奶香濃郁，適合直接食用或製作三明治。 ",

        ingredients: [
            "高筋麵粉",
            "鮮奶",
            "無鹽奶油",
            "細砂糖",
            "酵母",
        ]
    },

    "toast-whole-wheat-walnut": {
        title: "全麥核桃吐司",
        subtitle: "健康全麥搭配核桃",

        size: "1條",

        price: 95,

        image: "images/toast/toast-whole-wheat-walnut.jpg",
        imageAlt: "全麥核桃吐司",

        description:
            "採用全麥麵粉，加入烘烤核桃，富含纖維與營養，健康美味。 ",

        ingredients: [
            "全麥麵粉",
            "核桃",
            "蜂蜜",
            "橄欖油",
            "酵母",
        ]
    },

    "toast-purple-rice-and-red-bean": {
        title: "紫米紅豆吐司",
        subtitle: "紫米與蜜紅豆的完美結合",

        size: "1條",

        price: 100,

        image: "images/toast/toast-purple-rice-and-red-bean.jpg",
        imageAlt: "紫米紅豆吐司",

        description:
            "紫米與蜜紅豆揉入麵團，色彩美麗，口感Q彈，營養豐富。 ",

        ingredients: [
            "高筋麵粉",
            "紫米",
            "蜜紅豆",
            "鮮奶",
            "細砂糖",
        ]
    },

    "toast-matcha-red-bean": {
        title: "抹茶紅豆吐司",
        subtitle: "京都抹茶與紅豆",

        size: "1條",

        price: 105,

        image: "images/toast/toast-matcha-red-bean.jpg",
        imageAlt: "抹茶紅豆吐司",

        description:
            "使用宇治抹茶粉，搭配蜜紅豆，抹茶香氣濃郁，日式風味。 ",

        ingredients: [
            "高筋麵粉",
            "宇治抹茶粉",
            "蜜紅豆",
            "鮮奶",
            "白巧克力",
        ]
    },

    "toast-cranberry-cheese": {
        title: "蔓越莓乳酪吐司",
        subtitle: "酸甜蔓越莓與乳酪",

        size: "1條",

        price: 110,

        image: "images/toast/toast-cranberry-cheese.jpg",
        imageAlt: "蔓越莓乳酪吐司",

        description:
            "蔓越莓乾與奶油乳酪的組合，酸甜適中，口感豐富。 ",

        ingredients: [
            "高筋麵粉",
            "蔓越莓乾",
            "奶油乳酪",
            "鮮奶",
            "蜂蜜",
        ]
    },

    "toast-brown-sugar-mochi": {
        title: "黑糖麻糬吐司",
        subtitle: "Q彈麻糬與黑糖香",

        size: "1條",

        price: 115,

        image: "images/toast/toast-brown-sugar-mochi.jpg",
        imageAlt: "黑糖麻糬吐司",

        description:
            "黑糖麻糬包裹在柔軟吐司中，Q彈口感，黑糖香氣迷人。 ",

        ingredients: [
            "高筋麵粉",
            "黑糖",
            "麻糬",
            "鮮奶",
            "無鹽奶油",
        ]
    },

    /* 麵包系列 */
    "bread-cream-meal-kit": {
        title: "奶油餐包",
        subtitle: "經典柔軟餐包",

        size: "1個",

        price: 45,

        image: "images/bread/bread-cream-meal-kit.jpg",
        imageAlt: "奶油餐包",

        description:
            "經典奶油餐包，外皮金黃，內部柔軟，適合搭配各種餐點。 ",

        ingredients: [
            "高筋麵粉",
            "無鹽奶油",
            "鮮奶",
            "雞蛋",
            "酵母",
        ]
    },

    "bread-french-baguette": {
        title: "法國長棍麵包",
        subtitle: "外酥內軟的法式麵包",

        size: "1個",

        price: 45,

        image: "images/bread/bread-french-baguette.jpg",
        imageAlt: "法國長棍麵包",

        description:
            "傳統法式長棍，外皮酥脆，內部柔軟有嚼勁，麥香濃郁。 ",

        ingredients: [
            "高筋麵粉",
            "水",
            "鹽",
            "酵母",
        ]
    },

    "bread-green-onion": {
        title: "蔥花麵包",
        subtitle: "台式經典蔥香麵包",

        size: "1個",

        price: 50,

        image: "images/bread/bread-green-onion.jpg",
        imageAlt: "蔥花麵包",

        description:
            "台灣經典麵包，新鮮蔥花搭配美乃滋，鹹香可口。 ",

        ingredients: [
            "高筋麵粉",
            "新鮮蔥花",
            "美乃滋",
            "無鹽奶油",
            "雞蛋",
        ]
    },

    "bread-meat-floss": {
        title: "肉鬆麵包",
        subtitle: "鹹香肉鬆捲",

        size: "1個",

        price: 55,

        image: "images/bread/bread-meat-floss.jpg",
        imageAlt: "肉鬆麵包",

        description:
            "柔軟麵包體包裹肉鬆，外層沾滿肉鬆，鹹香美味。 ",

        ingredients: [
            "高筋麵粉",
            "豬肉鬆",
            "美乃滋",
            "無鹽奶油",
            "雞蛋",
        ]
    },

    "bread-red-bean": {
        title: "紅豆麵包",
        subtitle: "經典紅豆餡麵包",

        size: "1個",

        price: 48,

        image: "images/bread/bread-red-bean.jpg",
        imageAlt: "紅豆麵包",

        description:
            "日式紅豆麵包，自製紅豆餡，甜度適中，經典美味。 ",

        ingredients: [
            "高筋麵粉",
            "紅豆餡",
            "無鹽奶油",
            "雞蛋",
            "白芝麻",
        ]
    },

    "bread-milk-crumble": {
        title: "奶酥麵包",
        subtitle: "香甜奶酥餡",

        size: "1個",

        price: 52,

        image: "images/bread/bread-milk-crumble.jpg",
        imageAlt: "奶酥麵包",

        description:
            "自製奶酥餡，奶香濃郁，上層酥脆，深受喜愛。 ",

        ingredients: [
            "高筋麵粉",
            "奶酥餡",
            "奶粉",
            "無鹽奶油",
            "糖粉",
        ]
    },

    "bread-pineapple-bun": {
        title: "菠蘿麵包",
        subtitle: "經典港式菠蘿包",

        size: "1個",

        price: 50,

        image: "images/bread/bread-pineapple-bun.jpg",
        imageAlt: "菠蘿麵包",

        description:
            "港式經典，酥脆菠蘿皮搭配柔軟麵包，香甜可口。 ",

        ingredients: [
            "高筋麵粉",
            "菠蘿皮",
            "無鹽奶油",
            "雞蛋",
            "細砂糖",
        ]
    },

    "bread-chocolate-spiral": {
        title: "巧克力螺旋麵包",
        subtitle: "巧克力醬螺旋",

        size: "1個",

        price: 58,

        image: "images/bread/bread-chocolate-spiral.jpg",
        imageAlt: "巧克力螺旋麵包",

        description:
            "巧克力醬螺旋捲入麵團，巧克力香氣濃郁，視覺美觀。 ",

        ingredients: [
            "高筋麵粉",
            "巧克力醬",
            "可可粉",
            "無鹽奶油",
            "雞蛋",
        ]
    },

    "bread-cheese": {
        title: "起司麵包",
        subtitle: "濃郁起司風味",

        size: "1個",

        price: 60,

        image: "images/bread/bread-cheese.jpg",
        imageAlt: "起司麵包",

        description:
            "使用多種起司，起司香氣濃郁，鹹香美味。 ",

        ingredients: [
            "高筋麵粉",
            "切達起司",
            "帕瑪森起司",
            "無鹽奶油",
            "雞蛋",
        ]
    },

    "bread-bacon-cheese": {
        title: "培根起司麵包",
        subtitle: "培根與起司的完美組合",

        size: "1個",

        price: 68,

        image: "images/bread/bread-bacon-cheese.jpg",
        imageAlt: "培根起司麵包",

        description:
            "培根與起司的經典組合，鹹香濃郁，適合當早餐。 ",

        ingredients: [
            "高筋麵粉",
            "培根",
            "起司",
            "美乃滋",
            "黑胡椒",
        ]
    },

    "bread-pretzel": {
        title: "德國結麵包",
        subtitle: "傳統德式扭結麵包",

        size: "1個",

        price: 55,

        image: "images/bread/bread-pretzel.jpg",
        imageAlt: "德國結麵包",

        description:
            "德國傳統扭結麵包，外皮撒上粗鹽，口感獨特。 ",

        ingredients: [
            "高筋麵粉",
            "粗鹽",
            "小蘇打",
            "無鹽奶油",
            "酵母",
        ]
    },

    "bread-multigrain": {
        title: "雜糧麵包",
        subtitle: "健康多穀物麵包",

        size: "1個",

        price: 70,

        image: "images/bread/bread-multigrain.jpg",
        imageAlt: "雜糧麵包",

        description:
            "含多種穀物與種子，富含纖維，健康營養。 ",

        ingredients: [
            "全麥麵粉",
            "燕麥",
            "亞麻籽",
            "葵花籽",
            "南瓜籽",
        ]
    },

}