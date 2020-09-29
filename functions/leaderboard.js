let mongodb = require('mongodb');
const { MongoClient } = mongodb;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@gamesdb.jiemy.mongodb.net?retryWrites=true&w=majority`

async function getLeaderboard(query) {
  const DBclient = new MongoClient(uri, { useUnifiedTopology: true })
  let leaderboard = []
  try {
    await DBclient.connect();
    const database = DBclient.db(process.env.DB_NAME)
    const collection = database.collection('leaderboard')
    
    console.log('Query: ', query)
    leaderboard = await collection.find(query).toArray() 
    console.log('Queried: ',query,'\n','Got: ',leaderboard)

  } catch (error) {
    console.log('Couldn\'t load leaderboard', error)
  } finally {
    await DBclient.close()
  }
  return leaderboard
}

exports.handler = async function handler(event, _ /*context*/, callback) {
  const lb = await getLeaderboard(JSON.parse(event.body))
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(lb)
  });
}