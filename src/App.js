import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, Profile } from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact  component={Login}/>
      <Route path='/profile' component={Profile}/> 
    </Switch>
  </BrowserRouter>
)

export default App;