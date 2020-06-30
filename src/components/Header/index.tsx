import React from 'react';

import {
    Menu,
    Container,
    Logo,
    Link,
    LinkGroup,
    Navigation,
    LinkSingle,
    LoginButton,
    LoginContainer,
    SocialMedia,
    SocialMediaContainer
} from './styles'

const Header = () => {
    return (
        <Container>
            <Menu>
                <Navigation>
                    <Logo src={'https://rocketseat.com.br/static/images/logo-rocketseat.svg'} />
                    <LinkGroup>
                        <LinkSingle>
                            <Link href={'#'} >Início</Link>
                        </LinkSingle>
                        <LinkSingle>
                            <Link href={'#'} >Starter</Link>
                        </LinkSingle>
                        <LinkSingle>
                            <Link href={'#'} >Bootcamp</Link>
                        </LinkSingle>
                        <LinkSingle>
                            <Link href={'#'} >Comunidade</Link>
                        </LinkSingle>
                        <LinkSingle>
                            <Link href={'#'} >Blog</Link>
                        </LinkSingle>
                    </LinkGroup>
                </Navigation>
                <LoginContainer>
                    <SocialMediaContainer>
                        <SocialMedia src={'http://rocketseat.com.br/static/images/icons/facebook.svg'} />
                        <SocialMedia src={'https://rocketseat.com.br/static/images/icons/instagram.svg'} />
                        <SocialMedia src={'https://rocketseat.com.br/static/images/icons/twitter.svg'} />
                        <SocialMedia src={'https://rocketseat.com.br/static/images/icons/youtube.svg'} />
                    </SocialMediaContainer>
                    <LoginButton href={'#'} >Login</LoginButton>
                </LoginContainer>
            </Menu >
        </Container >
    );
}

export default Header;