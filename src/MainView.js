import React, { Component } from 'react';
import MovieView from './MovieView'

class MainView extends Component{
  
	render(){      	
  		const {usersByMovie, users, movies} = this.props;     	
        const movieViews = Object.keys(movies).map(id=>{
              return(<MovieView key={id} movieName={movies[id].name} userList={usersByMovie[id]} users={users} />)
          })   
        return(<ul>{movieViews}</ul>) 	
    }
}

export default MainView;