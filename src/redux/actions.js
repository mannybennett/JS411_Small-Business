export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing
  }
}

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index
  }
}

export const setLoginStatus = (status) => ({
  type: "SET_LOGIN_STATUS",
  value: status
});