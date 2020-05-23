import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rental';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';

import Navbar from './components/navbar'
import Counters from './components/counters';
import Counter from './components/counter';
import NavBarM from './components/navbarm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

class App extends Component  {
  render(){
    return(
        <React.Fragment>
        <NavBarM />
          <main className="container">
            <Switch>
            <Route path='/register' component={RegisterForm}></Route>
              <Route path='/login' component={LoginForm}></Route>
              <Route path='/movies/:id' component={MovieForm}></Route>
              <Route path='/movies' component={Movies}></Route>
              <Route path='/customers' component={Customers}></Route>
              <Route path='/rentals' component={Rentals}></Route>
              <Route path='/not-found' component={NotFound}></Route>
              <Redirect from='/' exact to='/movies'/>
              <Redirect from='/' to='/not-found'/>
            </Switch>
          </main>
      </React.Fragment>
    );
  }
//   state = { 
//     counters :[
//         {id:1 ,value:4},
//         {id:2 ,value:2},
//         {id:3 ,value:5},
//         {id:4 ,value:90}
//     ]
//  }
//  handleIncrement=(counter)=>{
//      const counters = [...this.state.counters];
//      const index = counters.indexOf(counter);
//      counters[index] = {...counter };
//      counters[index].value++;
//      this.setState({ counters });
//      this.setState({ counters });
//  }
//  handleDecrement=(counter)=>{
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = {...counter };
//     counters[index].value--;
//     this.setState({ counters });
//     this.setState({ counters });
// }
//  handleReset =() =>{
//     const counters = this.state.counters.map(m => {
//         m.value = 0;
//         return m;
//     });
//     this.setState({ counters })
//  };
// handleDelete = (counterid) => {
//    const counters = this.state.counters.filter(m => m.id !== counterid);
//    this.setState({ counters })
// };
// render (){
//   return (
//    <React.Fragment> 
//    <Navbar totalCounter={this.state.counters.filter(c => c.value > 0).length}/>
//    <main className='container'>
//        <Counters counters={this.state.counters}
//                  onReset={this.handleReset}
//                  onDelete={this.handleDelete}
//                  onIncrement={this.handleIncrement}
//                  onDecrement={this.handleDecrement}></Counters>
//    </main>
//    </React.Fragment>
  
//   );
// }
}

export default App;
