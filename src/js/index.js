import axios from 'axios';
import airtable from 'airtable';
import { elements } from './base';
import * as view from './view';
import Kit from './Kits';

const state = {
    // State goes in here
};



const controlPage = async () => {
    // prepare UI for results
    view.clearResults();

    // // structure json
    state.kits = new Kit();
    console.log(state.kits.getResults()); 


    // // render results to ui
    view.renderKits(state.Kits);
};

const init = () => {
    // Clear Page
    controlPage();
}

init();

