import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class ToggleDraw extends Component {
    state = {
      togglestate: false,
      color: 'red',
    }
 
 toggle = () => {
   if (this.state.togglestate === false){
     this.setState({
      togglestate: true,
     })
   }else{
    this.setState({
      togglestate: false,
     })
   }
    this.props.toggleCanDraw(this.state.togglestate)
 }
 
 colorChange = (color) => {
  this.setState({
    color: color,
  })

  this.props.colorChoice(this.state.color)
 }
  render(){
    return(
      <div>
          <Button onClick={this.toggle}  color='orange' >Draw</Button>
          <Button.Group>
              <Button onClick={this.colorChange}  color='red' ></Button>
              <Button onClick={this.colorChange}  color='green' ></Button>
              <Button onClick={this.colorChange}  color='blue' ></Button>
              <Button onClick={this.colorChange}  color='yellow' ></Button>
            </Button.Group>
      </div>
    )
  }
}


export default ToggleDraw