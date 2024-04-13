export const formatResponseMessage = (bossData) => {
  let response = ""

  bossData.forEach((boss) => {
    const other1 = boss.other1 ? `\n\n${boss.other1}` : ""
    const other2 = boss.other2 ? `\n${boss.other2}` : ""
    response += `${boss.displayName}\n------------------------\n属性: ${boss.attribute}\nクリティカル耐性: ${boss.critical_resistance}\nFLEE: ${boss.flee} (Normalの値)\n禁止: ${boss.kinshi}${other1}${other2}`
  })
  return response
}