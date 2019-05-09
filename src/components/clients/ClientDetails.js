import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';



class ClientDetails extends Component {
  render() {
      const { client } = this.props;

      if(client) {
        return (
            <div>
              <div className="ro">
                  <div className="col-md-6">
                      <Link to="/" className="btn btn-link">
                          <i className="fas fa-arrow-circle-left"></i> Back to Dashboard
                      </Link>
                  </div>
                  <div className="col-md-6">
                      <div className="btn-group float-right">
                          <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                              Edit
                          </Link>
                          <button className="btn btn-danger"> Delete </button>
                      </div>
                  </div>
              </div>
            </div>
        );
    } else {
        return <Spinner />
    }
  }
}

ClientDetails.propTypes = {
    client: PropTypes.object
}

export default compose(
    firestoreConnect(props => [
        { collection: 'clients', storeAs: 'client', doc: props.match.params.id }
    ]), 
    connect(({ firestore: { ordered } }, props) => ({
      client: ordered.client && ordered.client[0]
    }))
  )(ClientDetails);