import React, {Component} from 'react';
import NavCard from '../../Components/NavCard/NavCard';
import ArticleForm from '../../Components/DynamicForm/ArticleForm';

class AddPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            postData: []
                    };

        this.handleToUpdate = this.handleToUpdate.bind(this);

    }

    componentDidUpdate(){
        console.log(this.state)
    }

    handleToUpdate(aPub,pPub){
        console.log('We pass argument from Child to Parent: ', aPub);
        this.setState({
            articles:aPub,
            postData:pPub
        })

  }

    render () {
        var handleToUpdate = this.handleToUpdate;
        return(
            <div className={'returnWrapper'}>
                <NavCard navType={this.props.navType} onRouteChange={this.props.onRouteChange}/>
                <ArticleForm handleToUpdate={handleToUpdate.bind(this)}/>
            </div>
        )
    }

}

export default AddPost;