import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {

    const [term, setTerm] = useState('programming'); // default value
    const [results, setResults] = useState([]);
    const timeout = 1000

    // component is rendered whenever term value is changed
    useEffect(() =>{
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list: 'search',
                    origin:'*',
                    format:'json',
                    srsearch: term,
                },
            });

            setResults(data.query.search);
        };

        if(term && !results.length){
            search();
        }else{
                //if user does not type anything with 1second
                const timeoutId = setTimeout(() => {
                    //if term is defined in search string
                    if(term){
                        search();
                    }
                }, timeout);

                //clear previous timeout
                return () =>{
                    clearTimeout(timeoutId);
                }
        }
    },[term, results]);

    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                    Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} 
                    onChange={e=> setTerm(e.target.value)} className="input"/>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;