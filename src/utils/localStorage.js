export const keys = {
  alarms: 'alarms',
  position: 'position',
  memos: 'memos'
};

export const getPosition = () => {
  const position = window.localStorage.getItem(keys.position);
  return position ? JSON.parse(position) : { alarm: 0, memo: 1, photo: 2 };
};

export const setPosition = (id, index) => {
  const newPosition = { ...getPosition(), [id]: index };
  window.localStorage.setItem(
    keys.position,
    JSON.stringify(newPosition)
  );
};

export const getAlarms = () => {
  const alarms = window.localStorage.getItem(keys.alarms);
  return alarms ? JSON.parse(alarms) : [];
};

export const setAlarms = (setNewAlarms) => {
  const newAlarms = setNewAlarms(getAlarms());
  window.localStorage.setItem(
    keys.alarms,
    JSON.stringify(newAlarms)
  );
};

export const getMemos = () => {
  const memos = window.localStorage.getItem(keys.memos);
  return memos ? JSON.parse(memos) : [];
};

export const setMemos = (setNewMemos) => {
  const newMemos = setNewMemos(getMemos());
  window.localStorage.setItem(
    keys.memos,
    JSON.stringify(newMemos)
  );
};

const localStorageAPI = {
  keys,
  getPosition,
  setPosition,
  getAlarms,
  setAlarms,
  getMemos,
  setMemos
};

export default localStorageAPI;
