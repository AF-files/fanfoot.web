import 'whatwg-fetch';

class httpService{
    //this runs asynchronously which means return promise runs before resolve(response.json());
    //create function that gets list of items from api
    //this is an ES6 function, => { } is the format
    getPlayers = () => {
        ///a promise is basically a response(it promises to return something)
        var promise = new Promise((resolve, reject)=>{
            fetch('http://localhost:3001/players').then(response => {
                resolve(response.json()); 
            })
        });
        return promise;
    }
}

export default httpService;