import * as React from 'react';
import classNames from 'classnames';

export default class LoginForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            active: 'login',
            firstName: '',
            lastName: '',
            login: '',
            password: '',
            onLogin: props.onLogin,
            onRegister: props.onRegister
        };
    }

    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    };


    onSibmitLogin = (e) => {
        this.state.onLogin(e, this.state.login, this.state.password);
    };

    onSuminRegister = (e) => {
        this.state.onRegister(e, this.state.firstName, this.state.lastName, this.state.login, this.state.password);
    };

    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <ul className='nav nav-pills nav-justified mb-3' id='ex1' rol='tablist'>
                        <li className='nav-item' role='presentation'>
                            <button className={classNames('nav-link', this.state.active === "login" ? "active" : "")} id='tab-login' onClick={() => this.setState({ active: "login" })}>Login</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className={classNames('nav-link', this.state.active === "register" ? "active" : "")} id='tab-register' onClick={() => this.setState({ active: "register" })}  >Register</button>
                        </li>
                    </ul>

                    <div className='tab-content'>
                        <div className={classNames('tab-pane', 'fade', this.state.active === "login" ? "show active" : "")} id='pills-login'>
                            <form onSubmit={this.onSibmitLogin}>
                                <div className='form-outline mb-4'>
                                    <input type='login' id='loginName' name='login' className='form-control' placeholder='Login' onChange={this.onChangeHandler} />
                                    <lable className="form-label" htmlFor="loginName">Username</lable>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type='password' id='loginPassword' name='password' className='form-control' placeholder='Password' onChange={this.onChangeHandler} />
                                    <lable className="form-label" htmlFor="loginPassword">Password</lable>
                                </div>

                                <button type='submit' className='btn btn-primary btn-block mb-4' onClick={this.onSibmitLogin}>Sign in</button>
                            </form>

                        </div>

                        <div className={classNames('tab-pane', 'fade', this.state.active === "register" ? "show active" : "")} id='pills-register'>
                            <form onSubmit={this.onSuminRegister}>
                                <div className='form-outline mb-4'>
                                    <input type='text' id='firstName' name='firstName' className='form-control' placeholder='firstName' onChange={this.onChangeHandler} />
                                    <lable className="form-label" htmlFor="firstName">First Name</lable>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type='text' id='lastName' name='lastName' className='form-control' placeholder='lastName' onChange={this.onChangeHandler} />
                                    <lable className="form-label" htmlFor="lastName">Last name</lable>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type='login' id='loginName' name='login' className='form-control' placeholder='Login' onChange={this.onChangeHandler} />
                                    <lable className="form-label" htmlFor="loginName">Username</lable>
                                </div>
                                <div className='form-outline mb-4'>
                                    <input type='password' id='password' name='password' className='form-control' placeholder='Password' onChange={this.onChangeHandler} />
                                    <lable className="form-label" htmlFor="password">Password</lable>
                                </div>


                                <button type='submit' className='btn btn-primary btn-block mb-4' onClick={this.onSibmitLogin}>Sign in</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}