export const correctionTargetName = (targetName) => {
  let correctedName = ""
  switch (targetName) {
    case 'ミュミューガ':
    case '欺竜ミミューガ':
      correctedName = "ミミューガ"
      break
    case '尉竜ルディス':
      correctedName = "ルディス"
      break
    case 'ドン':
    case 'プロフンド':
      correctedName = "ドン・プロフンド"
      break
    case '轟竜ボビナリー':
      correctedName = "ボビナリー"
      break
    case '灼竜イグネウス':
      correctedName = "イグネウス"
      break
    case '悪竜ファジーノ':
      correctedName = "ファジーノ"
    default:
      correctedName = targetName
      
  }
  return correctedName
}