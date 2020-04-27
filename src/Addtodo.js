import React from 'react'

class Addtodo extends React.Component {

  state = {
    content:''
  }

  handleChange= (e)=>{
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit = (e)=>{
    
    e.preventDefault();

    this.props.addTodo(this.state);
    this.setState({
      content:''
    })

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="app-form">
        <label ></label>
        <input onChange={this.handleChange} className="input-field col s6" value={this.state.content} type="text" />
        <button  type="submit" className="btn blue waves-effect waves-light" placeholder="Add new todo">adicionar</button>
      </form>
    )

  }

}

export default Addtodo;