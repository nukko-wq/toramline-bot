import bossData from "./toramBossData.js"

export const findBossData = (bossName) => {
  return bossData.filter((toramData) => bossName === toramData.name)
}