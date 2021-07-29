export const mapTime = (timestamp) => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  let interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours`;
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};

export const isLessThan4Hours = (timestamp) => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  const check = Math.floor(seconds / 3600);
  if (check < 4) {
    return true;
  }
  return false;
};
