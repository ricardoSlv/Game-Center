const { updateLeaderboard } = require('./database/db')

exports.handler = async function handler(event, _ /*context*/, callback) {
    let status = {}
    const { game, map, name, score } = JSON.parse(event.body)

    if (name !== null && name !== '') {
        const updateStatus = await updateLeaderboard({ game, map }, name, score)
        if (updateStatus === 'sucess')
            status = { updated: true }
        else
            status = { updated: false }
    }
    else
        status = { updated: false }
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(status)
    });
}