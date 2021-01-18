export default {
  async addRequest(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(
      `https://seekacoach-56074-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
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
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  }
};
