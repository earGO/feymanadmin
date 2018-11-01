import React from 'react';

import AsyncSelect from 'react-select/lib/Async';
import makeAnimated from 'react-select/lib/animated';

export default class TagSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            fColors: [],
            sTags:[]
        };

    }
    /*fetch all tags from database*/
    componentDidMount() {
        fetch('http://localhost:3000/admin/tags/')
            .then(response => response.json())
            .then(data => {
                this.setState({fColors: data});
            })
            .catch(err => console.log('error getting post'))
    }
    componentDidUpdate() {

    }
    /*deals with user's input to search options in loaded tags*/
    filterTags = (inputValue: string) =>
        this.state.fColors.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    /*actualy shows fetched tags in dropdown list*/
    promiseOptions = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(this.filterTags(inputValue));
            }, 1000);
        });
    /*handles user input in tags form*/
    handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };
    /*sends tags to component's state to save them and fetch to db later*/
    handleTagsToState = (opt,meta) => {
        if (opt.length) {
            this.setState({
                sTags:opt});

        }
    }
    /*sends selected tags to parent's state, unused as of now*/
    clickOnSubmit = (e) => {
        this.props.handleTagsUpdate(this.state.sTags);

    }

    render() {
        return (
            <div className={'stylewrapper center db di w-60 cf'}>
                    <div className={'f6 f5-l input-reset bn fl black-80 bg-white pa1 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'}>
                        <AsyncSelect
                        isMulti
                        closeMenuOnSelect={false}
                        cacheOptions
                        components={makeAnimated()}
                        defaultOptions
                        loadOptions={this.promiseOptions}
                        className='tagSelect'
                        id='tagSelect'
                        type={'submit'}
                        onChange={this.handleTagsToState}/>
                    </div>
                    <input
                        className="f6 f5-l button-reset fl pv3 tc bn bg-animate hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                        type="submit"
                        value="Save Tags"
                        onClick={this.clickOnSubmit}
                    onChange={this.handleInputChange}/>

            </div>
        );
    }
}