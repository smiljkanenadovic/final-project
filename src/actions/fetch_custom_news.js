
export function fetchCustomNews(source, relevance){
    
    return function(dispatch){
      fetch("https://newsapi.org/v1/articles?source="+ source+"&sortBy="+ relevance +"&apiKey=69c2f507be1c4822924ddd5f7e2d9695", { 'Access-Control-Allow-Origin': true})
      .then(res => {
          return res.json();          
      })
      .then(res => {       
        dispatch({type:"FETCH_CUSTOM_NEWS", payload: res.articles});
      })
      .catch(err => {
          console.log(err);
      })

   }
}