import styled from 'styled-components'
import Colors from '../../theme/colors'

export const WhatWeDoContainer = styled.section`

    display:flex;
    align-items: center;
    justify-content:center;
    height:100vh;
`

export const WhatWeDoLeft = styled.div`

    display:flex;
    flex-direction:column;
    height:400px;

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

    display:flex;
    margin-left:50px;
    margin-right:20px;
`
export const WhatWeDoContent = styled.div`

    margin:0 5px;
    width:135px;

    svg {

        color:${Colors.text.white};
    }

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