import { BsArrowDownRight } from 'react-icons/bs'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

// styles
import {

    MenuContainer, 
    MenuLogo,
    MenuItems,
    MenuItem,
    ItemBackground,
    ItemTittle,
    MenuBottom,
    MenuMobile

} from './styles'

const Menu = () => {

    const [isOpen, setOpen] = useState(false)

    const handleScrollIntoViewClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId:string) => {

        let id = document.getElementById(sectionId)
        e.preventDefault()
        setOpen(false)

        id && id.scrollIntoView({

            behavior: 'smooth'
        }) 
    }

    return (

        <>
            <MenuMobile>
                <img 
                    src="https://planmkt.com.br/public/images/logo-planxp.png" 
                    alt="plan marketing logo" 
                />

                <div>
                    <Hamburger 
                        direction='left'
                        toggled={isOpen} 
                        toggle={setOpen}
                    />
                </div>
            </MenuMobile>
            <MenuContainer isOpen={isOpen}>
                <MenuLogo 
                    src="https://planmkt.com.br/public/images/logo-planxp.png" 
                    alt="plan marketing logo" 
                />

                <MenuItems>
                    <MenuItem href="/">
                        <ItemBackground>01.</ItemBackground>
                        <ItemTittle>/QUEM SOMOS</ItemTittle>
                    </MenuItem>
                    <MenuItem 
                        href="/"
                        onClick={(e) => handleScrollIntoViewClick(e,'what-we-do')}
                    >
                        <ItemBackground>02.</ItemBackground>
                        <ItemTittle>/O QUE FAZEMOS</ItemTittle>
                    </MenuItem>
                    <MenuItem 
                        href="/"
                        onClick={(e) => handleScrollIntoViewClick(e,'plan-news')}
                    >
                        <ItemBackground>03.</ItemBackground>
                        <ItemTittle>/PLAN NEWS</ItemTittle>
                    </MenuItem>
                    <MenuItem href="/">
                        <ItemBackground>04.</ItemBackground>
                        <ItemTittle>/NOSSOS CLIENTES</ItemTittle>
                    </MenuItem>
                    <MenuItem 
                        href="/"
                        onClick={(e) => handleScrollIntoViewClick(e,'contact')}
                    >
                        <ItemBackground>05.</ItemBackground>
                        <ItemTittle>/CONTATO</ItemTittle>
                    </MenuItem>
                </MenuItems>

                <MenuBottom href="/">
                    <ItemBackground>;)</ItemBackground>
                    <ItemTittle>Que tal inovar com a gente?</ItemTittle>
                    <BsArrowDownRight />
                </MenuBottom>
            </MenuContainer>
        </>

    )
}

export default Menu