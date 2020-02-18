const baseUrl = 'https://crudcrud.com/api/4b57f02005404dec99d87785fea5c2a9/eventsArray';

const mapEvents = tasks => 
    tasks.map(({_id, ...rest}) => ({...rest, id: _id}));

export const getEventList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapEvents(tasks));
};
 
export const createEvent = object => {
   return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(object),
    })
    .then(response => {
        if(!response.ok) throw new Error();
    })
    .catch(() =>{
        alert('Server calls limit is exceeded. Need to update server URL');
    });
};

export const updatEvent = (eventId, updatedEventData) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedEventData),
    })
    .then(response => {
        if(!response.ok) throw new Error();
    })
    .catch(() =>{
        alert('Server calls limit is exceeded. Need to update server URL');
    });
};


export const deleteEvent = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if(!response.ok) throw new Error();
    })
    .catch(() =>{
        alert('Server calls limit is exceeded. Need to update server URL');
    });
};