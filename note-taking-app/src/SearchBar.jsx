import React from 'react';
import './MainContainer.css';


const searchBar = (props) => {

  return (
    <div>
        <main className='search-bar-main'>
            <form className='search-bar-form-container'>
                <input type="text" className='search-bar-input'
                defaultValue={""} 
                placeholder='Search your Note by title...'
                onChange={(event) => props.searchUpdate(event.target.value)}/>
            </form>
        </main>
    </div>
  )
}

export default searchBar;
