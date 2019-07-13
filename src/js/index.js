import axios from 'axios';
import airtable from 'airtable';
import { elements } from './base';
import * as view from './view';
import Kit from './Kits';

const state = {
    // State goes in here
};


// const test = async testQ => {
//     const proxy = 'https://cors-anywhere.herokuapp.com/';
//     const key = 'keyBwyjjlvwmwm83P';
//     try {

//         const res = await axios.get(`${proxy}https://api.airtable.com/v0/appZ7HjeS9KkAUgyu/Kits?api_key=${key}`).then(response => {
//             console.log(response, 'response log');
//             return response.data.records;
//         });

//         console.log(res, 'res');
//         console.log(test.data, 'data');

//     } catch (error) {
//         console.log('We got an error, chief');
//         console.log(error);
//     }
// };

// test();





const controlPage = async () => {
    // prepare UI for results
    view.clearResults();

    // // structure json
    state.kits = new Kit().getResults();
    state.kits.then(function(result){
        console.log(result, 'result5');
    })


    // // render results to ui
    view.renderKits(state.kits);
};

const init = () => {
    // Clear Page
    controlPage();
}

init();

