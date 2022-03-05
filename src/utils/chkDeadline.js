//숙제 마감 여부 계산
const chkDeadline = (deadline) => {
    const today = new Date();
    if (deadline.toDate() < today) {
        return `🔚 마감 되었습니다.`
    } else {
        return `✔ 숙제를 내세요.`
    }
}

export default chkDeadline;