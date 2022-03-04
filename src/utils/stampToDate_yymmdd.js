export const stampToDate_yymmdd = (timestamp) => {
  if (timestamp) {
    const date = timestamp.toDate();
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  }
  return;
};

export default stampToDate_yymmdd;
