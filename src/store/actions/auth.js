import axios from '../../axios/axios';

export function auth(email,password, isLogin) {
  return async dispatch =>{

    const authData = {
       email, password,
       returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
   
    if(isLogin){
      url = 'https://identitytoolkitgoogleapis.com/v1/accounts:signInWithPassword?key='
    }

    debugger
    const response = await axios.post(url + 'AIzaSyAMRSQfJKJR_pfDttEoVeZl2YtPiJnw_0o', authData)
    
  }
}


