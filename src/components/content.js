import '../App.css';
import { useQuery, } from "react-query";
import React from "react"
import Data from './data';
import Results from './results'


function Content() {

  let input = React.createRef();

  const { data, isSuccess, refetch } = useQuery(['key', input], () =>
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=18b43673946d2410bbb54325b0fcffd0&query=${input.current.value}`
    ).then((res) => res.json()), {
    manual: true,
    enabled: false,
  });

  const onClickFetch = () => {
    refetch()
  }
  return (
    <div className="App">
      <Data onClickFetch={onClickFetch} input={input} />
      {isSuccess && <Results results={data} />}
    </div>
  );
}

export default Content;