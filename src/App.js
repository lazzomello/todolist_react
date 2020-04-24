import React,{Component}from 'react';
import Todos from './Todos'

class App extends Component {
 
  state ={
    todos:[
      {id:0,content:'read some book'},
      {id:1,content:'play mario kart'}
    ]
  }


  render(){
    return (
      <div className="todo-app container">
          <h1 class="center blue-text">Todo's </h1>
          <Todos todos = {this.state.todos}/>
      </div>
    );
  }  
}

export default App;
