import React,{Component}from 'react';
import Todos from './Todos'
class App extends Component {
 
  state ={
    todos:[
      {id:0,content:'Read some book'},
      {id:1,content:'Play mario kart'},
      {id:2,content:'Go to gym'}
    ]
  }

  handleDelete= (id)=>{
    
    let newTodo = this.state.todos.filter(todo=>todo.id!==id);
    this.setState({
      todos:newTodo
    })
    
  }
  handleAdd = (e)=>{
    
    
  }
  
  render(){
    return (
      <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos handleDelete={this.handleDelete} todos = {this.state.todos}/>
          <form  className="app-form">
            <label htmlFor="adicionarTodos"></label>
            <input  className="input-field col s6" type="text" id="adicionarTodos" placeholder="Add new todo"/>
            <button  onClick={this.handleAdd} type="submit" className="btn blue waves-effect waves-light">adicionar</button>
          </form>
      </div>
    );
  }  
}

export default App;
