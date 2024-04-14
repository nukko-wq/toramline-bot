import * as line from '@line/bot-sdk'
import express from 'express';
import { findBossData } from "./service/findBossData.js"
import { formatResponseMessage } from "./service/formatResponseMessage.js"
import { correctionTargetName } from './service/correctionTargetName.js'
import toramBossList from "./service/toramBossData.js"
 
const config = {
    channelSecret: process.env.CHANNEL_SECRET,
}

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  let targetBossName = event.message.text
  targetBossName = correctionTargetName(targetBossName)
  const bossData = findBossData(targetBossName)
  console.log(bossData)

  let responseMessage
  if (targetBossName === "一覧") {
    const nameList = toramBossList.map(boss => boss.name)
    responseMessage = nameList.join("\n")
    console.log(responseMessage)
  }
  else if (typeof targetBossName === 'number' &&isFinite(targetBossName) && targetBossName >= 1 && targetBossName <= 999) {
    responseMessage = `https://tanaka0.work/AIO/jp/Straye/ExpSearch?type=mfb&difs=nhlu&levelRange=8&recs=10&myLv=${targetBossName}`
  }
  else if (bossData.length !== 0) {
    responseMessage = formatResponseMessage(bossData)
  } else {
    responseMessage = "登録されていません"
  }
  console.log(responseMessage)

  // create an echoing text message
  const echo = { type: 'text', text: responseMessage };

  // use reply API

  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [echo],
  });
}

// listen on port
//const port = process.env.PORT || 3000;
//app.listen(port, () => {
//  console.log(`listening on ${port}`);
//});
app.listen(3000, () => console.log("Server ready on port 3000."))