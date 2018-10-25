import React from "react"

/*this component allow us to create new input forms by pressing a button "Add cat*/
class DynamicForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cats: [{name:"", age:""}],
            owner: "",
            description: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*basicaly this component will iterate over it's state, which is array
    * of cats objects.
    *
    * When we click on a "Add cat" button, we simply add new object to an array,
    * and our component will add another input fields for this object
    *
    * It all done in a mao function at a POINTER*/

    /*here we create method for adding another cat object in 'cats' array in component's state*/
    addCat = (e) => {
        this.setState((prevState) => ({
            cats: [...prevState.cats, {name:'',age:''}],
        }));
    }


    /*this method controlling ALL our inputs,static and dynamic, and our final state*/
    handleChange = (e) => {
        /*handling our dynamic inputs. First, we’re checking whether the event’s class matches our dynamic inputs.
        If it does, we make a copy of our cats array of objects using the spread operator.
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax*/
        if (["name", "age"].includes(e.target.className) ) {
            let cats = [...this.state.cats];
            /*Now it gets real fancy. We use e.target’s dataset to match the input to its corresponding object,
            and then we use the e.target’s classname to grab either the cat object’s name or age value.
            So, if a user types into the first cat name input this is what it would translate to:
            cats[e.target.dataset.id][e.target.className] = e.target.value
                    // cats[0][name] = whatever-was-typed*/
            cats[e.target.dataset.id][e.target.className] = e.target.value;
            /*We’re just using brackets to dynamically access elements of our array and attributes on the objects.
            Now that our copied list has been mutated to reflect the new input,
            we use setState to save the change to our state and trigger a re-render of our form.*/
            this.setState({ cats }, () => console.log(this.state.cats));
            /*That may take a second to get comfortable with, but by making our change handler dynamic,
            we can put it on the whole form instead of each input:
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >*/
        } else {
            /*Let’s cover the else condition . It refers to our static elements.
            We’re using good old e.target.value to grab the value of the input
            that the user is typing into, nothing shocking there.
            But we’re using [] so that we can dynamically match our state using each input’s name attribute.
            These are called Computed Property Names, check them out here
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
            So our owner input has a name of owner,
            which means our setState translates to owner: whatever-was-typed.*/
            this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state.cats))
        }
    }
    /*This should stop form from automaticaly reloading page*/
    handleSubmit= (e) => {e.preventDefault()}


    componentDidUpdate(prevProps, prevState) {
        console.log(
            `this.state.cats(♻️ componentDidUpdate)`,
            this.state.cats
        );
    }


    render() {
        let {cats,owner,description} = this.state
        return (
            <div>
                <main className="pa4 black-80"
                      onSubmit={this.handleSubmit}
                      onSubmit={this.handleChange}>
                    <form className="measure center">
                        <fieldset className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Le Cat Man</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor={owner}>{owner}</label>
                                <div className={'pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'}>
                                    <input className="owner"
                                           type="text" name={owner} id={owner}/>
                                </div>

                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor={description}>{description}</label>
                                <div className={'b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'}>
                                    <input className="description"
                                           type="text" name={description} id={description}/>
                                </div>

                            </div>
                        </fieldset>
                    </form>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                               type="submit" value="Add new cat"
                               onClick={this.addCat}/>
                    </div>
                    {/*POINTER*/}
                    {/*Notice here we using {key} parameter of .map as unique key for each form inside .map loop
                 so in the end we'll have nice individual keys for each form created

                 You should always include labels to ensure your site is accessible and screenreader friendly.
                 And that dataset will be crucial to controlling our inputs later,
                 since it matches the inputs to the index of the corresponding cat object in the cats array!!!!!!
                 */}
                    {
                        cats.map((val, idx)=> {
                            let catId = `cat-${idx}`, ageId = `age-${idx}`
                            return (
                                <form className="measure center" key={idx}>
                                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                        <legend className="f4 fw6 ph0 mh0">Le Cat</legend>
                                        <div className="mt3">
                                            <label className="db fw6 lh-copy f6" htmlFor={catId}>{`Cat #${idx + 1}`}</label>
                                            <div className={' pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'}>
                                                <input className="name"
                                                       type="text" name={catId} id={catId} data-id={idx}/>
                                            </div>
                                        </div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor={ageId}>Age</label>
                                            <div className={'b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'}>
                                                <input className="age"
                                                       type={"text"} name={ageId} id={ageId} data-id={idx}/>
                                            </div>

                                        </div>
                                    </fieldset>
                                </form>
                            )
                        })
                    }

                </main>
            </div>


        )
    }
}
export default DynamicForm;
