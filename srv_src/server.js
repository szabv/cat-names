import express from 'express';
import processAnimalData from './process-animal-data';

const dataUrl = 'http://agl-developer-test.azurewebsites.net/people.json';

export default function() {
	const app = express();
	const port = 8080;

	// Serve static files from /public
	app.use(express.static('public'));

	// End point to see if it works. 
	app.get('/test', function(req, res) {
			res.send('this is a sample!');  
	});

	// Animal data end point.
	app.get('/animal-data', function(req, res) {
		// Download and transform the data and send it to UI ready to be 
		// displayed.
		processAnimalData(dataUrl).then((data) => {
			res.send(data);
		});
	});

	// Start the server
	app.listen(port);
	console.log('\n-=[ Starting Server ]=-');
	console.log('Wow you went to a bit of trouble to check this out. Appreciated..');
	console.log(`Server now running on: http://localhost:${port}`);
}