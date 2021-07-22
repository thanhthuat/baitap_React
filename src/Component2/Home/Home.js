import React, { Component } from 'react';
import Model from '../Model/Model';
import './Home.scss';
import Data from '../Data/Data.json';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            Glasses:{
                "id":'',
                "price":'',
                "name":"",
                "url":"",
                "desc":'',
            },
           
        }

    }
    handleChange =(index)=>{
        let Data1= [...Data]
        console.log(Data1,index);
       let update =Data1.find((sp)=> sp.id == index )
       this.setState({
        Glasses:update,
       })
      
        
    }
    render() {
        return (
            <div className='Home__room' style={{backgroundImage: 'url(./glassesImage/background.jpg)'} }>
              <h1>Try Class APP online</h1>
                <div className='den'>
                </div>
                <div className='container'>
                <Model handleChange={this.handleChange} Glasses={this.state.Glasses}/>
                </div>
            
            </div>
        );
    }
}

export default Home;