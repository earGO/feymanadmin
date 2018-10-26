import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';
import makeAnimated from 'react-select/lib/animated';

/*type State = {
    inputValue: string,
};

const filterColors = (inputValue: string) =>
    colourOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );

const promiseOptions = inputValue =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(filterColors(inputValue));
        }, 1000);
    });*/

export default class TagSelector extends Component<*, State> {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            fColors: [],
            sTags:[]
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/admin/tags/')
            .then(response => response.json())
            .then(data => {
                this.setState({fColors: data});
            })
            .then(console.log(this.state))
            .catch(err => console.log('error getting post'))
    }

    componentDidUpdate() {
        console.log(this.state.sTags)
    }

    filterColors = (inputValue: string) =>
        this.state.fColors.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );

    promiseOptions = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(this.filterColors(inputValue));
            }, 1000);
        });

    handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };

    handleTagsToState = (opt,meta) => {
        if (opt.length) {
            this.setState({ sTags:opt })
        }
    }


    render() {
        return (
            <div className={'stylewrapper center'}
                 style={{width:650}} >
            <AsyncSelect
                isMulti
                closeMenuOnSelect={false}
                cacheOptions
                components={makeAnimated()}
                defaultOptions
                loadOptions={this.promiseOptions}
                className='tagSelect'
                id='tagSelect'
                onChange={this.handleTagsToState}
            />
                </div>
        );
    }
}