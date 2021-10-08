import React from 'react';
import { connect } from 'react-redux'

const  Data = (props) => {
    let input = React.createRef();
    const onChangeHandler = () =>{
        console.log(input.current.value);
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.charCode === 13) {
        props.onFetchData(input);
      }
    };

    return (
        <div className = 'data'>
            <h1>Movie searcher (redux-thunk)</h1>
              <button onClick={() => (props.onFetchData(input.current.value))}>Search</button>
              <input  onKeyPress={handleKeypress} type='text'ref={input} onChange={onChangeHandler} placeholder='Enter the title here'/>
        </div>
    )
}

export default connect(
    state => ({
      Store: state
    }),
    dispatch => ({
    onFetchData: (input) => dispatch({ type: 'ASYNC_FETCH_DATA', payload: input })
    })
  )(Data);