import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeImagesButtons from './MakeImagesButtons';

class MakeImages extends React.Component {
    render() {

        return <MuiThemeProvider>
            <div>
                <MakeImagesButtons />
            </div>
        </MuiThemeProvider>;
    };
}

export default MakeImages;