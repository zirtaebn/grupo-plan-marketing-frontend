import styled from 'styled-components'

// utilities
import Colors from '../../theme/colors'

export const SectionTitleContainer = styled.div`

    margin:50px 0;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:auto;
    height:22px;
    text-decoration:none;
    color:${Colors.text.white};

    div {

        position:absolute;
        color:${Colors.text.gray};
        font-size:100px;
        font-weight:700;
    }

    h2 {

        z-index:200;
        color:${Colors.text.lightGray};
        font-size:38px;
        font-weight:400;

    }

    h3 {

        z-index:200;
        font-size:14px;
        font-weight:400;
    }

`

