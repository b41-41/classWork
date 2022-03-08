const stampToDate_hhmmss = (timestamp: Date) => {
  if (timestamp) {
    const date = new Date(timestamp);
    const years = date.getFullYear();
    const months = date.getMonth() + 1;
    const days = date.getDate();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    return `${years}.${months}.${days} ${hours}:${minutes}:${seconds}`;
  }
  return;
};

export default stampToDate_hhmmss;
