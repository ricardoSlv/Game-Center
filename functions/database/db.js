let mongodb = require('mongodb');
const { MongoClient } = mongodb;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@gamesdb.jiemy.mongodb.net?retryWrites=true&w=majority`


exports.getLeaderboard =  async function getLeaderboard(query) {
    const DBclient = new MongoClient(uri, { useUnifiedTopology: true })
    let leaderboard = []
    try {
      await DBclient.connect();
      const database = DBclient.db(process.env.DB_NAME)
      const collection = database.collection('leaderboard')
      
      leaderboard = await collection.find(query).toArray() 
  
    } catch (error) {
      console.log('Couldn\'t load leaderboard', error)
    } finally {
      await DBclient.close()
    }
    return leaderboard
  }