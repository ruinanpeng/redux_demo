const React = require('react');
const {PanelGroup, Panel} = require('react-bootstrap');

// props => list[]
const List = React.createClass({
    getInitialState() {
        return {activeKey: '1'};
    },

    handleSelect(activeKey) {
        this.setState({activeKey});
    },
    render() {
        let list = this.props.list.map((item, index) => {
            return <Panel key={index} header={item.title} eventKey={index}>{item.body}</Panel>
        })

        return (
            <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                {list}
            </PanelGroup>
        )
    }
});

module.exports = List;
