import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import ElvenLogin from "./ElvenLogin";

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

class App extends Component {

    setConfig() {
        // Change the value of the base-dir for the user.
        // You write the code.
    }

    insertConfig() {
        fetch('/get-config')
            .then(function (response) {
                return response.json();
            })
            .then(function (configuration) {
                console.log(configuration);
                firebase.database().ref('/').set(configuration);
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return (

            <div>
                <p>React Stuff</p>

                <RaisedButton
                    label='Insert Config'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.insertConfig}
                />

                <RaisedButton
                    label='Update user'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.setConfig}
                />

                <ElvenLogin />
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        signInLabel: state.signInLabel,
        configured: state.configured
    }
};

App = connect(mapStateToProps)(App);

export default App;