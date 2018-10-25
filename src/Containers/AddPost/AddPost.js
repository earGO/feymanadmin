import React, {Component} from 'react';
/*import InputForm from '../../Components/InputForm/InputForm'
import NavCard from '../../Components/NavCard/NavCard';*/
import ArticleForm from '../../Components/DynamicForm/ArticleForm';

class AddPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            postTitle: '',
            postShort: '',
            articles: []
        }
    }
    render () {
        let {articles} = this.state;
        return(
            <div className={'returnWrapper'}>
            {/*

                <NavCard navType={this.props.navType} onRouteChange={this.props.onRouteChange}/>
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
            */}
                <ArticleForm articles={articles}/>
            </div>
        )
    }

}

export default AddPost;