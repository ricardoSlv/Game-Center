const {getLeaderboard} = require('./database/db')

exports.handler = async function handler(event, _ /*context*/, callback) {
    let status={}
    const {game,map,score} = JSON.parse(event.body)
    const lb = await getLeaderboard({game,map})

    if(lb[0].leaderboard.some(x=>parseInt(x.score)<parseInt(score)))
        status={qualified: true}
    else
        status={qualified: false}    
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(status)
    });
}