import React, { Component } from 'react'

class Clients extends Component {
  render() {
    const clients = [{
      id: '3414',
      firstName: 'Amanda',
      lastName: 'Murphy',
      email: 'amandam@gmail.com',
      phone: '770-765-0909',
      balance: '150'
    }];

    if(clients){
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
                <h2>
                {' '}
                <i className="fas fa-users"></i>{' '} Clients
                </h2>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading..</h1>
    }
  }
}

export default Clients;