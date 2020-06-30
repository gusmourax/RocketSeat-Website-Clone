import React from 'react';

import {
    Button,
    Container,
    Image,
    Menu,
    Paragraph,
    Title,
    RoomContainer
} from './styles'

const ClassRoom = () => {
    return (
        <Container>
            <Menu>
                <RoomContainer>
                    <Title>
                        <Image src={'https://rocketseat.com.br/static/images/update/starter.svg'} />
                        Starter
                    </Title>
                    <Paragraph>Cursos 100% online para você dar o próximo passo na sua evolução como programador.
                        E o melhor, de graça!</Paragraph>
                    <Button href={'#'} >Garantir meu acesso</Button>
                </RoomContainer>
                <RoomContainer>
                    <Title>
                        <Image src={'https://rocketseat.com.br/static/images/update/bootcamp.svg'} />
                        Bootcamp
                    </Title>
                    <Paragraph>Treinamentos imersivos para dominar as tecnologias mais modernas
                         no menor tempo possível.</Paragraph>
                    <Button href={'#'} >Reservar minha vaga</Button>
                </RoomContainer>
            </Menu>
        </Container>
    );
}

export default ClassRoom;