import React, {Component} from 'react';
import NavCard from '../../Components/NavCard/NavCard';
import ArticleForm from '../../Components/DynamicForm/ArticleForm';


class AddPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles: [],

                    };

        this.handleToUpdate = this.handleToUpdate.bind(this);

    }

    componentDidUpdate(){
        console.log('Did updated state', this.state, 'can fetch')

    }
    /*method given as prop to ArticleForm component, needed to handle ArticleForm state to this component state.*/
    handleToUpdate(postT,postS,aPub,postTags){
        this.setState({
            articles:aPub,
            postTitle:postT,
            postShort:postS,
            postTags:postTags

        })

  }

    render () {
        var handleToUpdate = this.handleToUpdate;
        return(
            <div className={'returnWrapper'}>
                <NavCard navType={this.props.navType} onRouteChange={this.props.onRouteChange}/>
                <ArticleForm handleToUpdate={handleToUpdate}/>
            </div>
        )
    }

}

export default AddPost;