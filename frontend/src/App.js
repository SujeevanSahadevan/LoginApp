import React, { Component } from 'react';
import {observer} from 'mobx-react';
import UserStore from './stores/UserStore';
import './App.css';
import LoginForm from './components/LoginForm';
import SubmitButton from './components/SubmitButton';

class App extends Component {
  
async componentDidMount(){
  try{
let res=await fetch('./isLoggedIn',{
  method:'post',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  }
});
let result=await res.json();

if(result&&result.success){
  UserStore.loading=false;
  UserStore.isLoggedIn=true;
  UserStore.username=result.username;
}else{
  UserStore.loading=false;
  UserStore.isLoggedIn=false;
}
  }

  catch(e){
    UserStore.loading=false;
    UserStore.isLoggedIn=false;
  }
}


async doLogout(){
  try{
let res=await fetch('./logout',{
  method:'post',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  }
});

let result=await res.json();

if(result&&result.success){
  UserStore.isLoggedIn=false;
  UserStore.username='';
  
}
  }

  catch(e){
   console.log(e);
  }
}

  render() { 

      
    
  if(UserStore.loading){
      return(

      <div className='container'>
          Loading....
      </div>
    
      );
    }
    
    else{

      if(UserStore.isLoggedIn){
        return(
          
                <div className='container'>
                   Welcome {UserStore.username}
                   <SubmitButton 
                   text={'logout'}
                   disabled={false}
                   onClick={()=>this.doLogout()}
                    />
                </div>
              
                );
      }

    return ( 
      
                <div className='container'>
                <LoginForm/>
                
                </div>
     );
  }
}
}
 
export default observer(App);