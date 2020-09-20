import Data from '../../../data/colleges.json';

export function getStates() {
  return Object.keys(Data);
}

export function getDistrict(state) {
  const disToC = Object.keys(Data)
    .filter(st => st === state)
    .reduce((obj, key) => {
      obj[key] = Data[key];
      return obj;
    }, {});

  return Object.values(disToC)[0];
}

export function getColleges(districtToCollegePair, district) {
  const colleges = Object.keys(districtToCollegePair)
    .filter(dis => dis === district)
    .reduce((obj, key) => {
      obj[key] = districtToCollegePair[key];
      return obj;
    }, {});

  return Object.values(colleges)[0];
}
