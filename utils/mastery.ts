import save from '../save.json';
import { SKILLS } from './data';
import totalItems from './items';

export function calculateMonsters() {
    const total = save.monsterStats.length - 2;
    const slain = save.monsterStats.reduce((total, stat) => stat.stats[2] > 0 ? total + 1 : total, 0);

    return Math.floor(slain / total * 100);
}

export function calculatePets() {
    const total = save.petUnlocked.length - 3;
    const unlocked = save.petUnlocked.filter(Boolean).length
    return Math.floor(unlocked / total * 100);
}

export function calculateItems() {
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

export function calculateSkills() {
    const totalLevel = Object.keys(SKILLS).length * 99;
    const skillsTotal = save.skillLevel.reduce((acc, level) => acc + level, 0);

    return Math.floor(skillsTotal / totalLevel * 100);
}

export function calculateMastery() {
    const masteryArray = Object.values(save.MASTERY);
    return xp_to_level(12905720)

    // const percentagePerSkill = masteryArray.map(skill => {
    //     const totalLevels = skill.xp.length * 99;
    //     console.log('New skill');

    //     return Math.floor(((skill.xp.reduce((acc, xp) => {
    //         console.log(Math.min(99, xp_to_level(xp)))
    //         return acc + Math.min(99, xp_to_level(xp));
    //     }, 0)) / totalLevels) * 100);
    // });

    // return percentagePerSkill.reduce((a, b) => a + b) / masteryArray.length;
}

function equate(xp: number) {
    return Math.floor(xp + 300 * Math.pow(2, xp / 7));
}

function level_to_xp(level: number) {
    var xp = 0;
    for (var i = 1; i < level; i++) xp += equate(i);
    return Math.floor(xp / 4);
}

function xp_to_level(xp: number, level = 1) {
    while (level_to_xp(level) < xp) level++;
    return level;
}
