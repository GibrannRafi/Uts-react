import React from 'react' ;
import{Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Surat from './components/daftarsurat/daftarsurat';
import Ayat from './components/daftarayat/daftarayat';

function App(){
  return(
    <div>
          <Switch>
             <Dashboard>
                <Route path ="/" exact component={Surat}/>
             </Dashboard>
             <Route path ="/" exact component={Dashboard}/>
          </Switch>
    </div>
  )
}
 

export default App;s