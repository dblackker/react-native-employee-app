import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyApHg2EIpkkaczWPeyI6RBzwieCwDLVu7Q',
            authDomain: 'manager-b18a4.firebaseapp.com',
            databaseURL: 'https://manager-b18a4.firebaseio.com',
            projectId: 'manager-b18a4',
            storageBucket: '',
            messagingSenderId: '484143417394'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}


export default App;
