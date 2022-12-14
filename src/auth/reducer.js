export const reducer = (prevState, action) => {
  console.debug(action, 'reducer');
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default: 
      return {
        isSignout: false,
        userToken: null,
      };
  }
}