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
    const totalLevel = masteryArray.map(skill => skill.xp.length * 99).reduce((a, b) => a + b);
    const totalPerSkill = masteryArray.map(skill => skill.xp.reduce((acc, xp) => acc + Math.min(99, xp_to_level(xp)), 0)).reduce((a, b) => a + b);

    return Math.floor(totalPerSkill / totalLevel * 100);
}

function equate(xp: number) {
    return Math.floor(xp + 300 * Math.pow(2, xp / 7));
}

function level_to_xp(level: number) {
    var xp = 0;
    for (var i = 1; i < level; i++) xp += equate(i);
    return Math.floor(xp / 4);
}

function xp_to_level(xp: number) {
    var level = 1;

    while (level_to_xp(level + 1) < xp + 1)
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