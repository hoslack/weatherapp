const http = require('http');
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';

const apiKey = "927f2f963976b225f9725ffae71d9787";
const link = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;



	
 const handler = (request, response)=>{

	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('Server working'); 	

 	http.get(link, (res)=>{
 		var alldata = '';
		var apidata = '';

		res.on('data', (chunk)=>{
			apidata+=chunk;
		});

		res.on('end', ()=>{
		console.log(apidata);
		 alldata = JSON.parse(apidata);

		});

		
	});
 	

 }

const server = http.createServer(handler);

server.listen(port, ()=>{
	console.log(`Server listening on port: ${port}`);
});