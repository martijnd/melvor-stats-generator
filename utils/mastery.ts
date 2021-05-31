import { SKILLS } from './data';
import { ISave } from './ISave';
import totalItems from './items';

function calculateMonsters(save: ISave) {
    const total = save.monsterStats.length - 2;
    const slain = save.monsterStats.reduce((total, stat) => stat.stats[2] > 0 ? total + 1 : total, 0);

    return Math.floor(slain / total * 100);
}

function calculatePets(save: ISave) {
    const total = save.petUnlocked.length - 3;
    const unlocked = save.petUnlocked.filter(Boolean).length
    
    return Math.floor(unlocked / total * 100);
}

function calculateItems(save: ISave) {
    let itemsFound = 0;
    let itemsToIgnore = 0;
    
    for (let i = 0; i < save.itemStats.length; i++) {
        if (save.itemStats[i].stats[0] > 0 && !totalItems[i].ignoreCompletion) {
            itemsFound++;
        }
        if (totalItems[i].ignoreCompletion) {
            itemsToIgnore++;
        }
    }

    return Math.floor(itemsFound / (totalItems.length - itemsToIgnore) * 100);
}

function calculateSkills(save: ISave) {
    const totalLevel = Object.keys(SKILLS).length * 99;
    const skillsTotal = save.skillLevel.reduce((acc, level) => acc + level, 0);

    return Math.floor(skillsTotal / totalLevel * 100);
}

function calculateMastery(save: ISave) {
    const masteryArray = Object.values(save.MASTERY);
    const totalLevel = masteryArray.reduce((acc, skill) => acc + skill.xp.length * 99, 0);
    const totalPerSkill = masteryArray.reduce((acc, skill) => acc + skill.xp.reduce((acc, xp) => acc + Math.min(99, xpToLevel(xp)), 0), 0);

    return Math.floor(totalPerSkill / totalLevel * 100);
}

function levelToXp(level: number) {
    const xp = Array(level).fill(null).reduce((total: number, _, i) => total + Math.floor(i + 300 * Math.pow(2, i / 7)), 0);

    return Math.floor(xp / 4);
}

function xpToLevel(xp: number) {
    let level = 1;

    while (levelToXp(level + 1) < xp + 1)
        level++;

    return level;
};

export default function (save: ISave) {
    const skills = calculateSkills(save);
    const mastery = calculateMastery(save);
    const items = calculateItems(save);
    const monsters = calculateMonsters(save);
    const pets = calculatePets(save);

    const total = Math.floor((skills + mastery + items + monsters + pets) / 5);

    return {
        skills,
        mastery,
        items,
        monsters,
        pets,
        total
    }
}