import React, { Component } from 'react'

import PropTypes from "prop-types"
class User extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {

        name: "not found",
        department: "not found",
        salary: "not found",
    }
    

    onClickEvent = (number,e)=> {
    this.setState({
        isVisible: !this.state.isVisible
    })
    }
    onDeleteUser =(e)=>{
        // const {id} = this.props
    }


    render(props) {

        //Destructing 
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;
        return (
            <div className='col-md-8 mb-4'>

                <div className='card'>
                    <div className='card-header d-flex justify-content-between'>
                        <h4 className=' d-inline' onClick={this.onClickEvent}>{name}</h4>
                        <i className='far fa-trash-alt' style={{ cursor: "pointer" }}></i>
                    </div>
                    {
                        isVisible ? <div className='card-body'>
                            <div className='card-text'>{department}</div>
                            <div className='card-text'>{salary}</div>
                        </div> : null
                    }

                </div>
            </div>
        )
    }
}


User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default User;