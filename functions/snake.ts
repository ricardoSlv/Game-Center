import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@discbotdb.ildnc.mongodb.net?retryWrites=true&w=majority`

export async function getSnakeLeaderboard(map:number): Promise<Array<{name:string,score:number}>>{
    const DBclient = new MongoClient(uri,{ useUnifiedTopology: true })
    let leaderboard:Array<{name:string,score:number}> = []
    try {
      await DBclient.connect();
      const database = DBclient.db(process.env.DB_NAME)
      const collection = database.collection('leaderboard')
      const leaderboardObj = await collection.findOne({game:'snake',map:map})
      leaderboard = leaderboardObj.leaderboard

    }catch(error){
      console.log('Couldn\'t load leaderboard')
    } finally {
      await DBclient.close()
    }
    return leaderboard
}