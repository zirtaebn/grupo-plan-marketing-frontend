import styled from 'styled-components'

// utilities
import Colors from '../../theme/colors'

export const MenuContainer = styled.nav`

    color:#fff;
    padding:48px 0 16px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:233px;
    height:100vh;
    border-right: 2px solid ${Colors.border};
    position:fixed;
    top:0;
    left:0;
`

export const MenuLogo = styled.img`

    width: 129px;
    height:63px;
    margin-left:24px;
`

export const MenuItems = styled.ul`

    border-bottom:2px solid ${Colors.border};
    padding:0 24px;
`

export const MenuItem = styled.a`

    margin:50px 0;
    position:relative;
    display:flex;
    align-items:center;
    width:100%;
    height:22px;
    text-decoration:none;
    color:${Colors.text.white};

    &:hover {

        opacity:.8;
    }
`

export const ItemBackground = styled.div`

    position:absolute;
    color:${Colors.text.gray};
    font-size:60px;
    font-weight:700;
`

export const ItemTittle = styled.p`

    z-index:200;
`
export const MenuBottom = styled.a`

    position:relative;
    display:flex;
    align-items:center;
    width:100%;
    height:22px;
    text-decoration:none;
    color:${Colors.text.white};
    padding:50px 24px;

    &:hover {

        opacity:.8;
    }

    p {

        max-width:140px;
    }

    svg {

        margin-left:10px;
        position:absolute;
        top:75px;
        left:200px;
        width:15px;
    }
`

