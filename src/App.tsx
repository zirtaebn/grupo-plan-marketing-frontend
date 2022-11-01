// components
import Menu from './components/Menu'
import WhatWeDo from './components/WhatWeDo'
import PlanNews from './components/PlanNews'

// styles
import { AppContent } from './App.styles'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>

      <Menu />

      <AppContent>
        <WhatWeDo />
        <PlanNews />
        <Contact />
      </AppContent>

      
     
    </div>
  );
}

export default App;
