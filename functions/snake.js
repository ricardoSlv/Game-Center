let mongodb = require('mongodb');
const { MongoClient } = mongodb;
const uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@discbotdb.ildnc.mongodb.net?retryWrites=true&w=majority`

 async function getSnakeLeaderboard(map){
    const DBclient = new MongoClient(uri,{ useUnifiedTopology: true })
    let leaderboard = []
    try {
      await DBclient.connect();
      const database = DBclient.db(process.env.DB_NAME)
      const collection = database.collection('leaderboard')
      const leaderboardObj = await collection.findOne({game:'snake',map:map})
      leaderboard = leaderboardObj.leaderboard

    }catch(error){
      console.log('Couldn\'t load leaderboard',error)
      console.log('DB name ',process.env.DB_NAME)
      console.log('User ',process.env.DB_USER)
      console.log('Pass ',process.env.DB_PWD)
    } finally {
      await DBclient.close()
    }
    return leaderboard
}

exports.handler = async function handler(event, context, callback) {
  const lb = await getSnakeLeaderboard(1)
  callback(null, {
  statusCode: 200,
  body: JSON.stringify(lb)
  });
}