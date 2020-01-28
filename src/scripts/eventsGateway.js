const baseUrl = 'https://crudcrud.com/api/867433fedf1141d198bf3eca15734c2e/eventsArray';

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
    });
};

export const updatEvent = (eventId, updatedEventData) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedEventData),
    });
};


export const deleteEvent = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });
};