import styled from 'styled-components';

export const Container = styled.div`
    background: rgb(113, 89, 193);
    box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
`

export const Menu = styled.div`
    display: flex;
    width: 90%;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    color: #FFF;
    max-width: 980px;
`

export const Logo = styled.img`
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    margin: 0px 20px 0px 0px;
    padding: 0px 20px 0px 0px;
`

export const LinkGroup = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`

export const LinkSingle = styled.li`
    &:not(:first-child){
        margin: 0px 0px 0px 30px;
    }
    transition: all 150ms linear 0s;
`

export const Link = styled.a`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    transition: all 150ms linear 0s;
    ${LinkSingle}:not(:last-child):hover & {
        border-bottom: 2px solid #FFF;
        padding: 0px 0px 5px 0px;
        transition: all 150ms linear 0s;
    }
    ${LinkSingle}:hover & {
        color: rgba(255, 255, 255, 1);
        transition: all 150ms linear 0s;
    }
`

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const SocialMedia = styled.img`
    padding: 0px 10px;
`

export const LoginButton = styled.a`
    margin: 0px 0px 0px 60px;
    background: #FFF;
    border-radius: 5px;
    padding: 10px 30px;
    font-weight: 600;
    font-size: 14px;
    color: rgb(113, 89, 193);
`