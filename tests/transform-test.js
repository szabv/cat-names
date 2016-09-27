import { expect } from 'chai';
import { animalDataTransformer } from '../srv_src/process-animal-data';

describe('Test the server data transform.', () => {

  it('Can transform people and their pets to pet names by gender.', () => {
		// Arrange 
		const data = '[{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]}]';

		// Act
		const result = animalDataTransformer(data);

		// Assert
		expect(result).to.equal('{"Male":["Garfield"],"Female":["Garfield"]}');
	});

	it('Some people don\'t have cats.', () => {
		// Arrange 
		const data = '[{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Mouse"}]}]';

		// Act
		const result = animalDataTransformer(data);

		// Assert
		expect(result).to.equal('{"Male":["Garfield"],"Female":[]}');
	});


	it('Some people don\'t have pets at all.', () => {
		// Arrange 
		const data = '[{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":null}]';

		// Act
		const result = animalDataTransformer(data);

		// Assert
		expect(result).to.equal('{"Male":["Garfield"],"Female":[]}');
	});

	it('Some people may have unusual genders that is going to be a problem to fix later.', () => {
		// Arrange 
		const data = '[{"name":"Bob","gender":"Sung","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Tom","type":"Cat"}]}]';

		// Acct // Assert
		expect(() => animalDataTransformer(data)).to.throw();
	});
});