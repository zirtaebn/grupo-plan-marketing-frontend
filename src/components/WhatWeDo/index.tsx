import { BsController, BsArrowDownRight } from 'react-icons/bs'

// components
import SectionTitle from '../SectionTitle'

// styles
import {
    WhatWeDoContainer, 
    WhatWeDoLeft,
    WhatWeDoRight,
    WhatWeDoContent,
    WhatWeDoImage,
    WhatWeDoDescription
    
   
} from './styles'

const WhatWeDo = () => {

    return (

        <WhatWeDoContainer id='what-we-do'>
            <WhatWeDoLeft>
                <SectionTitle>
                    <div>02.</div>
                    <h3>/O que fazemos</h3>
                    <h2>/Games</h2>
                </SectionTitle>
            

                <h4>Desenvolvimento de games digitais.</h4>
                <h5>Empresa especialista em desenvolvimento games digitais e gamificação.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </WhatWeDoLeft>

            <WhatWeDoRight>
                <WhatWeDoContent>
                    <WhatWeDoImage 
                        src='https://planmkt.com.br/imagecache/news_list/files/planxp_news/789TGsuiW2uuZZ2oRJLRvb8VEO63zi5xZHze2tKA.png'
                        alt=''
                    />

                    <WhatWeDoDescription>
                        A <span>PlanXp</span> tem uma equipe qualificada para o <span>desenvolvimento de jogos digitais</span> para <span>dispositivos móveis</span> (smartphones, tablets e afins).

                    </WhatWeDoDescription>
                </WhatWeDoContent>
                <WhatWeDoContent>
                    <WhatWeDoImage 
                        src='https://planmkt.com.br/imagecache/news_list/files/planxp_news/ynsUna5JNHFWgahb2nMl7RjyvGmFQwTP97Z8fD2P.jpg'
                        alt=''
                    />

                    <WhatWeDoDescription>
                        
                        Desenvolver games para anunciar seus produtos e serviços, através da <span>gamificação</span> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).
                    </WhatWeDoDescription>
                </WhatWeDoContent>
                <WhatWeDoContent>
                    <WhatWeDoImage 
                        src='https://www.planmkt.com.br/imagecache/news_list/files/planxp_news/Is7OZL2vSCHK6ABvU7CXrb7DxlMAvohlEP7CkJPM.jpg'
                        alt=''
                    />

                    <WhatWeDoDescription>
                        Utilizando as últimas tecnologias para a <span>criação de games</span>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultlado que ele busca.
                    </WhatWeDoDescription>
                </WhatWeDoContent>
                <WhatWeDoContent>
                    <div style={{width:'135px', height:'120px', display:'flex',alignItems:'flex-end'}}>
                        <BsController size={35} color={'#939598'}/>
                    </div>

                    <WhatWeDoDescription>Experimente inovar com a <span>PlanXP</span> para <span>desenvolver os seus jogos digitais!</span></WhatWeDoDescription>

                    <a href="">
                        ENTRE EM CONTATO AGORA MESMO
                        <BsArrowDownRight size={10} color={'#fff'}/>
                        
                    </a>
                </WhatWeDoContent>

            </WhatWeDoRight>
        </WhatWeDoContainer>
        
    )
}

export default WhatWeDo