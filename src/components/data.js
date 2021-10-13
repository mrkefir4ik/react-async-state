import React from 'react';

const Data = (props) => {

  const onClickHandler = () => {
    props.onClickFetch()
  }
  const keypressHandler = e => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      props.onClickFetch()
    }
  };

  return (
    <div className='data'>
      <h1>Movie searcher (react-query)</h1>
      <button onClick={onClickHandler}>Search</button>
      <input onKeyPress={keypressHandler} type='text' ref={props.input} placeholder='Enter the title here' value={props.query} />
    </div>
  )
}

export default Data;