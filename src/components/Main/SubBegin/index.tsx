import React from 'react';

import {
    Container,
    Image,
    Main,
    Menu,
    SubTitle,
    Title,
    Paragraph
} from './styles';

const SubBegin = () => {
    return (
        <Container>
            <Menu>
                <Image src={'https://rocketseat.com.br/static/images/update/trofeu-home.svg'} />
                <Main>
                    <Title>As mesmas tecnologias utilizadas por empresas como:</Title>
                    <SubTitle>Nubank, Netflix, Uber, Instagram e Airbnb</SubTitle>
                    <Paragraph>Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo,
                    construindo aplicações de alta performance e se destacando entre os maiores programadores.
                    </Paragraph>
                </Main>
            </Menu>
        </Container>
    );
}

export default SubBegin;