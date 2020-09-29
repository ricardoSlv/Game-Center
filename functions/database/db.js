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

exports.updateLeaderboard =  async function updateLeaderboard(query,name,score) {
  const DBclient = new MongoClient(uri, { useUnifiedTopology: true })
  let status = ''
  try {
    await DBclient.connect();
    const database = DBclient.db(process.env.DB_NAME)
    const collection = database.collection('leaderboard')
  
    const leaderboard = await collection.find(query).toArray()

    let recordList = leaderboard[0].leaderboard
    recordList.pop()
    recordList.push({name,score})
    recordList.sort((a,b)=>b.score-a.score)
    console.log(recordList.map(x=>`${x.name}: ${x.score}\n`))
    await collection.updateOne(query,{$set:{leaderboard:recordList}})

    status='sucess'
  } catch (error) {
    status='error'
    console.log('Couldn\'t load leaderboard', error)
  } finally {
    await DBclient.close()
  }
  return status
}