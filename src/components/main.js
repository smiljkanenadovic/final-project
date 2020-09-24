import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomNews } from "../actions/fetch_custom_news";
import image from "../../src/836 [Converted].svg";


const Main = () => {

    const [sources, setSources] = useState([]);
    const [source, setSource] = useState("");
    const [relevance, setRelevance] = useState("");

    const customNewsSelector = useSelector((state) => state.CustomSearch);   
    
    const dispatch = useDispatch();
    const getCustomNews = (source, relevance) => dispatch(fetchCustomNews(source, relevance));

    const getSources = () => {
        axios.get("https://newsapi.org/v1/sources", { 'Access-Control-Allow-Origin': true})
        .then(res => {
            return res.data;
            
        })
        .then(response => {
            setSources(response.sources)
        })
        .catch(e => console.log(e))
    }
    
    useEffect(()=>{
        getSources();
    }, [])

    const getNews = (e) => {
        console.log(source);
        e.preventDefault();
        if(source === "" || source === "nothing" ){
            console.log("There is no source selected");
        }else{
            getCustomNews(source, relevance);
            console.log(customNewsSelector.customNews)
        }
    }
    
    let news;
    if(customNewsSelector.customNews.length > 0){
      news =  <div className="news">
                    { customNewsSelector.customNews.map(x => {
                            return (
                                <div className="post" key={x.title}> 
                                <img src={x.urlToImage} alt={x.title} />
                                    <h2>{x.title}</h2>
                                    <p>{x.description}</p>
                                </div>
                            )
                        }) 
                    }
               </div>              
    
    }else{
        news = <p>Select a source and relevance from the form</p>
    }

    return(
        <React.Fragment>
        <header>
          <h1>News Break</h1>
          <img src={image} />
        </header>   
            <section>
                <h2>Custom Search</h2>

                 <form onSubmit = {getNews}>
                    <div className="form-control">
                        <label>Source</label>
                        <select onChange = {e => setSource(e.target.value)}>
                            <option value="nothing">Select an option...</option>
                            {
                                sources.map(source => {
                                    return(
                                        <option key={source.id} value={source.id}>{source.name}</option>
                                    )
                                })
                            }
                        </select>
                        <label>Relevance</label>
                        <select onChange={e => setRelevance(e.target.value) }>
                            <option value="latest">Latest</option>
                            <option value="top">Top</option>
                        </select>
                        <input type="submit" value="Search" />
                    </div>
                 </form>   

                    {news}                   
                           
            </section>
        </React.Fragment>
    )   
}

export default Main;