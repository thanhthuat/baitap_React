import React, { Component } from 'react';
import DanhSachGhe from '../DanhSachGhe/DanhSachGhe';
import DanhSachGheDangDat from '../DanhSachGheDangDat/DanhSachGheDangDat';

class Home1 extends Component {
   
    constructor(props) {
        super(props);
        this.state={
            Ghedadat:[],
           
        }

    }
   handleChange =(sp)=>{
     let ghedcdat={
        "SoGhe":sp.SoGhe,
        "TenGhe":sp.TenGhe,
        "Gia":sp.Gia,
        "TrangThai": sp.TrangThai,
     }
       // kiem tra dc chon
       let Capnhatdatghe =[...this.state.Ghedadat];
       let index = Capnhatdatghe.findIndex(sp=> sp.SoGhe == ghedcdat.SoGhe)
       if (index == -1){
        Capnhatdatghe.push(ghedcdat)
        console.log( Capnhatdatghe);
       }
    this.setState({
       Ghedadat:Capnhatdatghe,
       
})
   }
   Delete=(soghe)=>{
         // kiem tra dc chon
      let Capnhatdatghe =[...this.state.Ghedadat];
       let index =Capnhatdatghe.findIndex(sp=>sp.SoGhe = soghe.SoGhe)
       if (index!==-1){
        Capnhatdatghe.splice(index,1);
       }
       this.setState({
        Ghedadat:Capnhatdatghe,
       })
   }
  
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Bai tap dat ve xe buyt</h1>
                <div className='row border border-dark p-2'>
                    <div className='col-8'>
                    <DanhSachGhe handleChange={this.handleChange}  ghedadat={this.state.Ghedadat}/>
                    </div>
                    <div className='col-4  border-left'>
                    <DanhSachGheDangDat ghedadat={this.state.Ghedadat} Delete={this.Delete}/>
                    </div>      
                </div>
              
            </div>
        );
    }
}

export default Home1;