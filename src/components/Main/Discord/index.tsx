import React from 'react';

import {
    Button,
    Container,
    Image,
    Main,
    Menu,
    Paragraph,
    Title
} from './styles';

const Discord = () => {
    return (
        <Container>
            <Menu>
                <Main>
                    <Title>Acelere a sua evolução. Participe da nossa comunidade no Discord.</Title>
                    <Paragraph>Potencialize o seu aprendizado, destaque-se entre os programadores
                        e ganhe prêmios exclusivos.</Paragraph>
                    <Button href={'#'} >Acessar comunidade</Button>
                </Main>
                <Image src={'https://rocketseat.com.br/static/images/update/comunidade-home.svg'} />
            </Menu>
        </Container>
    );
}

export default Discord;