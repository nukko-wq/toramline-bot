const bossData = [
  {
    "name": "ザポ",
    "displayName": "ザポ",
    "attribute": "水",
    "critical_resistance": 30,
    "flee": 573,
    "kinshi": "怯み: ◯\n転倒: ◯\n気絶: ◯",
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
    "attribute": "闇",
    "critical_resistance": "35\n4形態目: 100",
    "flee": "700程度",
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
    "kinshi": "怯み: ◯\n転倒: ◯\n気絶: ☓\n\nHP50%以下\n怯み: ◯\n転倒: ☓\n気絶: ☓",
    "other1": "※部位破壊1箇所ごとにDEF,MDEFが低下",
    "other2": ""
  },
  {
    "name": "ビルロッシュ",
    "displayName": "ビルロッシュ",
    "attribute": "火",
    "critical_resistance": "\n青モード時: 25\n赤モード時: 55",
    "flee": 540,
    "kinshi": "怯み: ☓\n転倒: ☓ カウンター(広範囲床)\n気絶: ◯\n\nHP50%以下\n怯み: ◯\n転倒: ☓ カウンター(広範囲床)\n気絶: ◯",
    "other1": "※戦闘開始時は青モード、20秒経過で赤モードへ移行",
    "other2": "※赤モードへ移行してから20秒経過で青モードへ戻る(移行繰り返し)"
  },
  {
    "name": "ファジーノ",
    "displayName": "悪竜ファジーノ",
    "attribute": "闇",
    "critical_resistance": 40,
    "flee": 363,
    "kinshi": "怯み: ◯\n転倒: ☓\n気絶: ☓\n\nモブ2体撃破後\n怯み: ◯\n転倒: ◯\n気絶: ◯",
    "other1": "※ダメージ上限15万、エレチタを2体とも倒すと上限解除",
    "other2": "※2体とも倒してから一定時間(45秒程度)経過でエレチタ復活、ダメージ上限15万に戻る"
  },
  {
    "name": "ガラムーワ",
    "displayName": "ガラムーワ",
    "attribute": "風",
    "critical_resistance": 35,
    "flee": 442,
    "kinshi": "ヘイト持ちが6m以上の場合\n怯み: △ 異常耐性無視鈍足\n転倒: △ 異常耐性無視鈍足\n気絶: △ 異常耐性無視鈍足\n\nヘイト持ちが5m以内の場合\n怯み: ◯\n転倒: ◯\n気絶: ◯",
    "other1": "※ヘイト持ちが5m以内に居ると物理耐性、魔法耐性が低下",
    "other2": ""
  },
  {
    "name": "レドルギ",
    "displayName": "楽竜レドルギ",
    "attribute": "無",
    "critical_resistance": 35,
    "flee": 375,
    "kinshi": "開幕\n怯み: ☓\n転倒: ◯\n気絶: ☓\n\n開幕3秒後\n怯み: ◯\n転倒: ☓\n気絶: ◯",
    "other1": "※HP50%部分にストッパーあり\n\n※開幕3秒間は転倒のみカウンターなし、怯み・気絶はカウンターあり(カウンター: 5秒程無敵になり、状態異常を複数付与する攻撃)",
    "other2": "\n※開幕3秒経過後は怯み・気絶はカウンターなし、転倒カウンターありに入れ替わる\n開幕3秒間の間にHP50%まで削ると怯み、気絶付与時と同じカウンターがくる\n\n※開幕に転倒をいれても、開幕3秒の間にHP50%まで削るとカウンターあり\n\n※単発100万以上のダメージで10秒間ダメージ上限30万(単発100万ダメージを与えたタイミングでHP50%以下になった場合はダメージ上限なし)",
  },
  {
    "name": "ドミナレドル",
    "displayName": "ドミナレドル",
    "attribute": "闇",
    "critical_resistance": 30,
    "flee": 454,
    "kinshi": "怯み: ◯\n転倒: ◯\n気絶: ◯",
    "other1": "※HP50%でHPロック、モブ2体倒すとロック解除",
    "other2": "※後半妨害で突進カウンター？\n※ボールを1体倒すごとに物魔耐性-10%",
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
  },
  {
    "name": "ブリータ",
    "displayName": "ブリータ",
    "attribute": "闇",
    "critical_resistance": "\n1形態目:25\n2形態目: 30",
    "flee": "\n1形態目: 544\n2形態目: 584",
    "kinshi": "\n1形態目\n怯み: ◯\n転倒: ◯\n気絶: ◯\n\n2形態目\n怯み: ◯\n転倒: ◯\n気絶: ☓",
    "other1": "※隕石攻撃中耐性+100%",
    "other2": ""
  }
]

export default bossData