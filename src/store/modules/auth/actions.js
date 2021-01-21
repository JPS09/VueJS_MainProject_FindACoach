let timer;
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

    const expiresIn = +responseData.expiresIn * 1000; // the '+' converts it into a number type and we then converts it to miliseconds to correspond with getTime()
    const expirationDate = new Date().getTime() + expiresIn;
    const localUser = {
      token: responseData.idToken,
      userId: responseData.localId
    };

    localStorage.setItem('token', localUser.token);
    localStorage.setItem('userId', localUser.userId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('logOut');
    }, expiresIn);

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
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      });
    }
  },
  logOut(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    clearTimeout(timer);

    const logOut = { token: null, userId: null, tokenExpiration: null };
    context.commit('setUser', logOut);
  }
};
