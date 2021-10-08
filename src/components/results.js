import React from 'react';
import { connect } from 'react-redux'

const  Results = (props) => {
    const resultsList = props.Store.results.results;
    console.log(resultsList)
    const renderList = resultsList?.map((item)=>
        <div key = {item.id.toString()} className = 'result'>
            <h3>{item.title}</h3>
            <div className='content'>
                <div className='poster'><img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Poster"/></div>
                <div className='text-container'><p className='description'> {item.overview}</p> 
                <p className='additional-info'><i>Release date: {item.release_date} <br/>Overview: <b>{item.vote_average}</b></i></p>
                
                </div>
                
            </div>

        </div>

    )
    return (
        <div className = 'results'>
            {renderList}
        </div>
    )
}

export default connect(
    state => ({
      Store: state
    }),
    dispatch => ({})
  )(Results);