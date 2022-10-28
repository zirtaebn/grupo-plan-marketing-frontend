// components
import Menu from './components/Menu'
import WhatWeDo from './components/WhatWeDo'

// styles
import { AppContainer, AppContent } from './App.styles'

const App = () => {
  return (
    <AppContainer>

      <Menu />

      <AppContent>
        <WhatWeDo />
      </AppContent>

      
     
    </AppContainer>
  );
}

export default App;
