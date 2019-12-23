export const eventsArray = [
    {
        header: 'first start header',
        startTime: new Date(2019,11,23,10,0o0),
        endTime: new Date(2019,11,23,11,0o0),
        description: undefined,
    },
    {
        header: undefined,
        startTime: new Date(2019,11,25,9,0o0),
        endTime: new Date(2019,11,25,10,0o0),
        description: undefined,
    },
    {
        header: 'Dinner with friends',
        startTime: new Date(2019,11,24,18,0o0),
        endTime: new Date(2019,11,24,19,30),
        description: undefined,
    },
];
console.log(eventsArray[0].startTime.toDateString());