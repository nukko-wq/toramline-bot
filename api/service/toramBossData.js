const bossData = [
  {
    "name": "ザポ",
    "displayName": "ザポ",
    "attribute": "水",
    "critical_resistance": 30,
    "flee": 573,
    "kinshi": "\n怯み: ◯\n転倒: ◯\n気絶: ◯",
    "other1": "※HP50%で無敵 (ストーム中)妨害全て☓カウンターはなし",
    "other2": ""
  },
  {
    "name": "ルディス",
    "displayName": "尉竜ルディス",
    "attribute": "地",
    "critical_resistance": 35,
    "flee": 386,
    "kinshi": "\n怯み: ◯\n転倒: ◯\n気絶: 部位破壊(頭)◯",
    "other1": "※モーションによって妨害無敵有",
    "other2": ""
  },
  {
    "name": "ドン・プロフンド",
    "displayName": "ドン・プロフンド",
    "attribute": "水",
    "critical_resistance": 30,
    "flee": 394,
    "kinshi": "気絶: △ (硬化) ダメージ1\n転倒: △ (硬化) ダメージ1\n怯み: ◯",
    "other1": "※HP50%で無敵、モブ2体出現、竜巻左右に6つ出現",
    "other2": "※左モブを倒すと左3つ竜巻消滅\n※右モブを倒すと右3つ竜巻消滅"
  },
  {
    "name": "バテュード",
    "displayName": "バテュード",
    "attribute": "闇",
    "critical_resistance": 35,
    "flee": 390,
    "kinshi": "1段階目\n気絶: ◯\n転倒: ☓\n怯み: ◯\n\n2段階目\n気絶: ☓\n転倒: ◯\n怯み: ◯",
    "other1": "※ダメージ上限100万",
    "other2": "※前半: 気絶、怯みで上限30秒間開放(ゲージでリセット)\n※後半: 転倒、怯みで上限30秒間開放"
  },
  {
    "name": "ボビナリー",
    "displayName": "轟竜ボビナリー",
    "attribute": "風",
    "critical_resistance": 20,
    "flee": 400,
    "kinshi": "怯み: ◯\n転倒: ◯\n気絶: カウンター",
    "other1": "",
    "other2": ""
  },
  {
    "name": "ヒュミーダ",
    "displayName": "ヒュミーダ",
    "attribute": "水",
    "critical_resistance": "\n水属性時 30\n闇属性時 40",
    "flee": 527,
    "kinshi": "怯み: ◯\n気絶: 水属性時☓\n転倒: 闇属性時☓",
    "other1": "※HP50%または追加のボールが2体出現でHPにロック。ボールを全て倒すとHPロック解除。",
    "other2": ""
  },
  {
    "name": "ルトセーザ",
    "displayName": "ルトセーザ",
    "attribute": "",
    "critical_resistance": "35, 4形態目: 100",
    "flee": 400,
    "kinshi": "1形態目\n怯み: ◯\n転倒: ◯\n気絶: ☓\n\n2形態目\n怯み: ☓\n転倒: ◯\n気絶: ◯\n\n3形態目\n怯み: ◯\n転倒: ◯\n気絶: ☓\n\n4形態目\n怯み: ☓\n転倒: ◯\n気絶: ☓",
    "other1": "※4形態目、物理耐性-15%",
    "other2": ""
  },
  {
    "name": "ガルドゴーレム",
    "displayName": "ガルドゴーレム",
    "attribute": "地",
    "critical_resistance": 20,
    "flee": 416,
    "kinshi": "前半(肩が青色)\n転倒: ◯\n怯み: ◯\n気絶: ◯\n\n肩が黄色または赤色\n転倒: ☓\n怯み: ☓\n気絶: ☓",
    "other1": "※残りHPによってモードが変化\nHP100%～50%: 青モード\nHP50%～25%: 黃モード\nHP25%～0%: 赤モード",
    "other2": "※黃モードへ移行後20秒以内に残HPを25%以下に出来なかった場合、最大HPの半分の数値分HPを回復後、赤モードへ移行"
  },
  {
    "name": "イグネウス",
    "displayName": "灼竜イグネウス",
    "attribute": "火",
    "critical_resistance": 20,
    "flee": 350,
    "kinshi": "怯み: ◯ カウンター発火5m以内\n転倒: ◯ カウンター発火5m以内\n気絶: ◯ カウンター発火5m以内",
    "other1": "※HPを半分削ると強制発火攻撃(一回)",
    "other2": "※発火攻撃: イグネウスから白い波紋\n5m以内にいる全員対象"
  },
  {
    "name": "ミミューガ",
    "displayName": "欺竜ミミューガ",
    "attribute": "地",
    "critical_resistance": 35,
    "flee": 355,
    "kinshi": "怯み ◯\n転倒: ◯\n気絶: ☓\n\nHP50%以下\n怯み: ◯\n転倒: ☓\n気絶: ☓",
    "other1": "※部位破壊1箇所ごとにDEF,MDEFが低下",
    "other2": ""
  },
  {
    "name": "バウガイ",
    "displayName": "高難易度(260) バウガイ",
    "attribute": "地",
    "critical_resistance": "",
    "flee": "",
    "kinshi": "怯み: ◯\n転倒: ◯\n気絶: ☓",
    "other1": "※部位破壊でノクバ→上限(10万)\n100万ほどダメージを与えると無敵→無敵後上限解除",
    "other2": "※上限中に妨害を入れると魔力爆発"
  }
]

export default bossData