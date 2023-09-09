/** @format */

export const getCars = (state) => {
  return state.carsList.cars;
};

export const getFavorites = (state) => {
  return state.carsList.favorites;
};

export const getIsModalOpen = (state) => {
  return state.carsList.isModalOpen;
};

export const getCarModal = (state) => {
  return state.carsList.carModal;
};

export const getFavoriteStatus = (state) => {
  return state.carsList.favoriteStatus;
};
