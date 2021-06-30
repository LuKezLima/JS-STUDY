const axios = require('axios')
async function Api(){

    try {
   const {data} = await axios
    .get('https://api.openweathermap.org/data/2.5/weather?q=sao jose dos campos&appid=c26c9e9ea4b6fca5b999348eed7781af')
    .then(response => response );
    console.log(data);    
    } catch (error) {
        console.error("DEU ERRO KRL")
    }




    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.info = response))

  

    // fetch(url)
    // .then(resp => {return resp.json()})
    // .then(json => {
    //     console.log(json);
        
    // })
    
}


Api()   