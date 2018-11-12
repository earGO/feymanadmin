import React from 'react';
import NavCard from '../../Components/NavCard/NavCard';
import SingleArticle from '../../Components/SingleArticle/SingleArticle';

const EditPost = ({onRouteChange, navType}) => {
    return(
        <div>
            <NavCard navType={navType} onRouteChange={onRouteChange}/>
            <SingleArticle />
        </div>
    )
}

export default EditPost;