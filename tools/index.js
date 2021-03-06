import {endpoint} from '../api/index'
export const currentDay = parseInt(
  (new Date() - new Date(2020, 1, 17)) / (1000 * 60 * 60 * 24)
);

export const percentOf = (x, y, sig = 6) => {
  let result = (x / y) * 100;
  return result.toFixed(sig);
};

export const percentCompute = (xTotal,xValue,yTotal,yValue) => {
    let xPercent = parseInt((xValue/xTotal) * 100)
    let yPercent = parseInt((yValue/yTotal) * 100)
    let diffPercent = xPercent - yPercent
    return diffPercent
}
export const isMobileView = () => window.innerWidth < 500;

export const autoHiding = (hidden, duration = 500) => {
  if (hidden) {
    setTimeout(() => {
      hidden = !hidden;
    }, duration);
  }
};
export const msgUI = msgType => {
  switch (msgType) {
    case "error":
      return "alert msg-error";
    case "info":
      return "info msg-info";
    case "progress":
      return "loading mdi-spin msg-progress"
  }
  return "info msg-info";
};

export const resolveModifierClass = (count, result) => {
    let iconUp = "mdi mdi-arrow-up-bold", iconDown = "mdi mdi-arrow-down-bold"

  return result < 0 ? `lower ${iconDown}` : `higher ${iconUp}`
}

export const transformPayload = (payload) => {
    console.log(payload)
    let country = {
        country : payload.confirmed.detail.split("/")[5],
        confirmed : payload.confirmed.value,
        recovered : payload.recovered.value,
        deaths : payload.deaths.value
    }
    return country
}

export const getBaseCountry = () => {
  return fetch(endpoint)
  .then(res => res.json())
  .then(res => res)
  .catch(err => false)
} 

export const daysSinceOutbreak = () => {
  let startDate = new Date(2019,11,0)
  let today = new Date()
  return parseInt((today - startDate)/(30*24*60*60*1000))
}

export const daysSinceOutbreakInNigeria = () => {
  let startDate = new Date(2020,1,27)
  let today = new Date()
  return parseInt((today - startDate)/(24*60*60*1000))
}

export const generateMsg = (type) => {
    switch (type) {
        case "error":
            return {type:"error", text:"Error loading data !"}
        case "progress":
            return {type:"progress", text:"Fetching Data"}
    }
} 

export const computeRecoveryRate = ({confirmed, recovered}) => parseInt((recovered/confirmed) * 100)
