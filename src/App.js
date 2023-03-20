import './App.css';
import React, { Component } from 'react';
import SignInForm from './components/SignInForm';
import { SIGN_UP_SCHEMA } from './utils/schemasValidation';
import { UserContext, ThemeContext } from './context'
import CONSTANTS from './constants';
import TreeWithTheme from './components/Tree';
import HeaderWithTheme from './components/Header';
const {THEMES} = CONSTANTS;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme:THEMES.LIGHT,
//       user: {
//         id: 1,
//         firstName: 'Johnny',
//         lastName: 'Depp',
//         imgSrc: 'https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp-640x514.jpg'
//       }
//     }
//   }

//   setTheme = (theme) => {this.setState({theme})}

//   render() {
//     const {user} = this.state;
//     return <ThemeContext.Provider value={[theme, this.setTheme]}>
//       <UserContext.Provider value={user}>
//         <HeaderWithTheme />
//         <TreeWithTheme />
//       </UserContext.Provider>
//     </ThemeContext.Provider>

//   }
// }

// export default App;



function App(){
  const userData = {
    firstName: 'Ivan',
    lastName: 'Yarem',
    email: 'ivan@gmail.com',
    password: '123Qwerty',
    age: 24,
  }
  return(
    <>
    <SignInForm />
    </>
  );
}

export default App;