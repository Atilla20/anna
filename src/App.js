import React, { Component } from 'react';
import Header from './components/header';
import AboutSection from './components/about-section';
import IntroSection from './components/intro-section';
import WorkSection from './components/work-section';
import ContactSection from './components/contact-section';
import Footer from './components/footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import './scss/main.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '#about',
      work: '#work',
      contact: '#contact'
    }
  }
      
  render() {
    return (
      <div>
        <Header about= {this.state.about} work={this.state.work} contact={this.state.contact}/>
        <IntroSection/>
        <ScrollableAnchor id={'about'}>
          <AboutSection/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'work'}>
          <WorkSection/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <ContactSection/>
        </ScrollableAnchor>
        <Footer/>                 
      </div>
    );
  }
}

export default App;
