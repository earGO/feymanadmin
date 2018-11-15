import React from "react";
import '../../Components/TagSelector/TagSelector';

const initialState={
    paragraphs: [{paragraphBody:" "}]/*a state where all paragraphs forms put into*/
}

class SingleArticle extends React.Component {
    constructor(props){
        super(props)
        this.state=initialState;
    }

    componentDidMount(){
        this.setState(initialState)

    }

    /*a debugging console logging*/
    componentDidUpdate() {
        console.log(this.state)

    }

    addParagraph = (e) => {
        this.setState((prevState) => ({
            paragraphs: [...prevState.paragraphs, {paragraphBody:" "}]
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    onSaveClick = (e) => {
        this.props.saveParagraphs(this.state.paragraphs);
    }

    handleChange = (e) => {
        if(["paragraphBody"].includes(e.target.className)) {
            let paragraphs = [...this.state.paragraphs]
            paragraphs[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({paragraphs})
        } else {
            this.setState({[e.target.name]:e.target.value})
        }
    }

    handleSave = (e) => {

    }

    render() {
        let {paragraphs} = this.state;
        return (
            <div onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <article className="pa4 black-80">
                    <form acceptCharset="utf-8"
                    >
                        <div className="mt3">
                            <span
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                onClick={this.addParagraph}
                            >Add Paragraph</span>
                        </div>
                    </form>
                </article>
                {
                    paragraphs.map((value,idx) => {
                        let paragraphId = `paragraph-${idx}`;
                        return (
                            <article className="pa4 black-80" key={idx}>
                                <form acceptCharset="utf-8">
                                    <fieldset className="ba b--transparent ph0 mh0 b--black-30">
                                        <div className="mt3">
                                            <label className="db fw4 lh-copy f6" htmlFor={paragraphId}>{`Paragraph #${idx+1} body`}</label>
                                            <textarea className="paragraphBody"
                                                   type="text"
                                                   name={paragraphId}
                                                   data-id={idx}
                                                   id={paragraphId}
                                                   style={{height:250, width:650}}
                                            />
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
                        value="Save Article"
                        onClick={this.onSaveClick}
                    />
                </div>
            </div>
        )
    }
}
export default SingleArticle;