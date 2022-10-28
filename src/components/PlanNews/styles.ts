import styled from 'styled-components'

// utilities
import Colors from '../../theme/colors'

export const PlanNewsContainer = styled.section`

    display:flex;
    justify-content:center;
    /* align-items: center; */
    flex-direction:column;
    height:100vh;
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
    }
`

export const BlogItems = styled.ul`

    display:flex;
`

export const BlogItem = styled.li`

    display:flex;
    flex-direction:column;
    width:191px;
    height:305px;
    background-color:${Colors.background.gray};
    margin-right:10px;
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



