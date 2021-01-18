export default {
  addRequest(context, payload) {
    const newRequest = {
      id: new Date().toUTCString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    context.commit('addRequest', newRequest);
  }
};
