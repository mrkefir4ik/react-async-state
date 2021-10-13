import React from 'react';
// import { connect } from 'react-redux'

const  Data = (props) => {

    let input = React.createRef();

    const onChangeHandler =() =>{
      console.log(input.current.value);
      props.onInputChange(input.current.value);
    }

    const onClickHandler =()=>{
      props.onInputChange(input.current.value);
      props.onClickFetch()
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.charCode === 13) {
        props.onInputChange(input.current.value)
        props.onClickFetch()
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