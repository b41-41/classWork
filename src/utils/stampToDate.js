const stampToDate = (timestamp) => {
    if (timestamp) {
        const date = timestamp.toDate();
        return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return;
};

export default stampToDate;