import styled from 'styled-components'

// utilities
import Colors from '../../theme/colors'

export const PlanNewsContainer = styled.section`

    display:flex;
    justify-content:space-around;
    height:100vh;

    @media(max-width:1830px){

        align-items:flex-start;
        justify-content:center;
        flex-direction:column;
       
    }

    @media(max-width:930px){

       height:100%;
       
    }
    
    @media(max-width:680px) {

        margin-top:30px;
    }
`
export const PlanNewsHeader = styled.div`
    
    display:flex;
    align-items:center;

    a {

        text-decoration:none;
        color:${Colors.text.lightGray};
        font-size:12px;
        margin: 32px 0 0 25px;

        svg {

            margin-left:5px;
        }

        &:hover {

            opacity:.5;
        }

        @media(max-width:680px) {

            margin: 32px 0 0 0px;
        }

        @media(max-width:425px) {

            margin-top:10px;
        }
    }

    
    @media(max-width:680px) {

        margin-bottom:20px;
    }

    @media(max-width:425px) {

       flex-direction:column;
       margin-bottom:20px;
    }
`

export const BlogItems = styled.ul`

    display:grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: auto auto auto auto auto;
    gap:30px 5px;

    @media(max-width:930px) {

        grid-template-columns: auto auto auto auto;
    }

    @media(max-width:780px) {

        grid-template-columns: auto auto auto;
        gap:30px 10px;
    }

    @media(max-width:590px) {

        grid-template-columns: auto auto;
        gap:30px 10px;
    }

    @media(max-width:280px) {

        grid-template-columns: auto;
    }
`

export const BlogItem = styled.li`

    display:flex;
    flex-direction:column;
    width:170px;
    height:335px;
    background-color:${Colors.background.gray};
    margin-right:10px;

    @media(max-width:1200px){

       height:330px;
    }

    @media(max-width:425px) {

        margin-right:0;
        width:150px;

    }

    @media(max-width:320px) {

       width:130px;
    }
`
export const ImageContainer = styled.div`

    position:relative;

    img {
        width:100%;
        height:105px;
    }

    svg {

        position: absolute;
        top: 0;
        right: 0;
    }
`

export const Triangule = styled.div`

    border-color: #1e1e1e #1e1e1e transparent transparent;
    border-style: solid;
    position: absolute;
    right: -1px;
    top: -1px;
    width: 40px;
    border-width: 30px;
`

export const ItemContent = styled.div`

    padding:10px 15px;
`

export const Topic = styled.span`

    background-color:${Colors.background.lightGray};
    width:auto;
    padding:2px 5px;
    color:${Colors.text.gray};
    font-size:12px;
    font-weight:700;
`

export const Title = styled.h4`

    color:${Colors.text.lightGray};
    margin:10px 0;
    font-weight:400;
    font-size:15px;
`

export const Description = styled.p`

    font-size:10px;
    line-height:15px;
    color:${Colors.text.white};
`

export const Link = styled.a`

    text-decoration:none;
    color:${Colors.text.lightGray};
    font-size:9px;
    font-weight:700;

    svg {

        margin-left:5px;
    }

    &:hover {

        opacity:.5;
    }

`



