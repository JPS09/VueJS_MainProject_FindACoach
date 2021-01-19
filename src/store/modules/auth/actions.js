export default {
  login() {},
  async signup(context, payload) {
    const newUser = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    };
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDnPXkQ_Wc8-QHI7AuTXfwnKhNmMX6BaUA',
      {
        method: 'POST',
        body: JSON.stringify(newUser)
      }
    );
    if (!response.ok) {
      //error handling
    }
  }
};
