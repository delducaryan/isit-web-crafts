import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
// import {black, red} from 'material-ui/styles/colors';

class HomeButtons extends React.Component {

    constructor() {
        super();

        this.state = {
            makeImage: 'Make Image',
            makeHtml: 'Make HTML'
        };
    }

    makeHtml() {
        $.publish('clientMakeHtml', {
            message: 'The user wants to makeHtml.'
        });
    }

    makeImage() {
        $.publish('clientMakeImage', {
            message: 'The user wants to makeImage.'
        });
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <h1>Home Page</h1>
                <RaisedButton
                    id='makeHtml'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.makeHtml}>{this.state.makeHtml}</RaisedButton>
                <RaisedButton
                    id='makeImage'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.makeImage}>{this.state.makeImage}</RaisedButton>
                <p>Select a button.</p>
                <p>This is a react component.</p>
            </div>
        </MuiThemeProvider>;
    };
}

var buttonStyle = {
    margin: '15px'
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        component: state.component,
        signInLabel: state.signInLabel
    }
};

HomeButtons = connect(mapStateToProps)(HomeButtons);

export default HomeButtons;
