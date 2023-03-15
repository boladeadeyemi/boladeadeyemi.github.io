import './App.css';
import Checkout from './Components/checkout/Checkout';
import Review from './Components/review/Review';
import Login from './Components/login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Components/signup/Signup';
import Product from './Components/product/Product'
import Home from './Components/home/Home';
import Landingpage from './Components/landingpage/landingpage';

function App() {
  return (

  
          <Router>
          <div className="App">  
                <Switch>
                  <Route exact path ='/' >
                  <Landingpage/>
                  </Route>
                <Route exact path = '/login'>
                   <Login/>
                 </Route>
                 <Route exact path = '/signup'>
                   <Signup/>
                 </Route>
                 <Route exact path = '/product'>
                   <Product/>
                 </Route>
                 <Route exact path = '/review'>
                   <Review/>
                 </Route>
                 <Route exact path = '/checkout'>
                   <Checkout/>
                 </Route>
                 <Route exact path = '/home'>
                   <Home/>
                 </Route>
                 

              </Switch>
             </div>
           </Router>
    
  );
}

export default App;
