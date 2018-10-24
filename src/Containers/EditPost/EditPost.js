import React from 'react';

const EditPost = ({onRouteChange}) => {
    return(
        <article className="bg-white center mw5 ba b--black-10 mv4">
            <div className="pv2 ph3">
                <h1 className="f6 ttu tracked">Edit post</h1>
            </div>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
               onClick={() => {onRouteChange('start')}}>Back home</a>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">Select post</a>
        </article>
    )
}

export default EditPost;