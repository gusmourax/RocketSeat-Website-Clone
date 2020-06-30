import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100%;
`

export const Menu = styled.div`
    display: flex;
    width: 90%;
    max-width: 980px;
    padding: 60px 0px;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
`

export const RoomContainer = styled.div`
    width: calc(50% - 10px);
`

export const Title = styled.h2`
    display: flex;
    align-items: center;
    padding: 0px 10px;
    font-size: 36px;
    line-height: 48px;
    color: rgb(75, 75, 75);
`

export const Image = styled.img`
    margin-right: 30px;
`

export const Paragraph = styled.p`
    margin-top: 20px;
    color: rgb(154, 142, 191);
    font-size: 18px;
    line-height: 32px;
`

export const Button = styled.a`
    display: inline-block;
    margin-top: 20px;
    background: rgb(113, 89, 193);
    padding: 15px 25px;
    border-radius: 5px;
    color: #FFF;
    font-weight: bold;
    transition-duration: 0.5s;
    &:hover {
        opacity: 0.9;
        transition-duration: 0.5s;
    }
`
