export default {
  async registerCoach(context, payload) {
    // waits for await functions to finish
    const coachId = context.rootGetters.coachId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };
    const response = await fetch(
      //Is a promise, like a .then
      `https://seekacoach-56074-default-rtdb.europe-west1.firebasedatabase.app/coaches/coach${coachId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );
    // const responseData = await response.json();

    if (!response.ok) {
      // show error
    }
    context.commit('registerCoach', { ...coachData, id: coachId });
  }
};
