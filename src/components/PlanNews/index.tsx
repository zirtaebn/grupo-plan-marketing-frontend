import { BsArrowDownRight } from 'react-icons/bs'
import { BiMask } from 'react-icons/bi'

// components
import SectionTitle from '../SectionTitle'

// styles
import { 
    PlanNewsContainer, 
    PlanNewsHeader,
    BlogItems,
    BlogItem,
    ImageContainer,
    Triangule,
    ItemContent,
    Topic,
    Title, 
    Description,
    Link
} from './styles'

const PlanNews = () => {

    return (

        <PlanNewsContainer id='plan-news'>
            <PlanNewsHeader>
                <SectionTitle>
                    <div>03.</div>
                    <h3>/Plan News</h3>
                    <h2>/Cases Games</h2> 
                </SectionTitle>
                <a href="">
                    CLIQUE AQUI PARA VER TODO O BLOG
                    <BsArrowDownRight size={10} color={'#fff'} />
                </a>
            </PlanNewsHeader>
            
            <BlogItems>
                <BlogItem>
                    <ImageContainer>
                        <img 
                            src='https://planmkt.com.br/imagecache/news_list/files/planxp_news/mi5JzwPpx3he9KXcxWtimyGJfzxNwjTeSBtpFId8.jpg'
                            alt=''
                        />
                        <Triangule />

                        <BiMask size={25} color={'#939598'}/>
                    </ImageContainer>

                    <ItemContent>
                        <Topic>
                            SKA
                        </Topic>
                        <Title>
                            Plan cria novo site da SKA
                        </Title>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                        </Description>
                        
                        <Link>
                            SAIBA MAIS
                            <BsArrowDownRight size={8} color={'#fff'} />
                        </Link>
                    </ItemContent>
                </BlogItem>

                <BlogItem>
                    <ImageContainer>
                        <img 
                            src='https://planmkt.com.br/imagecache/news_list/files/planxp_news/aUe3yP9x0BXhk81XDrHFd7I7UqDdTh4C28AjFbhu.jpg'
                            alt=''
                        />
                        <Triangule />

                        <BiMask size={25} color={'#939598'}/>
                    </ImageContainer>

                    <ItemContent>
                        <Topic>
                            TINTAS KILLING
                        </Topic>
                        <Title>
                            Plan cria novo site da Tintas Killing
                        </Title>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                        </Description>
                        
                        <Link>
                            SAIBA MAIS
                            <BsArrowDownRight size={8} color={'#fff'} />
                        </Link>
                    </ItemContent>
                </BlogItem>

                <BlogItem>
                    <ImageContainer>
                        <img 
                            src='https://planmkt.com.br/imagecache/news_list/files/planxp_news/dyWtg3FRQdEogBak6yDV7BBwbvhs07lvGpMwRVwi.jpg'
                            alt=''
                        />
                        <Triangule />

                        <BiMask size={25} color={'#939598'}/>
                    </ImageContainer>

                    <ItemContent>
                        <Topic>
                            CARGO BR
                        </Topic>
                        <Title>
                           Estamos desenvolvendo o novo site da CargoBR
                        </Title>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                        </Description>
                        
                        <Link>
                            SAIBA MAIS
                            <BsArrowDownRight size={8} color={'#fff'} />
                        </Link>
                    </ItemContent>
                </BlogItem>

                <BlogItem>
                    <ImageContainer>
                        <img 
                            src='https://planmkt.com.br/imagecache/news_list/files/planxp_news/PE88Bjq70eCcLz4phB88Zpz4JhISGENhTdxSqQKO.png'
                            alt=''
                        />
                        <Triangule />

                        <BiMask size={25} color={'#939598'}/>
                    </ImageContainer>

                    <ItemContent>
                        <Topic>
                            XALINGO
                        </Topic>
                        <Title>
                            Clubinho Xalingo com novidades
                        </Title>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                        </Description>
                        
                        <Link>
                            SAIBA MAIS
                            <BsArrowDownRight size={8} color={'#fff'} />
                        </Link>
                    </ItemContent>
                </BlogItem>

                <BlogItem>
                    <ImageContainer>
                        <img 
                            src='https://planmkt.com.br/imagecache/news_list/files/planxp_news/J3DydHbJWx4EfBO8RsLHBR9vDlOUR3zjJcztRh2O.png'
                            alt=''
                        />
                        <Triangule />

                        <BiMask size={25} color={'#939598'}/>
                    </ImageContainer>

                    <ItemContent>
                        <Topic>
                            AROMATIC
                        </Topic>
                        <Title>
                            Novo site da Aromatic no ar
                        </Title>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
                        </Description>
                        
                        <Link>
                            SAIBA MAIS
                            <BsArrowDownRight size={8} color={'#fff'} />
                        </Link>
                    </ItemContent>
                </BlogItem>
            </BlogItems>

        </PlanNewsContainer>
    )
}

export default PlanNews