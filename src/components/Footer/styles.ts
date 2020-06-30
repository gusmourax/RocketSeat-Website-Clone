import styled from 'styled-components';

export const Container = styled.footer`
    position: relative;
    right: 0;
    left: 0;
    bottom: 0;
`

export const MailMenu = styled.section`
    display: flex;
    flex-direction: row;
    width: 90%;
    max-width: 980px;
    margin: 10px auto;
    justify-content: space-between;
`

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
`

export const FooterMenu = styled.section`
    display: flex;
    margin: 25px auto;
    flex-direction: row;
    width: 90%;
    max-width: 980px;
    align-items: center;
    justify-content: space-between;
`

export const MailContainer = styled.div`
    display: flex;
    background: rgb(113, 89, 193);
    width: 100%;
`

export const Image = styled.img``

export const MailFormSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const MailForm = styled.form`
    margin: 0px 0px 0px 30px;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    padding: 13px 20px;
    background: #FFF;
    border-radius: 3px;
    margin-top: 15px;
`

export const Input = styled.input`
    border: none;
    font-size: 14px;
`

export const Submit = styled.button`
    border: none;
    background: #FFF;
    &:hover {
        cursor: pointer;
    }
`

export const Strong = styled.strong`
    font-size: 24px;
    color: #FFF;
`

export const P = styled.p`
    font-size: 15px;
    margin-top: 2px;
    color: rgba(255, 255, 255, 0.8);
`

export const LinkList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;    
`

export const LinkItem = styled.li`
    &:not(:last-child):after {
        content: '-';
        margin: 0px 4px;
    }
`

export const Link = styled.a`
    text-decoration: 1px solid #999;
    color: #999;
    &:hover{
        text-decoration: underline;
    }
`