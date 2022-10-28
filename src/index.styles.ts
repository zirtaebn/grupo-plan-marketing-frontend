import { createGlobalStyle } from 'styled-components'

// utilities
import Colors from './theme/colors'

export default createGlobalStyle`

  * {

    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  button {

    cursor: pointer;
    border:none;
  }

  a {

    cursor: pointer;
  }

  body {

    background-color:${Colors.background.darkGray};
    height:100vh;
  }

  ul, li {

    list-style: none
  }

`