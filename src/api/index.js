import axios from 'axios';

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseurl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
function fetchNewsList() {
  //   return axios.get(config.baseurl + 'news/1.json'); //ES5 style
  return axios.get(`${config.baseurl}news/1.json`); //ES6
}

function fetchJobsList() {
  //   return axios.get(config.baseurl + 'news/1.json'); //ES5 style
  return axios.get(`${config.baseurl}jobs/1.json`); //ES6
}

function fetchAskList() {
  //   return axios.get(config.baseurl + 'news/1.json'); //ES5 style
  return axios.get(`${config.baseurl}ask/1.json`); //ES6
}

function fetchUserInfo(username) {
  //   return axios.get(config.baseurl + 'news/1.json'); //ES5 style
  return axios.get(`${config.baseurl}user/${username}.json`); //ES6
}

function fetchItemInfo(item) {
  //   return axios.get(config.baseurl + 'news/1.json'); //ES5 style
  return axios.get(`${config.baseurl}item/${item}.json`); //ES6
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
};
