import React, { Component } from 'react';

import styled from 'styled-components';

import image from '../assets/tile.jpg'
import logo from '../assets/logo.png'
import { injectGlobal } from 'styled-components';

import TileWithOverlay from './TileWithOverlay';

injectGlobal`
    @font-face {
        font-family: "OpenSans-bold";
        src: url("https://s.yimg.com/ao/i/mp/fonts/opensans/OpenSans-bold.ttf");
    }
    
    #root {
        background-color: #111111;
        height: 100vh;
    }
`;

class App extends Component {

    render() {
        return (
            <TileWithOverlay
                image={image}
                imageWidthMax={600}
                logo={logo}
                text="Home and Away"
                borderWidth={20}
            />
        );
    }
}

export default App;
