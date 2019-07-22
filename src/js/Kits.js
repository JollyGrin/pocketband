import axios from 'axios';
import airtable from 'airtable';
// import * as data from '../now.json';

export const getKits = async (doneBehavior) => {

    const Airtable = require('airtable');
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: process.env.API_KEY
    });
    const base = Airtable.base(process.env.BASE);
    const table = base('Kits');

    let acc = [];
    table.select({
        view: "grid"
    }).eachPage(function page(records, fetchNextPage) {
        acc = [...acc, ...records];
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
        doneBehavior(acc);
    });

}