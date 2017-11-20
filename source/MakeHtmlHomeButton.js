import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class MakeHtmlHomeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            home: 'Go Home'
        };
    }

    goHome() {
        $.publish('home', {
            message: "The user wants to go home."
        });
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <p>
                    Select button to return to the home page.
                </p>;
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.goHome}>
                        {this.state.home}
                </RaisedButton>
            </div>
        </MuiThemeProvider>;
    }
}

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default MakeHtmlHomeButton;