import React, { Component } from 'react';
import './Model.scss';

class Model extends Component {
    render() {
        const { handleChange, Glasses } = this.props;
        return (
            <div className=''>
                <div className='content__model'>
                   
                
                    <div className='image__model' style={{ backgroundImage: 'url(./glassesImage/model.jpg)' }}>

                        {/* <img src='./glassesImage/model.jpg'></img> */}
                        <div className='glasses__image'>
                            <img src={Glasses.url}></img>
                        </div>
                        <div className='glasses__des' style={{height: Glasses.name !=''?'35%':'0%'} }>
                            <h3>{Glasses.name}</h3>
                            <p>{Glasses.desc}</p>
                        </div>
                    </div>

                    <div className='glass__model'>
                        <div className='container'>

                            <button onClick={() => handleChange(1)} className=' button'><img src='./glassesImage/g1.jpg'></img></button>
                            <button onClick={() => handleChange(2)} className=' button'><img src='./glassesImage/g2.jpg'></img></button>
                            <button onClick={() => handleChange(3)} className=' button'><img src='./glassesImage/g3.jpg'></img></button>
                            <button onClick={() => handleChange(4)} className=' button'><img src='./glassesImage/g4.jpg'></img></button>
                            <button onClick={() => handleChange(5)} className=' button'><img src='./glassesImage/g5.jpg'></img></button>
                            <button onClick={() => handleChange(6)} className=' button'><img src='./glassesImage/g6.jpg'></img></button>
                            <button onClick={() => handleChange(7)} className=' button'><img src='./glassesImage/g7.jpg'></img></button>
                            <button onClick={() => handleChange(8)} className=' button'><img src='./glassesImage/g8.jpg'></img></button>
                            <button onClick={() => handleChange(9)} className=' button'><img src='./glassesImage/g9.jpg'></img></button>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Model;