export const selectUserInfo = state => state.user.profile;
export const selectPetsInfo = state => state.user.profile.userPets;
export const selectIsError = state => state.user.isError;
export const selectIsLoadingUser = state => state.user.isLoading;