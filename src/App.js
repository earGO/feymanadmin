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
          route:'signin'
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
    onRouteChange = (route) => {
        this.setState({'route': route});
    }

  render() {
    const {route} = this.state;
    return (
      <div className="App">
          {route==='start'
              ?<StartCard onRouteChange={this.onRouteChange}/>
              :(route==='addpost'
              ? <AddPost onRouteChange={this.onRouteChange}/>
              :(route==='editpost'
                      ?<EditPost onRouteChange={this.onRouteChange}/>
                          : (route==='removepost'
                              ?<RemovePost onRouteChange={this.onRouteChange}/>
                              :(route == 'signin'
                                  ?<SignIn onRouteChange={this.onRouteChange}/>
                                      :<InputForm/>

                              ))
                  ))

          }

      </div>
    );
  }
}

export default App;
