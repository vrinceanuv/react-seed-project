import React, { Component } from 'react';
import './Home.css';
import {ItemList, ItemForm} from '../Item';
import {loadItems, createItem, deleteItem} from '../../libs/ajax';
import {generateId, addItem, removeItem} from '../../libs/utils';

class App extends Component {
  state = {
    items : [],
    currentItem: '',
    loaded: false
  }

  componentDidMount() {
    // Set only to demonstrate the loader and to have it actually displayed
    setTimeout(() => {
      loadItems()
        .then(items => this.setState({items, loaded:true}))
    }, 1000)

  }

  handleRemove = (id, event) => {
    event.preventDefault()

    const updatedItems = removeItem(this.state.items, id)
    this.setState({items: updatedItems})

    deleteItem(id)
      .then(() => this.showTemporaryMessage('Item removed'))
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newId = generateId()
    const newItem = {id: newId, name: this.state.currentItem}
    const updatedItems = addItem(this.state.items, newItem)

    this.setState({
      items: updatedItems,
      currentItem: '',
      errorMessage: ''
    })

    createItem(newItem)
      .then(() => this.showTemporaryMessage('item added'))
  }

  showTemporaryMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()

    this.setState({
      errorMessage: 'Please enter item name'
    })
  }

  handleInputValue = (event) => {
    this.setState({
      currentItem: event.currentTarget.value
    })
  }

  render() {
    const submitHandler = this.state.currentItem ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        {!this.state.loaded &&
          <div className="loader">Loading</div>
        }

        {this.state.loaded &&
          <div className="Item-App">
            {this.state.errorMessage && <span className="error-message">{this.state.errorMessage}</span>}
            {this.state.message && <span className="success-message">{this.state.message}</span>}
            <ItemForm
              handleInputValue={this.handleInputValue}
              handleSubmit={submitHandler}
              currentItem={this.state.currentItem}/>

            <ItemList items={this.state.items}
              handleRemove={this.handleRemove}/>

          </div>
        }
      </div>
    );
  }
}

export default App;
