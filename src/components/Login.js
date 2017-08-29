const React = require('react');
const ReactDOM = require('react-dom');
const {FormControl, Button, FormGroup, ControlLabel} = require('react-bootstrap');


const Login = React.createClass({
    login(){
        const username = ReactDOM.findDOMNode(this.refs.username);
        const password = ReactDOM.findDOMNode(this.refs.password);
        this.props.login({name: username.value, pwd: password.value});
        username.value = '';
        password.value = '';
    },
    render(){
        return(
            <div>
                <FormGroup>
                    <ControlLabel>用户名</ControlLabel>
                    <FormControl type='text' ref="username"/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>密码</ControlLabel>
                    <FormControl type="password" ref="password"/>
                </FormGroup>
                <div>
                    <Button onClick={this.login}>登陆</Button>
                </div>
            </div>
        )
    }
});

module.exports = Login;
