import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
      case 'ADD_USER':
        return {
          
          ...state,
          users: [...state.users,action.payload] 
        }
    default:
      return state
  }
}
export class UserProvier extends Component {

  state = {
    users: [
      {
        id: "1",
        name: "Parvin",
        department: "dev",
        salary: 5000,
      },
      {
        id: "2",
        name: "Parvin2",
        department: "dev",
        salary: 51000,
      },
      {
        id: "3",
        name: "Parvin3",
        department: "dev",
        salary: 25000,
      }
    ],
    dispatch: action => {
      this.setState(state => {
        reducer(state, action)
      })
    }
  }


  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;

