import React, { Component } from 'react';
import { Link } from 'react-route-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAllowRegistration,
         setDisableBalanceOnAdd,
         setDisableBalanceOnEdit
        } from '../../actions/settingsActions';

class Settings extends Component {

    const { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration } = this.props;
    
    render() {
        return (
            <div>
        
            </div>
    )
  }
}


Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnAdd: PropTypes.func.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setAllowRegistration: PropTypes.func.isRequired
}

export default connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
}), 
{ setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
