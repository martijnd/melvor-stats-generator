import { NextApiRequest, NextApiResponse } from 'next'
import pako from 'pako';
import path from 'path';
import { createCanvas, Image, loadImage, registerFont } from 'canvas';
import getMasteryProgress from '../../../utils/mastery';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { name, data } = req.body;
  try {
    const jsonSave = JSON.parse(pako.ungzip(Buffer.from(data, 'base64'), { to: 'string' }));

    const skillLevelsJson = jsonSave.skillLevel;

    const coordX = (row: number) => 120 + row * 64;
    const coordY = (row: number) => 85 + row * 33;

    const X = Array(6).fill(null).map((_, i) => coordX(i));
    const Y = Array(6).fill(null).map((_, i) => coordY(i));

    const skillLevels = {
      Attack: { level: skillLevelsJson[6], x: X[0], y: Y[0] },
      Strength: { level: skillLevelsJson[7], x: X[0], y: Y[1] },
      Defence: { level: skillLevelsJson[8], x: X[0], y: Y[2] },
      Hitpoints: { level: skillLevelsJson[9], x: X[0], y: Y[3] },
      Ranged: { level: skillLevelsJson[12], x: X[1], y: Y[0] },
      Magic: { level: skillLevelsJson[16], x: X[1], y: Y[1] },
      Prayer: { level: skillLevelsJson[17], x: X[1], y: Y[2] },
      Slayer: { level: skillLevelsJson[18], x: X[1], y: Y[3] },
      Woodcutting: { level: skillLevelsJson[0], x: X[2], y: Y[0] },
      Fishing: { level: skillLevelsJson[1], x: X[2], y: Y[1] },
      Firemaking: { level: skillLevelsJson[2], x: X[2], y: Y[2] },
      Cooking: { level: skillLevelsJson[3], x: X[2], y: Y[3] },
      Mining: { level: skillLevelsJson[4], x: X[3], y: Y[0] },
      Smithing: { level: skillLevelsJson[5], x: X[3], y: Y[1] },
      Thieving: { level: skillLevelsJson[10], x: X[3], y: Y[2] },
      Farming: { level: skillLevelsJson[11], x: X[3], y: Y[3] },
      Fletching: { level: skillLevelsJson[13], x: X[4], y: Y[0] },
      Crafting: { level: skillLevelsJson[14], x: X[4], y: Y[1] },
      Runecrafting: { level: skillLevelsJson[15], x: X[4], y: Y[2] },
      Herblore: { level: skillLevelsJson[19], x: X[4], y: Y[3] },
      Agility: { level: skillLevelsJson[20], x: X[5], y: Y[0] },
    }

    const totalLevel = Object.values(skillLevels).reduce((acc, obj) => acc + obj.level, 0)

    registerFont(path.join(process.cwd(), 'public', 'roboto.ttf'), { family: 'Roboto' });
    registerFont(path.join(process.cwd(), 'public', 'KingthingsPetrock-Regular.ttf'), { family: 'Kingthings' });

    const canvas = createCanvas(494, 217);
    const ctx = canvas.getContext('2d');


    loadImage(path.join(process.cwd(), 'public', 'template.png')).then((image: Image) => {
      ctx.drawImage(image, 0, 0, 494, 217)

      Object.values(skillLevels).forEach(({ level, x, y }) => {
        ctx.font = '16px Roboto'
        ctx.fillStyle = 'white';
        ctx.fillText(level, x, y)
      })

      // Title
      ctx.font = '24px Kingthings'
      ctx.fillStyle = 'yellow';
      ctx.textAlign = 'center';
      ctx.fillText(name ? name : 'Melvor Idle Stats', 245, 47)
      
      // Total level
      ctx.textAlign = 'left';
      ctx.font = '16px Roboto'
      ctx.fillStyle = 'white';
      ctx.fillText(totalLevel.toString(), X[5], Y[2])

      // Mastery progress
      const {
        skills, mastery, items, monsters, pets, total
      } = getMasteryProgress(jsonSave);

      const data = [
        { data: skills, y: 59 },
        { data: mastery, y: 78 },
        { data: items, y: 97 },
        { data: monsters, y: 116 },
        { data: pets, y: 135 },
      ];
      ctx.textAlign = 'right';
      ctx.font = '12px Roboto'
      ctx.fillStyle = 'white';
      data.forEach(({ data, y }) => {
        ctx.fillText(`${data.toString()}%`, 74, y)
      })

      // Mastery total
      ctx.font = '16px Roboto'
      ctx.fillStyle = 'white';
      ctx.fillText(`${total.toString()}%`, 80, 162)

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