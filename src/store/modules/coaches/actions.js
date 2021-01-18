export default {
  registerCoach(context, payload) {
    const coachData = {
      id: context.rootGetters.coachId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };
    context.commit('registerCoach', coachData);
  }
};
