import './App.css';
import { useQuery, } from "react-query";
import { useState, } from "react"
import Data from './components/data';
import Results from './components/results'


function Content() {

  const [values, setValues] = useState()

  const {data, isSuccess, refetch} = useQuery(['key', values], () =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=18b43673946d2410bbb54325b0fcffd0&query=${values}`
  ).then((res) => res.json()), {
    manual: true,
    enabled: false,
  });

  const onInputChange = (text) =>{
    setValues(text);
  }
  
  const onClickFetch = (text) => { 
    console.log('text is '+ text);
    refetch() }
  return (
    <div className="App">
        <Data onClickFetch={onClickFetch} onInputChange={onInputChange} />
        {isSuccess && <Results results={data} />}
    </div>
  );
}

export default Content;