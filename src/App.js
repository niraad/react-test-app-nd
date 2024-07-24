import './App.scss';
import { Theme } from '@carbon/react';
import HeaderWNavigation from './components/HeaderWNavigation/HeaderWNavigation';
import LeadSpace from './components/LeadSpace/LeadSpace';
import TabsCic from './components/TabsCic/TabsCic';



function App() {
  return (
    <div className="App">
      <Theme theme="g100">
        <HeaderWNavigation />
      </Theme>

      <LeadSpace 
        title="React playground - ND"
        messageTop="Welcome"
        messageBottom="trials, errors, research, and development"
      />
      
      <TabsCic />
    </div>
  );
}

export default App;
