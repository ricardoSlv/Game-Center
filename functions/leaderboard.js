const {getLeaderboard} = require('./database/db')

exports.handler = async function handler(event, _ /*context*/, callback) {
  const lb = await getLeaderboard(JSON.parse(event.body))
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(lb)
  });
}