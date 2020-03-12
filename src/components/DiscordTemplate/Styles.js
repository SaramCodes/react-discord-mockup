import styled from "styled-components";

const darkDarkBg = "#1e2124";
const mediumDarkBg = "#2f3137";
const lightDarkBg = "#373a3f";
const darkLightBg = "#bbb";
const mediumLightBg = "#ccc";
const lightLightBg = "#ddd";

export const MainContainer = styled.div`
    background-color: ${props => props.theme.mode === "dark" ? darkDarkBg : darkLightBg };
    margin: auto;
    height: 600px;
    width: 1000px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    display: flex;
    div{
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0,0.59,0.25,1);
    }

`;

export const UserBarContainer = styled.div`
    height: 100%;
    flex-basis: 70px;
    flex-shrink: 0;
    background-color: ${props => props.theme.mode === "dark" ? darkDarkBg : darkLightBg };
    padding: 20px 0;
    overflow-x: hidden;
    
    
    .navigate-user-container{

        height: 50px;
        width: 50px;
        position: relative;
        margin: 0 auto 40px auto;
        cursor: pointer;

    }

    .navigate-active{
        &:before{
            transition-duration: 0.3s;
            transition-timing-function: cubic-bezier(0,0.59,0.25,1);
            content: "";
            height: 90%;
            border-radius: 22px;
            width: 9px;
            top: 50%;
            left: -14px;
            background: ${props => props.theme.mode === "dark" ? "#fff" : "#000"};
            position: absolute;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%)
        }
    }

    .navigate-user{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: crimson;
    }
`;

export const SeverNameContainer = styled.div`
    height: 100%;
    flex-basis: 250px;
    flex-shrink: 0;
    background-color:  ${props => props.theme.mode === "dark" ? mediumDarkBg : mediumLightBg };

`;

export const ChatMainContainer = styled.div`
    height: 100%;
    flex-grow: 1;
    background-color:  ${props => props.theme.mode === "dark" ? lightDarkBg : lightLightBg };

`;