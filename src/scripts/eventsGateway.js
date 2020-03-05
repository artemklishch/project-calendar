const baseUrl = 'https://crudcrud.com/api/b416890df99b42329bc9e94317b529c6/arrayOfEvents';

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