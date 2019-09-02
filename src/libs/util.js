import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://homestead.test' :
    env === 'production' ?
    'http://api.kongry.top:8083' :
    'http://homestead.test';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;