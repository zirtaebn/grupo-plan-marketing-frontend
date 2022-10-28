// components
import Menu from './components/Menu'
import WhatWeDo from './components/WhatWeDo'
import PlanNews from './components/PlanNews'

// styles
import { AppContainer, AppContent } from './App.styles'
import Contact from './components/Contact'

const App = () => {
  return (
    <AppContainer>

      <Menu />

      <AppContent>
        <WhatWeDo />
        <PlanNews />
        <Contact />
      </AppContent>

      
     
    </AppContainer>
  );
}

export default App;
