import React from 'react';
import PropTypes from 'prop-types';


const RepoItem = (repo) => {
    console.log(repo.repo.name)
    return (
        <div className="card">
            <h3>
                <a href={repo.repo.html_url}>{repo.repo.name}</a>
            </h3>
            
        </div>
    )
}

RepoItem.propTypes={
    repo:PropTypes.object.isRequired,
}

export default RepoItem
