import { onCheckLateEffortOfDeleteOrEdite } from "./validate.js";
import { getEventList } from "./eventsGateway.js";

const fieldOfDays = document.querySelector(".main__sidebar_days");
const popupBlock = document.querySelector(".popup-layer");
const iconDelete = document.querySelector(".event__btn-delete");

export let markOnFactOfEdit = false;
export let dataId = "";

export const funcForMakeMarkValuableFalse = () => {
  markOnFactOfEdit = false;
};

export const funcForMakeDataIdEmpty = () => {
  dataId = "";
};

export const funcForEditEvent = (event) => {
  const blockOfEvent = event.target;
  if (!blockOfEvent.dataset.idval) return;

  getEventList()
    .then((array) => {
      const arr = [];
      array.forEach((elem) => {
        elem.startTime = new Date(elem.startTime);
        elem.endTime = new Date(elem.endTime);
        arr.push(elem);
      });
      return arr;
    })
    .then((eventsArray) => {
      popupBlock.style.display = "block";
      iconDelete.style.display = "block";

      dataId = blockOfEvent.dataset.idval;

      const currentObject = eventsArray.find((elem) => elem._id === dataId);

      const title = document.querySelector(".event__name");
      currentObject.header !== null
        ? (title.value = currentObject.header)
        : (title.value = "");

      const description = document.querySelector(".multiline__text");
      currentObject.description !== null
        ? (description.value = currentObject.description)
        : (description.value = "");

      const startDateInput = document.querySelector(".event__date-start");
      const startYear = currentObject.startTime.getFullYear();
      let startMonth = currentObject.startTime.getMonth();
      let startDate = currentObject.startTime.getDate();
      const startDateObject = new Date(
        Date.UTC(startYear, startMonth, startDate)
      );
      startDateInput.value = new Date(startDateObject)
        .toISOString()
        .substr(0, 10);

      const endDateInput = document.querySelector(".event__date-end");
      const endYear = currentObject.endTime.getFullYear();
      let endMonth = currentObject.endTime.getMonth();
      let endDate = currentObject.endTime.getDate();
      const endDateObject = new Date(Date.UTC(endYear, endMonth, endDate));
      endDateInput.value = new Date(endDateObject).toISOString().substr(0, 10);

      const startTimePlace = document.querySelector(".startTime_place");
      let startHour = new Date(currentObject.startTime).getHours();
      startHour < 10 ? (startHour = `0${startHour}`) : startHour;
      let startMin = new Date(currentObject.startTime).getMinutes();
      startMin < 10 ? (startMin = `0${startMin}`) : startMin;
      startTimePlace.value = `${startHour}:${startMin}`;

      const endTimePlace = document.querySelector(".endTime_place");
      let endHour = new Date(currentObject.endTime).getHours();
      endHour < 10 ? (endHour = `0${endHour}`) : endHour;
      let endMin = new Date(currentObject.endTime).getMinutes();
      endMin < 10 ? (endMin = `0${endMin}`) : endMin;
      endTimePlace.value = `${endHour}:${endMin}`;

      const colorPicerInput = document.querySelector(".pick_color");
      colorPicerInput.value = currentObject.backgroundColor;

      onCheckLateEffortOfDeleteOrEdite(currentObject);
      markOnFactOfEdit = true;

      return currentObject;
    })
    .catch((err) => {
      err.message = "Server calls limit is exceeded. Need to update server URL";
      alert(err);
    });
};
fieldOfDays.addEventListener("click", funcForEditEvent);
