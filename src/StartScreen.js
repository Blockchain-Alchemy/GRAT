import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import img_elImage from './images/StartScreen_elImage_19503.png';
import img_elImage3 from './images/StartScreen_elImage3_262196.png';
import img_elImage2 from './images/StartScreen_elImage2_32611.jpg';
import btn_icon_688194 from './images/btn_icon_688194.png';
import btn_icon_627195 from './images/btn_icon_627195.png';
import btn_icon_402717 from './images/btn_icon_402717.png';
import img_elImage4 from './images/StartScreen_elImage4_952223.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Textarea from 'muicss/lib/react/textarea';

export default class StartScreen extends Component {

  static contextType = ScreenContext;


  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  onClick_elText = async () => {
    window.open('', '_blank');
  
  }
  
  
  textAreaChanged_elTextarea = (event) => {
    this.setState({textarea: event.target.value});
  }
  
  getValue_elTextarea = () => {
    return this.state.textarea || '';
  }
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.context.transitionId && this.context.transitionId.length > 0 && this.context.atTopOfScreenStack && this.context.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.context.transitionId;
    }
    if ( !this.context.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      boxSizing: 'border-box',
      backgroundColor: 'black',
      filter: 'drop-shadow(0.0px 0.0px 0px rgba(0, 0, 0, 0.3333))',
      overflow: 'visible',
     };
    const style_elImage = {
      backgroundImage: 'url('+this.context.appActions.createImageUrlFromProp(this.props.logo)+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    const style_elText = {
      fontSize: 16.0,
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elText7 = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elButtonCopy4 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elButton2 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elButtonCopy5 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elRect = {
      background: 'rgba(34, 34, 34, 1.000)',
     };
    
    const style_elRect3 = {
      background: 'rgba(54, 54, 54, 1.000)',
     };
    const style_elImage3 = {
      backgroundImage: 'url('+img_elImage3+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'contain',
     };
    
    const style_elRect4 = {
      background: 'rgba(101, 101, 101, 1.000)',
      border: '0.9px solid rgba(189, 233, 238, 0.9000)',
      boxShadow: '0.0px 2.0px 3px rgba(0, 0, 0, 0.3000)',
     };
    const style_elText2 = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elButton = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    const style_elText3 = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elButtonCopy = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elButtonCopy2 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elButtonCopy3 = {
      display: 'block',
      color: '#fff',
      textAlign: 'center',
      backgroundColor: '#1436ff',
     };
    
    const style_elTextarea = {
      display: 'block',
      color: 'rgba(254, 255, 254, 0.8500)',
      pointerEvents: 'auto',
     };
    
    const style_elRect2 = {
      background: 'rgba(29, 29, 29, 1.000)',
     };
    const style_elImage2 = {
      backgroundImage: 'url('+img_elImage2+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'contain',
     };
    
    const style_elRect5 = {
      background: 'rgba(31, 31, 31, 1.000)',
     };
    const style_elText4 = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elFab = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elFabCopy = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    
    const style_elFabCopy2 = {
      display: 'block',
      color: '(null)',
      textAlign: 'center',
     };
    const style_elText5 = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy2 = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'left',
     };
    const style_elText6 = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy3 = {
      color: 'rgba(254, 255, 254, 0.8500)',
      textAlign: 'left',
     };
    const style_elImage4 = {
      backgroundImage: 'url('+img_elImage4+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elImage">
            <div style={style_elImage} />
          </div>
          
          <div className="elText">
            <div className="systemFontRegular" style={style_elText} onClick={this.onClick_elText} >
              <div>{this.context.locStrings.start_text_1008053}</div>
            </div>
          </div>
          
          <div className="elText7">
            <div className="baseFont" style={style_elText7}>
              <div>{this.context.locStrings.start_text7_906950}</div>
            </div>
          </div>
          
          <div className="elButtonCopy4">
            <Button className="actionFont" style={style_elButtonCopy4}  color="accent" >
              {this.context.locStrings.start_buttoncopy4_406108}
            </Button>
          </div>
          
          <div className="elButton2">
            <Button className="actionFont" style={style_elButton2}  color="accent" >
              {this.context.locStrings.start_button2_886140}
            </Button>
          </div>
          
          <div className="elButtonCopy5">
            <Button className="actionFont" style={style_elButtonCopy5}  color="accent" >
              {this.context.locStrings.start_buttoncopy5_463752}
            </Button>
          </div>
          
          <div className="elRect">
            <div style={style_elRect} />
          </div>
          
          <div className="elRect3">
            <div style={style_elRect3} />
          </div>
          
          <div className="elImage3">
            <div style={style_elImage3} />
          </div>
          
          <div className="elRect4">
            <div style={style_elRect4} />
          </div>
          
          <div className="elText2">
            <div className="baseFont" style={style_elText2}>
              <div>{this.context.locStrings.start_text2_409820}</div>
            </div>
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  variant="raised" color="accent" >
              {this.context.locStrings.start_button_507408}
            </Button>
          </div>
          
          <div className="elText3">
            <div className="baseFont" style={style_elText3}>
              <div>{this.context.locStrings.start_text3_827187}</div>
            </div>
          </div>
          
          <div className="elButtonCopy">
            <Button className="actionFont" style={style_elButtonCopy}  variant="raised" color="accent" >
              {this.context.locStrings.start_buttoncopy_551756}
            </Button>
          </div>
          
          <div className="elButtonCopy2">
            <Button className="actionFont" style={style_elButtonCopy2}  variant="raised" color="accent" >
              {this.context.locStrings.start_buttoncopy2_87726}
            </Button>
          </div>
          
          <div className="elButtonCopy3">
            <Button className="actionFont" style={style_elButtonCopy3}>
              {this.context.locStrings.start_buttoncopy3_115937}
            </Button>
          </div>
          
          <div className="elTextarea">
            <Textarea className="baseFont" style={style_elTextarea}  placeholder={this.context.locStrings.start_textarea_355883} onChange={this.textAreaChanged_elTextarea} value={this.getValue_elTextarea()}  />
          </div>
          
          <div className="elRect2">
            <div style={style_elRect2} />
          </div>
          
          <div className="elImage2">
            <div style={style_elImage2} />
          </div>
          
          <div className="elRect5">
            <div style={style_elRect5} />
          </div>
          
          <div className="elText4">
            <div className="headlineFont" style={style_elText4}>
              <div>{this.context.locStrings.start_text4_191157}</div>
            </div>
          </div>
          
          <div className="elFab">
            <Button className="actionFont" style={style_elFab}  variant="fab" color="accent" >
              <img src={btn_icon_688194} alt="" style={{width: '50.000%', marginTop: '25.000%'}} />
            </Button>
          </div>
          
          <div className="elFabCopy">
            <Button className="actionFont" style={style_elFabCopy}  variant="fab" color="accent" >
              <img src={btn_icon_627195} alt="" style={{width: '50.000%', marginTop: '25.000%'}} />
            </Button>
          </div>
          
          <div className="elFabCopy2">
            <Button className="actionFont" style={style_elFabCopy2}  variant="fab" color="accent" >
              <img src={btn_icon_402717} alt="" style={{width: '50.000%', marginTop: '25.000%'}} />
            </Button>
          </div>
          
          <div className="elText5">
            <div className="baseFont" style={style_elText5}>
              <div>{this.context.locStrings.start_text5_406684}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div>{this.context.locStrings.start_textcopy_669088}</div>
            </div>
          </div>
          
          <div className="elTextCopy2">
            <div className="baseFont" style={style_elTextCopy2}>
              <div>{this.context.locStrings.start_textcopy2_116742}</div>
            </div>
          </div>
          
          <div className="elText6">
            <div className="headlineFont" style={style_elText6}>
              <div>{this.context.locStrings.start_text6_838027}</div>
            </div>
          </div>
          
          <div className="elTextCopy3">
            <div className="baseFont" style={style_elTextCopy3}>
              <div>{this.context.locStrings.start_textcopy3_800981}</div>
            </div>
          </div>
          
          <div className="elImage4">
            <div style={style_elImage4} />
          </div>
        </div>
        
      </div>
    )
  }
  
}
