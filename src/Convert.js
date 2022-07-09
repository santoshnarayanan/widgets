import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) =>{
    const [translated, setTranslated] = useState('');
    useEffect(()=>{
        axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q: text,  // text to translate
                target:language.value,  // target language
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM' 
            }
        });
    },[language, text]);
};

export default Convert;