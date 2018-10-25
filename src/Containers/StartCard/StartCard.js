import React from 'react';

const StartCard = ({onRouteChange}) => {
    return(
        <article className="bg-white center mw5 ba b--black-10 mv4">
            <div className="pv2 ph3">
                <h1 className="f6 ttu tracked">What to do?</h1>
            </div>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
                onClick={() => {onRouteChange('addpost','addpost')}}>Add post</a>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
               onClick={() => {onRouteChange('editpost','editpost')}}>Edit posst</a>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
               onClick={() => {onRouteChange('removepost','removepost')}}>Remove post</a>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
               onClick={() => {onRouteChange('signin','signin')}}>Log out</a>
        </article>
    )
}

export default StartCard;