import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allowRegistration,
         setDisableBalanceOnEdit,
         setDisableBalanceOnAdd
        } from '../../actions/settingsActions';

class Settings extends Component {
render() {
    const { 
        disableBalanceOnAdd, 
        disableBalanceOnEdit, 
        allowRegistration } = this.props.settings;
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"></i> Back To Dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Edit Setting
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Allow Registration</label>
                                <input 
                                    name="allowRegistration" 
                                    type="checkbox"
                                    checkbox={!!allowRegistration}
                                    onChange={this.allowRegistration}
                                />                              
                            </div>
                        </form>
                    </div>
                </div>
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
{ allowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
