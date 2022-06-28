
import React from 'react';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <>
    <Header/>
    
    <Container>
    <HomeScreen/>
   
    </Container>
  
   
    <Footer/>
    </>
  );
}

export default App;
