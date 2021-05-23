import { NextApiRequest, NextApiResponse } from 'next'
import pako from 'pako';
const { createCanvas, loadImage, registerFont } = require('canvas')

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body.data;
  try {
    const jsonSave = JSON.parse(pako.ungzip(Buffer.from(data, 'base64'), { to: 'string' }));

    const skillLevelsJson = jsonSave.skillLevel;

    const skillLevels = {
      Attack: { level: skillLevelsJson[6], x: 75, y: 124 },
      Strength: { level: skillLevelsJson[7], x: 75, y: 164 },
      Defence: { level: skillLevelsJson[8], x: 75, y: 204 },
      Hitpoints: { level: skillLevelsJson[9], x: 75, y: 244 },
      Ranged: { level: skillLevelsJson[12], x: 160, y: 124 },
      Magic: { level: skillLevelsJson[16], x: 160, y: 164 },
      Prayer: { level: skillLevelsJson[17], x: 160, y: 204 },
      Slayer: { level: skillLevelsJson[18], x: 160, y: 244 },
      Woodcutting: { level: skillLevelsJson[0], x: 240, y: 124 },
      Fishing: { level: skillLevelsJson[1], x: 240, y: 164 },
      Firemaking: { level: skillLevelsJson[2], x: 240, y: 204 },
      Cooking: { level: skillLevelsJson[3], x: 240, y: 244 },
      Mining: { level: skillLevelsJson[4], x: 325, y: 124 },
      Smithing: { level: skillLevelsJson[5], x: 325, y: 164 },
      Thieving: { level: skillLevelsJson[10], x: 325, y: 204 },
      Farming: { level: skillLevelsJson[11], x: 325, y: 244 },
      Fletching: { level: skillLevelsJson[13], x: 410, y: 124 },
      Crafting: { level: skillLevelsJson[14], x: 410, y: 164 },
      Runecrafting: { level: skillLevelsJson[15], x: 410, y: 204 },
      Herblore: { level: skillLevelsJson[19], x: 410, y: 244 },
      Agility: { level: skillLevelsJson[20], x: 490, y: 190 },
    }

    registerFont('https://melvor-stats-generator.vercel.app/impact.ttf', { family: 'Impact' })

    const canvas = createCanvas(529, 288);
    const ctx = canvas.getContext('2d');


    loadImage('https://melvor-stats-generator.vercel.app/template.png').then((image: any) => {
      ctx.drawImage(image, 0, 0, 529, 288)

      Object.values(skillLevels).forEach(({level, x, y}) => {
        ctx.font = '20px Impact'
        ctx.fillStyle = 'white';
        ctx.fillText(level, x, y)
      })

      res.status(200).json(canvas.toDataURL())
    })


  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler

/**
 * Order:
 * Woodcutting
 * Fishing
 * Firemaking
 * Cooking
 * Mining
 * Smithing
 * Attack
 * Strength
 * Defence
 * Hitpoints
 * Thieving
 * Farming
 * Ranged
 * Fletching
 * Crafting
 * Runecrafting
 * Magic
 * Prayer
 * Slayer
 * Herblore
 * Agility
 */