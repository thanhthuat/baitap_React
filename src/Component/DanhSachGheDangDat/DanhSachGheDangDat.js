import React, { Component } from 'react';

class DanhSachGheDangDat extends Component {
    render() {
        const {ghedadat,Delete}=this.props
        return (
            <div >
                <h2>Danh sách ghê đẫ dặt ({ghedadat.length})</h2>
                {ghedadat.map((sp,index)=>{
                        return(
                            <div key={index} className='mt-2'>
                            <p className='d-inline'>GHE:{sp.TenGhe}</p>
                            <p className='d-inline'>$ {sp.Gia}</p>
                            <p onClick={()=>Delete(sp)} className=' d-inline p-3 text-danger' style={{cursor:'pointer'}}>xoa</p>
                            </div>
                        )
                })}
            </div>
        );
    }
}

export default DanhSachGheDangDat;