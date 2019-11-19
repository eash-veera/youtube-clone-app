import React,{Component}  from 'react';
import { AppLayout } from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';
import { Watch } from './containers/Watch/Watch';
import { Route,Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connext } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions/api';

const API_KEY = 'AIzaSyCsm-Y7Lkvc1dj6lRIQusuRkpkSnx9akyg';

class App extends Component{
  render(){
    return (
      <AppLayout>
          <Switch>
            <Route path="/watch" component={ Watch} />
            <Route path="/" component={ Home } /> 
          </Switch>
      </AppLayout>
    );
  }

  componentDidMount(){
    this.loadYoutubeApi();
  }

  loadYoutubeApi(){
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(scipt);
  }
}

function mapDispatchToProps(dispacth){
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
