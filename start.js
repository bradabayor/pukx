// START.js

// Start App
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`EXP @ ${server.address().port}`);
});