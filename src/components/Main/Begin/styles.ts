import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100%;
    padding: 60px 0;
`

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 90%;
    max-width: 940px;
`

export const Main = styled.div`
    width: calc(50% - 10px);
`

export const Image = styled.img`

`

export const Title = styled.h2`
    font-size: 36px;
    color: rgb(75, 75, 75);
    line-height: 48px;
`

export const Paragraph = styled.p`
    font-size: 18px;
    line-height: 32px;
    color: rgb(154, 142, 191);
    margin-top: 10px;
`

export const Button = styled.a`
    display: inline-block;
    background: rgb(113, 89, 193);
    padding: 15px 30px;
    margin-top: 15px;
    border-radius: 5px;
    color: #FFF;
    font-weight: 600;
`