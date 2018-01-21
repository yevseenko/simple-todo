import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TodoForm, TodoList, Header } from './components';
import { mapActionsToProps } from './actions/map_actions';
import './stylesheets/App.css';

import firebase from 'firebase';

class App extends PureComponent {
  render() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return (
      <div className="App">
        <Header />
        <div className="Todo-App">
          <TodoForm onUserSubmit={(value) => this.props.addTodo(value)}
            inputClear={() => this.props.inputClear()}
            onInputChange={(value) => this.props.inputChange(value)}
            inputValue={this.props.inputValue} />
          <TodoList todos={this.props.todos} visibilityFilter={this.props.visibilityFilter}
            getVisibleTodos={(todos, filter) => this.props.getVisibleTodos(todos, filter)}
            removeTodo={(id) => this.props.removeTodo(id)}
            toggleTodo={(id) => this.props.toggleTodo(id)}
            setFilter={(filter) => this.props.setFilter(filter)} />
          <div><button onClick={() => {
            firebase.auth().signInWithPopup(provider).then(function (result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              console.log(token)
              // The signed-in user info.
              var user = result.user;
              console.log(user)
              // ...
            }).catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              console.log(email)
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
          }}>Google Login</button></div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    todos: state.todos,
    inputValue: state.inputValue,
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToprops, mapActionsToProps)(App);
