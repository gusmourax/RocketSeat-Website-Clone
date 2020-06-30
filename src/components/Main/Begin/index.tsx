import React from 'react';

import {
    Button,
    Container,
    Image,
    Main,
    Menu,
    Paragraph,
    Title
} from './styles'

const Begin = () => {
    return (
        <Container>
            <Menu>
                <Main>
                    <Title>As melhores tecnologias em programação, direto ao ponto e do jeito certo.</Title>
                    <Paragraph>No meio de tanta informação e da quantidade de ferramentas que surgem
                        todos os dias, você precisa de alguém que te leve na direção certa.</Paragraph>
                    <Button href={'#'} >Quero embarcar nesse foguete</Button>
                </Main>
                <Image src={'https://rocketseat.com.br/static/images/update/melhores-tecnologias.svg'} />
            </Menu>
        </Container>
    );
}

export default Begin;