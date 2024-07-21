const fs = require('fs');
const fetch = require('node-fetch');

const content = fs.readFileSync('text.txt', 'utf8');

function main(){
    fetch('http://localhost:5000/api/summarize', {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

main();



