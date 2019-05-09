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
              <h1>Hello {client.firstName} {client.lastName}</h1>
            </div>
        );
    } else {
        return <Spinner />
    }
  }
}

ClientDetails.propTypes = {
    client: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        { collection: 'clients', storeAs: 'client', doc: props.match.params.id }
    ]), 
    connect(({ firestore: { ordered } }, props) => ({
      client: ordered.client && ordered.client[0]
    }))
  )(ClientDetails);