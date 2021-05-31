export interface Bank {
    id: number;
    qty: number;
    tab: number;
    sellsFor: number;
    locked: boolean;
    stackValue: number;
}

export interface StatsGeneral {
    stat: string;
    id: string;
    count: number;
}

export interface StatsWoodcutting {
    stat: string;
    id: string;
    count: number;
}

export interface StatsFiremaking {
    stat: string;
    id: string;
    count: number;
}

export interface StatsFishing {
    stat: string;
    id: string;
    count: number;
}

export interface CookingMastery {
    mastery: number;
    masteryXP: number;
}

export interface StatsCooking {
    stat: string;
    id: string;
    count: number;
}

export interface StatsMining {
    stat: string;
    id: string;
    count: number;
}

export interface StatsSmithing {
    stat: string;
    id: string;
    count: number;
}

export interface BaseStats {
    attackBonus: number[];
    defenceBonus: number;
    strengthBonus: number;
    damageReduction: number;
    attackBonusRanged: number;
    defenceBonusRanged: number;
    strengthBonusRanged: number;
    attackBonusMagic: number;
    defenceBonusMagic: number;
    damageBonusMagic: number;
}

export interface Player {
    hitpoints: number;
    combatLevels: number[];
    baseStats: BaseStats;
    baseAttackSpeed: number;
    attackStyleBonusAccuracy: number;
    attackStyleBonusStrength: number;
    slayerAreaEffectNegationPercent: number;
    slayerAreaEffectNegationFlat: number;
    hasSpecialAttack: boolean;
    specialAttackID: number[];
    stunned: boolean;
    stunTurns: number;
    sleep: boolean;
    sleepTurns: number;
    attackSpeedDebuff: number;
    attackSpeedDebuffTurns: number;
    burnDebuff: number;
    activeDebuffs: boolean;
    debuffTurns: number;
    decreasedAccuracy: number;
    afflictedStacks: number;
    markOfDeath: boolean;
    markOfDeathTurns: number;
    markOfDeathStacks: number;
    meleeEvasionDebuff: number;
    rangedEvasionDebuff: number;
    magicEvasionDebuff: number;
}

export interface Enemy {
    activeBuffs: boolean;
    buffTurns: number;
    increasedMeleeEvasion: number;
    increasedRangedEvasion: number;
    increasedMagicEvasion: number;
    reflectMelee: number;
    reflectRanged: number;
    reflectMagic: number;
    attackSpeedDebuff: number;
    attackSpeedDebuffTurns: number;
    decreasedMeleeEvasion: number;
    decreasedRangedEvasion: number;
    decreasedMagicEvasion: number;
    decreasedAccuracy: number;
    isBleeding: boolean;
    isCursed: boolean;
    curseTurnsLeft: number;
    extraDamageMultiplier: number;
    sleep: boolean;
    maximumAttackRoll: number;
    maximumDefenceRoll: number;
    maximumRangedDefenceRoll: number;
    maximumMagicDefenceRoll: number;
    damageReduction: number;
    baseDamageReduction: number;
    increasedDamageReduction?: any;
    sleepTurns: number;
    hasPassive: boolean;
    passiveID: any[];
    intoTheMist: boolean;
    increasedReflectDamagePercent: number;
    isDead: boolean;
    gang: number;
    decreasedMaxHitPercent: number;
    increasedHitpointRegeneration: number;
    decreasedMaxHitpointsPercent: number;
    increasedMaxHitpointsPercent: number;
    decreasedGlobalAccuracy: number;
    increasedMaxHitPercent: number;
    increasedGlobalAccuracy: number;
    increasedAttackSpeed: number;
    increasedLifesteal: number;
    stunImmunity: number;
    freezeImmunity: number;
    attackSpeed: number;
    id: number;
    attackType: number;
    maxHitpoints: number;
    attackLevel: number;
    strengthLevel: number;
    defenceLevel: number;
    rangedLevel: number;
    magicLevel: number;
    attackBonus: number;
    strengthBonus: number;
    defenceBonus: number;
    attackBonusRanged: number;
    strengthBonusRanged: number;
    defenceBonusRanged: number;
    attackBonusMagic: number;
    damageBonusMagic: number;
    defenceBonusMagic: number;
    stunned: boolean;
    stunTurns: number;
    hasSpecialAttack: boolean;
    specialAttackID: number[];
    specialAttackChances: number[];
    effectiveAttackLevel: number;
    effectiveStrengthLevel: number;
    maximumStrengthRoll: number;
    effectiveDefenceLevel: number;
    effectiveRangedDefenceLevel: number;
    effectiveMagicDefenceLevel: number;
    baseAttackSpeed: number;
    lifesteal: number;
    hitpoints: number;
}

export interface CombatData {
    player: Player;
    enemy: Enemy;
}

export interface EquippedFood {
    itemID: number;
    qty: number;
}

export interface StatsCombat {
    stat: string;
    id: string;
    count: number;
}

export interface FarmingMastery {
    mastery: number;
    masteryXP: number;
}

export interface GlovesTracker {
    name: string;
    isActive: boolean;
    remainingActions: number;
}

export interface RockData {
    maxHP: number;
    damage: number;
    depleted: boolean;
    respawnTimer?: any;
}

export interface StatsThieving {
    stat: string;
    id: string;
    count: number;
}

export interface StatsFarming {
    stat: string;
    id: string;
    count: number;
}

export interface StatsFletching {
    stat: string;
    id: string;
    count: number;
}

export interface StatsCrafting {
    stat: string;
    id: string;
    count: number;
}

export interface StatsRunecrafting {
    stat: string;
    id: string;
    count: number;
}

export interface SlayerTask {
    monsterID: number;
    count: number;
    tier: number;
    extended: boolean;
}

export interface MonsterStat {
    monsterID: number;
    stats: number[];
}

export interface ItemStat {
    itemID: number;
    stats: number[];
}

export interface Patch {
    type: string;
    seedID: number;
    compost: number;
    timePlanted: any;
    setInterval: number;
    timeout?: number;
    hasGrown: boolean;
    unlocked: boolean;
    gloop: boolean;
    level: number;
    cost: number;
}

export interface NewFarmingArea {
    id: number;
    areaName: string;
    patches: Patch[];
}

export interface EquipmentSet {
    equipment: number[];
    ammo: number;
}

export interface HerbloreBonus {
    itemID: number;
    bonus: number[];
    charges: number;
}

export interface StatsHerblore {
    stat: string;
    id: string;
    count: number;
}

export interface Offline {
    skill?: any;
    action?: any;
    timestamp?: any;
}

export interface TutorialTip {
    activated: boolean;
}

export interface Inventory {
    id: number;
    qty: number;
}

export interface Food {
    itemID: number;
    qty: number;
}

export interface GolbinRaidHistory {
    skillLevels: number[];
    equipment: number[];
    ammo: number;
    inventory: Inventory[];
    food: Food;
    wave: number;
    kills: number;
    timestamp: number;
    raidCoinsEarned: number;
}

export interface DefaultItemTab {
    itemID: number;
    tab: number;
}

export interface Bank2 {
    bankBorder: number;
    currentEquipDefault: boolean;
    defaultBankSort: number;
    defaultItemTab: DefaultItemTab[];
}

export interface Mastery {
    hideMaxLevel: boolean;
    confirmationCheckpoint: boolean;
}

export interface General {
    pushNotificationOffline: boolean;
    pushNotificationFarming: boolean;
}

export interface SETTINGS {
    bank: Bank2;
    mastery: Mastery;
    general: General;
}

export interface MASTERY {
   [key: string]: {
       pool: number,
       xp: number[]
   }
}

export interface ScheduledPushNotifications {
    farming0: string;
    platform: string;
    farming1: string;
    offlineSkill: string;
}

export interface Equipment {
}

export interface Player2 {
}

export interface RandomModifiers {
    equipment: Equipment;
    player: Player2;
}

export interface ISave {
    firstTime: number;
    username: string;
    nameChanges: number;
    gp: number;
    currentBankUpgrade: number;
    skillXP: number[];
    skillLevel: number[];
    nextLevelProgress: number[];
    treeMasteryData: any[];
    currentAxe: number;
    treeCutLimit: number;
    bank: Bank[];
    bankMax: number;
    ignoreBankFull: boolean;
    statsGeneral: StatsGeneral[];
    statsWoodcutting: StatsWoodcutting[];
    logsMastery: any[];
    statsFiremaking: StatsFiremaking[];
    fishMastery: any[];
    currentRod: number;
    statsFishing: StatsFishing[];
    cookingMastery: CookingMastery[];
    upgradedToRange: boolean;
    statsCooking: StatsCooking[];
    defaultPageOnLoad: number;
    miningOreMastery: any[];
    statsMining: StatsMining[];
    currentPickaxe: number;
    statsSmithing: StatsSmithing[];
    levelUpScreen: number;
    gameUpdateNotification: string;
    equippedItems: number[];
    attackStyle: number;
    combatData: CombatData;
    currentCombatFood: number;
    equippedFood: EquippedFood[];
    smithingMastery: any[];
    statsCombat: StatsCombat[];
    continueThievingOnStun: boolean;
    thievingMastery: any[];
    farmingMastery: FarmingMastery[];
    showItemNotify: number;
    glovesTracker: GlovesTracker[];
    currentCookingFire: number;
    rockData: RockData[];
    fletchingMastery: any[];
    craftingMastery: any[];
    ammo: number;
    myBankVersion: number;
    statsThieving: StatsThieving[];
    statsFarming: StatsFarming[];
    statsFletching: StatsFletching[];
    statsCrafting: StatsCrafting[];
    autoRestartDungeon: boolean;
    autoSaveCloud: boolean;
    selectedSpell: number;
    runecraftingMastery: any[];
    darkMode: boolean;
    buyQty: number;
    itemLog: any[];
    dungeonCompleteCount: number[];
    sellQty: number;
    statsRunecrafting: StatsRunecrafting[];
    showGPNotify: boolean;
    enableAccessibility: boolean;
    accountGameVersion: number;
    prayerPoints: number;
    slayerCoins: number;
    slayerTask: SlayerTask[];
    showEnemySkillLevels: boolean;
    monsterStats: MonsterStat[];
    itemStats: ItemStat[];
    confirmationOnClose: boolean;
    herbloreMastery: any[];
    newFarmingAreas: NewFarmingArea[];
    equipmentSets: EquipmentSet[];
    selectedEquipmentSet: number;
    currentAutoEat: number;
    equipmentSetsPurchased: any[];
    herbloreBonuses: HerbloreBonus[];
    autoPotion: boolean;
    showHPNotify: boolean;
    statsHerblore: StatsHerblore[];
    offline: Offline;
    selectedAttackStyle: number[];
    showCommas: boolean;
    showVirtualLevels: boolean;
    formatNumberSetting: number;
    tutorialTips: TutorialTip[];
    saveTimestamp: number;
    secretAreaUnlocked: boolean;
    equipmentSwapPurchased: boolean;
    godUpgrade: any[];
    lockedItems: number[];
    showSaleNotifications: boolean;
    showShopNotifications: boolean;
    pauseOfflineActions: boolean;
    showCombatMinibar: boolean;
    showCombatMinibarCombat: boolean;
    activeAurora?: any;
    currentGamemode: number;
    petUnlocked: boolean[];
    showSkillMinibar: boolean;
    saveStateBeforeRaid: any[];
    golbinRaidHistory: GolbinRaidHistory[];
    golbinRaidStats: number[];
    raidCoins: number;
    disableAds: boolean;
    SETTINGS: SETTINGS;
    MASTERY: MASTERY;
    useCombinationRunes: boolean;
    firstTimeLoad: boolean;
    slayerTaskCompletion: number[];
    autoSlayerUnlocked: boolean;
    autoSlayer: boolean;
    itemsAlreadyFound: number[];
    shopItemsPurchased: any[][];
    titleNewsID: string[];
    chosenAgilityObstacles: number[];
    skillsUnlocked: any[];
    agilityObstacleBuildCount: number[];
    agilityPassivePillarActive: number;
    scheduledPushNotifications: ScheduledPushNotifications;
    randomModifiers: RandomModifiers;
}