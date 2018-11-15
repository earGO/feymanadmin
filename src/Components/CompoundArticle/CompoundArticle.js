import NavCard from '../NavCard/NavCard';
import SingleArticle from '../SingleArticle/SingleArticle';
import CompoundArticleHeader from '../CompoundArticleHeader/CompoundArticleHeader';
import React from "react";

const initialState = {
    title:'',
    url:'',
    urlLabel:'',
    paragraphs:[]
}


class CompoundArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.saveParagraphs = this.saveParagraphs.bind(this);
        this.saveHeader = this.saveHeader.bind(this);
    }

    componentDidMount() {
        this.setState(initialState)
        console.log(this.state)
    }

    /*a debugging console logging*/
    componentDidUpdate() {
        console.log(this.state)
    }

    saveParagraphs (paragraphstS) {
        this.setState({
                paragraphs:paragraphstS
        })
    }

    saveHeader(title,url,urlLabel) {
        this.setState({
            title:title,
            url:url,
            urlLabel:urlLabel
        })
    }

    render() {
        let {navType,onRouteChange} = this.props;
        let {title,url,urlLabel,paragraphs} = this.state;
        return (
            <div>
                <NavCard navType={navType} onRouteChange={onRouteChange}/>
                <CompoundArticleHeader saveHeader={this.saveHeader}/>
                <SingleArticle saveParagraphs={this.saveParagraphs}/>
            </div>

        )
    }
}

export default CompoundArticle