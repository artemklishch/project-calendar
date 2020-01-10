// export const eventsArray = [
//     {
//         header: 'first start header',
//         startTime: new Date(2019,11,31,22),
//         endTime: new Date(2020,0,1,2),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
//     {
//         header: 'second start header',
//         startTime: new Date(2020,0,1,23),
//         endTime: new Date(2020,0,1,24),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
//     {
//         header: undefined,
//         startTime: new Date(2020,0,2,9,30),
//         endTime: new Date(2020,0,2,11),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
//     {
//         header: 'Dinner with friends',
//         startTime: new Date(2020,0,6,18),
//         endTime: new Date(2020,0,6,19,30),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
//     {
//         header: 'Good night',
//         startTime: new Date(2020,0,11,23),
//         endTime: new Date(2020,0,12,2),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
//     {
//         header: 'nsxt',
//         startTime: new Date(2020,0,7,9),
//         endTime: new Date(2020,0,7,10),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
//     {
//         header: 'ыщьуерштп фе дфые',
//         startTime: new Date(2019,11,11,9),
//         endTime: new Date(2019,11,11,10),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
//     {
//         header: 'ыщьуерштп фе дфые',
//         startTime: new Date(2019,11,11,21),
//         endTime: new Date(2019,11,12,2),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
//     {
//         header: 'another last day',
//         startTime: new Date(2020,0,7,23),
//         endTime: new Date(2020,0,7,24),
//         description: undefined,
//         ident:Math.random().toFixed(10),
//     },
// ];

localStorage.setItem('obj', JSON.stringify({name: 'Tom'}));

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value, null, 2));
};
export const getItem = key => 
    JSON.parse(localStorage.getItem(key))
    .map(elem => {
        elem.startTime = new Date(elem.startTime);
        elem.endTime = new Date(elem.endTime);
    });















