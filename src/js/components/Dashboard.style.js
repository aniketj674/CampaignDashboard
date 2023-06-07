import styled, { keyframes } from 'styled-components';

export const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const Wrapper = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: aliceblue;

    .MuiTableCell-stickyHeader{
        background-Color: #dbdbdb;
        font-size: 2.2vh;
        font-weight: bold;
    }

    .MuiTypography-h1{
        top: 0;
        left: 0;
        width: 100%;
        font-family: 'Roboto';
        text-align: center;
        margin: 30px 0px;
        font-size: 40px;
        font-weight: 400;

        @media only screen and (min-width: 1024px) {
            font-size: 60px;
        }
    }

    tbody th{
        font-weight: 500;
    }

    tr:hover{
        background: #d3e9f482;
    }

    .MuiTypography-subtitle1 {
        margin: 20px;
    }

    .MuiTableBody-root{
        animation: ${fadeInAnimation} 1s;
    }
`;