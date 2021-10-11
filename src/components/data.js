import React from 'react';
import { useState } from 'react';
// import { connect } from 'react-redux'

const  Data = (props) => {

    const [searchValue, setSearchValue] = useState()
    let input = React.createRef();

    const onChangeHandler =() =>{
      setSearchValue(input.current.value);
      console.log(searchValue);
    }

    const onClickHandler =()=>{
      props.onInputChange(searchValue)
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.charCode === 13) {
        props.onInputChange(searchValue);
      }
    };

    return (
        <div className = 'data'>
            <h1>Movie searcher (react-query)</h1>
              <button onClick={onClickHandler}>Search</button>
              <input  onKeyPress={handleKeypress} type='text'ref={input} onChange={onChangeHandler} placeholder='Enter the title here'/>
        </div>
    )
}

export default Data;

// export default connect(
//     state => ({
//       Store: state
//     }),
//     dispatch => ({
//     onFetchData: (input) => dispatch({ type: 'ASYNC_FETCH_DATA', payload: input })
//     })
//   )(Data);