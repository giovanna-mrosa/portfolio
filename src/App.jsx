import './App.scss';
import React from 'react';
import { SectionOne } from './components/SectionOne';
import { SectionTwo } from './components/SectionTwo';
import { SectionThree } from './components/SectionThree';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
}

export default App;
