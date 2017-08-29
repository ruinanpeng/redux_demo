const React = require('react');
const ReactDOM = require('react-dom');
const {FormControl, Button, FormGroup, ControlLabel} = require('react-bootstrap');

// props => submit(value)
const Editor = React.createClass({
    getInitialState() {
        return {text: ''}
    },
    submit() {
        let titleDOM = ReactDOM.findDOMNode(this.refs.title);
        let bodyDOM = ReactDOM.findDOMNode(this.refs.body);
        
        this.props.submit({title: titleDOM.value, body: bodyDOM.value});
        titleDOM.value = '';
        bodyDOM.value = '';
    },
    render() {
        return <div>
            <FormGroup>
                <ControlLabel>标题</ControlLabel>
                <FormControl type='text' ref="title"/>
            </FormGroup>
            <FormGroup>
                <ControlLabel>内容</ControlLabel>
                <FormControl componentClass="textarea" ref="body"/>
            </FormGroup>
            <div>
                <Button onClick={this.submit}>添加</Button>
            </div>
        </div>
    }
});

module.exports = Editor;
