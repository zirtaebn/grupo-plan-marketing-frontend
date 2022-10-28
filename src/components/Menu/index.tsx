import { BsArrowDownRight } from 'react-icons/bs'

// styles
import {

    MenuContainer, 
    MenuLogo,
    MenuItems,
    MenuItem,
    ItemBackground,
    ItemTittle,
    MenuBottom

} from './styles'

const Menu = () => {

    return (

        <MenuContainer>
            <MenuLogo 
                src="https://planmkt.com.br/public/images/logo-planxp.png" 
                alt="plan marketing logo" 
            />

            <MenuItems>
                <MenuItem href="">
                    <ItemBackground>01.</ItemBackground>
                    <ItemTittle>/QUEM SOMOS</ItemTittle>
                </MenuItem>
                <MenuItem href="">
                    <ItemBackground>02.</ItemBackground>
                    <ItemTittle>/O QUE FAZEMOS</ItemTittle>
                </MenuItem>
                <MenuItem href="">
                    <ItemBackground>03.</ItemBackground>
                    <ItemTittle>/PLAN NEWS</ItemTittle>
                </MenuItem>
                <MenuItem href="">
                    <ItemBackground>04.</ItemBackground>
                    <ItemTittle>/NOSSOS CLIENTES</ItemTittle>
                </MenuItem>
                <MenuItem href="">
                    <ItemBackground>05.</ItemBackground>
                    <ItemTittle>/CONTATO</ItemTittle>
                </MenuItem>
            </MenuItems>

            <MenuBottom href="">
                <ItemBackground>;)</ItemBackground>
                <ItemTittle>Que tal inovar com a gente?</ItemTittle>
                <BsArrowDownRight />
            </MenuBottom>
      </MenuContainer>

    )
}

export default Menu