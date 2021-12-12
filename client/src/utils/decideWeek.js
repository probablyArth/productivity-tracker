export default function decideWeek() {

    const date = new Date()
    // var day = date.getDate();
    var day = 31

    let week = 0;

    while (day > 7) {
        day = day-7;
        week += 1;
    }

    return week;
}