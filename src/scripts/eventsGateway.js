const baseUrl = 'https://crudcrud.com/api/5050ba2826274bbc915b58fbe785479/eventsArray';

const mapEvents = tasks => 
    tasks.map(({_id, ...rest}) => ({...rest, id: _id}));

export const getEventList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapEvents(tasks))
        .catch(err =>{
            err.message = 'Server calls limit is exceeded. Need to update server URL';
            alert(err.message);
        });
};
 
export const createEvent = object => {
   return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(object),
    })
    .catch(err =>{
        err.message = 'Server calls limit is exceeded. Need to update server URL';
        alert(err.message);
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
    .catch(err =>{
        err.message = 'Server calls limit is exceeded. Need to update server URL';
        alert(err.message);
    });
};


export const deleteEvent = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
    .catch(err =>{
        err.message = 'Server calls limit is exceeded. Need to update server URL';
        alert(err.message);
    });
};