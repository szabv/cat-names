import express from 'express';
import processAnimalData from './process-animal-data';

const dataUrl = 'http://agl-developer-test.azurewebsites.net/people.json';

export default function() {
	const app = express();
	const port = 8090;

	// Serve static files from /public
	app.use(express.static('public'));

	// Animal data end point.
	app.get('/animal-data', function(req, res) {
		// Download and transform the data and send it to UI ready to be 
		// displayed.
		processAnimalData(dataUrl).then((data) => {
			console.log('Some one wants some cat names bless\'em.');
			res.send(data);
		});
	});

	// Start the server
	app.listen(port);
	console.log('\n-=[ Starting Server ]=-');
	console.log('Wow you went to a bit of trouble to check this out. Appreciated..');
	console.log(`Server now running on: http://localhost:${port}`);
}