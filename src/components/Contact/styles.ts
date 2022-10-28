import styled from 'styled-components'

// utilities
import Colors from '../../theme/colors'

export const ContactContainer = styled.section`

    display:flex;
    align-items: center;
    justify-content:center;
    height:100vh;
`

export const ContactLeft = styled.div`

    flex:1;
    margin-right:25px;

    P {
        
        color:${Colors.text.white};
        font-size:12px;
        line-height:20px;
    }

    form {

        margin:15px 0;

        button {

            background-color:transparent;
            border:none;
            color:${Colors.text.lightGray};
            font-size:12px;
            margin-top: 32px;

            svg {

                margin-left:5px;
            }

            &:hover {

                opacity:.5;
            }

           
        }

        label {

            display:flex;
            flex-direction:column;
            width:100%;

            span {

                margin:8px 0;
                color:${Colors.text.white};
                font-size:15px;
                font-weight:300;
            }

            input, textarea {

                background-color:transparent;
                border: 2px solid ${Colors.border};
                padding:6px;
                color:${Colors.text.white};
                width:100%;

            }

            textarea {

                resize:vertical;
            }

            input:focus, textarea:focus {

                border: 2px solid #939598;
                outline-offset: 0px;
                outline: none;
            }

        }
    }
`
export const InputContainer = styled.div`

    position:relative;
`

export const Coner = styled.div`

    border-bottom: 2px solid ${Colors.border};
    width: 25px;
    height: 25px;
    position: absolute;
    top: -11px;
    right: -11px;
    z-index: 2;
    background: ${Colors.background.darkGray};
    transform: rotate(45deg);
`

export const ContactLabel = styled.div`

    display:flex;
    width:100%;

    label {

        margin-right:16px;
        
        input {

            width:50%;
        }
    }
`

export const ContactRight = styled.div`

    flex:1;
    display:grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: auto auto auto;
    gap:30px 22px;

`

export const ContactItem = styled.div`

    width:130px;

    p {
        color:${Colors.text.white};
        font-size:10px;
        line-height:20px;
        max-width:100%;
    }

    a {
        &:hover {

            opacity: 0.5;
        }
    }

    img {

        width:100%;
    }
`

export const Title = styled.h3`

    color:${Colors.text.lightGray};
    font-weight:300;
    margin-bottom:12px;
    display:flex;
    align-items:center;
`

export const Socials = styled.span`

    display:flex;
    align-items:center;

    a {

        display: flex;
        justify-content: center;
        align-items: center;
        width:25px;
        height:25px;
        border-radius: 50%;
        margin:10px 10px 0 0;
        background-color:${Colors.background.lightGray};
    }
`

export const Link = styled.a`

    text-decoration:none;
    color:${Colors.text.lightGray};
    font-size:10px;

    svg {

        margin-left:5px;
    }

    &:hover {

        opacity:.5;
    }
`
