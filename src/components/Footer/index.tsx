import React from 'react'

import {
    Container,
    MailMenu,
    FooterMenu,
    MailContainer,
    FooterContainer,
    Image,
    MailFormSection,
    Input,
    InputBox,
    MailForm,
    Submit,
    P,
    Strong,
    Link,
    LinkItem,
    LinkList
} from './styles';

const Footer = () => {
    return (
        <Container>
            <MailContainer>
                <MailMenu>
                    <Image src={'https://rocketseat.com.br/static/images/update/techs-1.svg'} />
                    <MailFormSection>
                        <Image src={'https://rocketseat.com.br/static/images/update/yoda.svg'} />
                        <MailForm>
                            <Strong>Receba conteúdos exclusivos</Strong>
                            <P>Receber spam, você não irá!</P>
                            <InputBox>
                                <Input placeholder={'Digite seu melhor email'} />
                                <Submit>
                                    <Image src={'https://rocketseat.com.br/static/images/icons/send.svg'} />
                                </Submit>
                            </InputBox>
                        </MailForm>
                    </MailFormSection>
                    <Image src={'https://rocketseat.com.br/static/images/update/techs-2.svg'} />
                </MailMenu>
            </MailContainer>
            <FooterContainer>
                <FooterMenu>
                    <div>
                        <strong style={{ marginRight: 5 }} >
                            <b>Rocketseat ©</b>
                        </strong>
                        2020 - Todos os direitos reservados
                    </div>
                    <LinkList>
                        <LinkItem>
                            <Link href={'#'} >Direitos Autorais</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link href={'#'} >Termos de uso</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link href={'#'} >Política de privacidade</Link>
                        </LinkItem>
                        <LinkItem>
                            <Link href={'#'} >Consulta de certificados</Link>
                        </LinkItem>
                    </LinkList>
                </FooterMenu>
            </FooterContainer>
        </Container>
    );
}

export default Footer;