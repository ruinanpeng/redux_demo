const React = require('react');
const ReactDOM = require('react-dom');
const redux = require('redux');
const {Grid, Col, Row} = require('react-bootstrap');
const {connect, Provider} = require('react-redux');
const Editor = require('./components/Editor');
const List = require('./components/List');
const Login = require('./components/Login');
const navbarInstance = require('./components/Navbar');
const thunk = require('redux-thunk').default;

function reducer(state, action) {
    if (typeof state === 'undefined')
        return {list: []};
    switch (action.type) {
        case "init":
            return action.payload;
        case 'add':
            let list = state.list.concat(action.payload);
            return Object.assign({}, state, {list})
        case 'logined':
            if (action.payload.error) {
                alert('登陆失败')
                return Object.assign({}, state, {
                    loginError: action.payload,
                    logined: false
                })
            } else {
                return Object.assign({}, state, {
                    loginError: null,
                    logined: true
                })
            }
        default:
            return state;
    }
}
const store = redux.createStore(reducer, {
    list: []
}, redux.applyMiddleware(thunk))

const actions = {
    init() {
        return function(dispatch) {
            fetch("http://120.76.78.213/gaosou/AppPhp/redux.php").then(function(res){
                res.json().then(data => {
                    dispatch({type: 'init', payload: data})
                })
            }).catch(function(err){
                console.log("Fetch错误:"+err);
            });
        }
    },
    submit(value) {
        return {type: 'add', payload: value}
    },
    login(info) {
        console.log(info)
        if (info.name === 'leo' && info.pwd === '123456') {
            return {type: 'logined', payload: info}
        } else {
            return {
                type: 'logined',
                payload: {
                    error: new Error('登录失败！密码或用户名错误！')
                }
            }
        }

    }
}

let App = React.createClass({
    componentDidMount() {
        this.props.init();
    },
    render() {
        return <div>
            {navbarInstance}
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <List list={this.props.list}/>
                    </Col>
                    <Col xs={6} md={4}>
                        {this.props.logined
                            ? <div>登陆成功</div>
                            : <Login login={this.props.login}/>}
                    </Col>
                </Row>
            </Grid>
            <Editor submit={this.props.submit}/>
        </div>
    }
});

App = connect(state => {
    return store.getState()
}, actions)(App)

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'))
