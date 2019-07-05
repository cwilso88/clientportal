import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allowRegistration,
         setDisableBalanceOnEdit,
         setDisableBalanceOnAdd
        } from '../../actions/settingsActions';

class Settings extends Component {

    disableBalanceOnAddChange = () => {
        const { setDisableBalanceOnAdd } = this.props;
        setDisableBalanceOnAdd();
    }
    disableBalanceOnEditChange = () => {
        const { setDisableBalanceOnEdit } = this.props;
        setDisableBalanceOnEdit();
    }
    allowRegistrationChange = () => {
        const { allowRegistration } = this.props;
        allowRegistration();
    }
render() {
    const { 
        disableBalanceOnAdd, 
        disableBalanceOnEdit, 
        allowRegistration } = this.props.settings;
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" id="backToDashboard" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"></i> Back To Dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Edit Settings
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Allow Registration</label>
                                {' '}
                                <input 
                                    name="allowRegistration" 
                                    type="checkbox"
                                    checkbox={!!allowRegistration}
                                    onChange={this.allowRegistrationChange}
                                />                                                   
                            </div>
                            <div className="form-group">
                                <label>Disable Balance On Edit</label>
                                {' '}
                                <input 
                                    name="disableBalanceOnEdit" 
                                    type="checkbox"
                                    checkbox={!!disableBalanceOnEdit}
                                    onChange={this.disableBalanceOnEditChange}
                                />                                                   
                            </div>
                            <div className="form-group">
                                <label>Disable Balance On Add</label>
                                {' '}
                                <input 
                                    name="disableBalanceOnAdd" 
                                    type="checkbox"
                                    checkbox={!!disableBalanceOnAdd}
                                    onChange={this.disableBalanceOnAddChange}
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
    allowRegistration: PropTypes.func.isRequired
}

export default connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
}), 
{ allowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
