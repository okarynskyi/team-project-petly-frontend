export const selectUserInfo = state => state.user.profile;
export const selectPetsInfo = state => state.user.profile.userPets;
export const selectUserUpdate = state => state.user.profile.userData;
export const selectIsLoadingUser = state => state.user.isLoading;