import React from 'react';
import './InputForm.css';

const InputForm = ({labelName, helperText,lrgInput}) => {
   return(
       <div className={'retWrapper'}>
       {lrgInput==='true'
       ?
           <form className="pa2 black-80 ba b--black-10">
               <div className="measure-wide  w-80">
                   <label htmlFor={"comment"}
                          className="f6 b db mb2"
                   >Post short<span className="normal black-60">(mandatorial)</span></label>
                   <textarea id="comment" name="comment"
                             className="db measure-wide border-box hover-black w-100 h-100 measure ba b--black-20 pa2 br2 mb2"
                             aria-describedby="comment-desc"></textarea>
               </div>
           </form>
       :
           <form className="pa4 black-80 ba b--black-10">
               <div className="measure">
                   <label htmlFor="name" className="f6 b db mb2">{labelName} <span
                       className="normal black-60">(mandatorial)</span></label>
                   <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"
                          aria-describedby="name-desc"/>
                   <small id="name-desc" className="f6 black-60 db mb2">{helperText}</small>
               </div>
           </form>}
       </div>
   )
}

export default InputForm;