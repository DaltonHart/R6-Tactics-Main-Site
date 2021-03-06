import React, {Component} from 'react'
import MapModel from '../models/MapModel'
import Maps from '../components/Maps'

class MapContainer extends Component{
      state = {
        maps: [],
      }
      componentDidMount(){
        this.fetchData()
      }
      fetchData = () => {
        MapModel.all().then( (res) => {
          this.setState ({
            maps: res.data.data,
            map: ''
          })
        })
      }
      
    render(){
      console.log('Here is the mapmodel info to map:', this.state.maps)
      return (
        <div className='mapcontainer'>
          <Maps maps={this.state.maps}/>
        </div>
      )
    }
  }
  
  export default MapContainer