import React, { Component } from 'react';
import Data from '../Data/Data.json'
import GheItem from '../GheItem/GheItem';
import './DanhSachGhe.css';

class DanhSachGhe extends Component {
    render() {
        const {handleChange,ghedadat} = this.props;
        let res = Data.map(obj => ghedadat.find(o => o.SoGhe === obj.SoGhe) || obj);
        console.log(res);
        return (
            <div className='mt-5'>
                <div className='content'>
                    {res.map((sp, index) => {
                            return (
                                <GheItem sp={sp} key={index} handleChange={handleChange} ghedadat={ghedadat} ></GheItem>
                            )
                        
                    })}
                </div>

            </div>


        );
    }
}

export default DanhSachGhe;