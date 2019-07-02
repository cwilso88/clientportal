import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { notifyUser } from '../../actions/notifyActions';
import { Link } from 'react-router-dom';
import Alert from '../layout/Alert';


class PasswordReset extends Component {

    state = {
        email: '',
        password: ''
    }

    onChange = e => this.setState({
            [e.target.name]: e.target.value, 
    });

    onSubmit = e => {
        e.preventDefault();

        const { firebase, notifyUser } = this.props;
        const { email } = this.state;
         

        firebase.auth().sendPasswordResetEmail(email).catch(err => notifyUser('Invalid email', 'error'));
    }

  render() {
      const { message, messageType } = this.props.notify;
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">
                    {message ? (
                        <Alert message={message} messageType={messageType}/>
                        ) : null}
                    <h4 className="pb-3">
                        Forgot your password
                    </h4>
                    <hr/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group pt-4">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email"
                                required
                                //value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <input 
                            type="submit"
                            value="Reset password"
                            className="btn btn-primary btn-block"
                            id="colorGreen"
                        />
                        <div className="text-center p-3">
                            <span>or</span>
                            <Link className="pl-2" to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


PasswordReset.propTypes = {
    firebase: PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.object.isRequired
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        notify: state.notify,
        }), 
    {notifyUser}
    )
)(PasswordReset);