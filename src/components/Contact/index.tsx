import { BsArrowDownRight, BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons//fi'
import { IoLocationSharp } from 'react-icons/io5'

// components
import SectionTitle from '../SectionTitle'

// styles 
import {

    ContactContainer,
    ContactLeft,
    InputContainer,
    Coner,
    ContactLabel,
    ContactRight,
    ContactItem,
    Title,
    Socials,
    Link,
    

} from './styles'


const Contact = () => {

    return (
        <ContactContainer>
           <ContactLeft>
                <SectionTitle>
                    <div>05.</div>
                    <h2>/Contato</h2> 
                </SectionTitle>

                <p>Gostou de saber mais sobre as inovações tecnológicas e també quer oferecer novas experiências aos seus clientes? Então entre em contato e marque um encontro real conosco para conversarmos sobre as infinitas possibilidades do mundo virtual.</p>

                <form action="POST">
                    <label>
                        <span>Nome:</span>
                        <InputContainer>
                            <input type="text" />
                            <Coner>
                            </Coner>
                        </InputContainer>
                    </label>
                    <ContactLabel>
                        <label>
                            <span>E-mail:</span>
                            <InputContainer>
                                <input type="email" />
                                <Coner>
                                </Coner>
                            </InputContainer>
                        </label>
                        <label>
                            <span>Telefone:</span>
                            <InputContainer>
                                <input type="text" />
                                <Coner>
                                </Coner>
                            </InputContainer>
                        </label>
                    </ContactLabel>

                    <label>
                        <span>Mensagem:</span>
                        <InputContainer>
                            <textarea />
                            <Coner>
                            </Coner>
                        </InputContainer>
                    </label>

                    <button type='submit'>
                        ENVIAR
                        <BsArrowDownRight size={8} color={'#fff'} />
                    </button>
                </form>
           </ContactLeft>

           <ContactRight>
                <ContactItem>
                    <Title>
                        Siga-nos
                    </Title>

                    <p>Fique sempre por dentro de todas as novidades da Plan XP e de todas empresas do Grupo Plan Marketing.</p>

                    <Socials>
                        <a href="https://web.facebook.com/planmkt?_rdc=1&_rdr">
                            <FaFacebookF color='#1E1E1E'/>
                        </a>
                        <a href="https://www.instagram.com/planmkt/">
                            <FiInstagram color='#1E1E1E'/>
                        </a>
                        <a href="https://www.youtube.com/planmkt">
                            <BsYoutube color='#1E1E1E'/>
                        </a>

                    </Socials>
                </ContactItem>

                <ContactItem>
                    <Title>
                        <IoLocationSharp />
                        /RS
                    </Title>

                    <p>Rua Onze de Junho, 243 Novo Hamburgo/RS Brasil</p>
                    <p>+55 51 98229.0400</p>

                    <Link href='https://www.google.com/maps/place/R.+Onze+de+Junho,+243+-+Oper%C3%A1rio,+Novo+Hamburgo+-+RS,+93315-130/@-29.6796239,-51.1356049,17z/data=!3m1!4b1!4m5!3m4!1s0x951943a1494f1ae7:0xc94882b9d1df84'>
                        VER NO GOOGLE MAPS
                        <BsArrowDownRight size={10} color={'#fff'}/>
                        
                    </Link>

                </ContactItem>

                <ContactItem>
                    <Title>
                        <IoLocationSharp />
                        /SP
                    </Title>

                    <p>Rua Ibijaú, 355/Sala 1309 São Paulo/SP Brasil</p>
                    <p>+55 11 98871.8556</p>

                    <Link href='https://www.google.com/maps/place/Av.+Ibija%C3%BA,+355+-+1309+-+Indian%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+04524-020/@-23.6056085,-46.6661242,17.5z/data=!4m5!3m4!1s0x94ce5a05f01ecd4f:0x5046a2620'>
                        VER NO GOOGLE MAPS
                        <BsArrowDownRight size={10} color={'#fff'}/>
                        
                    </Link>

                </ContactItem>

                <ContactItem>
                   
                   <img src='https://planmkt.com.br/imagecache/footers/files/planxp-footers/gr1tGzJiDw7gko1UjFa9qZdFKedryzZJUaIk0DgC.png'/>
                   <p>A Plan XP faz parte do Grupo Plan Marketing, um grupo de comunicação completo.</p>

                   <Link href='https://planmkt.com.br/'>
                        CONHEÇA   
                        <BsArrowDownRight size={10} color={'#fff'}/>
                    </Link>
                </ContactItem>

                <ContactItem>
                   
                   <img src='https://planmkt.com.br/public/images/logo-planxp.png'/>
                   <p>A Plan Marketing Digital é especializada em sites, intranets e redes sociais.</p>

                   <Link href='https://planmkt.com.br/planmkt'>
                        CONHEÇA   
                        <BsArrowDownRight size={10} color={'#fff'}/>
                    </Link>
                </ContactItem>

                <ContactItem>
                   
                   <img src='https://planmkt.com.br/imagecache/footers/files/planxp-footers/9xbczYHFFD0c8KBBWj8qsDytzAKSbwRxCU2oNipk.png'/>
                   <p>A FullUp é uma agência especializada em branding design e campanhas.</p>

                   <Link href='https://planmkt.com.br/fullup'>
                        CONHEÇA   
                        <BsArrowDownRight size={10} color={'#fff'}/>
                    </Link>
                </ContactItem>
           </ContactRight>


        </ContactContainer>
    )
}

export default Contact