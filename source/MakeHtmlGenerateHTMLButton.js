import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class MakeHtmlHomeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            genButton: 'GenerateHTML',
            value: 1
        };
    }

    generateHtml() {
        console.log(this.state.value);
        console.log(siteDirs[this.state.value]);
        //walking.runWalkReact('qSingle', this.state.siteDir, this.state.destDir);
        const query = '/makers/walk?siteDirsIndex=' + this.state.value;
        var that = this;
        fetch(query)
            .then(function(response) {
                return response.json();
            })
            .then(function(configSummary) {
                console.log(JSON.stringify(configSummary, null, 4));
                // CALL that.setState to **state.configSummary** to configSummary.htmlFilesWritten
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.generateHtml}>
                        {this.state.genButton}
                </RaisedButton>
            </div>
        </MuiThemeProvider>;
    }
}

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default MakeHtmlHomeButton;