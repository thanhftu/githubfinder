import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search =({setAlert})=> {
    const githubContext=useContext(GithubContext);
    const alertContext=useContext(AlertContext);
    const [text,setText]=useState('');

    const onChange=e=>setText(e.target.value)
    const onSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            alertContext.setAlert('pls enter string', 'danger')
        }else{
            githubContext.searchUsers(text);
            setText('');
        }

    }
    
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                
                    type="text" 
                    name="text" 
                    placeholder="Search users..."
                    value={text}
                    onChange={onChange}
                    />
                <input 
                type="submit"
                value="search"
                className="btn btn-dark btn-block"
                />
            </form>
            {githubContext.users.length>0 && (
                <div className="btn btn-light btn-block text-center"
                onClick={githubContext.clearUsers}>Clear</div>
                )}
            
        </div>
    )
    
}

Search.propTypes={
    clearUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
    setAlert:PropTypes.func.isRequired,
}
export default Search
