import React, { Component } from 'react';
import './App.css';

/*Containers import*/

import StartCard from './Containers/StartCard/StartCard';
import AddPost from './Containers/AddPost/AddPost';
import EditPost from './Containers/EditPost/EditPost';
import RemovePost from './Containers/RemovePost/RemovePost';
import SignIn from './Components/SignIn/SignIn';
import Registration from './Components/Registration/Registration';

/*Components import*/

class App extends Component {
  constructor(props) {
    super(props)
      this.state ={
          route:'editpost', /*a routing state*/
          navType: 'editpost', /*a state do define type of a <NavCard> component to show*/
          serveradress: 'http://localhost:5500/', /*a state to set localhost port in one place*/
          endpoints: {
              tagSelect: 'admin/tags/', /*get all tags to fill <TagSelector> when creating new post*/
              addpost: 'admin/addpostwtags', /*an endpoint to add post to database*/
              isuser: 'admin/isuser', /*an endpoint to check if there is user to define register or signin*/
              catSelect: '',
              subcatSelect:''
          }
      }
  }
  /*a simple response to test connection at app mounting*/
  componentDidMount() {
      document.title = "admin console for a Feyman Blog";
      let fetchUrl=this.state.serveradress.concat(this.state.endpoints.isuser)
      fetch(fetchUrl)
          .then(response => response.json())
          .then(data => {
              if (data ==="user not found"){
                  console.log(data,'so need register')
                  this.setState({
                      route:'addpost'
                  })
              } else {
                  this.setState({
                      route:'signin'
                  })
              }
          })
          .catch(err => console.log('error getting post'))
  }
  /*a method for route handling*/
    onRouteChange = (route,navType) => {
        this.setState({'route': route});
        this.setState({'navType': navType});
    }

  render() {
    const {route,navType,serveradress,endpoints} = this.state;
    return (
      <div className="App">
          {route==='start'
              ?<StartCard onRouteChange={this.onRouteChange} navType={navType}/>
              :(route==='addpost'
              ? <AddPost
                      onRouteChange={this.onRouteChange}
                      navType={navType}
                      serverAdress={serveradress}
                      tagsEndPoint={endpoints.tagSelect}
                      addPostEndpoint={endpoints.addpost}
                  />
              :(route==='editpost'
                      ?<EditPost onRouteChange={this.onRouteChange} navType={navType}/>
                          : (route==='removepost'
                              ?<RemovePost onRouteChange={this.onRouteChange} navType={navType}/>
                              :(route === 'signin'
                                  ?<SignIn onRouteChange={this.onRouteChange} navType={navType}/>
                                      :(route==='register'
                                            ?<Registration onRouteChange={this.onRouteChange} navType={navType}/>
                                            :<div>Somethin brawken</div>)

                              ))
                  ))

          }

      </div>
    );
  }
}

export default App;
