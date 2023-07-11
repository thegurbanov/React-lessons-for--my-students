import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
var uniqid = require('uniqid');

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});
class AddUser extends Component {
    state = {
        visible: true,
        name: "",
        department: "",
        salary: "",
    }

    
    addUser = (dispatch,e) => {
        e.preventDefault();
        const {name,department,salary} = this.state;
        const newUser = {
            id:uniqid(),
            name,
            salary,
            department
        }
        
        dispatch({type:"ADD_USER",payload:newUser})
        console.log(newUser)
        
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const { visible, name, salary, department } = this.state;
        return <UserConsumer>
             {
                value =>{
                    const {dispatch,users} = value;
                    console.log(users)
                    return (
                        <div className='col-md-8'>
                            <button onClick={this.changeCisibility} className='btn btn-dark btn-block mb-2 w-100'> {visible ? "Hide Form" : "Show Form"}</button>
                            <Animation pose={visible ? "visible" : "hidden"}>
            
                                <div className='card'>
                                    <div className='card-header'>
                                        <h4>Add User Form</h4>
                                        <div className='card-body'>
                                            <form onSubmit={this.addUser.bind(this,dispatch)}>
                                                <div className='form-group'>
                                                    <label htmlFor='name'>Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="id"
                                                        value={name}
                                                        placeholder="Enter Name"
                                                        className="form-control"
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                                                <div className='form-group'>
                                                    <label htmlFor='name'>Department</label>
                                                    <input
                                                        type="text"
                                                        name="department"
                                                        id="id"
                                                        value={department}
                                                        placeholder="Enter Department"
                                                        className="form-control"
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                                                <div className='form-group'>
                                                    <label htmlFor='name'>Salary</label>
                                                    <input
                                                        type="text"
                                                        name="salary"
                                                        id="id"
                                                        value={salary}
                                                        placeholder="Enter Salary"
                                                        className="form-control"
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                                                <button type='submit' className='btn w-100 btn-danger btn-block mt-2'>Add User</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Animation>
            
                        </div>
                    )
                }
             }
        </UserConsumer>
      
    }
}

export default AddUser
