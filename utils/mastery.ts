import { SKILLS, findLevelByXp } from './data';
import { ISave } from './ISave';
import totalItems from './items';
import totalMonsters from './monsters';

function calculateMonsters(save: ISave) {
    let slain = 0;
    let monstersTotal = totalMonsters.length;
    for (let i = 0; i < save.monsterStats.length; i++) {
    if (save.monsterStats[i].stats[2] > 0 && !totalMonsters[i].ignoreCompletion)
            slain++;
        if (totalMonsters[i].ignoreCompletion)
            monstersTotal -= 1;
    }

    return Math.min(100, Math.floor(slain / monstersTotal * 100));
}

function calculatePets(save: ISave) {
    const total = save.petUnlocked.length - 3;
    const unlocked = save.petUnlocked.filter(Boolean).length

    return Math.min(100, Math.floor(unlocked / total * 100));
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
    const totalPerSkill = masteryArray.reduce((acc, skill) => acc + skill.xp.reduce((acc, xp) => acc + Math.min(99, findLevelByXp(xp)), 0), 0);

    return Math.floor(totalPerSkill / totalLevel * 100);
}

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