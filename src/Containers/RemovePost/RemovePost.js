import React from 'react';

const RemovePost = ({onRouteChange}) => {
    return(
        <article className="bg-white center mw5 ba b--black-10 mv4">
            <div className="pv2 ph3">
                <h1 className="f6 ttu tracked">Remove post</h1>
            </div>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
               onClick={() => {onRouteChange('start')}}>Back home</a>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">Find Post</a>
            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">add post</a>
        </article>
    )
}

export default RemovePost;