const mailin = require('node-mailin')
const axios = require('axios')

const spoofMailHerokuServer = 'https://spoofmail-lambda.herokuapp.com/api/messages/'

mailin.start({
    port: 25,
    webhook: 'https://spoofmail-lambda.herokuapp.com/api/messages/'
})

mailin.on('message', function(connection, data, content) {
    const postBody = {
        from: data.from.value,
        html: data.html,
        to: data.to.value,
        text: data.text,
        subject: data.subject
    }
    console.log(data)
    console.log('_____________________')
    console.log(postBody)
    axios({
        url: spoofMailHerokuServer,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: postBody,
    })
})