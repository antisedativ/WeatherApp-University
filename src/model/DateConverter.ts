
export default function DateConverter (day: string):string {
    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thur',
        'Fri',
        'Sat'
    ];

    let date = new Date(day);
    let n = date.getDay();
    return days[n]
}