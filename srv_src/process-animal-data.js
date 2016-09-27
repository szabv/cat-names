import requestPromise from 'request-promise';

// Transform the base data so that the UI can easily display it. 
// Function returns a JSON string with cat names by gender of owner.
export function animalDataTransformer (data){
	const baseData = JSON.parse(data);

	// Transform the array to an object that lists cat names by gender of owner
	const results = baseData.reduce((results, person) => {

		// Get cat names for this person, some people don't have pets
		const catNames = person.pets 
			? person.pets.filter( (animal) => animal.type === "Cat" )
				.map((animal) => animal.name) 
			: [];

		// Update add the cat names to the relevant array by the users gender.
		const namesArray = results[person.gender];
		namesArray.push.apply(namesArray, catNames);

		return results;
	}, { Male: [], Female: [] } );

	// Sort the cat names alphabetically.
	return JSON.stringify({ 
		Male: results.Male.sort(), 
		Female: results.Female.sort(),
	});
}

// Method requests the animal data form the web service and transforms it 
// to be in the shape the UI expects. 
// Returns a promise that is resolved with the transformed data. 
export default function(uri){
	var options = {
		uri,
		transform: animalDataTransformer
	};

	return requestPromise(options);
}