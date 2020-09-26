import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const uri=`mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PWD}@discbotdb.ildnc.mongodb.net?retryWrites=true&w=majority`

export async function getSnakeLeaderboard(map:number): Promise<Array<{name:string,score:number}>>{
    const DBclient = new MongoClient(uri,{ useUnifiedTopology: true })
    let leaderboard:Array<{name:string,score:number}> = []
    try {
      await DBclient.connect();
      const database = DBclient.db(process.env.REACT_APP_DB_NAME)
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

export async function addSnakeScoreToLeaderboard(playerName:string, map:number, playerScore: number): Promise<string>{
  const DBclient = new MongoClient(uri,{ useUnifiedTopology: true })
  let status = ''
  try {
    await DBclient.connect();
    const database = DBclient.db(process.env.REACT_APP_DB_NAME)
    const collection = database.collection('leaderboard')
    const leaderboardObj = await collection.findOne({game:'snake',map:map})
    const leaderboard:Array<{name:string,score:number}> = leaderboardObj.leaderboard
    let i=0;
    while(leaderboard[i].score>playerScore){i++}
    if(i===leaderboard.length-1){
      status='Sorry, you\'re not actually on the top 10 :(' 
    }
    else{
      leaderboard[i]={name:playerName,score:playerScore}
      await collection.updateOne({game:'snake',map:map},{$set:{leaderboard:leaderboard}})
      status = 'Congratulations, you\'re now on the leaderboard'
    }
    
  }catch(error){
    status='There was an error updating the leaderboard :('
    console.log('Couldn\'t load leaderboard')
  } finally {
    await DBclient.close()
  }
  return status
}