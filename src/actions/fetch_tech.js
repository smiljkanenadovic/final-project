

export function fetchTech(){
    
        return function(dispatch){
            fetch("https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=69c2f507be1c4822924ddd5f7e2d9695",  { 'Access-Control-Allow-Origin': true})
            .then(res => {
                return res.json();                
            })
            .then(res => {             
              dispatch({type:"FETCH_TECH", payload: res.articles});
            })
            .catch(err => {
                console.log(err);
            })
      
         }
      
}