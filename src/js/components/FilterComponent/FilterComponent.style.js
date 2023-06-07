import styled from 'styled-components';

export const FilterContainer = styled.div`
    width: 100%;
    align-items: center;

    .react-datepicker-popper{
        z-index: 999;
    }

    .react-datepicker__triangle{
        left: -5vw !important;
    }

    .react-datepicker__input-container input{
        height: 20px !important;
        margin-left: 10px;
    }

    label{
        font-family: 'Roboto';
        font-size: 20px;
        width: 100px;
    }

    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`;


export const SearchContainer = styled.div`
    width: 100%;
    font-family: 'Roboto';
    float: right;
    margin-bottom: 20px

    @media only screen and (min-width: 1024px) {
        width: 50%;
    }
`;

export const DateContainer = styled.div`
    width: 100%;

    @media only screen and (min-width: 1024px) {
        width: 50%;
        display: flex;
    }
`;

export const DateWrapper = styled.div`
    display: flex;
    margin: 10px;
`;