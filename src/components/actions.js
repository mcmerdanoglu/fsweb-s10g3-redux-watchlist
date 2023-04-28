export const ADD_LIST = "ADD_LIST";
export const DISCARD_LIST = "DISCARD_LIST";

export function addList(item) {
  return { type: ADD_LIST, payload: item };
}

export const discardList = (id) => {
  return {
    type: DISCARD_LIST,
    payload: id,
  };
};
