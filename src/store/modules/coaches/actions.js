export default {
  registerCoach(context, payload) {
    const coachData = {
      id: new Date().toUTCString(),
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };
    context.commit('registerCoach', coachData);
  }
};
