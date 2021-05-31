var currentMastery = [];
var totalMastery = [];
const na = "t";
var masteryExp = new masteryExp();
function masteryExp() {
  this.equate = function (xp) {
    return Math.floor(xp + 300 * Math.pow(2, xp / 7));
  };
  this.level_to_xp = function (level) {
    var xp = 0;
    for (var i = 1; i < level; i++) xp += this.equate(i);
    return Math.floor(xp / 48);
  };
  this.xp_to_level = (xp, level = 1) => {
    while (masteryExp.level_to_xp(level) < xp) level++;
    return level;
  };
}
function equate(xp) {
  return Math.floor(xp + 300 * Math.pow(2, xp / 7));
}
function level_to_xp(level) {
  var xp = 0;
  for (var i = 1; i < level; i++) xp += equate(i);
  return Math.floor(xp / 48);
}

function xp_to_level(xp, level = 1) {
  while (level_to_xp(level) < xp) level++;
  return level;
}

function getMasteryLevel(skill, masteryID) {
  let skillCache = masteryCache[skill];
  if (skillCache === undefined) {
    masteryCache[skill] = {};
    skillCache = {};
  }
  let cache = skillCache[masteryID];
  if (cache === undefined) {
    cache = 1;
  }
  if (cache === 99) {
    return cache;
  }
  let level = xp_to_level(MASTERY[skill].xp[masteryID], cache) - 1;
  if (level < 1) {
    level = 1;
  }
  if (level > 99) {
    level = 99;
  }
  masteryCache[skill][masteryID] = level;
  return level;
}

function updateTotalMastery(skill) {
  currentMastery[skill] = 0;
  totalMastery[skill] = 0;
  if (SKILLS[skill].hasMastery) {
    for (let i = 0; i < MASTERY[skill].xp.length; i++) {
      currentMastery[skill] += getMasteryLevel(skill, i);
    }
    totalMastery[skill] = MASTERY[skill].xp.length * 99;
  }
  $("#mastery-totals-" + skill).text(
    numberWithCommas(currentMastery[skill]) +
      " / " +
      numberWithCommas(totalMastery[skill])
  );
}
Array.prototype.sum = function (prop) {
  var total = 0;
  for (var i = 0, _len = this.length; i < _len; i++) {
    total += this[i][prop];
  }
  return total;
};

function showMasteryUnlocks(skill) {
  $("#modal-content-mastery").html("");
  let masteryHtml = "";
  masteryHtml +=
    '<div class="block block-rounded block-link-pop border-top border-' +
    setToLowercase(skillName[skill]) +
    ' border-4x">';
  masteryHtml += '<div class="block-header">';
  masteryHtml +=
    '<h3 class="block-title"><img class="mastery-icon-xs mr-2" src="https://cdn.melvor.net/core/v018/assets/media/main/mastery_header.svg">' +
    skillName[skill] +
    "</h3>";
  masteryHtml +=
    '<div class="block-options"><button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close"><i class="fa fa-fw fa-times"></i></button></div>';
  masteryHtml += "</div>";
  masteryHtml +=
    '<div class="row"><div class="col-12"><div class="block-content">';
  masteryHtml += '<table class="table table-sm table-vcenter">';
  masteryHtml +=
    '<thead><tr><th class="text-center" style="width: 65px;">Mastery</th><th>Unlock</th></tr></thead><tbody>';
  for (var i = 0; i < masteryUnlocks[skill].length; i++) {
    masteryHtml += "<tr>";
    masteryHtml += '<th class="text-center" scope="row">';
    masteryHtml += masteryUnlocks[skill][i].level;
    masteryHtml += "</th>";
    masteryHtml += '<td class="font-w600 font-size-sm">';
    masteryHtml += masteryUnlocks[skill][i].unlock;
    masteryHtml += "</td></tr>";
  }
  masteryHtml += "</tbody></table></div></div></div></div>";
  $("#modal-content-mastery").append(masteryHtml);
  $("#modal-mastery").modal("show");
}
var masteryUnlocks = {
  0: [
    {
      level: 10,
      unlock:
        "Every 10 levels provides +5% chance to receive 2x Logs per action.",
    },
    {
      level: 99,
      unlock: "Decreased cut interval by 0.2s for this Tree.",
    },
  ],
  1: [
    {
      level: 1,
      unlock:
        "Each Mastery level increases the chance to receive 2 Fish by +0.4%",
    },
    {
      level: 50,
      unlock: "+3% chance to receive special items.",
    },
    {
      level: 65,
      unlock: "You no longer catch Junk.",
    },
    {
      level: 99,
      unlock: "Always catch a minimum quantity of 2 Fish",
    },
  ],
  2: [
    {
      level: 1,
      unlock:
        "Each Mastery Level grants -0.1% Firemaking Interval for the respective Log.",
    },
    {
      level: 99,
      unlock: "Grants +0.25% Global Mastery XP",
    },
  ],
  3: [
    {
      level: 1,
      unlock:
        "Each Mastery level provides +0.6% success rate. Success rate is capped at 99%, except with Gloves or Cooking Skillcape.",
    },
    {
      level: 99,
      unlock: "This cooked product heals you for an extra 20% when eaten.",
    },
  ],
  4: [
    {
      level: 1,
      unlock: "Each Mastery Level increases maximum Rock HP by 1",
    },
    {
      level: 10,
      unlock: "1% Chance of obtaining 2 ore",
    },
    {
      level: 20,
      unlock: "2% Chance of obtaining 2 ore",
    },
    {
      level: 30,
      unlock: "3% Chance of obtaining 2 ore",
    },
    {
      level: 40,
      unlock: "4% Chance of obtaining 2 ore",
    },
    {
      level: 50,
      unlock: "5% Chance of obtaining 2 ore",
    },
    {
      level: 60,
      unlock: "6% Chance of obtaining 2 ore",
    },
    {
      level: 70,
      unlock: "7% Chance of obtaining 2 ore",
    },
    {
      level: 80,
      unlock: "8% Chance of obtaining 2 ore",
    },
    {
      level: 90,
      unlock: "9% Chance of obtaining 2 ore",
    },
    {
      level: 99,
      unlock: "15% Chance of obtaining 2 ore",
    },
  ],
  5: [
    {
      level: 10,
      unlock: "5% base chance to obtain 2 items",
    },
    {
      level: 20,
      unlock: "5% base chance to preserve resources",
    },
    {
      level: 30,
      unlock: "10% base chance to obtain 2 items",
    },
    {
      level: 40,
      unlock: "10% base chance to preserve resources",
    },
    {
      level: 50,
      unlock: "15% base chance to obtain 2 items",
    },
    {
      level: 60,
      unlock: "15% base chance to preserve resources",
    },
    {
      level: 70,
      unlock: "20% base chance to obtain 2 items",
    },
    {
      level: 80,
      unlock: "20% base chance to preserve resources",
    },
    {
      level: 90,
      unlock: "25% base chance to obtain 2 items",
    },
    {
      level: 99,
      unlock:
        "30% base chance to preserve resources. +35% chance to obtain 2 items.",
    },
  ],
  10: [
    {
      level: 1,
      unlock:
        "Each level provides a slight increase in success rate as well as increased % GP acquired equal to your Mastery Level.",
    },
    {
      level: 99,
      unlock: "Never fail a pickpocket attempt.",
    },
  ],
  11: [
    {
      level: 1,
      unlock: "Each level provides increased Farming Yield.",
    },
    {
      level: 16,
      unlock: "Receive up to 1 Allotment or Herb seed back from harvesting.",
    },
    {
      level: 31,
      unlock: "Receive up to 2 Allotment or Herb seeds back from harvesting.",
    },
    {
      level: 46,
      unlock: "Receive up to 3 Allotment or Herb seeds back from harvesting.",
    },
    {
      level: 50,
      unlock: "No compost required to successfully grow.",
    },
    {
      level: 61,
      unlock: "Receive up to 4 Allotment or Herb seeds back from harvesting.",
    },
    {
      level: 76,
      unlock: "Receive up to 5 Allotment or Herb seeds back from harvesting.",
    },
    {
      level: 91,
      unlock: "Receive up to 6 Allotment or Herb seeds back from harvesting.",
    },
    {
      level: 99,
      unlock:
        "+20% Farming Yield. 10% reduced grow time for this Crop. Receive up to 8 Allotment or Herb seeds back from harvesting. ",
    },
  ],
  13: [
    {
      level: 1,
      unlock: "Each level provides +0.2% chance to preserve resources.",
    },
    {
      level: 99,
      unlock: "+5% chance to preserve resources.",
    },
  ],
  14: [
    {
      level: 1,
      unlock: "Each level provides +0.2% chance to preserve resources.",
    },
    {
      level: 99,
      unlock: "+5% chance to preserve resources.",
    },
  ],
  15: [
    {
      level: 15,
      unlock: "2 Runes Produced per Runecraft.",
    },
    {
      level: 30,
      unlock: "3 Runes Produced per Runecraft.",
    },
    {
      level: 45,
      unlock: "4 Runes Produced per Runecraft.",
    },
    {
      level: 60,
      unlock: "5 Runes Produced per Runecraft.",
    },
    {
      level: 75,
      unlock: "6 Runes Produced per Runecraft.",
    },
    {
      level: 90,
      unlock: "7 Runes Produced per Runecraft.",
    },
    {
      level: 99,
      unlock: "11 Runes Produced per Runecraft.",
    },
  ],
  19: [
    {
      level: 1,
      unlock:
        "Each Mastery Level +0.2% chance to preserve resources for this Potion only.",
    },
    {
      level: 1,
      unlock: "Unlock Tier I Potion",
    },
    {
      level: 20,
      unlock: "Unlock Tier II Potion",
    },
    {
      level: 50,
      unlock: "Unlock Tier III Potion",
    },
    {
      level: 90,
      unlock: "Unlock Tier IV Potion",
    },
    {
      level: 99,
      unlock: "+5% chance to preserve resources for this Potion only.",
    },
  ],
  20: [
    {
      level: 10,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 20,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 30,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 40,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 50,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 60,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 70,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 80,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 80,
      unlock: "+10% Agility Obstacle cost reduction for this Obstacle only.",
    },
    {
      level: 90,
      unlock: "-3% Agility Interval for this Obstacle only.",
    },
    {
      level: 95,
      unlock: "+10% Agility Obstacle cost reduction for this Obstacle only.",
    },
    {
      level: 99,
      unlock: "Passive Debuffs (Red) are halved for this Obstacle only.",
    },
  ],
};
var treeMasteryData = [];
var fishMastery = [];
var logsMastery = [];
var cookingMastery = [];
var miningOreMastery = [];
var smithingMastery = [];
var thievingMastery = [];
var farmingMastery = [];
var fletchingMastery = [];
var craftingMastery = [];
var runecraftingMastery = [];
var herbloreMastery = [];

var MASTERY = {};
var masteryLevelCache = {};
let masteryUpdateTimer;
const masteryCheckpointBonuses = {
  0: {
    bonuses: [
      "+5% increased Woodcutting Mastery XP",
      "+5% increased chance to receive double Logs per action",
      "All Logs sell for +50% GP Value",
      "When you receive a Birds Nest, always receive a base minimum of 2.",
    ],
  },
  1: {
    bonuses: [
      "+5% increased Fishing Mastery XP",
      "Receive no more Junk",
      "+5% increased chance to get double Fish",
      "When you catch a Special Item, there is a 25% chance to receive one extra Special Item. It is possible to receive a different item than the original.",
    ],
  },
  2: {
    bonuses: [
      "+5% increased Firemaking Mastery XP",
      "10% decreased Burning interval",
      "Receive GP equal to 25% of the value of the Log you are burning",
      "+5% increased Global Mastery XP",
    ],
  },
  3: {
    bonuses: [
      "+5% increased Cooking Mastery XP",
      "+5% increased chance to get double cooked Food",
      "+10% chance to preserve raw food in Cooking",
      "All Food heals for +10% HP",
    ],
  },
  4: {
    bonuses: [
      "+5% increased Mining Mastery XP",
      "Reduced Ore respawn time by 10%",
      "Reduce Mining interval by 0.2s",
      "All Rocks gain +10 Max HP (Bonus applied on Rock Respawn)",
    ],
  },
  5: {
    bonuses: [
      "+5% increased Smithing Mastery XP",
      "+5% resource preservation chance for Smithing",
      "+5% resource preservation chance for Smithing",
      "+10% chance to double items in Smithing.",
    ],
  },
  10: {
    bonuses: [
      "+5% increased Thieving Mastery XP",
      "+10% increased success rate for all NPC",
      "+10% chance to receive double items from Thieving",
      "+100% increased gold from Thieving",
    ],
  },
  11: {
    bonuses: [
      "+5% increased Farming Mastery XP",
      "Crops cannot die (Bonus applied when crop grows).",
      "+5% increased Crop harvest",
      "Reduced crop grow time by 10% (Bonus applied when crop is planted)",
    ],
  },
  13: {
    bonuses: [
      "+5% increased Fletching Mastery XP",
      "Produce 1 extra Javelin per Fletch (Applied to base quantity)",
      "Produce 1 extra Gem-Tipped Bolt per Fletch (Applied to base quantity)",
      "Reduce Fletching Interval by 0.2s",
    ],
  },
  14: {
    bonuses: [
      "+5% increased Crafting Mastery XP",
      "+5% resource preservation chance for Crafting.",
      "Decreased Crafting Interval by 0.2s",
      "Always Craft a base quantity of 2 for Rings and Necklaces",
    ],
  },
  15: {
    bonuses: [
      "+5% increased Runecrafting Mastery XP",
      "Grants 250% base Runecrafting XP from Runes",
      "+10% resource preservation chance for Runecrafting",
      "Grants an extra 5 Runes per craft",
    ],
  },
  19: {
    bonuses: [
      "+5% increased Herblore Mastery XP",
      "+3% increased Herblore Skill XP",
      "+5% resource preservation chance for Herblore",
      "+10% chance to double Potions per action in Herblore",
    ],
  },
  20: {
    bonuses: [
      "+5% increased Agility Mastery XP",
      "+10% GP from Agility",
      "+10% Global Agility Obstacle cost reduction.",
      "+15% Agility Obstacle Item cost reduction",
    ],
  },
};

let masteryPoolLevelUp = 1;
const masteryCheckpoints = [10, 25, 50, 95];
var masterySorted = {};
var masteryCache = {};
function populateMasteryObject() {
  for (
    let i = Object.keys(MASTERY).length;
    i < Object.keys(SKILLS).length;
    i++
  ) {
    if (SKILLS[i].hasMastery) {
      if (MASTERY[i] === undefined)
        MASTERY[i] = {
          pool: 0,
          xp: [],
        };
    }
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i].masteryID !== undefined) {
      if (!MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]]) {
        MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] = 0;
        let level = 1;
        switch (items[i].masteryID[0]) {
          case CONSTANTS.skill.Fishing:
            if (items[i].masteryID[1] < fishMastery.length) {
              level = exp.xp_to_level(
                fishMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Firemaking:
            if (items[i].masteryID[1] < logsMastery.length) {
              level = exp.xp_to_level(
                logsMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Cooking:
            if (items[i].masteryID[1] < cookingMastery.length) {
              level = exp.xp_to_level(
                cookingMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Mining:
            if (items[i].masteryID[1] < miningOreMastery.length) {
              level = exp.xp_to_level(
                miningOreMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Smithing:
            if (items[i].masteryID[1] < smithingMastery.length) {
              level = exp.xp_to_level(
                smithingMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Farming:
            if (items[i].masteryID[1] < farmingMastery.length) {
              level = exp.xp_to_level(
                farmingMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Fletching:
            if (items[i].masteryID[1] < fletchingMastery.length) {
              level = exp.xp_to_level(
                fletchingMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Crafting:
            if (items[i].masteryID[1] < craftingMastery.length) {
              level = exp.xp_to_level(
                craftingMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Runecrafting:
            if (items[i].masteryID[1] < runecraftingMastery.length) {
              level = exp.xp_to_level(
                runecraftingMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
          case CONSTANTS.skill.Herblore:
            if (items[i].masteryID[1] < herbloreMastery.length) {
              level = exp.xp_to_level(
                herbloreMastery[items[i].masteryID[1]].masteryXP
              );
              MASTERY[items[i].masteryID[0]].xp[items[i].masteryID[1]] =
                exp.level_to_xp(level) + 1;
            }
            break;
        }
      }
    }
  }
  for (let i = 0; i < trees.length; i++) {
    if (!MASTERY[CONSTANTS.skill.Woodcutting].xp[i]) {
      MASTERY[CONSTANTS.skill.Woodcutting].xp[i] = 0;
      let level = 1;
      if (i < treeMasteryData.length) {
        level = exp.xp_to_level(treeMasteryData[i].masteryXP);
        MASTERY[CONSTANTS.skill.Woodcutting].xp[i] = exp.level_to_xp(level) + 1;
      }
    }
  }
  for (let i = 0; i < thievingNPC.length; i++) {
    if (!MASTERY[CONSTANTS.skill.Thieving].xp[i]) {
      MASTERY[CONSTANTS.skill.Thieving].xp[i] = 0;
      let level = 1;
      if (i < thievingMastery.length) {
        level = exp.xp_to_level(thievingMastery[i].masteryXP);
        MASTERY[CONSTANTS.skill.Thieving].xp[i] = exp.level_to_xp(level) + 1;
      }
    }
  }
  for (let i = 0; i < agilityObstacles.length; i++) {
    if (!MASTERY[CONSTANTS.skill.Agility].xp[i])
      MASTERY[CONSTANTS.skill.Agility].xp[i] = 0;
  }
  treeMasteryData = [];
  fishMastery = [];
  logsMastery = [];
  cookingMastery = [];
  miningOreMastery = [];
  smithingMastery = [];
  farmingMastery = [];
  thievingMastery = [];
  fletchingMastery = [];
  craftingMastery = [];
  runecraftingMastery = [];
  herbloreMastery = [];
}
function createMasteryPoolElements() {
  for (let i = 0; i < Object.keys(SKILLS).length; i++) {
    if (SKILLS[i].hasMastery) {
      let html = "";
      html += getMasteryPoolElement(i);
      $("#skill-header-" + i).append(html);
      updateMasteryPoolProgress(i);
    }
  }
}
function getMasteryPoolElement(skill, mainButtons = true) {
  let html = "";
  html += `<div class="pl-1 pr-1">
				<div class="row no-gutters">
					<div class="col-12 col-lg-8">
						<div class="media d-flex align-items-center push m-0">
							<div class="m-1">
								<img class="skill-icon-sm m-0 mastery-pool-icon" src="https://cdn.melvor.net/core/v018/assets/media/main/mastery_pool.svg">
							</div>
							<div class="media-body">
								<div class="font-size-sm">
									<div class="progress active mr-1 mt-2 ml-1" style="height: 6px">
										<div id="mastery-pool-progress-${skill}" class="progress-bar bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
										</div>
									</div>
								</div>
								<div class="font-w400">
									<h5 class="font-w400 font-size-sm text-combat-smoke m-1"><small><span id="mastery-pool-xp-current-${skill}">-</span> / <span id="mastery-pool-xp-total-${skill}">-</span> XP (<span id="mastery-pool-xp-progress-${skill}">${getMasteryPoolProgress(
    skill
  ).toFixed(2)}</span>%)</small></h5>
								</div>
							</div>
						</div>
					</div>`;
  if (mainButtons) {
    html += `<div class="col-12 col-md-4">
					<div class="ml-2 mr-2 text-right">
						<button role="button" class="btn btn-sm btn-info m-1" onClick="viewMasteryCheckpoints(${skill});">View Checkpoints</button>
						<button role="button" class="btn btn-sm btn-success m-1" onClick="showSpendMasteryXP(${skill});">Spend XP</button>
					</div>
				</div>`;
  }
  html += `</div></div>`;
  return html;
}
function createVisualMasteryElement(skill, id) {
  let html = "";
  html += `<div class="block-content">
				<div class="media d-flex align-items-center push">
					<div class="mr-1 mastery-icon">
						<img class="skill-icon-xxs" src="https://cdn.melvor.net/core/v018/assets/media/main/mastery_header.svg">
					</div>
					<div class="mr-3">
						<div class="font-w600 font-size-sm text-warning" id="mastery-screen-skill-${skill}-${id}">-</div>
					</div>
					<div class="media-body">
						<div class="font-w400 font-size-sm text-center"><small id="mastery-screen-skill-${skill}-${id}-actual">-</small></div>
						<div class="progress active" style="height:8px;">
							<div id="mastery-screen-skill-${skill}-${id}-progress" class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
				</div>
			</div>`;
  return html;
}
function getMasteryLevel(skill, masteryID) {
  let skillCache = masteryCache[skill];
  if (skillCache === undefined) {
    masteryCache[skill] = {};
    skillCache = {};
  }
  let cache = skillCache[masteryID];
  if (cache === undefined) {
    cache = 1;
  }
  if (cache === 99) {
    return cache;
  }
  let level = exp.xp_to_level(MASTERY[skill].xp[masteryID], cache) - 1;
  if (level < 1) {
    level = 1;
  }
  if (level > 99) {
    level = 99;
  }
  masteryCache[skill][masteryID] = level;
  return level;
}
function getMasteryProgressXP(skill, masteryID) {
  if (getMasteryLevel(skill, masteryID) < 99)
    return (
      numberWithCommas(Math.floor(MASTERY[skill].xp[masteryID])) +
      " / " +
      numberWithCommas(exp.level_to_xp(getMasteryLevel(skill, masteryID) + 1))
    );
  else return numberWithCommas(Math.floor(MASTERY[skill].xp[masteryID]));
}
function updateMasteryLevel(skill, masteryID) {
  $("#mastery-screen-skill-" + skill + "-" + masteryID).text(
    getMasteryLevel(skill, masteryID)
  );
}
function updateMasteryProgress(skill, masteryID) {
  masteryUpdateTimer = setTimeout(function () {
    let progress = getMasteryProgress(skill, masteryID);
    let progressXP = getMasteryProgressXP(skill, masteryID);
    let level = getMasteryLevel(skill, masteryID);
    $("#" + setToLowercase(skillName[skill]) + "-mastery-progress-actual").text(
      progressXP
    );
    $("#mastery-screen-skill-" + skill + "-" + masteryID).text(level);
    if (level >= 99) {
      $("#mastery-screen-skill-" + skill).addClass("text-warning");
      $("#mastery-screen-skill-" + skill + "-" + masteryID).addClass(
        "text-warning"
      );
      $(
        "#mastery-screen-skill-" + skill + "-" + masteryID + "-progress"
      ).removeClass("bg-info");
      $(
        "#mastery-screen-skill-" + skill + "-" + masteryID + "-progress"
      ).addClass("bg-success");
      $("#mastery-screen-skill-" + skill + "-" + masteryID + "-progress").css(
        "width",
        "100%"
      );
    } else {
      $("#mastery-screen-skill-" + skill + "-" + masteryID + "-progress").css(
        "width",
        progress + "%"
      );
      $("#mastery-screen-skill-" + skill).removeClass("text-warning");
      $("#mastery-screen-skill-" + skill + "-" + masteryID).removeClass(
        "text-warning"
      );
      $(
        "#mastery-screen-skill-" + skill + "-" + masteryID + "-progress"
      ).addClass("bg-info");
      $(
        "#mastery-screen-skill-" + skill + "-" + masteryID + "-progress"
      ).removeClass("bg-success");
    }
    $("#mastery-screen-skill-" + skill + "-" + masteryID + "-actual").text(
      progressXP
    );
    if (skill === CONSTANTS.skill.Smithing && selectedSmith !== null) {
      if (smithingItems[selectedSmith].smithingID === masteryID) {
        $("#mastery-screen-skill-" + CONSTANTS.skill.Smithing + "-actual").text(
          progressXP
        );
        $("#mastery-screen-skill-" + skill).text(level);
        if (level >= 99) {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            "100%"
          );
        } else {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            progress + "%"
          );
        }
      }
    } else if (skill === CONSTANTS.skill.Fletching && selectedFletch !== null) {
      if (fletchingItems[selectedFletch].fletchingID === masteryID) {
        $(
          "#mastery-screen-skill-" + CONSTANTS.skill.Fletching + "-actual"
        ).text(progressXP);
        $("#mastery-screen-skill-" + skill).text(level);
        $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
          "width",
          progress + "%"
        );
        if (level >= 99) {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            "100%"
          );
        } else {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            progress + "%"
          );
        }
      }
    } else if (skill === CONSTANTS.skill.Firemaking && selectedLog !== null) {
      if (items[selectedLog].masteryID[1] === masteryID) {
        $(
          "#mastery-screen-skill-" + CONSTANTS.skill.Firemaking + "-actual"
        ).text(progressXP);
        $("#mastery-screen-skill-" + skill).text(level);
        $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
          "width",
          progress + "%"
        );
        if (level >= 99) {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            "100%"
          );
        } else {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            progress + "%"
          );
        }
      }
    } else if (skill === CONSTANTS.skill.Cooking && selectedFood !== null) {
      if (items[items[selectedFood].cookedItemID].masteryID[1] === masteryID) {
        $("#mastery-screen-skill-" + CONSTANTS.skill.Cooking + "-actual").text(
          progressXP
        );
        $("#mastery-screen-skill-" + skill).text(level);
        $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
          "width",
          progress + "%"
        );
        if (level >= 99) {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            "100%"
          );
        } else {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            progress + "%"
          );
        }
      }
    } else if (skill === CONSTANTS.skill.Crafting && selectedCraft !== null) {
      if (craftingItems[selectedCraft].craftingID === masteryID) {
        $("#mastery-screen-skill-" + CONSTANTS.skill.Crafting + "-actual").text(
          progressXP
        );
        $("#mastery-screen-skill-" + skill).text(level);
        $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
          "width",
          progress + "%"
        );
        if (level >= 99) {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            "100%"
          );
        } else {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            progress + "%"
          );
        }
      }
    } else if (
      skill === CONSTANTS.skill.Runecrafting &&
      selectedRunecraft !== null
    ) {
      if (runecraftingItems[selectedRunecraft].runecraftingID === masteryID) {
        $(
          "#mastery-screen-skill-" + CONSTANTS.skill.Runecrafting + "-actual"
        ).text(progressXP);
        $("#mastery-screen-skill-" + skill).text(level);
        $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
          "width",
          progress + "%"
        );
        if (level >= 99) {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            "100%"
          );
        } else {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            progress + "%"
          );
        }
      }
    } else if (
      skill === CONSTANTS.skill.Herblore &&
      selectedHerblore !== null
    ) {
      if (selectedHerblore === masteryID) {
        $("#mastery-screen-skill-" + CONSTANTS.skill.Herblore + "-actual").text(
          progressXP
        );
        $("#mastery-screen-skill-" + skill).text(level);
        $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
          "width",
          progress + "%"
        );
        if (level >= 99) {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            "100%"
          );
        } else {
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).addClass("bg-info");
          $(
            "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
          ).removeClass("bg-success");
          $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
            "width",
            progress + "%"
          );
        }
      }
    } else {
      $("#mastery-screen-skill-" + skill).text(level);
      if (level >= 99) {
        $(
          "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
        ).removeClass("bg-info");
        $(
          "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
        ).addClass("bg-success");
        $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
          "width",
          "100%"
        );
      } else {
        $(
          "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
        ).addClass("bg-info");
        $(
          "#" + setToLowercase(skillName[skill]) + "-mastery-progress"
        ).removeClass("bg-success");
        $("#" + setToLowercase(skillName[skill]) + "-mastery-progress").css(
          "width",
          progress + "%"
        );
      }
    }
  }, 50);
}
function getMasteryProgress(skill, masteryID) {
  let currentMasteryLevelXP = exp.level_to_xp(
    getMasteryLevel(skill, masteryID)
  );
  let nextMasteryLevelXP = exp.level_to_xp(
    getMasteryLevel(skill, masteryID) + 1
  );
  let progress =
    ((MASTERY[skill].xp[masteryID] - currentMasteryLevelXP) /
      (nextMasteryLevelXP - currentMasteryLevelXP)) *
    100;
  if (getMasteryLevel(skill, masteryID) >= 99) return 100;
  return progress;
}
function getMasteryPoolProgress(skill) {
  let progress = (MASTERY[skill].pool / getMasteryPoolTotalXP(skill)) * 100;
  if (equippedItems.includes(CONSTANTS.item.Cape_of_Completion)) progress = 100;
  return progress;
}
function getMasteryXpToAdd(skill, masteryID, timePerAction) {
  let xpModifier = 0;
  let xpToAdd =
    (((getTotalUnlockedItems(skill) *
      getCurrentTotalMasteryLevelForSkill(skill)) /
      getTotalMasteryLevelForSkill(skill) +
      getMasteryLevel(skill, masteryID) * (getTotalItemsInSkill(skill) / 10)) *
      (timePerAction / 1000)) /
    2;
  if (getMasteryPoolProgress(skill) >= masteryCheckpoints[0]) xpModifier += 5;
  if (
    getMasteryPoolProgress(CONSTANTS.skill.Firemaking) >= masteryCheckpoints[3]
  )
    xpModifier += 5;
  for (let i = 0; i < MASTERY[CONSTANTS.skill.Firemaking].xp.length; i++) {
    if (getMasteryLevel(CONSTANTS.skill.Firemaking, i) >= 99)
      xpModifier += 0.25;
  }
  xpModifier +=
    playerModifiers.increasedGlobalMasteryXP -
    playerModifiers.decreasedGlobalMasteryXP;
  xpModifier +=
    getTotalFromModifierArray("increasedMasteryXP", skill) -
    getTotalFromModifierArray("decreasedMasteryXP", skill);
  xpToAdd = applyModifier(xpToAdd, xpModifier);
  if (xpToAdd < 1) xpToAdd = 1;
  return xpToAdd;
}
function getTotalUnlockedItems(skill) {
  let count = 0;
  for (let i = 0; i < MILESTONES[skillName[skill]].length; i++) {
    if (skillLevel[skill] >= MILESTONES[skillName[skill]][i].level) count++;
  }
  return count;
}
function getCurrentTotalMasteryLevelForSkill(skill) {
  let totalLevel = 0;
  for (let i = 0; i < MASTERY[skill].xp.length; i++)
    totalLevel += getMasteryLevel(skill, i);
  return totalLevel;
}
function getTotalMasteryLevelForSkill(skill) {
  let totalLevel = MASTERY[skill].xp.length * 99;
  return totalLevel;
}
function getTotalItemsInSkill(skill) {
  return MASTERY[skill].xp.length;
}
function getTimePerActionModifierMastery(skill, defaultTime, masteryID = 0) {
  let timePerAction = defaultTime;
  switch (skill) {
    case CONSTANTS.skill.Firemaking:
      timePerAction = logsData[masteryID].interval * 0.6;
      break;
    case CONSTANTS.skill.Cooking:
      timePerAction = 2550;
      break;
    case CONSTANTS.skill.Smithing:
      timePerAction = 1700;
      break;
    case CONSTANTS.skill.Fletching:
      timePerAction = 1300;
      break;
    case CONSTANTS.skill.Crafting:
      timePerAction = 1650;
      break;
    case CONSTANTS.skill.Runecrafting:
      timePerAction = 1700;
      break;
    case CONSTANTS.skill.Herblore:
      timePerAction = 1700;
      break;
  }
  return timePerAction;
}
function addMasteryXP(
  skill,
  masteryID,
  timePerAction,
  spendingXP = false,
  xp = 0,
  addToPool = true,
  offline = false
) {
  if (!offline)
    timePerAction = getTimePerActionModifierMastery(
      skill,
      timePerAction,
      masteryID
    );
  let xpToAdd = 0;
  if (!spendingXP) xpToAdd = getMasteryXpToAdd(skill, masteryID, timePerAction);
  else xpToAdd = xp;
  let currentLevel = getMasteryLevel(skill, masteryID);
  MASTERY[skill].xp[masteryID] += xpToAdd;
  if (
    exp.xp_to_level(MASTERY[skill].xp[masteryID]) - 1 > currentLevel &&
    currentLevel < 99
  ) {
    updateMasteryLevelCache(skill, masteryID);
    notifyMasteryLevelUp(skill, masteryID);
    if (skill === CONSTANTS.skill.Woodcutting && currentLevel >= 98)
      updateWCRates();
    if (skill === CONSTANTS.skill.Herblore && selectedHerblore === masteryID)
      selectHerblore(selectedHerblore);
    if (skill === CONSTANTS.skill.Agility) {
      if (getMasteryLevel(skill, masteryID) >= 99)
        updateChosenAgilityObstaclePassiveBonuses(masteryID);
      updateAgilityIntervals();
    }
    updateTotalMastery(skill);
  }
  if (!offline) updateMasteryProgress(skill, masteryID);
  if (addToPool) addMasteryXPToPool(skill, xpToAdd, offline);
}
function notifyMasteryLevelUp(skill, masteryID, offline = false) {
  if (!offline) {
    Toastify({
      text:
        '<div class="text-center"><img class="notification-img" src="' +
        getMasteryImage(skill, masteryID) +
        '"><img src="https://cdn.melvor.net/core/v018/assets/media/main/mastery_header.svg" height="24px" width="24px" style="margin: 4px;"><span class="badge badge-success">' +
        getMasteryLevel(skill, masteryID) +
        "</span></div>",
      duration: 2000,
      gravity: "bottom",
      position: "center",
      backgroundColor: "transparent",
      stopOnFocus: false,
    }).showToast();
  }
}
function getMasteryPoolTotalXP(skill) {
  return MASTERY[skill].xp.length * 500000;
}
function addMasteryXPToPool(skill, xp, offline = false, token = false) {
  if (skillLevel[skill] >= 99 && !token) MASTERY[skill].pool += xp / 2;
  else if (!token) MASTERY[skill].pool += xp / 4;
  else MASTERY[skill].pool += xp;
  if (MASTERY[skill].pool > getMasteryPoolTotalXP(skill))
    MASTERY[skill].pool = getMasteryPoolTotalXP(skill);
  if (!offline) updateMasteryPoolProgress(skill);
}
function updateMasteryPoolProgress(skill) {
  $("[id=mastery-pool-xp-current-" + skill + "]").text(
    numberWithCommas(Math.floor(MASTERY[skill].pool))
  );
  $("[id=mastery-pool-xp-total-" + skill + "]").text(
    numberWithCommas(Math.floor(getMasteryPoolTotalXP(skill)))
  );
  $("[id=mastery-pool-xp-progress-" + skill + "]").text(
    Math.floor(getMasteryPoolProgress(skill) * 100) / 100
  );
  $("[id=mastery-pool-progress-" + skill + "]").css(
    "width",
    getMasteryPoolProgress(skill) + "%"
  );
}
function getMasteryImage(skill, masteryID) {
  let media = "";
  switch (skill) {
    case CONSTANTS.skill.Woodcutting:
      media = trees[masteryID].media;
      break;
    case CONSTANTS.skill.Thieving:
      media = thievingNPC[masteryID].media;
      break;
    case CONSTANTS.skill.Herblore:
      for (let i = 0; i < items.length; i++) {
        if (items[i].masteryID !== undefined) {
          if (
            items[i].masteryID[0] === skill &&
            items[i].masteryID[1] === masteryID &&
            items[i].potionTier === getHerbloreTier(masteryID)
          ) {
            media = getItemMedia(i);
            break;
          }
        }
      }
      break;
    case CONSTANTS.skill.Agility:
      media = agilityObstacles[masteryID].media;
      break;
    default:
      for (let i = 0; i < items.length; i++) {
        if (items[i].masteryID !== undefined) {
          if (
            items[i].masteryID[0] === skill &&
            items[i].masteryID[1] === masteryID
          ) {
            media = getItemMedia(i);
            break;
          }
        }
      }
      break;
  }
  return media;
}
function getMasteryName(skill, masteryID) {
  let name = "";
  switch (skill) {
    case CONSTANTS.skill.Woodcutting:
      name = setToUppercase(trees[masteryID].type) + " Tree";
      break;
    case CONSTANTS.skill.Thieving:
      name = thievingNPC[masteryID].name;
      break;
    case CONSTANTS.skill.Herblore:
      for (let i = 0; i < items.length; i++) {
        if (items[i].masteryID !== undefined) {
          if (
            items[i].masteryID[0] === skill &&
            items[i].masteryID[1] === masteryID &&
            items[i].potionTier === getHerbloreTier(masteryID)
          ) {
            name = items[i].name;
            break;
          }
        }
      }
      break;
    case CONSTANTS.skill.Agility:
      name =
        "Obstacle " +
        (agilityObstacles[masteryID].category + 1) +
        ": " +
        agilityObstacles[masteryID].name;
      break;
    default:
      for (let i = 0; i < items.length; i++) {
        if (items[i].masteryID !== undefined) {
          if (
            items[i].masteryID[0] === skill &&
            items[i].masteryID[1] === masteryID
          ) {
            name = items[i].name;
            break;
          }
        }
      }
      break;
  }
  return name;
}
function showSpendMasteryXP(skill) {
  if (tooltipInstances.masteryModal !== undefined) {
    tooltipInstances.masteryModal.forEach((instance) => {
      instance.destroy();
    });
    tooltipInstances.masteryModal.length = 0;
  }
  let checked = ``;
  if (SETTINGS.mastery.hideMaxLevel) checked = `checked=""`;
  $("#modal-content-spend-mastery-xp").html(`
		<div class="col-12">
			${getMasteryPoolElement(skill, false)}
		</div>
		<div class="col-12 col-md-6">
			<h5 class="font-w400 font-size-sm text-danger m-2"><i class="fa fa-fw fa-info-circle mr-1"></i>Mastery Pool XP can only be used to level up the item.</h5>
		</div>
		<div class="col-12 col-md-6 text-right">
			<button role="button" class="btn btn-sm btn-success m-1" onClick="setMasteryPoolLevelUp(${skill}, 1);">+1</button>
			<button role="button" class="btn btn-sm btn-success m-1" onClick="setMasteryPoolLevelUp(${skill}, 5);">+5</button>
			<button role="button" class="btn btn-sm btn-success m-1" onClick="setMasteryPoolLevelUp(${skill}, 10);">+10</button>
			<div class="custom-control custom-switch m-1">
                <input type="checkbox" class="custom-control-input" id="settings-mastery-hideMaxLevels" name="settings-mastery-hideMaxLevels" ${checked} onClick="toggleHideMaxLevel(${skill});">
                <label class="custom-control-label font-w400 text-combat-smoke" for="settings-mastery-hideMaxLevels">Hide 99's</label>
            </div>
		</div>
		`);
  let masteryArray = [];
  for (let i = 0; i < MASTERY[skill].xp.length; i++) {
    masteryArray.push({
      masteryID: i,
      xp: MASTERY[skill].xp[i],
    });
  }
  if (
    skill === CONSTANTS.skill.Smithing ||
    skill === CONSTANTS.skill.Runecrafting ||
    skill === CONSTANTS.skill.Fletching
  ) {
    sortMasteryView(skill);
    mapOrder(masteryArray, masterySorted[skill], "masteryID");
  }
  for (let i = 0; i < masteryArray.length; i++) {
    let html = "";
    let disabled = "";
    let btnClass = "btn-success";
    let btnConfirm = false;
    let masteryXPForLevel = Math.ceil(
      getMasteryXpForNextLevel(skill, masteryArray[i].masteryID)
    );
    let masteryLevel = getMasteryLevel(skill, masteryArray[i].masteryID);
    let masteryProgress = getMasteryProgress(skill, masteryArray[i].masteryID);
    let masteryPoolProgress = getMasteryPoolProgress(skill);
    if (masteryXPForLevel > MASTERY[skill].pool) {
      disabled = "disabled";
      btnClass = "btn-danger";
    } else {
      let currentCheckpoint = 0;
      if (masteryPoolProgress >= masteryCheckpoints[3]) currentCheckpoint = 4;
      else if (masteryPoolProgress >= masteryCheckpoints[2])
        currentCheckpoint = 3;
      else if (masteryPoolProgress >= masteryCheckpoints[1])
        currentCheckpoint = 2;
      else if (masteryPoolProgress >= masteryCheckpoints[0])
        currentCheckpoint = 1;
      if (currentCheckpoint > 0) {
        let newProgress =
          ((MASTERY[skill].pool - masteryXPForLevel) /
            getMasteryPoolTotalXP(skill)) *
          100;
        let loseCheckpoint = false;
        if (currentCheckpoint === 4 && newProgress < masteryCheckpoints[3])
          loseCheckpoint = true;
        if (currentCheckpoint === 3 && newProgress < masteryCheckpoints[2])
          loseCheckpoint = true;
        if (currentCheckpoint === 2 && newProgress < masteryCheckpoints[1])
          loseCheckpoint = true;
        if (currentCheckpoint === 1 && newProgress < masteryCheckpoints[0])
          loseCheckpoint = true;
        if (loseCheckpoint) {
          btnClass = "btn-warning";
          btnConfirm = true;
        }
      }
    }
    if (
      (SETTINGS.mastery.hideMaxLevel &&
        getMasteryLevel(skill, masteryArray[i].masteryID) < 99) ||
      !SETTINGS.mastery.hideMaxLevel
    ) {
      html += `<div class="col-12 col-md-6">
					<div class="block block-rounded-double bg-combat-inner-dark p-2">
						<div class="media d-flex align-items-center push">
							<div class="mr-1">
								<img class="skill-icon-sm" id="modal-mastery-img-${
                  masteryArray[i].masteryID
                }" src="${getMasteryImage(skill, masteryArray[i].masteryID)}">
							</div>
							<div class="media-body">
								<div class="row no-gutters">
									<div class="col-3 font-w400 font-size-sm text-combat-smoke">
										<img class="skill-icon-xxs mr-1" src="https://cdn.melvor.net/core/v018/assets/media/main/mastery_header.svg">
										<strong id="mastery-item-level-${skill}-${
        masteryArray[i].masteryID
      }">${masteryLevel}</strong>
									</div>
									<div class="col-9 font-w400 font-size-sm text-combat-smoke text-right">`;
      if (masteryLevel < 99)
        html += `<span id="mastery-item-xp-required-${skill}-${
          masteryArray[i].masteryID
        }">${numberWithCommas(
          masteryXPForLevel
        )}</span> XP for +${masteryPoolLevelUp} Levels`;
      html += `</div></div><div class="progress active" style="height: 10px">`;
      if (masteryLevel >= 99)
        html += `<div id="mastery-item-progress-bar-${skill}-${masteryArray[i].masteryID}" class="progress-bar bg-success" role="progressbar" style="width: 100%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">`;
      else
        html += `<div id="mastery-item-progress-bar-${skill}-${masteryArray[i].masteryID}" class="progress-bar bg-info" role="progressbar" style="width: ${masteryProgress}%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">`;
      html += `</div>
								</div>
							</div>`;
      if (masteryLevel < 99)
        html += `<div class="ml-2">
						<button role="button" class="btn btn-sm ${btnClass} ${disabled}" onClick="levelUpMasteryWithPool(${skill}, ${masteryArray[i].masteryID}, ${btnConfirm});" ${disabled}>+${masteryPoolLevelUp}</button>
					</div>`;
      html += `</div>
					</div>
				</div>`;
    }
    $("#modal-content-spend-mastery-xp").append(html);
    const instance = tippy("#modal-mastery-img-" + masteryArray[i].masteryID, {
      content: getMasteryName(skill, masteryArray[i].masteryID),
      placement: "top",
      allowHTML: false,
      interactive: false,
      animation: false,
    });
    tooltipInstances.masteryModal =
      tooltipInstances.masteryModal.concat(instance);
  }
  $("#modal-spend-mastery-xp").modal("show");
  updateMasteryPoolProgress(skill);
}
function setMasteryPoolLevelUp(skill, level) {
  masteryPoolLevelUp = level;
  showSpendMasteryXP(skill);
}
function updateSpendMasteryScreen(skill, masteryID) {
  $(`#mastery-item-progress-bar-${skill}-${masteryID}`).css(
    "width",
    `${getMasteryProgress(skill, masteryID)}%`
  );
  $(`#mastery-item-level-${skill}-${masteryID}`).text(
    getMasteryLevel(skill, masteryID)
  );
  $(`#mastery-item-xp-required-${skill}-${masteryID}`).text(
    numberWithCommas(getMasteryXpForNextLevel(skill, masteryID))
  );
}
function getMasteryXpForNextLevel(skill, masteryID) {
  let levels = masteryPoolLevelUp;
  let xpForNextLevel = 0;
  let nextLevel = getMasteryLevel(skill, masteryID) + levels;
  if (nextLevel >= 99) nextLevel = 99;
  if (nextLevel < 100 && getMasteryLevel(skill, masteryID) < 99)
    xpForNextLevel =
      exp.level_to_xp(nextLevel) - MASTERY[skill].xp[masteryID] + 1;
  return xpForNextLevel;
}
function levelUpMasteryWithPool(skill, masteryID, confirmation = false) {
  if (confirmation && SETTINGS.mastery.confirmationCheckpoint) {
    Swal.fire({
      title: "Hol' Up!",
      html: '<h5 class="font-w600 text-combat-smoke mb-1">You\'re about to lose a Mastery Checkpoint.</h5><h5 class="font-w300 font-size-sm text-combat-smoke mb-1">Please confirm you actually want to do this?</h5><h5 class="font-w300 font-size-sm text-danger mb-1"><small>This confirmation can be disabled in Settings.</small></h5>',
      imageUrl: "assets/media/main/mastery_header.svg",
      imageWidth: 64,
      imageHeight: 64,
      imageAlt: "Mastery",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.value) {
        levelUpMasteryWithPool(skill, masteryID, false);
      }
    });
  } else {
    let xp = getMasteryXpForNextLevel(skill, masteryID);
    if (MASTERY[skill].pool >= xp) {
      addMasteryXP(skill, masteryID, 0, true, xp, false);
      addMasteryXPToPool(skill, -xp, false, true);
      updateSpendMasteryScreen(skill, masteryID);
      if (getMasteryLevel(skill, masteryID >= 99)) showSpendMasteryXP(skill);
    }
    if (skill === CONSTANTS.skill.Fishing) {
      for (let i = 0; i < fishingAreas.length; i++) {
        for (let f = 0; f < fishingAreas[i].fish.length; f++) {
          if (fishingAreas[i].fish[f] === masteryID) {
            updateFishingMastery(i, f);
            break;
          }
        }
      }
    }
  }
}
function viewMasteryCheckpoints(skill) {
  $("#modal-content-checkpoints").html("");
  let html = "";
  for (let i = 0; i < masteryCheckpoints.length; i++) {
    html += `<div class="col-12">
					<div class="block block-rounded-double bg-combat-inner-dark p-3">
						<div class="media d-flex align-items-center push">
							<div class="mr-3">
								<h2 class="font-w700 ${getCheckpointBonusClass(
                  skill,
                  i
                )} mb-0" id="mastery-modal-checkpoint-percent-0">
									${masteryCheckpoints[i]}%
								</h2>
							</div>
							<div class="media-body">
								<div class="font-w600 font-size-sm" id="mastery-modal-checkpoint-description-0">
									${masteryCheckpointBonuses[skill].bonuses[i]}
								</div>
								<div class="font-size-sm" id="mastery-modal-checkpoint-xp-required-0">
									<small>${getMasteryCheckpointBonusStatus(skill, i)}</small>
								</div>
							</div>
						</div>
					</div>
				</div>`;
  }
  $("#modal-content-checkpoints").html(html);
  $("#modal-mastery-checkpoints").modal("show");
}
function getMasteryCheckpointBonusStatus(skill, checkpoint) {
  let status = "";
  let checkpointXP = Math.floor(
    getMasteryPoolTotalXP(skill) * (masteryCheckpoints[checkpoint] / 100)
  );
  if (MASTERY[skill].pool >= checkpointXP)
    status = "Checkpoint active (" + numberWithCommas(checkpointXP) + " XP)";
  else
    status =
      numberWithCommas(Math.ceil(checkpointXP - MASTERY[skill].pool)) +
      " XP remaining (" +
      numberWithCommas(checkpointXP) +
      " XP)";
  return status;
}
function getCheckpointBonusClass(skill, checkpoint) {
  let textClass = "text-danger";
  let checkpointXP = Math.floor(
    getMasteryPoolTotalXP(skill) * (masteryCheckpoints[checkpoint] / 100)
  );
  if (MASTERY[skill].pool >= checkpointXP) textClass = "text-success";
  return textClass;
}
function toggleHideMaxLevel(skill) {
  changeSetting(31, true);
  showSpendMasteryXP(skill);
}
function sortMasteryView(skill) {
  let array = [];
  let arraySorted = [];
  switch (skill) {
    case CONSTANTS.skill.Smithing:
      let smithingArray = JSON.parse(JSON.stringify(smithingItems));
      smithingArray.sort(function (a, b) {
        return a.category - b.category;
      });
      let smithingSorted = [];
      for (let i = 0; i < smithingArray.length; i++)
        smithingSorted.push(smithingArray[i].smithingID);
      masterySorted[CONSTANTS.skill.Smithing] = smithingSorted;
      break;
    case CONSTANTS.skill.Runecrafting:
      array = JSON.parse(JSON.stringify(runecraftingItems));
      array.sort(function (a, b) {
        return a.runecraftingCategory - b.runecraftingCategory;
      });
      arraySorted = [];
      for (let i = 0; i < array.length; i++)
        arraySorted.push(array[i].runecraftingID);
      masterySorted[CONSTANTS.skill.Runecrafting] = arraySorted;
      break;
    case CONSTANTS.skill.Fletching:
      array = JSON.parse(JSON.stringify(fletchingItems));
      array.sort(function (a, b) {
        return a.fletchingLevel - b.fletchingLevel;
      });
      array.sort(function (a, b) {
        return a.fletchingCategory - b.fletchingCategory;
      });
      arraySorted = [];
      for (let i = 0; i < array.length; i++)
        arraySorted.push(array[i].fletchingID);
      masterySorted[CONSTANTS.skill.Fletching] = arraySorted;
      break;
  }
}
function updateMasteryLevelCache(skill, masteryID) {
  masteryLevelCache[skill].levels[masteryID] = exp.xp_to_level(
    MASTERY[skill].xp[masteryID]
  );
}
function populateMasteryLevelCache() {
  for (let i = 0; i < Object.keys(SKILLS).length; i++) {
    if (SKILLS[i].hasMastery) {
      masteryLevelCache[i] = {
        levels: [],
      };
      for (let f = 0; f < MASTERY[i].xp.length; f++) {
        masteryLevelCache[i].levels.push(exp.xp_to_level(MASTERY[i].xp[f]));
        if (masteryLevelCache[i].levels[f] > 99)
          masteryLevelCache[i].levels[f] = 99;
      }
    }
  }
}
