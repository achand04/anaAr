import React from 'react';
import {Parallax } from 'react-spring';
import Navigate from './nav';
import {SectionOne, SectionTwo, SectionFour, SectionFive} from './contents';
import Collage from './Images/Collages2.jpg';
import keyUp from './Images/keyup2.png';
import keyDown from './Images/keydown2.png';


class Contentsections extends React.Component{  
  constructor(props) {
    super(props);
    this.state = { 
      isToggleOn: true, 
      offsetLen: 6,
      loadNavigation:false,
      threshold : 0,
      active: 5.55,
      maxLeft : 5.55,
      maxRight : 79,
      showFooterContent : false,
      flipped : false,
      card1Content: 'He made her laugh. \n She made him work lesser. \n He played tricks on her.\nShe teased him by not completing her stories.\n He woke her up every morning.\n She slept longer.\nHe talked and talked and talked.\nShe listened!',
      card2Content : "Hangouts brough them closer.So much so that, he `proposed` to her via Hangouts",
      card3Content: "She dressed up for a photoshoot. \n She posed. But he Proposed. \n Of course, she said yes - t7hey had already decided a date! \n. As much as she saw it coming, she didnt see it coming\n",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFlipping = this.handleFlipping.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this._renderNavigation = this._renderNavigation.bind(this);
  }
  componentDidMount() {
    this.setState({loadNavigation:true});
    var container = this.parallax.container;
    container.addEventListener('scroll', this.handleScroll);
  }
  _renderNavigation() {
    if (this.state.loadNavigation) {
      return <Navigate active={this.state.active}/>;
    }
  }
  handleFlipping() {
    this.setState({flipped:true});
  }
  handleScroll() {
    var activeState = (this.parallax.current )/this.parallax.container.offsetHeight,
     threshold = (activeState * 14.75),
     showFooterContent = false,
     boundary = (this.state.offsetLen - 2) * this.parallax.container.offsetHeight,
     scrollRight =0;
     
     if (activeState === 0 || threshold < 0) {
       threshold = 0;
     }
     if (threshold > this.state.maxRight) {
       
     }
     if (this.parallax.current >= boundary) {
       showFooterContent = true;
     }
     scrollRight = threshold + this.state.maxLeft;
     if (scrollRight > this.state.maxRight) {
       scrollRight = this.state.maxRight;
     }
     this.setState({active: (scrollRight), showFooterContent : showFooterContent});
  }
  
  handleClick(parallax, offset) {
    let currentOffset = (offset || parallax.offset) + 1;
    
    if (currentOffset === this.state.offsetLen) {
      currentOffset=0;
    }
    let element = document.getElementById("scrollLayer" + (currentOffset+1));
    if (element) {
      element.scrollIntoView({'behavior' : 'smooth'});
    }
  }
  render() {
    return (
      <div className="bgImage">
      {this._renderNavigation()}
      
        <Parallax ref={ref => (this.parallax = ref)} pages={6.1} className="content">
          <Parallax.Layer id="scrollLayer1" offset={0} factor={1} onClick={e => this.handleClick(this.parallax)}></Parallax.Layer>
          <Parallax.Layer id="1" factor={1} offset={0.1} speed={0} onClick={e => this.handleClick(this.parallax,0)}>
            <section id="sOne" className="img-fullscreen">
              <SectionOne />
            </section>
          </Parallax.Layer>
          <Parallax.Layer id="scrollLayer2" offset={1} factor={1} onClick={e => this.handleClick(this.parallax)}></Parallax.Layer>
          <Parallax.Layer id="2" offset={1.1} speed={0} factor={1} onClick={e => this.handleClick(this.parallax, 1)}>
            <section id="sTwo">
              <SectionTwo/>
            </section>
          </Parallax.Layer>
          <Parallax.Layer id="scrollLayer3" offset={2} factor={1} onClick={e => this.handleClick(this.parallax)}></Parallax.Layer>
          <Parallax.Layer id="3" offset={2.1} speed={0} factor={1} onClick={e => this.handleClick(this.parallax, 2)}>
            <section id="sThree">
              <div className="hangouts d-flex flex-column">
                <div className="m-2 h-50">
                  <img alt="b" src={Collage} />
                </div>
              </div>
            </section>
          </Parallax.Layer>
          <Parallax.Layer offset={2.57} speed={-.3} factor={1} onClick={e => this.handleClick(this.parallax, 2)}>
            <div class="topImg">
              <img alt="b" className="h-200" src={keyUp} />
            </div>
          </Parallax.Layer>
          <Parallax.Layer offset={2.58} speed={.3} factor={1}  onClick={e => this.handleClick(this.parallax, 2)}>
            <div class="topImg">
              <img alt="b" className="h-200"  src={keyDown} />
            </div>
          </Parallax.Layer> 
          
          <Parallax.Layer id="scrollLayer4" offset={3} factor={1} onClick={e => this.handleClick(this.parallax)}></Parallax.Layer>
          <Parallax.Layer id = "4" factor={1} offset={3.1} speed={0} onClick={e => this.handleClick(this.parallax,3)}>
            <section id="sFour">
              <SectionFour />
            </section>
          </Parallax.Layer>
          
          <Parallax.Layer id="scrollLayer5" offset={4} factor={1} onClick={e => this.handleClick(this.parallax)}></Parallax.Layer>
          <Parallax.Layer id="5" factor={1} offset={4.1} speed={0} onClick={e => this.handleClick(this.parallax,4)}>
            <section id="sFive">
              <SectionFive />
            </section>
          </Parallax.Layer>
          
          <Parallax.Layer id="scrollLayer6" offset={5} factor={1} onClick={e => this.handleClick(this.parallax)}></Parallax.Layer>
          <Parallax.Layer id="6" factor={1} offset={5.1} speed={0} onClick={e => this.handleClick(this.parallax,5)}>
            <section id="sSeven">
              <div className="d-flex justify-content-center flex-column h-15">
                <div className="mb-auto">
                  <h3 className="section-title white-text">Meet us at ...</h3>
                </div>
              </div>
              <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.576894994789!2d80.25271465034191!3d12.934893219137827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525cdd5d90609f%3A0xf6d497e08ae5e492!2sThe+Royal+Palms!5e0!3m2!1sen!2sus!4v1538564720063"
                  frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
              <div className="d-flex section-subtitle white-text justify-content-center flex-column mt-5">
                <span className="contact">bearing no gifts or bouquets :)</span>
              </div>
              <div className="d-flex section-subtitle white-text justify-content-center flex-column mt-5">
                <span className="contact">Contact - Anand  +916369800409/lelouchitis@gmail.com</span>
              </div>
                </section>
          </Parallax.Layer>
        </Parallax>
        <div class="footer">
          <span className={this.state.showFooterContent ? "footerText" : "hideFooterText"}> Designed by thr Bride ; Developed by the Groom</span>
        </div>
      </div>
    );
  }
}
export default Contentsections;
