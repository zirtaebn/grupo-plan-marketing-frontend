import styled from 'styled-components'

// utilities
import Colors from '../../theme/colors'

export const MenuMobile = styled.header`

    display:none;

    @media(max-width:1200px) {

        position:sticky;
        top:0;
        height:100px;
        width:100%;
        z-index:500;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 28px 30px;
        background-color:${Colors.background.darkGray};

        img {
            
            width: 205px;
            height:99px;

        }

        div {
            
            width:60px;
            height:60px;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            background-color:${Colors.background.gray};
        }
    }

    @media(max-width:425px) {

        img {
            
            width: 79px;
            height:38px;

        }

        div {
            
            width:50px;
            height:50px;

        }

    }
`

export const MenuContainer = styled.nav<{isOpen:boolean}>`

    color:#fff;
    padding:48px 0 16px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:233px;
    height:100vh;
    border-right: 2px solid ${Colors.border};
    position:fixed;
    bottom:0;

    @media(max-width:1200px){

        right:${props => (props.isOpen ? '0' : '-233px')};
        z-index:500;
        background-color:${Colors.background.darkGray};
        transition: all .5s ease;
        height:calc(100vh - 95px);
    }

    @media(max-width:1024px) {

        padding-top:20px;
    }

    @media(max-width:768px) {

        padding-top:0;
    }

    @media(max-width:425px) {

        width:425px;
        right:${props => (props.isOpen ? '0' : '-425px')};
    }

    @media(max-width:320px) {

        width:320px;
        right:${props => (props.isOpen ? '0' : '-320px')};
    }

    @media(max-width:280px) {

        width:280px;
        right:${props => (props.isOpen ? '0' : '-280px')};
    }
`

export const MenuLogo = styled.img`

    width: 129px;
    height:63px;
    margin-left:24px;

    @media(max-width:1200px){

       display:none;
    }
`

export const MenuItems = styled.ul`

    padding:0 24px;

    @media(max-width:1200px){

       padding:15px 24px;
    }

    @media(max-width:1024px){

       padding:0px 24px;
    }

    @media(max-width:425px) {

        padding:0px 80px;
    }

    @media(max-width:320px) {

        padding-left:55px;
    }

    @media(max-width:280px) {

        padding:15px 50px;
    }
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

    @media(max-width:1024px) {

        margin:35px 0;
    }

    @media(max-width:768px) {

        margin:32px 0;
    }

    @media(max-width:425px) {

        margin:37px 0;
    }

    
`

export const ItemBackground = styled.div`

    position:absolute;
    color:${Colors.text.gray};
    font-size:60px;
    font-weight:700;

    @media(max-width:768px) {

        font-size:55px;
    }

    @media(max-width:425px) {

        font-size:65px;
    }

    
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
    color:${Colors.text.lightGray};
    padding:50px 24px;
    border-top:2px solid ${Colors.border};

    &:hover {

        opacity:.5;
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

        @media(max-width:425px) {

            left:240px;
        }


    }

    @media(max-width:425px) {

        padding-left:80px;
    }

    @media(max-width:320px) {

        padding-left:55px;
    }

    @media(max-width:280px) {

        padding-left:50px;
    }

    
`

