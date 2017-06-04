import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    @media (max-width: ${props => props.imageWidthMax/0.9}px) {
        width: 90vw;
    }
    @media (min-width: ${props => props.imageWidthMax/0.9}px) {
        width: ${props => props.imageWidthMax}px;
    }
    border-color: black;
    border-style: solid;
    border-width: ${props => props.borderWidth}px;
    position: relative;
    display: inline-block;
`;

const StyledImage = styled.img`
    display: block;
    width: 100%;
`;

const StyledLogo = styled.img`
    display:block;
    height: 90%;
`;

const StyledOverlay = styled.div`
    width: 100%;
    height: 25%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    bottom: 0;
`;

const StyledFlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`;

const StyledText = styled.p`
    @media (max-width: 130px) {
        font-size: 0.1em;
    }
    @media (min-width: 130px) and (max-width: 200px) {
        font-size: 0.6em;
    }
    @media (min-width: 200px) and (max-width: 300px) {
        font-size: 0.8em;
    }
    @media (min-width: 300px) and (max-width: 400px) {
        font-size: 1.2em;
    }
    @media (min-width: 400px) and (max-width: 500px) {
        font-size: 1.5em;
    }
    @media (min-width: 500px) and (max-width: 600px) {
        font-size: 1.9em;
    }
    @media (min-width: 600px) and (max-width: 700px) {
        font-size: 2.3em;
    }
    @media (min-width: 700px) {
        font-size: 2.5em;
    }

    text-align: left;
    font-weight: bold;
    font-family: OpenSans-bold,arial,tahoma,serif;//from channel 7's site
    color: white;
`;

const TileWithOverlay  = ({image, imageWidthMax, logo, text, borderWidth}) => {
    return (
        <StyledContainer
            borderWidth={borderWidth}
            imageWidthMax={imageWidthMax}>
            <StyledImage src={image}/>
            <StyledOverlay>
                <StyledFlexContainer>
                    <StyledLogo src={logo}/>
                    <StyledText>
                        {text}
                    </StyledText>
                </StyledFlexContainer>
            </StyledOverlay>    
        </StyledContainer>
    );
}

export default TileWithOverlay;
