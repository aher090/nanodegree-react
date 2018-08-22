import React, { Component } from 'react';

class UserView extends Component{
	render(){
      	const {userList, users} = this.props;
    	
        	if(userList){
              const listofItems = userList.map(id => (
                                    <li key={id}>
                                      <p>{users[id].name}</p>
                                    </li>
                                  ));
        		return(
                  <ul>{listofItems}</ul>
                )
        	}      	
			return<p>None of the current users liked this movie</p>
            
             
        
    }
}

export default UserView;