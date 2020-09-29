export default function conmvertMinutesToHour(time: number) {
    const hour = Math.floor(time / 60);
    const minutes = time % 60;

    if (hour < 10) {
        const formattedHour = `0${hour}`;

        if (!minutes) {
            const formattedMinute = `${minutes}${minutes}`;
            const formatedTime = `${formattedHour}:${formattedMinute}`;

            return formatedTime;
        }

        const formatedTime = `${formattedHour}:${minutes}`;

        return formatedTime;
    }

    if (!minutes) {
        const formattedMinute = `${minutes}${minutes}`;
        const formatedTime = `${hour}:${formattedMinute}`;

        return formatedTime;
    }

    const formatedTime = `${hour}:${minutes}`;

    return formatedTime;
}
