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
        console.log('Did updated state', this.state.articles, 'can fetch')

    }

    handleToUpdate(postT,postS,aPub){
        console.log('We pass argument from Child to Parent: ', aPub);
        this.setState({
            articles:aPub,
            postTitle:postT,
            postShort:postS
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