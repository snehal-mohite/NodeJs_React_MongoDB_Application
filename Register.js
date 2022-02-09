import axios from 'axios'
import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export default class Register extends Component{
    constructor(){
        super()
        this.state={
            fullName:'',
            userName:'',
            email:'',
            passWord:''
        }      
        this.changeFullName=this.changeFullName.bind(this)
        this.changeUserName=this.changeUserName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassWord=this.changePassWord.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

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
    changePassWord(event){
        this.setState({
          passWord:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const registered={
           fullName:this.state.fullName,
           userName:this.state.userName,
           email:this.state.email,
           passWord:this.state.passWord
        }
        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data))
        window.location='/login'
    //    this.setState({
    //     fullName:'',
    //     userName:'',
    //     email:'',
    //     passWord:''
    //    })
    }
    render(){
        return(
        <div>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={this.onSubmit}>
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

                        <input type='password'   
                        placeholder="PassWord"
                        onChange={this.changePassWord}
                        value={this.state.passWord}
                        className='form-control form-group' />
                        <input type='submit'className="btn btn-danger btn-block" value='Submit'/>
                    
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
