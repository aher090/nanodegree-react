import React, { Component } from 'react';
import UserView from './UserView'
class MovieView extends Component{
	render(){
      	const {movieName, userList, users} = this.props;
    	return (
          	<li>
          		<h2>{movieName}</h2>
        		<UserView userList={userList} users={users}/>
			</li>
        )
    }
}

export default MovieView;