import axios from 'axios';
import airtable from 'airtable';
import { elements } from './base';
import * as view from './view';
import * as kit from './Kits';

const state = {
    v: 'last update july 22 @00:50'
};

const controlPage = async () => {
    
    kit.getKits(function(acc){
        view.clearResults();
        view.renderKits(acc);
        // console.log(acc); // for testing: print out the results
    });

    
};

const init = () => {
    // Clear Page
    controlPage();
    // Version Check
    console.log(state.v);

}

init();

