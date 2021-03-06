import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Clients extends Component {
  state = {
    totalOwed: null
  }

   static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if(clients) {
      // Add balances
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);

      return { totalOwed: total };
    }

    return null;
  }
  render() {
    const { clients } = this.props; 
    const { totalOwed } = this.state;

    if(clients){
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
                <h2 style={{ color:"#73726D"}}>
                {' '}
                <i style={{ color:"#DDD5A4"}} className="fas fa-users"></i>{' '} Clients
                </h2>
                <p>View client details, add clients, or update account settings.</p>
            </div>
            <div className="col-md-6">
              <h5 style={{color:"#73726D"}} className="text-right">Total Owed = {''}
              <span style={{ color:"#E24B2C" }}>
                ${parseFloat(totalOwed).toFixed(2)}
              </span></h5>
            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.firstName} {client.lastName}</td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link to={`/client/${client.id}`} style={{ backgroundColor: "#3D3331" }} className="btn btn-secondary btn-sm">
                      <i className="fas fa-arrow-circle-right"> Details</i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1><Spinner /></h1>
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
}

export default compose(
  firestoreConnect([{ collection: 'clients' }]), 
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);