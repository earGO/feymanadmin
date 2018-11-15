import React from 'react';


const initialState = {
    title:'',
    url:'',
    urlLabel:'',
}


class CompoundArticleHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    componentDidMount() {
        this.setState(initialState)
    }

    /*a debugging console logging*/
    componentDidUpdate() {
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    onTitleSaveClick = (e) => {
        const {title,url,urlLabel} = this.state;
        this.props.saveHeader(title,url,urlLabel);
    }

    render() {
        let {title,url,urlLabel,paragraphs} = this.state;
        return (
            <div>
                <form acceptCharset="utf-8"
                      className="pa4 black-80"
                      onChange={this.handleChange}
                >
                    <fieldset
                        className="ba b--transparent ph0 mh0 b--black-30"
                    >
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor={title}>Article title</label>
                            <input className="title"
                                   type="text"
                                   name="title"
                                   id={title}
                                   style={{width:650}}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor={url}>Article url</label>
                            <input className="url"
                                   type="text"
                                   name="url"
                                   id={url}
                                   style={{width:650}}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor={urlLabel}>Article url label</label>
                            <input className="urlLabel"
                                   type="text"
                                   name="urlLabel"
                                   id={urlLabel}
                                   style={{width:650}}
                            />
                        </div>
                    </fieldset>
                    <span
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                        onClick={this.onTitleSaveClick}
                    >Save Article Header</span>
                </form>
            </div>

        )
    }
}

export default CompoundArticleHeader