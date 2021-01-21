export default {
  async auth(context, payload) {
    const mode = payload.mode;

    let endpointUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_AUTH_KEY}`;
    if (mode === 'login') {
      endpointUrl;
    } else if (mode === 'signup') {
      endpointUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_AUTH_KEY}`;
    }

    const existingUser = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    };
    const response = await fetch(endpointUrl, {
      method: 'POST',
      body: JSON.stringify(existingUser)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          'Something when wrong while login to your profile, please try again'
      );
      throw error;
    }

    const localUser = {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    };

    context.commit('setUser', localUser);
  },
  logIn(context, payload) {
    // returning promises to components to allow usage of async await in methods
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  signUp(context, payload) {
    // returning promises to components to allow usage of async await in methods
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  logOut(context) {
    const logOut = { token: null, userId: null, tokenExpiration: null };
    context.commit('setUser', logOut);
  }
};
