export const setPlayerStorage = data =>
  localStorage.setItem('getshop-player', JSON.stringify(data));

export const getPlayerStorage = () =>
  JSON?.parse(localStorage.getItem('getshop-player'));
