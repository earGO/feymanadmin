import React from 'react';

const NavCard = ({onRouteChange,navType}) => {
    return(
        <div className="retWrapper">
            {navType==='addpost'
                ?<article className="bg-white center mw5 ba b--black-10 mv4">
                    <div className="pv2 ph3">
                        <h1 className="f6 ttu tracked">Add post</h1>
                    </div>
                    <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
                       onClick={() => {onRouteChange('start','start')}}>Back home</a>
                    <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
                       onClick={() => {onRouteChange('signin','signin')}}>Log out</a>
                </article>
                :(navType==='start'
                ?<article className="bg-white center mw5 ba b--black-10 mv4">
                        <div className="pv2 ph3">
                            <h1 className="f6 ttu tracked">What to do? </h1>
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
                :(navType==='editpost'
                    ?   <article className="bg-white center mw5 ba b--black-10 mv4">
                            <div className="pv2 ph3">
                                <h1 className="f6 ttu tracked">Edit post</h1>
                            </div>
                            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
                               onClick={() => {onRouteChange('start')}}>Back home</a>
                            <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">Select post</a>
                        </article>
                    :(navType==='removepost'
                        ?   <article className="bg-white center mw5 ba b--black-10 mv4">
                                <div className="pv2 ph3">
                                    <h1 className="f6 ttu tracked">Remove post</h1>
                                </div>
                                <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0"
                                   onClick={() => {onRouteChange('start')}}>Back home</a>
                                <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">Find Post</a>
                                <a className="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">add post</a>
                            </article>
                        :<p>No such navType state</p>)))}
        </div>
    )
}

export default NavCard;