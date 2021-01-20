export default {
  async logIn(context, payload) {
    const existingUser = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    };
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_AUTH_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify(existingUser)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          'Something when wrong while login to your profile, please try again'
      );
      throw error;
    }
    console.log(responseData);
    const localUser = {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    };

    context.commit('setUser', localUser);
  },
  async signUp(context, payload) {
    const newUser = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    };
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_AUTH_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify(newUser)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          'Something went wrong while creating your profile, please try again'
      );
      throw error;
    }
    console.log(responseData);
    const localUser = {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    };
    context.commit('setUser', localUser);
  }
};
