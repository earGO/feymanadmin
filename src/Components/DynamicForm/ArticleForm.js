import React from "react"


class ArticleForm extends React.Component {
    constructor(){
        super()
        this.state={
            articles: [{articleTitle:"", articleBody:"",articleImage:"",articleUrl:""}],
            postData: [{postTitle: "post title",postShort:""}]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
            this.setState({ articles })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        };
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault()
    }


    render() {
        let {articles} = this.state
        return (
            <div onSubmit={this.handleSubmit}
                onChange={this.handleChange}>
                    <article className="pa4 black-80">
                        <form action="sign-up_submit"
                              method="get"
                              acceptCharset="utf-8"
                        >
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                                <div className="mt3">
                                    <label className="db fw4 lh-copy f6" htmlFor="postTitle">Title</label>
                                    <input className="postTitle"
                                           type="text"
                                           name='postTitle'
                                           data-id={0}
                                           id='postTitle'/>
                                </div>
                                <div className="mt3">
                                    <label className="db fw4 lh-copy f6" htmlFor="postShort">Short</label>
                                    <input className="postShort"
                                           type="text"
                                           name='postShort'
                                           data-id={0}
                                           id='postShort'/>
                                </div>
                            </fieldset>
                            <div className="mt3">
                                <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                type="submit"
                                value="Add Post"/>
                                <input
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                    type="submit"
                                    value="Add Article"
                                onClick={this.addCat}/></div>
                        </form>
                    </article>

                    {articles.map((val, idx)=> {
                        let articleId = `article-${idx}`, articleBodyId = `articleBody-${idx}`,
                            articleImageId = `articleImage-${idx}`,articleUrlId = `articleUrl-${idx}`
                        return (
                            <article className="pa4 black-80" key={idx}>
                                <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                                    <fieldset className="ba b--transparent ph0 mh0">
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={articleId}>{`Article #${idx + 1} Title`} </label>
                                            <input className="articleTitle"
                                                   type="text"
                                                   name={articleId}
                                                   data-id={idx}
                                                   id={articleId}
                                                   />
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={articleBodyId}>Article body</label>
                                            <input type="text"
                                                   name={articleBodyId}
                                                   data-id={idx}
                                                   id={articleBodyId}
                                                   className="articleBody"/>
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={articleImageId}>Article Image</label>
                                            <input type="text"
                                                   name={articleImageId}
                                                   data-id={idx}
                                                   id={articleImageId}
                                                   className="articleImage"/>
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={articleUrlId}>Article URL</label>
                                            <input type="text"
                                                   name={articleUrlId}
                                                   data-id={idx}
                                                   id={articleUrlId}
                                                   className="articleUrl"/>
                                        </div>
                                    </fieldset>
                                </form>
                                <input
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                    type="submit"
                                    value="Save Article"/>
                            </article>
                        )
                    })
                    }
            </div>


    )
    }
}
export default ArticleForm;