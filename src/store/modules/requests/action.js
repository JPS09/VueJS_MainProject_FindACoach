export default {
  async addRequest(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(
      `https://seekacoach-56074-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.userId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          'Something went wrong while sending your request, please try again'
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.userId = payload.userId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const userId = context.rootGetters.userId;
    const response = await fetch(
      `https://seekacoach-56074-default-rtdb.europe-west1.firebasedatabase.app/requests/${userId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          'Something went wrong while fetching requests, please try again'
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        userId: userId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};
