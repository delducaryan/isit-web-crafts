import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class MakeImagesButtons extends React.Component {
    constructor() {
        super();

        this.state = {
            createMarkdown: "Create Image Page",
            deleteMarkdown: "Delete Image Page",
            status: '',
            home: 'Go Home'
        };

        this.deleteMarkdown = this.deleteMarkdown.bind(this);
        this.createMarkdown = this.createMarkdown.bind(this);
    }

    deleteMarkdown() {
        const that = this;
        fetch('/makers/deleteMarkdown').then(function(response) {
            return response.json();
        }).then(function(json) {
            let temp = JSON.stringify(json, null, 4);
            console.log(temp);
            that.setState({
                status: temp
            });
        }).catch(function(ex) {
            console.log('Delete Markdown load error: ', ex);
        });
    }

    createMarkdown() {
        const that = this;
        fetch('/makers/makeImages').then(function(response) {
            return response.json();
        }).then(function(json) {
            let temp = JSON.stringify(json, null, 4);
            console.log(temp);
            that.setState({
                status: temp
            });
        }).catch(function(ex) {
            console.log('Create Markdown load error: ', ex);
        });
    }

    goHome() {
        $.publish('home', {
            message: "The user wants to go home."
        });
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.goHome}>
                    {this.state.home}
                </RaisedButton>
                <h1>Create Images</h1>
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.createMarkdown}>
                        {this.state.createMarkdown}
                </RaisedButton>
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.deleteMarkdown}>
                    {this.state.deleteMarkdown}
                </RaisedButton>
                <pre>
                    {this.state.status}
                </pre>
            </div>
        </MuiThemeProvider>;
    }
}

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default MakeImagesButtons;