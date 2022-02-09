import React, { Component } from "react";
import axios from "axios";



export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state={
      Users: [],
      id:'',
      fullName:'',
      userName:'',
      email:''
  }      
  this.changeFullName=this.changeFullName.bind(this)
  this.changeUserName=this.changeUserName.bind(this)
  this.changeEmail=this.changeEmail.bind(this)
      
    this.retrieveUsers = this.retrieveUsers.bind(this); 
    this.onDelete=this.onDelete.bind(this)
    this.onEdit=this.onEdit.bind(this)
        
  }
 
  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
}
changeUserName(event){
    this.setState({
      userName:event.target.value
    })
}
changeEmail(event){
    this.setState({
      email:event.target.value
    })
}

  componentDidMount() {
    this.retrieveUsers();
  }

   retrieveUsers() {
     axios.get('http://localhost:4000/app/data')
    .then(response => {
        this.setState({
          Users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
       
  }
selectId(Id){
    axios.get('http://localhost:4000/app/get/'+Id)
    .then(response => {
      this.setState({
        id:response.data._id,
      fullName:response.data.fullName,
      userName:response.data.userName,
      email:response.data.email
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
}
onEdit(Id){
  console.log(this.state);
        axios.patch('http://localhost:4000/app/update/'+this.state.id,{fullName:this.state.fullName})
   //.then(response => console.log(response.data)
   .then(response => {
    this.setState({
    id:response.data._id,
    fullName:response.data.fullName,
    userName:response.data.userName,
    email:response.data.email
    });
    
    console.log(response.data);
  })
  .catch(e => {
    console.log(e);
  })
   
  //  .then((registered)=>{
  //    console.log(registered)
  //  })
  //  .catch((err)=>{
  //    console.log(err)
  //  })
}
onDelete(Id){
    if(window.confirm('Are you sure?'))
    {
    axios.delete('http://localhost:4000/app/delete/'+Id)
    .then(response => console.log(response.data))
    }  
            
}
  render() {
    const { Users} = this.state;

    return (
      <div action="">
          <div className="row" >
          <table style={{"borderWidth":"3px"}}>
              <tr style={{"borderWidth":"3px"}}>
                  <th>FullName</th>
                  <th>Username</th>
                  <th>Email</th>
              </tr>
                      {Users && Users.map((user, index) => (
                          
                            <tr style={{"borderWidth":"1px"}}>
                              <td >{user.fullName}</td> 
                              <td >{user.userName}</td>
                              <td >{user.email}</td>
                            <td>
                                 <button onClick={()=> this.selectId(user._id)}>Edit</button>
                                 <button onClick={()=> this.onDelete(user._id)} variant="danger">Delete</button> 
                                 
                            </td>                                                        
                            </tr>
                          
                          
                      ))}
            </table>
            </div>
              
              <div className="form-div">
                                  <form >                      
                        <input type='text'
                        placeholder="fullName"
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                        className='form-control form-group' />

                        <input type='text'
                        placeholder="userName"
                        onChange={this.changeUserName}
                        value={this.state.userName}
                        className='form-control form-group' />

                        <input type='text'
                        placeholder="email"
                        onChange={this.changeEmail}
                        value={this.state.email}
                        className='form-control form-group' />

                        <button onClick={()=> this.onEdit(this.state.id)}>update</button>
                                                
                   
                    </form>
                     
                </div>
                             
              
             
          </div>
          
      
    );
  }
}