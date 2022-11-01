import styled from 'styled-components'

// utilities
import Colors from '../../theme/colors'

export const WhatWeDoContainer = styled.section`

    display:flex;
    justify-content:space-around;
    height:100vh;
    
    @media(max-width:1200px){

       height:calc(100vh - 100px);
    }

    @media(max-width:930px){

       flex-direction:column;
       height:calc(100% - 100px);
       align-items: flex-start;
    }
`

export const WhatWeDoLeft = styled.div`

    margin-right:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
   
    h4, h5 {

        color:${Colors.text.lightGray}
    }

    h4 {

        font-size:18px;
    }

    h5 {
        margin:20px 0;
        font-size:13px;
    }

    p {
        color:${Colors.text.white};
        font-size:12px;
        max-width:450px;
        line-height:20px;
    }
`

export const WhatWeDoRight = styled.div`

    display:grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    gap:30px 5px;
    margin-top:52px;
    

   @media(max-width:930px) {

        grid-template-columns: auto auto auto auto;
    }

    @media(max-width:640px) {

        grid-template-columns: auto auto auto;
        gap:30px 10px;
    }

    @media(max-width:490px) {

        grid-template-columns: auto auto;
        gap:30px 10px;
    }

    @media(max-width:280px) {

        grid-template-columns: auto;
    }
`
export const WhatWeDoContent = styled.div`

    margin:0 5px;
    width:140px;

    &:last-child {

        p {

            font-size:20px;
            line-height:30px;
        }

        a {

            text-decoration:none;
            color:${Colors.text.lightGray};
            font-size:12px;

            svg {

                margin-left:5px;
            }

            &:hover {

                opacity:.5;
            }
        }
    }

    @media(max-width:320px) {

       width:120px;
    }
`

export const WhatWeDoImage = styled.img`

    width:100%;
    height:125px;
`

export const WhatWeDoDescription = styled.p`

    color:${Colors.text.white};
    font-weight:300;
    font-size:12px;
    max-width:135px;
    line-height:22px;
    margin-top:5px;
    margin-bottom:15px;

    span {

        font-weight:bold;
    }
`