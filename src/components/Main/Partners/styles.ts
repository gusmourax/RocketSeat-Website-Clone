import styled from 'styled-components';
import { Image } from '../Discord/styles';

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 980px;
    margin: auto;
    padding: 60px 0px;
`
export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`
export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background: rgb(113,89,193);
    width: calc(50% - 25px);
    border-radius: 5px;
    padding: 0px 30px;
    color: #FFF;
    font-weight: bold;
    &:hover {
        opacity: 0.9;
        transition-duration: 0.5s;
    }
    transition-duration: 0.5s;
`

export const Span = styled.span`
    & > ${Image} {
        margin-left: 15px;
        margin-top: 3px;
    }
    display: flex;
    align-items: center;
    transition-duration: 0.5s;
`