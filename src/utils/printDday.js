const printDday = (deadline) => {
    if (deadline === undefined) {
        return;
    }
    const today = new Date();
    const endDay = deadline.toDate();
    const endDayDistance = (endDay - today);
    const dday = Math.floor(endDayDistance / (1000 * 60 * 60 * 24));
    if (endDay < today) {
        return `마감`
    } else {
        return (`-${dday}일`)
    }
}

export default printDday;