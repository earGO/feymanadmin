import React from 'react';
import NavCard from "../../Components/NavCard/NavCard";

const RemovePost = ({onRouteChange, navType}) => {
    return(
        <NavCard navType={navType} onRouteChange={onRouteChange}/>
    )
}

export default RemovePost;