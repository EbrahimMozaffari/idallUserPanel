export const namespaced = true;

export const state = {
  documents: null,
  sortByCategory: null,
};
export const getters = {
  GetDocuments(state) {
    console.log("getters caled documents");
    return state.documents;
  },
  GetSortByCategory(state) {
    return state.sortByCategory;
  },
};
export const mutations = {
  SET_DOCUMENTS(state, payload) {
    state.documents = payload;
  },
  SET_SORTBYCATEGORY(state, payload) {
    // do the grouped by category
    state.sortByCategory = payload;
  },
};

export const actions = {
  async fetchDocuments({ commit }) {
    try {
      const { data } = await axios.get("https://userpanelmock.idall.pro/users");

      commit("SET_DOCUMENTS", data.users[0]);
      commit("SET_SORTBYCATEGORY", data.users[0].documents);

      // var grouped = _.mapValues(_.groupBy(data.users[0].documents, "make"), (clist) =>
      //   clist.map((car) => _.omit(car, "make"))
      // );
      // console.log(grouped);
      // let cars = data.users[0].documents;
      // let group = cars.reduce((r, a) => {
      //   console.log("a", a);
      //   console.log('r', r);
      //   r[a.make] = [...r[a.make] || [], a];
      //   return r;
      //  }, {});
      //  console.log("group", group);

      const groupBy = (array, key) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
          // If an array already present for key, push it to the array. Else create an array and push the object
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
          return result;
        }, {}); // empty object is the initial value for result object
      };
      
      // Group by color as key to the person array
      const personGroupedByColor = groupBy(data.users[0].documents, 'category');

      console.log(personGroupedByColor);
      commit("SET_SORTBYCATEGORY", personGroupedByColor);
      
      // await console.log(data.users[0],"action");
      //  return data.users[0];
    } catch (error) {
      console.log(error);
    }
  },
};
