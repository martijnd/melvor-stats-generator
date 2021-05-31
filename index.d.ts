declare module namespace {

    export interface MonsterStat {
        monsterID: number;
        stats: number[];
    }

    export interface RootObject {
        skillXP: number[];
        monsterStats: MonsterStat[];
        lockedItems: number[];
        petUnlocked: boolean[];
        MASTERY: any[];
        itemsAlreadyFound: number[];
        shopItemsPurchased: any[][];
    }

}

