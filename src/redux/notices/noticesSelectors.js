export const selectNoticesByCategory = state => state.notices.noticesByCategory;
export const selectFavorites = state => state.notices.favorites;
export const selectUserNotices = state => state.notices.userNotices;
export const selectOneNoticeMoreInfo = state => state.notices.oneNoticeMoreInfo;
export const selectIsFavorite= state => state.notices.isFavorite;
export const selectIsLoading = state => state.notices.isLoading;
export const selectIsError = state => state.notices.isError;
export const selectIsNoticeAdded = state => state.notices.isNoticeAdded;
export const selectTotalPages = state => state.notices.totalPages;