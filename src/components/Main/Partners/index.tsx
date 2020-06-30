import React from 'react';

import { Menu, LinkContainer, Link, Span } from './styles';
import { Title, Paragraph, Image } from '../Discord/styles'
import { Container } from '../ClassRoom/styles';

const Partners = () => {
    return (
        <Container>
            <Menu>
                <Title>Parceiros</Title>
                <Paragraph>Conheça nossos parceiros e encontre as melhores oportunidades.</Paragraph>
                <LinkContainer>
                    <Link href={'#'} >
                        <Image src={'https://rocketseat.com.br/static/images/update/bossabox.png'} />
                        <Span>
                            Website
                            <Image height={11} src={'https://rocketseat.com.br/static/images/update/arrow-parceiros.svg'} />
                        </Span>
                    </Link>
                    <Link href={'#'} >
                        <Image src={'https://rocketseat.com.br/static/images/update/impulso.png'} />
                        <Span>
                            Website
                            <Image height={11} src={'https://rocketseat.com.br/static/images/update/arrow-parceiros.svg'} />
                        </Span>
                    </Link>
                </LinkContainer>
            </Menu>
        </Container>
    );
}

export default Partners;