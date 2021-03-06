import React from 'react';
import {Media, Animation} from 'mdbreact'
import propalLeft from './Images/proposalLeft2.jpg'
import propalRight from './Images/proposalRight.jpg'
import inviteImage from './Images/inviteImg.gif'

export class SectionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "Anand & Archana",
      subHeading1: "There were two people who knew",
      subHeading2: "each other for a very long time. \n But they never really saw each other...",
    }
  }
  render() {
    return (
      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <div className="align-items-center title h-25 mb-auto mt-5">
          <h1 className=" section-title">{this.state.heading1}</h1>
        </div>
        <div className="align-self-center mt-5 mb-auto">
          <p className="section-subtitle mbr-light text-center display-linebreak">
            {this.state.subHeading1}<br />
            {this.state.subHeading2}<br />
          </p>
        </div>
      </div>
    );
  }
}

const AnimatedContent = ({left, right}) => {
  return (<p className="section-subtitle display-linebreak">
    <Animation className="reveal d-inline-block" type="slideInLeft" duration="3s" delay="4s">
      {left}
    </Animation>
    <Animation className="d-inline-block" type="slideInRight" duration="3s" delay="4s">
      {right}
    </Animation>
    </p>
  );
};

export class SectionTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "One fine fall week...",
      left0: "He bragged about NYC's work life.\xA0",
      right0: "She went there to see it for herself. ",
      left1: "He made her laugh.\xA0",
      right1: "She made him work lesser. ",
      left2: "He played tricks on her.\xA0",
      right2: "She teased him by not completing her stories.",
      left3: "He woke her up every morning.\xA0",
      right3: "She slept longer.",
      left4: "He talked and talked and talked.\xA0",
      right4: "She listened!",
    }
  }
  render() {
    return(
      <div className="d-flex justify-content-center flex-column">
        <div className="align-self-center title">
          <h3 className="text-center section-title">{this.state.heading1}</h3>
        </div>
        <div className="align-self-center align-self-md-center w-100">
          <AnimatedContent left={this.state.left0} right={this.state.right0} />
          <AnimatedContent left={this.state.left1} right={this.state.right1} />
          <AnimatedContent left={this.state.left2} right={this.state.right2} />
          <AnimatedContent left={this.state.left3} right={this.state.right3} />
          <AnimatedContent left={this.state.left4} right={this.state.right4} />
        </div>
      </div>      
    );
  }
}
export class SectionFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading1: "When all was peachy...",
      proposalContent: "She dressed up for a photoshoot. She posed. But he Proposed.\n \xA0 \xA0 \xA0 \xA0 \xA0 As much as she saw it coming, she didn't see it coming.\n Of course, she said yes!",
    }
  }
  render() {
    return (
      <div className="w-100 h-100">
        <div className="shadowLayer">
          <div className="d-flex justify-content-center flex-column">
            <div className="mb-auto">
              <h3 className="text-center section-title">{this.state.heading1}</h3>
            </div>
            <div className="align-self-center mb-auto">
              <p className="section-subtitle display-linebreak sRotate">
                {this.state.proposalContent}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="m-3 w-25">
            <img alt="b" className="z-depth-5 rounded onHover w-100" src={propalLeft} />
          </div>        
          <div className="ml-auto mt-auto m-3 w-25">
            <img alt="b" className=" z-depth-5 rounded onHover w-100" src={propalRight} />
          </div>
        </div>
      </div>
    );
  }
}

export class SectionFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteTitle1: "Mangalyam Thandunanena",
      inviteSub1: "As we team up for the game of life,",
      inviteSub2: "You are invited to brighten up the \n next page of our story by",

      reception1: "#1 Making the reception fun by dancing \n with us at",
      receptionDate: "7pm on Saturday\n 8th of December 2018",

      wedding1: "#2 Cheering at our traditional wedding \n ceremony at",
      weddingDate: "8am on Sunday\n 9th of December 2018",

    }
  }
  render() {
    return (
      <div className="w-100 h-100">
        <div className="d-flex justify-content-center flex-column h-15">
          <div className="mb-auto">
            <h3 className="section-title">{this.state.inviteTitle1}</h3>
          </div>
        </div>
        <div className="d-flex flex-row w-100 h-85 ml-2 mb-2 mr-2">
          <div className="align-items-center m-3 mb-5 w-40">
            <Media object src={inviteImage} className="border border-dark thumbnail"/>      
          </div>
          <div className="align-self-center ml-5">
            <p className="align-middle section-subtitle mbr-light display-linebreak">
              {this.state.inviteSub1}<br />
              {this.state.inviteSub2}<br /><br />
              {this.state.reception1}<br />
              <span class="display-linebreak section-date">{this.state.receptionDate}</span><br /><br />
              {this.state.wedding1}<br />
              <strong><span class="display-linebreak section-date">{this.state.weddingDate}</span></strong><br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
