import requestPromise from 'request-promise';

export default function(url){
	return requestPromise(url).then((data) => {
		console.log(data);
		return data;
	}); 
}