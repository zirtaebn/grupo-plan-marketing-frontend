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

        <WhatWeDoContainer>
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
                        src='https://t.tudocdn.net/503907'
                        alt='garoto jogando no celular'
                    />

                    <WhatWeDoDescription>
                        A <span>PlanXp</span> tem uma equipe qualificada para o <span>desenvolvimento de jogos digitais</span> para <span>dispositivos móveis</span> (smartphones, tablets e afins).

                    </WhatWeDoDescription>
                </WhatWeDoContent>
                <WhatWeDoContent>
                    <WhatWeDoImage 
                        src='https://media.istockphoto.com/photos/men-playing-video-games-picture-id1132281737?k=20&m=1132281737&s=170667a&w=0&h=Vv5u6xQFeFzixD1npl5mENRY5MA1yoqt_-ILct0kWSI='
                        alt='garoto jogando no computador'
                    />

                    <WhatWeDoDescription>
                        
                        Desenvolver games para anunciar seus produtos e serviços, através da <span>gamificação</span> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).
                    </WhatWeDoDescription>
                </WhatWeDoContent>
                <WhatWeDoContent>
                    <WhatWeDoImage 
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEyssQdH3dTg7bi2EDKeWseOxSLpFisbkrg&usqp=CAU'
                        alt='homem jogando no celular'
                    />

                    <WhatWeDoDescription>
                        Utilizando as últimas tecnologias para a <span>criação de games</span>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultlado que ele busca.
                    </WhatWeDoDescription>
                </WhatWeDoContent>
                <WhatWeDoContent>
                    <div style={{width:'135px', height:'120px', display:'flex',alignItems:'flex-end'}}>
                        <BsController size={35}/>
                    </div>

                    <WhatWeDoDescription>Experimente inovar com a <span>PlanXP</span> para <span>desenvolver os seus jogos digitais!</span></WhatWeDoDescription>

                    <a href="">
                        ENTRE EM CONTATO AGORA MESMO
                        <BsArrowDownRight size={10} />
                        
                    </a>
                </WhatWeDoContent>

            </WhatWeDoRight>
        </WhatWeDoContainer>
        
    )
}

export default WhatWeDo