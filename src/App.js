import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';

function Home() {
  return <h2>Halaman Home</h2>
}

function ListView() {
  return (
    <div>
    <h2>Halaman User</h2>
    <ul>
      <Link to='user/pawid'>Pawid</Link> <br />
      <Link to='user/ade'>Ade</Link>
    </ul>
    </div>

  )
}
function NoMatch() {
  return <h2>404, Halaman tidak ditemukan</h2>
}
function DetailView({match}) {
  return <h2>Ini halaman {match.params.name}</h2>
}

class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <nav>
            <li> <Link to='/'> Home </Link></li>

            <li> <Link to='/users'> User </Link></li>
            </nav>
            <main>
              <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/users' exact component={ListView} />
              <Route path='/user/:name' exact component={DetailView} />
              <Route component={NoMatch}/>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      );
    }
  }
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       items: [],
//       isLoading: true
//     }
//   }
  
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => this.setState({ items: data, isLoading: false}))
//   }

  
//   render() {
//     const { items, isLoading } = this.state

//     if(isLoading) {
//       return <p>Loading....</p>
//     }

//     return (
//       <div>
//         <ul>
//           {items.map((item, index )=> 
//             <li key={index}>{item.name}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }

// // State
// class Timer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       time: props.start
//     }
//   }

//   //lifecycle
//   componentDidMount(){
//     this.addInterval = setInterval(() => this.increase(), 1000)
//   }

//   componenetwillUnmount(){
//     clearInterval(this.addInterval)
//   }
// increase(){
//   // update state time perdetik
//   this.setState((state, props) => ({
//     time: parseInt(state.time) + 1
//   }))
// }
//   render() {
//     return (
//       <div> {this.state.time} Detik</div>
//     )
//   }
// }

// class Toggle extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toggleStatus: true
//     }
//     this.handleClick =  this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(state => ({
//     toggleStatus: !state.toggleStatus
//   }))
// }

//  render() {
//    return (
//      <button onClick={this.handleClick}>
//       {this.state.toggleStatus ? 'ON' : 'OFF'}
//       <p>kondisi sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
//      </button>
//    )
//  }
// }
// class App extends Component {
//  render() { 
//   return (
//     <div className="App">
//      <Toggle />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//        <Timer start="0"/>      
       
//       </header>
//     </div>
//   );
//   }
// }

export default App;
