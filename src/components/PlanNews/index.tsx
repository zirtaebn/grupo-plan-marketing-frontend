import { BsArrowDownRight } from 'react-icons/bs'
import {BiMask} from 'react-icons/bi'

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

        <PlanNewsContainer>
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
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GY4lL19eJZOSDQgAthFIJ0MmNjZbBC-m9Q&usqp=CAU'
                            alt='SKA logo'
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
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAIAgy5Vnq90QAtauWalmW8OtlNjqoyl1mA&usqp=CAU'
                            alt='Tintas Killing logo'
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
                            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhEIBxAWFRUXFhAVEhEWGBUYHhMbFxYZFxUWFx8YKCggGBoxGxYTIT0iJSkrMDAuFys/ODMtQygtLisBCgoKDQ0OGRAQGy0lHxo3Ny4uKy0rLSsrLS43LS0tLTctKy0tLS0vLS0rKzcrLSstKy0rKy0vLS03Ky0tLS03Lf/AABEIAI8A3wMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgYHAf/EADcQAAIBAwIDBgMGBQUAAAAAAAABAgMEEQUSBiExBxNBUWFxUoGRFCIyscHRFSNCgqE0NWPw8f/EABoBAQADAQEBAAAAAAAAAAAAAAABBAUDAgb/xAAuEQEAAgIABAIJBAMAAAAAAAAAAQIDEQQhMUFRgQUSEyIyYZGx0TOhwfBSceH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK87mhTqqlOaUn0i2uZ6ilpjcQ5zkpWdTMblYPLoAAAAAAAAAAAAAAAAAAAAAAAAAAAAq3t7b2NLvLmWF4evoj3jx2vOquWXNTFX1rS8vqXE9etmFmti+L+r9l/3mXsfCVr8XP7MfP6SvbcUjUePf8A4y7CU6l05zy3h5bz6dWWLREV1CnimbWmerdtNSuLb7ucr4X+j8CtfDW3yloYuJvj77+Ut60vIXNNSSa9H4+3mUr0ms6aeLLGSN9P9/x4rZ4dmdca3pVrX7i5uaUJ/BKpBP2w3kC9CUZxUoPKeMNeIEH26z+2fY+9h3nXuty3eedvXpz6ASXNxQtaLrXM4wiuspNJLLwst8lzAq0Na0u4qKnQuaUm+kY1INv2SfMDQAzZa/o8K/cTuqKl02upDPtjIGhFqSzFgUbvWtLsavdXlzShL4ZVIp/RvIFylVhWpqpRkpJ9Gmmn6rHUCOpc0KUttWcU/JtL8yYraY5RLnbJSs6mY+rujVp1I5pST9U0/wAhMTHWHqtq2jlMeSOV3bQltnUin5OSJilvCXmcuOOU2j6wmhKM47ovK80eeb3ExMbh2EgAAAAAAAGLxGs04L1l+ha4XrLP47pXzeehZ2rrKVVPb4xi8fn0Lk2vqdTzZlcWP1omYnXhD01pW0uhaPutsY/1J8vrnm/8lC9ctrc9zLXxX4euOdaiO+/58WBf6vZwqt6fTTfxSzj3Uf3+hbx4bzHvz9Pyzc3FYotPs6+c9PKPz9HHD9zWutdhOvJyeJ/L7r5JdEvYniKRXFMVjXT7o4LJa/ERNp3PP7JO1TXbnQ+GG7FuNSrONKM11jlOUmn4PEcZ8N2fAzYb0quidmegUtJjHU6Tq1ZRTqVZSknuazLbtawsv38xsej0XS7LhbRHb0JT7qHeTcpyy0ubfkkkl0SXT1ZCXyB/bp032irOftqxH/i/D9OkPqSh9G7S7ild9nVe5oPMZwoyi/NSnFp/RiB4e/0vg+n2cU7xunG67mm4uFT77qYXJxTfj15cvQHZc13VdanwppPD7nKFa6SVWbzu2blGCk+vOMot+L248WB6iHZtwla6eqFzSy8Ydac2pN46rmkn44SwNivxNc0+B+z10dDqyk9ypU6spb3FzcpSaa5JqKlhJJJkdR+cNdm+iPSKdbWKbrVqkVOpUlKfJyWWlhrzxl5bJ2M3QoVeCu0SPD9vOUrW4i504See7eJNY+cWs+KazzQ7D09w7OrxNV/iDjsjFJbvPEf3ZepF4wR6nWZ7ebIvOKeKt7TWojv48k2i0ab1qpX0/lRxjxw3y5LPrl/+njNafZxW/wAT3wlI9va+PlTWvlMoNPp2Nzf3VbUNuN727njxllrn5JHvJOStKxTfTs5Ya4b5Mlsmtb5bn5yucKRcaVZwz3e/+Xny55a+W058XMbr465rHo6J1bXw75f36PQFRpAAAAAAAAGLxH+Cn7y/Qs8N1ln8d0r5sQuM5U1H/T/Nfqe8fVyy/CzTsrNbhb/eYe0vyZX4n9KfJc9H/rx5/Ze7TuHq/EPDLpWSzVpzjVpx+LampRXq1J49UjKh9FLG0ftS0ujp0aGuxq0q8Eo1IbG9zisZj5Zx0eMf5GhW414uq6pwRCna0KlKpd1HRp058pSgmnKax/S8xj/c+q5uIgTrs/17+Bfwj+Kfytu3ue5jjruxnOfxc89SdjAttTqXHZLe6Td5721lClKL67e9jt+jUo/2judkl1wnGjwXY8S6DTSuKNOlVqRxu71YTk2nlNrGceKz6AaPEzrcW6JZcV8PR3VreWZ0V+JNOMpRS6tqUU0urUuQHWt8b8H8Q6N9n1yFRTj97uHGe6M0nHk44T/E1za9UNClw/wvd6z2TSsVBxqd9OtRjNOO5pJLr4Nbkn06eA7kNTQ+0uw0/TYWPElOrRr0oqE47G9+1YTXim8dHhZ8RoRcOU7zjDjpcUVqMqVtRjtt9/J1HiSTXnzlKWVyXJZfMgegtLyxpatc1L7DzJqOYuXRvPg8dEaF8eScdYp4c+emLizYq5sk5O88uW+63ocd1/XvaMXGk191NY3Yw9yXyf1OeefcrSZ9534SN5L5Kxqs9O2/n/fFR0/TI32i1a23+Zuk4P2SePzOuTN6mSI7d1bDw0ZcFra97c68uzd4evFeabHP4o/dkunTo/pgq8Rj9S8/Pm0uCzRkxR4xylqnBbAAAAAAAAIq1CnXhtqpNepNZmJ3DxelbxqYZF3onWVq/wC1/o/3LNOI/wAoUcvBd6T5T+Xn9VoVadLu5xaeY8se/TzLmO0TO4nkzM9LVjUxqdpdO4burnE7j7kfXq/ZeHzPGTiq1+HnP7OmD0fkvzvyj9/o9RYaVaWEf5EefjJ82/n4fIoZMt79Z8uzYw8NjxR7sefdfOawgqWtvVn3lSEW/icU39WBJKnCUlKSTa6NpcvbyA7AidGk85iufXkufv5gdxiox2xXLyA5p0qdNYpxS9kl+QHErW3nU72dOLl8Tis/XqBOBDVtqFZp1oRk10cop49sgSpJLCA57qHkvoidz4vPqx4OsLBCX5GKisRHMjRGKj+FDZERDoJAAAAAAAAAADiUIyacl06Zxy9gjUT5OwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='
                            alt='Cargo BR logo'
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
                            src='data:image/jpeg;base64,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'
                            alt='Xalingo logo'
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
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH8c43RWakDg4YGQXJmdgG2uzr5Z8fIu08M3DjJYlswSxFAlm6xav2PTQdxechabUOw&usqp=CAU'
                            alt='AROMATIC logo'
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