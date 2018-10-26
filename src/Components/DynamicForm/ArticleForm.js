import React from "react";
import '../../Components/TagSelector/TagSelector';
import TagSelector from "../TagSelector/TagSelector";


class ArticleForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            articles: [{articleTitle:"", articleBody:"",articleImage:"",articleUrl:""}],
            /*postData: [{postTitle: "",postShort:""}],*/
            postTitle: '',
            postShort: '',
            postTags:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTagsUpdate = this.handleTagsUpdate.bind(this);


    }

    addCat = (e) => {
        this.setState((prevState) => ({
            articles: [...prevState.articles, {articleTitle:"", articleBody:"",articleImage:"",articleUrl:""}],
        }));
    }

    handleChange(e) {
       if (["articleTitle", "articleBody","articleImage","articleUrl"].includes(e.target.className) ) {
            let articles = [...this.state.articles];
            articles[e.target.dataset.id][e.target.className] = e.target.value;
            this.setState({ articles: articles })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        };
    }

    componentDidUpdate() {
    }


    handleSubmit = (e) => {
        const {articles,postTitle, postShort,postTags} = this.state;
        this.props.handleToUpdate(postTitle,postShort,articles,postTags)
        e.preventDefault();
            }

    clickOnSubmit = (e) => {
        const {articles,postTitle, postShort,postTags} = this.state;
        fetch('http://localhost:3000/admin/addpost', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                post_title: postTitle,
                post_short: postShort,
                articles:articles,
                postTags:postTags
            })
        })
    }
    handleTagsUpdate (tags){
        this.setState({
            postTags:tags
        })
    }

    render() {
        let {articles} = this.state;
        return (
            <div onSubmit={this.handleSubmit}
                onChange={this.handleChange}>
                    <article className="pa4 black-80">
                        <form action="sign-up_submit"
                              method="get"
                              acceptCharset="utf-8"
                        >
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <div className="mt3">
                                    <label className="db fw4 lh-copy f6" htmlFor="postTitle">Title</label>
                                    <input className="postTitle"
                                           type="text"
                                           name='postTitle'
                                           data-id={0}
                                           id='postTitle'
                                           style={{width:650}}/>
                                </div>
                                <div className="mt3">
                                    <label className="db fw4 lh-copy f6" htmlFor="postShort">Short</label>
                                    <textarea className="postShort"
                                           type="text"
                                           name='postShort'
                                           data-id={0}
                                           id='postShort'
                                              style={{height:200,width:650}}/>
                                </div>
                            </fieldset>
                            <TagSelector handleTagsUpdate={this.handleTagsUpdate}/>
                            <div className="mt3">
                                <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                type="submit"
                                value="Add Post"
                                onClick={this.handleSubmit}/>
                                <input
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                    type="submit"
                                    value="Add Article"
                                onClick={this.addCat}
                                />
                            </div>
                        </form>
                    </article>

                    {articles.map((val, idx)=> {
                        let articleId = `article-${idx}`, articleBodyId = `articleBody-${idx}`,
                            articleImageId = `articleImage-${idx}`,articleUrlId = `articleUrl-${idx}`
                        return (
                            <article className="pa4 black-80" key={idx}>
                                <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                                    <fieldset className="ba b--transparent ph0 mh0 b--black-30">
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={articleId}>{`Article #${idx + 1} Title`} </label>
                                            <input className="articleTitle"
                                                   type="text"
                                                   name={articleId}
                                                   data-id={idx}
                                                   id={articleId}
                                                   style={{width:650}}
                                                   />
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={articleBodyId}>Article body</label>
                                            <textarea type="text"
                                                   name={articleBodyId}
                                                   data-id={idx}
                                                   id={articleBodyId}
                                                   className="articleBody"
                                                      style={{height:200,width:650}}/>
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={articleImageId}>Article ImageUrl</label>
                                            <input type="text"
                                                   name={articleImageId}
                                                   data-id={idx}
                                                   id={articleImageId}
                                                   className="articleImage"
                                                   style={{width:650}}/>
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={articleUrlId}>Article URL</label>
                                            <input type="text"
                                                   name={articleUrlId}
                                                   data-id={idx}
                                                   id={articleUrlId}
                                                   className="articleUrl"
                                                   style={{width:650}}/>
                                        </div>
                                    </fieldset>
                                </form>

                            </article>
                        )
                    })
                    }
                <div className="mt3">
                    <input
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                        type="submit"
                        value="Add Post"
                    onClick={this.clickOnSubmit}/>

                </div>
            </div>


    )
    }
}
export default ArticleForm;