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
  },
  async fetchCoaches(context) {
    const response = await fetch(
      `https://seekacoach-56074-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fetch data');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      // Iterating through each data node and extracting the information for each of theses nodes
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }

    context.commit('fetchCoaches', coaches);
  }
};
