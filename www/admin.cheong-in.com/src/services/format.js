let options = ["누수탐지공사", "배관공사", "막힘 소통공사", "방수공사", "칸막이·창틀", "기타 건물유지 보수","기타"]

const category = (index) => {
    return options[index-1]
}

const dateFormat = (date) => {
    let d = new Date(date);
    let month = d.getMonth() + 1
    let day = d.getDate()

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    // hour = hour >= 10 ? hour : '0' + hour;
    // minute = minute >= 10 ? minute : '0' + minute;
    // second = second >= 10 ? second : '0' + second;

    return d.getFullYear() + '-' + month + '-' + day;
}

export{
    category,
    dateFormat
}