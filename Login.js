import axios from 'axios'
import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            userName:'',
            passWord:''
        }      
        this.changeUserName=this.changeUserName.bind(this)
        this.changePassWord=this.changePassWord.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.onClear=this.onClear.bind(this)

    }
    
    changeUserName(event){
        this.setState({
          userName:event.target.value
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
           userName:this.state.userName,
           passWord:this.state.passWord
        }
        axios.post('http://localhost:4000/app/login',registered)
        .then(response => console.log(response.data))
       // window.location='/'
    }
    onClear(event){
        //event.preventDefault()
        this.setState({
            userName:'',
            passWord:''
        } ) 
    }
    render(){
        return(
        <div>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={this.onSubmit} >
                       <input type='text'
                        placeholder="username"
                        onChange={this.changeUserName}
                        value={this.state.userName}
                        className='form-control form-group' />

                        <input type='password'   
                        placeholder="Password"
                        onChange={this.changePassWord}
                        value={this.state.passWord}
                        className='form-control form-group' />
                        <input type='submit'className="btn btn-danger btn-block" value='Submit'/>
                        <input type='clear' onClick={this.onClear} className="btn btn-danger btn-block" value='Clear'/>
                        
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
