import React, { Component } from 'react';
import './App.css';


/*Containers import*/

import StartCard from './Containers/StartCard/StartCard';
import AddPost from './Containers/AddPost/AddPost';
import EditPost from './Containers/EditPost/EditPost';
import RemovePost from './Containers/RemovePost/RemovePost';

/*Components import*/
import InputForm from './Components/InputForm/InputForm';
import SignIn from './Components/SignIn/SignIn';

class App extends Component {
  constructor(props) {
    super(props)
      this.state ={
          route:'addpost',
          navType: 'addpost'
      }
  }
  componentDidMount() {
      document.title = "admin console for a Feyman Blog";
 /*     fetch('http://localhost:3000/')
          .then(response => response.json())
          .then(data => {
              this.setState({posts: data});
          })
          .catch(err => console.log('error getting post'))*/
  }
    onRouteChange = (route,navType) => {
        this.setState({'route': route});
        this.setState({'navType': navType});
    }

  render() {
    const {route,navType} = this.state;
    return (
      <div className="App">
          {route==='start'
              ?<StartCard onRouteChange={this.onRouteChange} navType={navType}/>
              :(route==='addpost'
              ? <AddPost onRouteChange={this.onRouteChange} navType={navType}/>
              :(route==='editpost'
                      ?<EditPost onRouteChange={this.onRouteChange} navType={navType}/>
                          : (route==='removepost'
                              ?<RemovePost onRouteChange={this.onRouteChange} navType={navType}/>
                              :(route === 'signin'
                                  ?<SignIn onRouteChange={this.onRouteChange} navType={navType}/>
                                      :<InputForm/>

                              ))
                  ))

          }

      </div>
    );
  }
}

export default App;
