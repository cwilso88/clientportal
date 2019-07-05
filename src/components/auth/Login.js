import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { notifyUser } from '../../actions/notifyActions';
import { Link } from 'react-router-dom';
import Alert from '../layout/Alert';


class Login extends Component {

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
        const { email, password } = this.state;

        firebase
            .login({
                email,
                password
            })
            .catch(err => notifyUser('Invalid Password or Email', 'error'));
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
                        <h4 className="text-center pt-3">Welcome back!</h4>
                        <hr/>
                    <h4 className="text-center pb-4 pt-3">
                        <span>
                            <i style={{ color: "#DDD5A4"}} className="fas fa-lock mr-2"></i>
                            {' '}Log in to your account
                        </span>
                    </h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email"
                                required
                                //value={this.state.email}
                                onChange={this.onChange}
                            />
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password"
                                required
                                //value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>
                        <input 
                            type="submit"
                            value="Login"
                            className="btn btn-primary btn-block"
                            id="colorGreen"
                        />
                        <div className="text-center p-3">
                            <span>or</span>
                            <Link className="pl-2" to="/reset">Forgot password</Link>
                        </div>
                        <div className="text-center p-3">
                            <span>or</span>
                            <Link className="pl-2" to="/register">Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


Login.propTypes = {
    firebase: PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.func.isRequired
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        notify: state.notify,
        }), 
    {notifyUser}
    )
)(Login);