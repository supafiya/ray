const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.use(express.json());

app.get('/', (req, res) => {
	res.send('JS index file');
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}..`);
});
