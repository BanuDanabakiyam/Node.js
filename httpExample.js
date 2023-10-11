const { get } = require('https');
get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data hcunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});
