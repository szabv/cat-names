import express from 'express';

export default function() {
	const app = express();
	const port = 8080;

	// Routs

	// Serve static files from /public
	app.use(express.static('public'));

	// End point to see if it works. 
	app.get('/test', function(req, res) {
			res.send('this is a sample!');  
	});

	// Start the server
	app.listen(port);

	console.log('Wow you went to a bit of trouble to check this out. Appreciated..');
	console.log(`Server should now running point your browser to: http://localhost:${port}`);
}