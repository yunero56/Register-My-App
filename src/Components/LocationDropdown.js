import React, { Component } from 'react';

export default class LocationDropdown extends Component {

    state = {
        label: this.props.defaultLabel
    }

    locationSelected(eiei) {
        console.log(eiei.target);

     let LocationName =  eiei.target.getAttribute('data-name');
 
    }



    render() {

        let locations = this.props.locations;
        let defaultLabel = this.props.defaultLabel;

        return (
            <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {this.state.label}
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {
              locations.map((location, i) => 
              {
                return <a class="dropdown-item" onClick={eiei => this.locationSelected(eiei)} href="#" key={location.id} data-id={location.id} data-name={location.name} >{location.name}</a>
              })
          }
        </div>
      </div>
        )
    }
}
