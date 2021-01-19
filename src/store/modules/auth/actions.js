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

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          'Something when wrong while creating your profile, please try again'
      );
      throw error;
    }
  }
};
