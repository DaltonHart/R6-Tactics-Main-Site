import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import HostageButton from './HostageButton';

class HostageButtons extends Component {
  
  render(){
    let hosLocations = Object.values(this.props.hostages);
    let hostageButtons = hosLocations.map((hostageButton,i)=>{
      if (hostageButton.name !== 'NA'){
        return (
          <HostageButton key={i} onSelectHostage={this.props.onSelectHostage} className='hostage' hostage={hostageButton} />
        )
      }
      
    });
    

    return(
      <div className='hosLocations'>
      <Button.Group>
          {hostageButtons}
        </Button.Group>
      </div>
    )
  }
}


export default HostageButtons