import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: ""
        }
        this.createTasks = this.createTasks.bind(this);
    }
    boxClick = (e) => {
        this.setState({
            bgColor: "red"
        })
    }
    delete(key) {
        this.props.delete(key);
    }

    changeColor(key) {
        this.props.color(key)
    }

    createTasks(item) {
        return <div><li style={{backgroundColor: this.state.bgColor}}  onDoubleClick={this.boxClick}
                   key={item.key}>{item.text}</li><button onClick={() => this.delete(item.key)}>delete item</button></div>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;
