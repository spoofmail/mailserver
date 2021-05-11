const mailin = require('node-mailin')
const axios = require('axios')

const spoofMailHerokuServer = 'https://spoofmail-lambda.herokuapp.com/api/messages/'

mailin.start({
    port: 25,
    webhook: 'https://spoofmail-lambda.herokuapp.com/api/messages/'
})

mailin.on('message', function(connection, data, content) {
    console.log(connection, data)
    /*axios({
        url: spoofMailHerokuServer,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: data,
    })*/
})