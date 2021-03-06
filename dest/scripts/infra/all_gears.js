var option_1 = require("../domain/option");
var ability_1 = require("../domain/ability");
var brand_1 = require("../domain/brand");
var gear_1 = require("../domain/gear");
exports.ALL_ABILITIES = {
    damage_up: new ability_1.default("damage_up", "攻撃力アップ", false),
    defence_up: new ability_1.default("defence_up", "防御力アップ", false),
    ink_saver_main: new ability_1.default("ink_saver_main", "インク効率アップ（メイン）", false),
    ink_saver_sub: new ability_1.default("ink_saver_sub", "インク効率アップ（サブ）", false),
    ink_recovery_up: new ability_1.default("ink_recovery_up", "インク回復力アップ", false),
    run_speed_up: new ability_1.default("run_speed_up", "ヒト移動速度アップ", false),
    swim_speed_up: new ability_1.default("swim_speed_up", "イカダッシュ速度アップ", false),
    special_charge_up: new ability_1.default("special_charge_up", "スペシャル増加量アップ", false),
    special_duration_up: new ability_1.default("special_duration_up", "スペシャル時間延長", false),
    quick_respawn: new ability_1.default("quick_respawn", "復活時間短縮", false),
    special_saver: new ability_1.default("special_saver", "スペシャル減少量ダウン", false),
    quick_super_jump: new ability_1.default("quick_super_jump", "スーパージャンプ時間短縮", false),
    bomb_range_up: new ability_1.default("bomb_range_up", "ボム飛距離アップ", true),
    opening_gambit: new ability_1.default("opening_gambit", "スタートダッシュ", true),
    last_ditch_effort: new ability_1.default("last_ditch_effort", "ラストスパート", true),
    tenacity: new ability_1.default("tenacity", "逆境強化", true),
    come_back: new ability_1.default("come_back", "カムバック", true),
    cold_blooded: new ability_1.default("cold_blooded", "マーキングガード", true),
    ninja_squid: new ability_1.default("ninja_squid", "イカニンジャ", true),
    haunt: new ability_1.default("haunt", "うらみ", true),
    recon: new ability_1.default("recon", "スタートレーダー", true),
    bomb_sniffer: new ability_1.default("bomb_sniffer", "ボムサーチ", true),
    ink_resistance_up: new ability_1.default("ink_resistance_up", "安全シューズ", true),
    stealth_jump: new ability_1.default("stealth_jump", "ステルスジャンプ", true)
};
exports.ALL_BRANDS = {
    Zink: new brand_1.default('zink', 'アイロニック', option_1.Optional(exports.ALL_ABILITIES.quick_super_jump), option_1.Optional(exports.ALL_ABILITIES.quick_respawn)),
    Tentatk: new brand_1.default('tentatk', 'アロメ', option_1.Optional(exports.ALL_ABILITIES.ink_recovery_up), option_1.Optional(exports.ALL_ABILITIES.quick_super_jump)),
    Zekko: new brand_1.default('zekko', 'エゾッコ', option_1.Optional(exports.ALL_ABILITIES.special_saver), option_1.Optional(exports.ALL_ABILITIES.special_charge_up)),
    KrakOn: new brand_1.default('krak_on', 'クラーゲス', option_1.Optional(exports.ALL_ABILITIES.swim_speed_up), option_1.Optional(exports.ALL_ABILITIES.defence_up)),
    Inkline: new brand_1.default('inkline', 'シグレニ', option_1.Optional(exports.ALL_ABILITIES.defence_up), option_1.Optional(exports.ALL_ABILITIES.damage_up)),
    SplashMob: new brand_1.default('splash_mob', 'ジモン', option_1.Optional(exports.ALL_ABILITIES.ink_saver_main), option_1.Optional(exports.ALL_ABILITIES.run_speed_up)),
    SquidForce: new brand_1.default('squid_force', 'バトロイカ', option_1.Optional(exports.ALL_ABILITIES.damage_up), option_1.Optional(exports.ALL_ABILITIES.ink_saver_main)),
    Forge: new brand_1.default('forge', 'フォーリマ', option_1.Optional(exports.ALL_ABILITIES.special_duration_up), option_1.Optional(exports.ALL_ABILITIES.ink_saver_sub)),
    Skalop: new brand_1.default('skalop', 'ホタックス', option_1.Optional(exports.ALL_ABILITIES.quick_respawn), option_1.Optional(exports.ALL_ABILITIES.special_saver)),
    Firefin: new brand_1.default('firefin', 'ホッコリー', option_1.Optional(exports.ALL_ABILITIES.ink_saver_sub), option_1.Optional(exports.ALL_ABILITIES.ink_recovery_up)),
    Takoroka: new brand_1.default('takoroka', 'ヤコ', option_1.Optional(exports.ALL_ABILITIES.special_charge_up), option_1.Optional(exports.ALL_ABILITIES.special_duration_up)),
    Rockenberg: new brand_1.default('rockenberg', 'ロッケンベルグ', option_1.Optional(exports.ALL_ABILITIES.run_speed_up), option_1.Optional(exports.ALL_ABILITIES.swim_speed_up)),
    Cuttlegear: new brand_1.default('cuttlegear', 'アタリメイド', option_1.Optional(null), option_1.Optional(null)),
    KOG: new brand_1.default('kog', 'KOG', option_1.Optional(null), option_1.Optional(null)),
    Amiibo: new brand_1.default('amiibo', 'amiibo', option_1.Optional(null), option_1.Optional(null)),
    TheSQUIDGIRL: new brand_1.default('the_squid_girl', '侵略！イカ娘', option_1.Optional(null), option_1.Optional(null)),
    Famitsu: new brand_1.default('famitsu', 'ファミ通', option_1.Optional(null), option_1.Optional(null))
};
exports.ALL_GEARS = [
    new gear_1.default('スカッシュバンド', exports.ALL_BRANDS.Zink, 0, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('サムライヘルメット', exports.ALL_BRANDS.Amiibo, 0, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('ダイバーゴーグル', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('でんせつのぼうし', exports.ALL_BRANDS.Cuttlegear, 0, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('ヤコメッシュ', exports.ALL_BRANDS.Takoroka, 0, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('スプラッシュゴーグル', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('チャリキング帽', exports.ALL_BRANDS.Tentatk, 0, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('パワードマスク', exports.ALL_BRANDS.Amiibo, 0, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('ショートビーニー', exports.ALL_BRANDS.Inkline, 0, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('スゲ', exports.ALL_BRANDS.Inkline, 0, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('スタジオヘッドホン', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('サファリハット', exports.ALL_BRANDS.Firefin, 0, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('バスケバンド', exports.ALL_BRANDS.Zink, 0, exports.ALL_ABILITIES.opening_gambit),
    new gear_1.default('テッカサイクルキャップ', exports.ALL_BRANDS.Zink, 0, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('キャディ サンバイザー', exports.ALL_BRANDS.Zink, 0, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('テニスバンド', exports.ALL_BRANDS.Tentatk, 0, exports.ALL_ABILITIES.come_back),
    new gear_1.default('イロメガネ', exports.ALL_BRANDS.Zekko, 0, exports.ALL_ABILITIES.last_ditch_effort),
    new gear_1.default('エゾッコメッシュ', exports.ALL_BRANDS.Zekko, 0, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('バックワードキャップ', exports.ALL_BRANDS.Zekko, 0, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('ランニングバンド', exports.ALL_BRANDS.Zekko, 0, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('2ラインメッシュ', exports.ALL_BRANDS.KrakOn, 0, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('キャンプハット', exports.ALL_BRANDS.Inkline, 0, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('キャンプキャップ', exports.ALL_BRANDS.Inkline, 0, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('クロブチ レトロ', exports.ALL_BRANDS.SplashMob, 0, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('ヘッドバンド ホワイト', exports.ALL_BRANDS.SquidForce, 0, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('ウインターボンボン', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.tenacity),
    new gear_1.default('ウーニーズBBキャップ', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('ビバレッジキャップ', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('イカンカン', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('ヤキフグ サンバイザー', exports.ALL_BRANDS.Firefin, 0, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('ジェットキャップ', exports.ALL_BRANDS.Firefin, 0, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('フグベルハット', exports.ALL_BRANDS.Firefin, 0, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('ダテコンタクト', exports.ALL_BRANDS.Tentatk, 0, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('サンサンサンバイザー', exports.ALL_BRANDS.Tentatk, 0, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('5パネルキャップ', exports.ALL_BRANDS.Zekko, 0, exports.ALL_ABILITIES.come_back),
    new gear_1.default('アローバンド ブラック', exports.ALL_BRANDS.Zekko, 0, exports.ALL_ABILITIES.tenacity),
    new gear_1.default('ボンボンニット', exports.ALL_BRANDS.SplashMob, 0, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('ボーダービーニー', exports.ALL_BRANDS.SplashMob, 0, exports.ALL_ABILITIES.opening_gambit),
    new gear_1.default('ロブスターブーニー', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.last_ditch_effort),
    new gear_1.default('オーロラヘッドホン', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('スケボーメット', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('イカベーダーキャップ', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('カモメッシュ', exports.ALL_BRANDS.Firefin, 0, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('ヒーローヘッズ レプリカ', exports.ALL_BRANDS.Cuttlegear, 0, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('タコゾネススコープ', exports.ALL_BRANDS.Cuttlegear, 0, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('イカパッチン', exports.ALL_BRANDS.Amiibo, 0, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('タイショウのはちまき', exports.ALL_BRANDS.Famitsu, 0, exports.ALL_ABILITIES.come_back),
    new gear_1.default('イカ娘ずきん', exports.ALL_BRANDS.TheSQUIDGIRL, 0, exports.ALL_ABILITIES.opening_gambit),
    new gear_1.default('アローバンド ホワイト', exports.ALL_BRANDS.Zekko, 0, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('タコマスク', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.tenacity),
    new gear_1.default('パイロットゴーグル', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('フェイスゴーグル', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.come_back),
    new gear_1.default('ナイトビジョン', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('テンタクルズメット', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('サイクルメット', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('チドリキャップ', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.opening_gambit),
    new gear_1.default('バイザーメット', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.last_ditch_effort),
    new gear_1.default('タレサン18K', exports.ALL_BRANDS.Rockenberg, 0, exports.ALL_ABILITIES.last_ditch_effort),
    new gear_1.default('アーマーメット　レプリカ', exports.ALL_BRANDS.Cuttlegear, 0, exports.ALL_ABILITIES.tenacity),
    new gear_1.default('イカスカルマスク', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('イカノルディック', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.come_back),
    new gear_1.default('イカンカン クラシック', exports.ALL_BRANDS.Skalop, 0, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('イヤーマフ', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('エイズリーバンダナ', exports.ALL_BRANDS.KrakOn, 0, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('オクタグラス', exports.ALL_BRANDS.Firefin, 0, exports.ALL_ABILITIES.last_ditch_effort),
    new gear_1.default('サッカーバンド', exports.ALL_BRANDS.Tentatk, 0, exports.ALL_ABILITIES.tenacity),
    new gear_1.default('トレジャーメット', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('マルベッコー', exports.ALL_BRANDS.KrakOn, 0, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('モンゴウベレー', exports.ALL_BRANDS.Forge, 0, exports.ALL_ABILITIES.opening_gambit),
    new gear_1.default('ウーニーズBBシャツ', exports.ALL_BRANDS.Zink, 1, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('アイロニックロング', exports.ALL_BRANDS.Zink, 1, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('アイロニックレイヤード', exports.ALL_BRANDS.Zink, 1, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('バスケジャージ アウェイ', exports.ALL_BRANDS.Zink, 1, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('かくれパイレーツ', exports.ALL_BRANDS.Tentatk, 1, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('イカノメT ライトブルー', exports.ALL_BRANDS.Tentatk, 1, exports.ALL_ABILITIES.cold_blooded),
    new gear_1.default('イカノメT ブラック', exports.ALL_BRANDS.Tentatk, 1, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('エゾッコラグラン', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('イカゴッチンベスト', exports.ALL_BRANDS.KrakOn, 1, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('レイニーブルーT', exports.ALL_BRANDS.KrakOn, 1, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('サニーオレンジT', exports.ALL_BRANDS.KrakOn, 1, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('ヤマビコT ブルー', exports.ALL_BRANDS.Inkline, 1, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('ボーダーモスグリーン', exports.ALL_BRANDS.Inkline, 1, exports.ALL_ABILITIES.ninja_squid),
    new gear_1.default('ヤマビコT アイボリー', exports.ALL_BRANDS.Inkline, 1, exports.ALL_ABILITIES.haunt),
    new gear_1.default('シャンブレーシャツ', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('パイレーツボーダー', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('カレッジスウェット グレー', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('カレッジラグラン', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.recon),
    new gear_1.default('さくらエビポロ', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.ninja_squid),
    new gear_1.default('マリンボーダー', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('よもぎポロ', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.cold_blooded),
    new gear_1.default('レタード　オレンジ', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('カレッジスウェット　ネイビー', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('イカバッテンロング', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.haunt),
    new gear_1.default('イカホワイト', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('イカブラック', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('わかばイカT', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('イカバッテンマスタード', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('レイヤード ホワイト', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('レイヤード ブラック', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('マスタードガサネ', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('カモガサネ', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('おどるイカアロハ', exports.ALL_BRANDS.Forge, 1, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('グレープT', exports.ALL_BRANDS.Skalop, 1, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('ミントT', exports.ALL_BRANDS.Skalop, 1, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('チドリメロンＴ', exports.ALL_BRANDS.Skalop, 1, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('ヤキフグ8bit ホワイト', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.recon),
    new gear_1.default('ニクショクT', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('ヤキフグ8bit ブラック', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('トリコロールラガー', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('ベクトルパターン グレー', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('ベクトルパターン レッド', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('ハラグロラグラン', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('マルエリシャツ', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('ロッケンベルグT ブラック', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('ハラシロラグラン', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('ドカンT ブラック', exports.ALL_BRANDS.KOG, 1, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('ラインT ホワイト', exports.ALL_BRANDS.KOG, 1, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('テッカサイクルシャツ', exports.ALL_BRANDS.Zink, 1, exports.ALL_ABILITIES.cold_blooded),
    new gear_1.default('スクールジャージー', exports.ALL_BRANDS.Zink, 1, exports.ALL_ABILITIES.ninja_squid),
    new gear_1.default('バスケジャージ ホーム', exports.ALL_BRANDS.Zink, 1, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('ギンガムチェック アカ', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('バニーポップ ブラック', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('エゾッコパーカー アズキ', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.ninja_squid),
    new gear_1.default('ロゴマシマシアロハ', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('ミックスシャツグレー', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('ギンガムチェック ミドリ', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('マウンテンベリー', exports.ALL_BRANDS.Inkline, 1, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('ブロックストライプシャツ', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('レタード　グリーン', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.recon),
    new gear_1.default('ボーダーホワイト', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('ボーダーネイビー', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('ベイビークラゲシャツ', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('シロシャツ', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('イカリスウェット', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.cold_blooded),
    new gear_1.default('ガチブラック', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.recon),
    new gear_1.default('グリーンＴ', exports.ALL_BRANDS.Forge, 1, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('ホッコリー ネイビー', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('アーバンベスト イエロー', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.haunt),
    new gear_1.default('ジップアップ グリーン', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('ベクトルラインガサネ', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('オレンジボーダーラガー', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('チョコガサネ', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('ロッケンベルグT ホワイト', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('ヒーロージャケット レプリカ', exports.ALL_BRANDS.Cuttlegear, 1, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('タコゾネスプロテクター', exports.ALL_BRANDS.Cuttlegear, 1, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('パワードスーツ', exports.ALL_BRANDS.Amiibo, 1, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('サムライジャケット', exports.ALL_BRANDS.Amiibo, 1, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('スクールブレザー', exports.ALL_BRANDS.Amiibo, 1, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('タイショウのまえかけ', exports.ALL_BRANDS.Famitsu, 1, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('イカ娘ノースリーブ', exports.ALL_BRANDS.TheSQUIDGIRL, 1, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('FCジャージー', exports.ALL_BRANDS.Zink, 1, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('チャリキングジャージ', exports.ALL_BRANDS.Tentatk, 1, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('スタジャンロゴマシ', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('マウンテンダウン', exports.ALL_BRANDS.Inkline, 1, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('マウンテンオリーブ', exports.ALL_BRANDS.Inkline, 1, exports.ALL_ABILITIES.recon),
    new gear_1.default('タイシャツ', exports.ALL_BRANDS.SplashMob, 1, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('ガチガサネ', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('ガチホワイト', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.ninja_squid),
    new gear_1.default('レトロジャッジ', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('フェスT', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('ミスターベースボール', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('ジップアップ カモ', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('アーバンベスト ナイト', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.cold_blooded),
    new gear_1.default('イカライダーBLACK', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('イカライダーWHITE', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('ヴィンテージチェック', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.haunt),
    new gear_1.default('タコT', exports.ALL_BRANDS.Cuttlegear, 1, exports.ALL_ABILITIES.haunt),
    new gear_1.default('アーマージャケット　レプリカ', exports.ALL_BRANDS.Cuttlegear, 1, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('F-010', exports.ALL_BRANDS.Forge, 1, exports.ALL_ABILITIES.haunt),
    new gear_1.default('F-190', exports.ALL_BRANDS.Forge, 1, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('FCカラスミ', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('アオサドーレ', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('イカジャマイカ', exports.ALL_BRANDS.Skalop, 1, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('イカスカジャン', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('イカスタンシャツ', exports.ALL_BRANDS.KrakOn, 1, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('イカセーラー ブルー', exports.ALL_BRANDS.Forge, 1, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('イカセーラー ホワイト', exports.ALL_BRANDS.Forge, 1, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('イカノボリベスト', exports.ALL_BRANDS.KrakOn, 1, exports.ALL_ABILITIES.cold_blooded),
    new gear_1.default('ウラスカジャン', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('オータムネル', exports.ALL_BRANDS.Rockenberg, 1, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('カモフラパープル', exports.ALL_BRANDS.Takoroka, 1, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('クラーゲス528', exports.ALL_BRANDS.KrakOn, 1, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('ソウショクT', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.ninja_squid),
    new gear_1.default('パールドットT', exports.ALL_BRANDS.Skalop, 1, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('バトロングホワイト', exports.ALL_BRANDS.SquidForce, 1, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('ピンポンポロ', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.recon),
    new gear_1.default('フォレストダウン', exports.ALL_BRANDS.Inkline, 1, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('マルフグT', exports.ALL_BRANDS.Firefin, 1, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('ヤマビコボーダー', exports.ALL_BRANDS.Inkline, 1, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('リールロールスウェット', exports.ALL_BRANDS.Zekko, 1, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('シーホースHi ゾンビ', exports.ALL_BRANDS.Zink, 2, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('シーホースHi レッド', exports.ALL_BRANDS.Zink, 2, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('シーホース ホワイト', exports.ALL_BRANDS.Zink, 2, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('シーホースHi パープル', exports.ALL_BRANDS.Zink, 2, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('ブラックビーンズ', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('ウミウシパープル', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('ピンクビーンズ', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('シアンビーンズ', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('ウミウシイエロー', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.ink_resistance_up),
    new gear_1.default('グリッチョ オレンジ', exports.ALL_BRANDS.Zekko, 2, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('グリッチョ ブルー', exports.ALL_BRANDS.Zekko, 2, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('スリッポン レッド', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('キャンバス ホワイト', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('ブルーベリーコンフォート', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('オイスタークロッグ', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('キャンバス クマノミ', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('キャンバス バナナ', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.bomb_sniffer),
    new gear_1.default('キャンバスHi マッシュルーム', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.stealth_jump),
    new gear_1.default('キャンバスHi モロヘイヤ', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('スリッポン ブルー', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('レイニーアセロラ', exports.ALL_BRANDS.Inkline, 2, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('ベリベリレッド', exports.ALL_BRANDS.SplashMob, 2, exports.ALL_ABILITIES.ink_resistance_up),
    new gear_1.default('オレンジアローズ', exports.ALL_BRANDS.Takoroka, 2, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('ラバーソール ホワイト', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('イカスミチップ', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('シーホース イエロー', exports.ALL_BRANDS.Zink, 2, exports.ALL_ABILITIES.bomb_sniffer),
    new gear_1.default('シーホースHi ゴールド', exports.ALL_BRANDS.Zink, 2, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('シーホース ブラックレザー', exports.ALL_BRANDS.Zink, 2, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('スリッポン チドリ', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('チョコクロッグ', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('キャンバスHi トマト', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.ink_resistance_up),
    new gear_1.default('アケビコンフォート', exports.ALL_BRANDS.KrakOn, 2, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('レイニーモスグリーン', exports.ALL_BRANDS.Inkline, 2, exports.ALL_ABILITIES.stealth_jump),
    new gear_1.default('トレッキングカスタム', exports.ALL_BRANDS.Inkline, 2, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('トレッキングライト', exports.ALL_BRANDS.Inkline, 2, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('ホワイトアローズ', exports.ALL_BRANDS.Takoroka, 2, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('ラバーソール チェリー', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.stealth_jump),
    new gear_1.default('ヌバックブーツ イエロー', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('モトクロスブーツ', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('ラバーソール ターコイズ', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('ロッキンホワイト', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('タコゾネスブーツ', exports.ALL_BRANDS.Cuttlegear, 2, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('ヒーローキックス レプリカ', exports.ALL_BRANDS.Cuttlegear, 2, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('パワードレッグス', exports.ALL_BRANDS.Amiibo, 2, exports.ALL_ABILITIES.ink_saver_main),
    new gear_1.default('サムライシューズ', exports.ALL_BRANDS.Amiibo, 2, exports.ALL_ABILITIES.special_duration_up),
    new gear_1.default('スクールローファー', exports.ALL_BRANDS.Amiibo, 2, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('タイショウのげた', exports.ALL_BRANDS.Famitsu, 2, exports.ALL_ABILITIES.run_speed_up),
    new gear_1.default('イカ娘シューズ', exports.ALL_BRANDS.TheSQUIDGIRL, 2, exports.ALL_ABILITIES.swim_speed_up),
    new gear_1.default('ウミウシレッド', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('グリッチョ グリーン 限定版', exports.ALL_BRANDS.Zekko, 2, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('トレッキングプロ', exports.ALL_BRANDS.Inkline, 2, exports.ALL_ABILITIES.bomb_sniffer),
    new gear_1.default('ベリベリホワイト', exports.ALL_BRANDS.SplashMob, 2, exports.ALL_ABILITIES.ink_saver_sub),
    new gear_1.default('ユデスパイカ', exports.ALL_BRANDS.Takoroka, 2, exports.ALL_ABILITIES.bomb_sniffer),
    new gear_1.default('クレイジーアローズ', exports.ALL_BRANDS.Takoroka, 2, exports.ALL_ABILITIES.stealth_jump),
    new gear_1.default('ヌバックブーツ レッド', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('モトクロス ソリッドブルー', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.ink_resistance_up),
    new gear_1.default('アーマーブーツ レプリカ', exports.ALL_BRANDS.Cuttlegear, 2, exports.ALL_ABILITIES.quick_respawn),
    new gear_1.default('アイスダウンブーツ', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.stealth_jump),
    new gear_1.default('イカヤキチップ', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.defence_up),
    new gear_1.default('ウミウシブルー', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.special_charge_up),
    new gear_1.default('シャークモカシン', exports.ALL_BRANDS.SplashMob, 2, exports.ALL_ABILITIES.bomb_range_up),
    new gear_1.default('ジョーズモカシン', exports.ALL_BRANDS.SplashMob, 2, exports.ALL_ABILITIES.ink_recovery_up),
    new gear_1.default('ミルキーダウンブーツ', exports.ALL_BRANDS.Tentatk, 2, exports.ALL_ABILITIES.quick_super_jump),
    new gear_1.default('レアスパイカ', exports.ALL_BRANDS.Takoroka, 2, exports.ALL_ABILITIES.ink_resistance_up),
    new gear_1.default('レイニーシャボン', exports.ALL_BRANDS.Inkline, 2, exports.ALL_ABILITIES.damage_up),
    new gear_1.default('ロッキンイエロー', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.special_saver),
    new gear_1.default('ロッキンチェリー', exports.ALL_BRANDS.Rockenberg, 2, exports.ALL_ABILITIES.bomb_sniffer),
];
