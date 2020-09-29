import { getDay } from 'date-fns';

export default function convertDayToWeekDay(day: number) {
    const sendedDay = day;
    const weekday = new Array(7);
    weekday[0] = 'Domingo';
    weekday[1] = 'Segunda';
    weekday[2] = 'Terça-feira';
    weekday[3] = 'Quarta-Feira';
    weekday[4] = 'Quinta-Feira';
    weekday[5] = 'Sexta-Feira';
    weekday[6] = 'Sábado';

    const convertedDay = weekday[getDay(sendedDay)];

    return convertedDay;
}
