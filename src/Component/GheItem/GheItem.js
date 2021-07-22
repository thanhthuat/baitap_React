import React, { Component } from 'react';

class GheItem extends Component {
    render() {
        const {sp,handleChange,ghedadat} = this.props;
        return (
            <div >
          <button onClick={()=>handleChange(sp)} disabled={sp.TrangThai}  style={{width: 100}} className={ sp.TrangThai ?'btn btn-danger':ghedadat.find(spp=> spp.SoGhe ==sp.SoGhe)?'btn btn-success':'btn btn-secondary'}>{sp.TenGhe} </button>
         
            </div>
        );
    }
}

export default GheItem;