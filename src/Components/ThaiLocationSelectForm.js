import React, { Component } from 'react'
import LocationDropdown from './LocationDropdown';

export default class ThaiLocationSelectForm extends Component {

    provinces = [
        {
            name: 'กรุงเทพ', id: 1, districts: [
                {
                    name: 'บางรัก', id: 1, khwangs: [
                        { name: 'บางรัก' },
                        { name: 'สีลม' }
                    ]
                },
            ]
        },
        {
            name: 'นนทบุรี', id: 2, districts: [
                {
                    name: 'เมืองนนทบุรี', id: 1, khwangs: [
                        { name: 'บางไผ่' },
                        { name: 'ท่าทราย' },
                        { name: 'สวนใหญ่' }
                    ]
                },
                {
                    name: 'บางกรวย', id: 2, khwangs: [
                        { name: 'บางขนุน' },
                        { name: 'ศาลากลาง' }
                    ]
                }
            ]
        }
    ]

    selectedProvince = (ProvinceName) => {
        console.log('เลือกจังหวัด' + ProvinceName);

      let chosenProvince  = this.provinces.find(provinces=>{
            return provinces.name === ProvinceName
        });

        this.setState({selectedProvince: chosenProvince
        })
    }

    render() {

        let districtDropDown;

        if(this.state.selectedProvince) 
        {
            let districts = this.state.selectedProvince.districts;
            districtDropDown = <LocationDropdown defaultLabel="เขต/อำเภอ" locations={districts}/>
        }

        return (
            <div>
                <LocationDropdown defaultLabel="จังหวัด" locations={this.provinces} selectedCallback={this.selectedProvince}/>
{districtDropDown}
                <LocationDropdown defaultLabel="ตำบล" locations={this.provinces}/>
            </div>
        )
    }
}
