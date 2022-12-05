
export default function DateConverter (day: string):string[] {
    const time = day.split(' ')[1]
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    let date = new Date(day);
    let n = date.getDay();
    return [days[n], time]
}