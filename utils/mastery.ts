import save from '../save.json';
import { SKILLS } from './data';
import totalItems from './items';

function calculateMonsters() {
    const total = save.monsterStats.length - 2;
    const slain = save.monsterStats.reduce((total, stat) => stat.stats[2] > 0 ? total + 1 : total, 0);

    return Math.floor(slain / total * 100);
}

function calculatePets() {
    const total = save.petUnlocked.length - 3;
    const unlocked = save.petUnlocked.filter(Boolean).length
    
    return Math.floor(unlocked / total * 100);
}

function calculateItems() {
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

function calculateSkills() {
    const totalLevel = Object.keys(SKILLS).length * 99;
    const skillsTotal = save.skillLevel.reduce((acc, level) => acc + level, 0);

    return Math.floor(skillsTotal / totalLevel * 100);
}

function calculateMastery() {
    const masteryArray = Object.values(save.MASTERY);
    const totalLevel = masteryArray.reduce((acc, skill) => acc + skill.xp.length * 99, 0);
    const totalPerSkill = masteryArray.reduce((acc, skill) => acc + skill.xp.reduce((acc, xp) => acc + Math.min(99, xpToLevel(xp)), 0), 0);

    return Math.floor(totalPerSkill / totalLevel * 100);
}

function levelToXp(level: number) {
    const xp = Array(level).fill(null).reduce((total, _, i) => total + Math.floor(i + 300 * Math.pow(2, i / 7)), 0);

    return Math.floor(xp / 4);
}

function xpToLevel(xp: number) {
    let level = 1;

    while (levelToXp(level + 1) < xp + 1)
        level++;

    return level;
};

export default function () {
    const skills = calculateSkills();
    const mastery = calculateMastery();
    const items = calculateItems();
    const monsters = calculateMonsters();
    const pets = calculatePets();

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