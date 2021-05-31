var statsGeneral = [
  { stat: "Total GP earnt", id: "#stat-general-gp-earnt", count: 0 },
  { stat: "Total items sold", id: "#stat-general-items-sold", count: 0 },
  {
    stat: "Attempts at username changes",
    id: "#stat-general-name-changes",
    count: 0,
  },
];
var statsCombat = [
  { stat: "Monsters killed", id: "#stat-combat-monsters-killed", count: 0 },
  { stat: "Damage Dealt", id: "#stat-combat-damage-dealt", count: 0 },
  { stat: "Damage Taken", id: "#stat-combat-damage-taken", count: 0 },
  { stat: "Attacks missed", id: "#stat-combat-attacks-missed", count: 0 },
  { stat: "Deaths", id: "#stat-combat-deaths", count: 0 },
  { stat: "Food Consumed", id: "#stat-combat-food-eaten", count: 0 },
  {
    stat: "Health gained from food",
    id: "#stat-combat-health-from-food",
    count: 0,
  },
];
var statsWoodcutting = [
  {
    stat: "Total trees cut / Environmental Impact",
    id: "#stat-woodcutting-trees-cut",
    count: 0,
  },
  { stat: "Logs sold", id: "#stat-woodcutting-logs-sold", count: 0 },
  {
    stat: "GP earnt from logs sold",
    id: "#stat-woodcutting-gp-earnt-logs",
    count: 0,
  },
  {
    stat: "Seconds spent cutting",
    id: "#stat-woodcutting-seconds-spent-cutting",
    count: 0,
  },
];
var statsFishing = [
  { stat: "Fish caught", id: "#stat-fishing-fish-caught", count: 0 },
  { stat: "Fish failed to catch", id: "#stat-fishing-fish-failed", count: 0 },
  {
    stat: "Seconds spent fishing",
    id: "#stat-fishing-seconds-spent",
    count: 0,
  },
  { stat: "fish sold", id: "#stat-fishing-fish-sold", count: 0 },
  { stat: "GP earnt from fishing", id: "#stat-fishing-gp-earnt", count: 0 },
  { stat: "Junk caught", id: "#stat-fishing-junk-caught", count: 0 },
  {
    stat: "Special Items caught",
    id: "#stat-fishing-special-caught",
    count: 0,
  },
];
var statsFiremaking = [
  { stat: "Logs burnt", id: "#stat-firemaking-logs-burnt", count: 0 },
  { stat: "GP Burnt", id: "#stat-firemaking-gp-burnt", count: 0 },
  {
    stat: "Seconds spent burning",
    id: "#stat-firemaking-seconds-spent-burning",
    count: 0,
  },
  {
    stat: "Bonfire bonus XP",
    id: "#stat-firemaking-bonfire-bonus-xp",
    count: 0,
  },
];
var statsCooking = [
  { stat: "Food cooked", id: "#stat-cooking-food-cooked", count: 0 },
  { stat: "Food burnt", id: "#stat-cooking-food-burnt", count: 0 },
  { stat: "Seconds spent burning", id: "#stat-cooking-time-spent", count: 0 },
];
var statsMining = [
  { stat: "Ores mined", id: "#stat-mining-ores-mined", count: 0 },
  { stat: "Empty ores miend", id: "#stat-mining-empty-ore", count: 0 },
];
var statsSmithing = [
  { stat: "Bars smithed", id: "#stat-smithing-bars-smelted", count: 0 },
  { stat: "Items smelted", id: "#stat-smithing-items-smithed", count: 0 },
  {
    stat: "Seconds spent smelting",
    id: "#stat-smithing-seconds-smelting",
    count: 0,
  },
  {
    stat: "Seconds spend smithing",
    id: "#stat-smithing-seconds-smithing",
    count: 0,
  },
];
var statsThieving = [
  {
    stat: "Total successful pickpockets",
    id: "#stat-thieving-successful-pickpockets",
    count: 0,
  },
  {
    stat: "Total failed pickpockets",
    id: "#stat-thieving-failed-pickpockets",
    count: 0,
  },
  {
    stat: "Damage taken from NPCs",
    id: "#stat-thieving-damage-taken",
    count: 0,
  },
  {
    stat: "Seconds spent stunned",
    id: "#stat-thieving-time-stunned",
    count: 0,
  },
];
var statsFarming = [
  {
    stat: "Total allotments harvested",
    id: "#stat-farming-allotments-harvested",
    count: 0,
  },
  { stat: "Compost used", id: "#stat-farming-compost-used", count: 0 },
  {
    stat: "Crops died due to intentional neglect",
    id: "#stat-farming-crops-died",
    count: 0,
  },
  {
    stat: "Seconds spent waiting for crops to grow",
    id: "#stat-farming-time-spent",
    count: 0,
  },
  {
    stat: "Seconds spent waiting for crops to die",
    id: "#stat-farming-time-spent-die",
    count: 0,
  },
  { stat: "Weird Gloop Used", id: "#stat-farming-gloop-used", count: 0 },
];
var statsFletching = [
  {
    stat: "Arrow Shafts created",
    id: "#stat-fletching-arrow-shafts",
    count: 0,
  },
  { stat: "Items fletched", id: "#stat-fletching-items-fletched", count: 0 },
  { stat: "Time spent fletching", id: "#stat-fletching-time-spent", count: 0 },
];
var statsCrafting = [
  { stat: "Items crafted", id: "#stat-crafting-items-crafted", count: 0 },
  { stat: "Time spent crafting", id: "#stat-crafting-time-spent", count: 0 },
];
var statsRunecrafting = [
  { stat: "Items crafted", id: "#stat-runecrafting-items-crafted", count: 0 },
  {
    stat: "Time spent crafting",
    id: "#stat-runecrafting-time-spent",
    count: 0,
  },
];
var statsHerblore = [
  { stat: "Potions made", id: "#stat-herblore-potions-made", count: 0 },
  { stat: "Time spent brewing", id: "#stat-herblore-time-spent", count: 0 },
  { stat: "Potions used", id: "#stat-herblore-potions-used", count: 0 },
  { stat: "Charges used", id: "#stat-herblore-charges-used", count: 0 },
];
var completionStats = 0;
function updateStats(skill = null) {
  if (skill === null) {
    updateStats("general");
    updateStats("woodcutting");
    updateStats("fishing");
    updateStats("firemaking");
    updateStats("cooking");
    updateStats("mining");
    updateStats("smithing");
    updateStats("combat");
    updateStats("thieving");
    updateStats("farming");
    updateStats("fletching");
    updateStats("crafting");
    updateStats("runecrafting");
    updateStats("herblore");
  } else if (skill === "general") {
    for (let i = 0; i < statsGeneral.length; i++) {
      $(statsGeneral[i].id).text(numberWithCommas(statsGeneral[i].count));
      let totalLevel = 0;
      let totalXP = 0;
      for (let i = 0; i < Object.keys(CONSTANTS.skill).length; i++)
        totalLevel += Math.min(skillLevel[i], 99);
      let totalMasteryStat = arrSum(currentMastery);
      totalXP = arrSum(skillXP);
      $("#stat-general-total-skill").text(numberWithCommas(totalLevel));
      $("#stat-general-total-xp").text(numberWithCommas(Math.floor(totalXP)));
      $("#stat-general-total-mastery").text(numberWithCommas(totalMasteryStat));
    }
  } else if (skill === "combat") {
    for (let i = 0; i < statsCombat.length; i++) {
      $(statsCombat[i].id).text(numberWithCommas(statsCombat[i].count));
    }
  } else if (skill === "woodcutting") {
    for (let i = 0; i < statsWoodcutting.length; i++) {
      if (i === 3) {
        $(statsWoodcutting[i].id).text(
          numberWithCommas(Math.floor(statsWoodcutting[i].count))
        );
      } else {
        $(statsWoodcutting[i].id).text(
          numberWithCommas(statsWoodcutting[i].count)
        );
      }
    }
  } else if (skill === "fishing") {
    for (let i = 0; i < statsFishing.length; i++) {
      if (i === 2) {
        $(statsFishing[i].id).text(
          numberWithCommas(Math.floor(statsFishing[i].count))
        );
      } else {
        $(statsFishing[i].id).text(numberWithCommas(statsFishing[i].count));
      }
    }
  } else if (skill === "firemaking") {
    for (let i = 0; i < statsFiremaking.length; i++) {
      if (i === 2) {
        $(statsFiremaking[i].id).text(
          numberWithCommas(Math.floor(statsFiremaking[i].count))
        );
      } else {
        $(statsFiremaking[i].id).text(
          numberWithCommas(statsFiremaking[i].count)
        );
      }
    }
  } else if (skill === "cooking") {
    for (let i = 0; i < statsCooking.length; i++) {
      if (i === 2) {
        $(statsCooking[i].id).text(
          numberWithCommas(Math.floor(statsCooking[i].count))
        );
      } else {
        $(statsCooking[i].id).text(numberWithCommas(statsCooking[i].count));
      }
    }
  } else if (skill === "mining") {
    for (let i = 0; i < statsMining.length; i++) {
      $(statsMining[i].id).text(numberWithCommas(statsMining[i].count));
    }
  } else if (skill === "smithing") {
    for (let i = 0; i < 2; i++) {
      $(statsSmithing[i].id).text(numberWithCommas(statsSmithing[i].count));
    }
    $(statsSmithing[3].id).text(
      numberWithCommas(
        Math.floor(statsSmithing[2].count + statsSmithing[3].count)
      )
    );
  } else if (skill === "thieving") {
    for (let i = 0; i < 3; i++) {
      $(statsThieving[i].id).text(numberWithCommas(statsThieving[i].count));
    }
    $(statsThieving[3].id).text(
      numberWithCommas(Math.floor(statsThieving[3].count / 1000))
    );
  } else if (skill === "farming") {
    if (statsFarming[5] === undefined) {
      let count =
        itemStats[CONSTANTS.item.Weird_Gloop].stats[0] -
        itemStats[CONSTANTS.item.Weird_Gloop].stats[1];
      for (let i = 0; i < bank.length; i++) {
        if (bank[i].id === CONSTANTS.item.Weird_Gloop) {
          count -= bank[i].qty;
          break;
        }
      }
      statsFarming.push({
        stat: "Weird Gloop Used",
        id: "#stat-farming-gloop-used",
        count: count,
      });
    }
    for (let i = 0; i < statsFarming.length; i++) {
      $(statsFarming[i].id).text(numberWithCommas(statsFarming[i].count));
    }
  } else if (skill === "fletching") {
    for (let i = 0; i < statsFletching.length; i++) {
      if (i === 2) {
        $(statsFletching[i].id).text(
          numberWithCommas(Math.floor(statsFletching[i].count / 1000))
        );
      } else {
        $(statsFletching[i].id).text(numberWithCommas(statsFletching[i].count));
      }
    }
  } else if (skill === "crafting") {
    for (let i = 0; i < statsCrafting.length; i++) {
      if (i === 1) {
        $(statsCrafting[i].id).text(
          numberWithCommas(Math.floor(statsCrafting[i].count / 1000))
        );
      } else {
        $(statsCrafting[i].id).text(numberWithCommas(statsCrafting[i].count));
      }
    }
  } else if (skill === "runecrafting") {
    for (let i = 0; i < statsRunecrafting.length; i++) {
      if (i === 1) {
        $(statsRunecrafting[i].id).text(
          numberWithCommas(Math.floor(statsRunecrafting[i].count / 1000))
        );
      } else {
        $(statsRunecrafting[i].id).text(
          numberWithCommas(statsRunecrafting[i].count)
        );
      }
    }
  } else if (skill === "herblore") {
    for (let i = 0; i < statsHerblore.length; i++) {
      if (i === 1) {
        $(statsHerblore[i].id).text(
          numberWithCommas(Math.floor(statsHerblore[i].count / 1000))
        );
      } else {
        $(statsHerblore[i].id).text(numberWithCommas(statsHerblore[i].count));
      }
    }
  }
}
function convertItemLog() {
  if (itemStats[0].stats === undefined) {
    let newItemStats = [];
    for (let i = 0; i < itemStats.length; i++) {
      newItemStats.push({
        itemID: i,
        stats: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      });
      newItemStats[i].stats[0] = itemStats[i].timesFound;
      newItemStats[i].stats[1] = itemStats[i].timesSold;
      newItemStats[i].stats[2] = itemStats[i].gpFromSale;
      newItemStats[i].stats[3] = itemStats[i].deathCount;
      newItemStats[i].stats[4] = itemStats[i].damageTaken;
      newItemStats[i].stats[5] = itemStats[i].damageDealt;
      newItemStats[i].stats[6] = itemStats[i].missedAttacks;
      newItemStats[i].stats[7] = itemStats[i].timesEaten;
      newItemStats[i].stats[8] = itemStats[i].healedFor;
      newItemStats[i].stats[9] = itemStats[i].totalAttacks;
      newItemStats[i].stats[10] = itemStats[i].amountUsedInCombat;
      newItemStats[i].stats[11] = itemStats[i].timeWaited;
      newItemStats[i].stats[12] = itemStats[i].timesDied;
      newItemStats[i].stats[13] = itemStats[i].timesGrown;
      newItemStats[i].stats[14] = itemStats[i].harvestAmount;
      newItemStats[i].stats[15] = itemStats[i].enemiesKilled;
      newItemStats[i].stats[16] = itemStats[i].timesOpened;
    }
    itemStats = newItemStats;
  }
}
function convertMonsterLog() {
  if (monsterStats.length) {
    if (monsterStats[0].stats === undefined) {
      let newMonsterStats = [];
      for (let i = 0; i < monsterStats.length; i++) {
        newMonsterStats.push({
          monsterID: i,
          stats: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        });
        newMonsterStats[i].stats[0] = monsterStats[i].damageDealtToPlayer;
        newMonsterStats[i].stats[1] = monsterStats[i].damageTakenFromPlayer;
        newMonsterStats[i].stats[2] = monsterStats[i].killedByPlayer;
        newMonsterStats[i].stats[3] = monsterStats[i].killedPlayer;
        newMonsterStats[i].stats[4] = monsterStats[i].hitsToPlayer;
        newMonsterStats[i].stats[5] = monsterStats[i].hitsFromPlayer;
        newMonsterStats[i].stats[6] = monsterStats[i].enemyMissed;
        newMonsterStats[i].stats[7] = monsterStats[i].playerMissed;
        newMonsterStats[i].stats[8] = monsterStats[i].seen;
        newMonsterStats[i].stats[9] = monsterStats[i].ranAway;
      }
      monsterStats = newMonsterStats;
    }
  }
}
function updateItemLog(item = null, quantity = 0) {
  if (itemStats.length) convertItemLog();
  for (let i = itemStats.length; i < items.length; i++) {
    itemStats.push({
      itemID: i,
      stats: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }
  if (item !== null) {
    itemStats[item].stats[0] += quantity;
  }
  updateCompletionLog();
}
function openItemLog() {
  if (tooltipInstances.itemLog !== undefined) {
    tooltipInstances.itemLog.forEach((instance) => {
      instance.destroy();
    });
  } else tooltipInstances.itemLog = [];
  tooltipInstances.itemLog.length = 0;
  let timesFound = "",
    ignoreCompletion = "",
    timesSold = "",
    gpFromSale = "",
    deathCount = "",
    damageTaken = "",
    damageDealt = "",
    missedAttacks = "",
    timesEaten = "",
    healedFor = "",
    totalAttacks = "",
    amountUsedInCombat = "",
    timeWaited = "",
    timesDied = "",
    timesGrown = "",
    harvestAmount = "",
    enemiesKilled = "",
    timesOpened = "";
  $("#itemlog-container").html("");
  for (let i = 0; i < itemStats.length; i++) {
    let itemTooltip;
    if (itemStats[i].stats[0] > 0) {
      timesFound =
        ignoreCompletion =
        timesSold =
        gpFromSale =
        deathCount =
        damageTaken =
        damageDealt =
        missedAttacks =
        timesEaten =
        healedFor =
        totalAttacks =
        amountUsedInCombat =
        timeWaited =
        timesDied =
        timesGrown =
        harvestAmount =
        enemiesKilled =
        timesOpened =
          "";
      if (items[i].ignoreCompletion)
        ignoreCompletion =
          "<br><span class='text-danger'>Item does not count towards completion.</span>";
      if (itemStats[i].stats[0] > 0)
        timesFound =
          "<br>Times Found: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[0]) +
          "</small>";
      if (itemStats[i].stats[1] > 0)
        timesSold =
          "<br>Quantity Sold: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[1]) +
          "</small>";
      if (itemStats[i].stats[2] > 0)
        gpFromSale =
          "<br>GP Gained from sales: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[2]) +
          "</small>";
      if (itemStats[i].stats[3] > 0)
        deathCount =
          "<br>Times lost due to death: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[3]) +
          "</small>";
      if (itemStats[i].stats[4] > 0)
        damageTaken =
          "<br>Damage Taken whilst Equipped: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[4]) +
          "</small>";
      if (itemStats[i].stats[5] > 0)
        damageDealt =
          "<br>Damage Dealt: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[5]) +
          "</small>";
      if (itemStats[i].stats[6] > 0)
        missedAttacks =
          "<br>Attacks Missed: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[6]) +
          "</small>";
      if (itemStats[i].stats[7] > 0)
        timesEaten =
          "<br>Times Eaten: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[7]) +
          "</small>";
      if (itemStats[i].stats[8] > 0)
        healedFor =
          "<br>Healed for: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[8]) +
          "</small>";
      if (itemStats[i].stats[9] > 0)
        totalAttacks =
          "<br>Total Attacks: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[9]) +
          "</small>";
      if (itemStats[i].stats[10] > 0)
        amountUsedInCombat =
          "<br>Amount used in combat: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[10]) +
          "</small>";
      if (itemStats[i].stats[11] > 0)
        timeWaited =
          "<br>Time spent waiting to grow: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[11]) +
          "</small>";
      if (itemStats[i].stats[12] > 0)
        timesDied =
          "<br>Crop deaths: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[12]) +
          "</small>";
      if (itemStats[i].stats[13] > 0)
        timesGrown =
          "<br>Successful grows: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[13]) +
          "</small>";
      if (itemStats[i].stats[14] > 0)
        harvestAmount =
          "<br>Amount harvested: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[14]) +
          "</small>";
      if (itemStats[i].stats[15] > 0)
        enemiesKilled =
          "<br>Enemies killed: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[15]) +
          "</small>";
      if (itemStats[i].stats[16] > 0)
        timesOpened =
          "<br>Opened: <small class='text-warning'>" +
          formatNumber(itemStats[i].stats[16]) +
          "</small>";
      $("#itemlog-container").append(
        '<img class="skill-icon-sm" id="item-log-img-' +
          i +
          '" src="' +
          getItemMedia(i) +
          '">'
      );
      itemTooltip =
        "<div class='text-center'>" +
        items[i].name +
        "<small class='text-info'> " +
        timesFound +
        timesSold +
        gpFromSale +
        totalAttacks +
        missedAttacks +
        damageDealt +
        damageTaken +
        enemiesKilled +
        amountUsedInCombat +
        timesEaten +
        healedFor +
        timesGrown +
        timesDied +
        timeWaited +
        harvestAmount +
        timesOpened +
        ignoreCompletion +
        "</small></div>";
      if (
        items[i].ignoreCompletion &&
        i !== CONSTANTS.item.Cape_of_Completion &&
        i !== CONSTANTS.item.Yellow_Party_Hat
      )
        $("#item-log-img-" + i).attr("onClick", "addItemToBank(" + i + ", 1);");
    } else {
      if (!items[i].ignoreCompletion) {
        $("#itemlog-container").append(
          '<img class="skill-icon-sm" id="item-log-img-' +
            i +
            '" src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg">'
        );
        itemTooltip = "<div class='text-center'>???</div>";
      }
    }
    const t = tippy("#item-log-img-" + i, {
      content: itemTooltip,
      placement: "bottom",
      allowHTML: true,
      interactive: false,
      animation: false,
    });
    tooltipInstances.itemLog = tooltipInstances.itemLog.concat(t);
  }
  $("#modal-item-log").modal("show");
}
function updateBankItemStats(itemID) {
  $("[id=bank-item-stats]").html();
  let timesFound = "",
    timesSold = "",
    gpFromSale = "",
    deathCount = "",
    damageTaken = "",
    damageDealt = "",
    missedAttacks = "",
    timesEaten = "",
    healedFor = "",
    totalAttacks = "",
    amountUsedInCombat = "",
    timeWaited = "",
    timesDied = "",
    timesGrown = "",
    harvestAmount = "",
    enemiesKilled = "",
    timesOpened = "";
  if (itemStats[itemID].stats[0] > 0)
    timesFound =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Times Found: </strong>" +
      numberWithCommas(itemStats[itemID].stats[0]) +
      "</h5>";
  if (itemStats[itemID].stats[1] > 0)
    timesSold =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Quantity Sold: </strong>" +
      numberWithCommas(itemStats[itemID].stats[1]) +
      "</h5>";
  if (itemStats[itemID].stats[2] > 0)
    gpFromSale =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>GP Gained from sales: </strong>" +
      numberWithCommas(itemStats[itemID].stats[2]) +
      "</h5>";
  if (itemStats[itemID].stats[3] > 0)
    deathCount =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Times lost due to death: </strong>" +
      numberWithCommas(itemStats[itemID].stats[3]) +
      "</h5>";
  if (itemStats[itemID].stats[4] > 0)
    damageTaken =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Damage Taken whilst Equipped: </strong>" +
      numberWithCommas(itemStats[itemID].stats[4]) +
      "</h5>";
  if (itemStats[itemID].stats[5] > 0)
    damageDealt =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Damage Dealt: </strong>" +
      numberWithCommas(itemStats[itemID].stats[5]) +
      "</h5>";
  if (itemStats[itemID].stats[6] > 0)
    missedAttacks =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Attacks Missed: </strong>" +
      numberWithCommas(itemStats[itemID].stats[6]) +
      "</h5>";
  if (itemStats[itemID].stats[7] > 0)
    timesEaten =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Times Eaten: </strong>" +
      numberWithCommas(itemStats[itemID].stats[7]) +
      "</h5>";
  if (itemStats[itemID].stats[8] > 0)
    healedFor =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Healed for: </strong>" +
      numberWithCommas(itemStats[itemID].stats[8]) +
      "</h5>";
  if (itemStats[itemID].stats[9] > 0)
    totalAttacks =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Total Attacks: </strong>" +
      numberWithCommas(itemStats[itemID].stats[9]) +
      "</h5>";
  if (itemStats[itemID].stats[10] > 0)
    amountUsedInCombat =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Amount used in combat: </strong>" +
      numberWithCommas(itemStats[itemID].stats[10]) +
      "</h5>";
  if (itemStats[itemID].stats[11] > 0)
    timeWaited =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Time spent waiting to grow: </strong>" +
      numberWithCommas(itemStats[itemID].stats[11]) +
      "</h5>";
  if (itemStats[itemID].stats[12] > 0)
    timesDied =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Crop deaths: </strong>" +
      numberWithCommas(itemStats[itemID].stats[12]) +
      "</h5>";
  if (itemStats[itemID].stats[13] > 0)
    timesGrown =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Successful grows: </strong>" +
      numberWithCommas(itemStats[itemID].stats[13]) +
      "</h5>";
  if (itemStats[itemID].stats[14] > 0)
    harvestAmount =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Amount harvested: </strong>" +
      numberWithCommas(itemStats[itemID].stats[14]) +
      "</h5>";
  if (itemStats[itemID].stats[15] > 0)
    enemiesKilled =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Enemies killed: </strong>" +
      numberWithCommas(itemStats[itemID].stats[15]) +
      "</h5>";
  if (itemStats[itemID].stats[16] > 0)
    timesOpened =
      "<h5 class='font-w400 font-size-sm text-combat-smoke m-1 mb-2'><strong>Opened: </strong>" +
      numberWithCommas(itemStats[itemID].stats[16]) +
      "</h5>";
  let stats =
    timesFound +
    timesSold +
    gpFromSale +
    totalAttacks +
    missedAttacks +
    damageDealt +
    damageTaken +
    enemiesKilled +
    amountUsedInCombat +
    timesEaten +
    healedFor +
    timesGrown +
    timesDied +
    timeWaited +
    harvestAmount +
    timesOpened;
  $("[id=bank-item-stats]").html(stats);
}
function openMonsterLog() {
  if (tooltipInstances.monsterLog !== undefined) {
    tooltipInstances.monsterLog.forEach((instance) => {
      instance.destroy();
    });
  } else tooltipInstances.monsterLog = [];
  tooltipInstances.monsterLog.length = 0;
  let damageDealtToPlayer = "",
    damageTakenFromPlayer = "",
    killedByPlayer = "",
    killedPlayer = "",
    hitsToPlayer = "",
    hitsFromPlayer = "",
    enemyMissed = "",
    playerMissed = "",
    seen = "",
    ranAway = "";
  $("#monsterlog-container").html("");
  for (let i = 0; i < monsterStats.length; i++) {
    let monsterTooltip;
    if (monsterStats[i].stats[2] > 0 && !MONSTERS[i].ignoreCompletion) {
      damageDealtToPlayer =
        damageTakenFromPlayer =
        killedByPlayer =
        killedPlayer =
        hitsToPlayer =
        hitsFromPlayer =
        enemyMissed =
        playerMissed =
        seen =
        ranAway =
          "";
      damageTakenFromPlayer =
        "<br>Total Damage Dealt to Monster: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[1]) +
        "</small>";
      damageDealtToPlayer =
        "<br>Total Damage Taken from Monster: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[0]) +
        "</small>";
      killedByPlayer =
        "<br>Times Slain: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[2]) +
        "</small>";
      killedPlayer =
        "<br>Times Killed by Monster: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[3]) +
        "</small>";
      hitsToPlayer =
        "<br>Successful hits by Monster: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[4]) +
        "</small>";
      hitsFromPlayer =
        "<br>Successful hits to Monster: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[5]) +
        "</small>";
      enemyMissed =
        "<br>Missed Attacks by Monster: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[6]) +
        "</small>";
      playerMissed =
        "<br>Missed Attacks to Monster: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[7]) +
        "</small>";
      seen =
        "<br>Times Fought: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[8]) +
        "</small>";
      ranAway =
        "<br>Times Ran Away: <small class='text-warning'>" +
        formatNumber(monsterStats[i].stats[9]) +
        "</small>";
      $("#monsterlog-container").append(
        '<img class="skill-icon-md" id="monster-log-img-' +
          i +
          '"  src="' +
          MONSTERS[i].media +
          '">'
      );
      monsterTooltip =
        "<div class='text-center'>" +
        MONSTERS[i].name +
        "<small class='text-info'> " +
        seen +
        killedByPlayer +
        killedPlayer +
        damageTakenFromPlayer +
        damageDealtToPlayer +
        hitsFromPlayer +
        hitsToPlayer +
        playerMissed +
        enemyMissed +
        ranAway +
        "</small></div>";
    } else if (!MONSTERS[i].ignoreCompletion) {
      $("#monsterlog-container").append(
        '<img class="skill-icon-md js-tooltip-enable" src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg" data-toggle="tooltip" data-html="true" data-placement="bottom" title="" data-original-title="???">'
      );
      monsterTooltip = "<div class='text-center'>???</div>";
    }
    const t = tippy("#monster-log-img-" + i, {
      content: monsterTooltip,
      placement: "bottom",
      allowHTML: true,
      interactive: false,
      animation: false,
    });
    tooltipInstances.monsterLog = tooltipInstances.monsterLog.concat(t);
  }
  updateTooltips();
  $("#modal-monster-log").modal("show");
}
function openPetLog() {
  if (tooltipInstances.petLog !== undefined) {
    tooltipInstances.petLog.forEach((instance) => {
      instance.destroy();
    });
  } else tooltipInstances.petLog = [];
  tooltipInstances.petLog.length = 0;
  $("#petlog-container").html("");
  for (let i = 0; i < PETS.length; i++) {
    let tooltip;
    if (petUnlocked[i]) {
      $("#petlog-container").append(
        '<img class="skill-icon-md" id="pet-log-img-' +
          i +
          '" src="' +
          PETS[i].media +
          '" onClick="petPet(' +
          i +
          ');">'
      );
      tooltip =
        '<div class="text-center"><span class="text-warning">' +
        PETS[i].name +
        '</span><br><span class="text-info">' +
        PETS[i].description +
        "</span></div>";
      if (PETS[i].ignoreCompletion)
        tooltip +=
          "<br><span class='text-danger'>Pet does not count towards completion.</span>";
    } else if (!PETS[i].ignoreCompletion) {
      $("#petlog-container").append(
        '<img class="skill-icon-md" id="pet-log-img-' +
          i +
          '" src="https://cdn.melvor.net/core/v018/assets/media/main/question.svg">'
      );
      tooltip =
        "<div class=\"text-center\">???<br><small class='text-danger'>Hint: " +
        PETS[i].acquiredBy +
        "</small></div>";
    }
    const t = tippy("#pet-log-img-" + i, {
      content: tooltip,
      placement: "bottom",
      allowHTML: true,
      interactive: false,
      animation: false,
    });
    tooltipInstances.petLog = tooltipInstances.petLog.concat(t);
  }
  $("#modal-pet-log").modal("show");
}
function updateCompletionLog() {
  let skills = Object.keys(SKILLS).length * 99;
  let skillsTotal = 0;
  let itemsTotal = items.length;
  let itemsFound = 0;
  let monstersTotal = MONSTERS.length;
  let monstersKilled = 0;
  let petCount = 0;
  let petsTotal = PETS.length;
  let petsPercentage = 0;
  for (let i = 0; i < Object.keys(SKILLS).length; i++) {
    skillsTotal += skillLevel[i];
  }
  let skillsPercentage = (skillsTotal / skills) * 100;
  let masteryPercentage = (arrSum(currentMastery) / arrSum(totalMastery)) * 100;
  for (let i = 0; i < itemStats.length; i++) {
    if (itemStats[i].stats[0] > 0 && !items[i].ignoreCompletion) itemsFound++;
    if (items[i].ignoreCompletion) itemsTotal -= 1;
  }
  let itemsPercentage = (itemsFound / itemsTotal) * 100;
  for (let i = 0; i < monsterStats.length; i++) {
    if (monsterStats[i].stats[2] > 0 && !MONSTERS[i].ignoreCompletion)
      monstersKilled++;
    if (MONSTERS[i].ignoreCompletion) monstersTotal -= 1;
  }
  let monstersPercentage = (monstersKilled / monstersTotal) * 100;
  for (let i = 0; i < petUnlocked.length; i++) {
    if (petUnlocked[i] && !PETS[i].ignoreCompletion) petCount++;
    if (PETS[i].ignoreCompletion) petsTotal -= 1;
  }
  petsPercentage = (petCount / petsTotal) * 100;
  let totalPercentage =
    (itemsPercentage +
      masteryPercentage +
      skillsPercentage +
      monstersPercentage +
      petsPercentage) /
    5;
  let currentCompletionStats = completionStats;
  completionStats = totalPercentage;
  if (currentCompletionStats < 100 && completionStats >= 100)
    sendDiscordEvent(3);
  $("#completion-skills").text(Math.floor(skillsPercentage) + "%");
  $("#completion-mastery").text(Math.floor(masteryPercentage) + "%");
  $("#completion-items").text(Math.floor(itemsPercentage) + "%");
  $("#completion-monsters").text(Math.floor(monstersPercentage) + "%");
  $("#completion-pets").text(Math.floor(petsPercentage) + "%");
  $("#completion-total").text(Math.floor(totalPercentage) + "%");
  if (skillsTotal > 150) {
    if (location.origin === "https://steam.melvoridle.com") {
      if (
        getItem("steamReview") === undefined ||
        getItem("steamReview") === null
      ) {
        window.setTimeout(function () {
          Swal.fire({
            title: "Enjoying the game?",
            html: "Please leave a review on Steam! I would really appreciate it, and it will help out a lot. Thank you!",
            imageUrl: "assets/media/main/steam.svg",
            imageWidth: 64,
            imageHeight: 64,
            imageAlt: "Steam",
            allowOutsideClick: true,
          });
        }, 5000);
        setItem("steamReview", "1");
      }
    } else if (location.origin === "https://android.melvoridle.com") {
      if (
        getItem("androidReview") === undefined ||
        getItem("androidReview") === null
      ) {
        window.setTimeout(function () {
          android.rateApp();
        }, 5000);
        setItem("androidReview", "1");
      }
    } else if (location.origin === "https://ios.melvoridle.com") {
      if (getItem("iosReview") === undefined || getItem("iosReview") === null) {
        window.setTimeout(function () {
          window.bridge.post("rate_app", {});
        }, 5000);
        setItem("iosReview", "1");
      }
    }
  }
}
