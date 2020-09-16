// export function search(value) {
//     return {type: SEARCH, value};
//   }

export const search = data => {
    return {
      type: actionTypes.SEARCH,
      data
    };
  };