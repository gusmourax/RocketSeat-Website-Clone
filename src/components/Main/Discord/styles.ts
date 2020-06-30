import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100%;
    background: rgb(241, 239, 255);
`

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    max-width: 980px;
    padding: 60px 0px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
`

export const Main = styled.div`
    width: calc(50% - 10px);
`

export const Image = styled.img`

`

export const Title = styled.h2`
    color: rgb(75, 75, 75);
    font-size: 38px;
    line-height: 48px;
`

export const Paragraph = styled.p`
    color : rgb(154, 142, 191);
    font-size: 18px;
    line-height: 36px;
    margin-top: 10px;
`

export const Button = styled.a`
    display: inline-block;
    background: rgb(113, 89, 193);
    margin-top: 10px;
    padding: 15px 30px;
    border-radius: 5px;
    color: #FFF;
    font-weight: bold;
`