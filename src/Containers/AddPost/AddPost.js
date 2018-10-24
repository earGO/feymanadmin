import React from 'react';
import InputForm from '../../Components/InputForm/InputForm'
import NavCard from '../../Components/NavCard/NavCard';

const AddPost = ({onRouteChange, navType}) => {
    return(
        <div className={'returnWrapper'}>
        <NavCard navType={navType} onRouteChange={onRouteChange}/>
          <article className="bg-white center mw8 ba b--black-10 mv4">
            <InputForm
                labelName={'Post Title'}
                helperText={'Type the title for the post'}
                lrgInput={'false'}
            className={'center'}/>
            <InputForm
                labelName={'Post Short'}
                helperText={'Type the short abstract title for the post'}
                lrgInput={'true'}
                className={'center w8 h6'}/>
          </article>
            <article className="bg-white center mw8 ba b--black-10 mv4">
                <InputForm
                    labelName={'1 article title'}
                    helperText={'Type the title for the post'}
                    lrgInput={'false'}
                    className={'center'}/>
                <InputForm
                    labelName={'Post Short'}
                    helperText={'Type the short abstract title for the post'}
                    lrgInput={'true'}
                    className={'center w8 h6'}/>
            </article>
        </div>
    )
}

export default AddPost;