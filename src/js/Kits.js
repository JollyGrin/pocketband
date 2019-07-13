import axios from 'axios';
import airtable from 'airtable';
import { resolve } from 'url';


export default class Kit {

    // constructor(query) {
    //     this.query = query;
    // }

    async getResults() {

        const Airtable = require('airtable');
        Airtable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: 'keyBwyjjlvwmwm83P'
        });

        const base = Airtable.base('appZ7HjeS9KkAUgyu');
        const table = base('Kits');


        try {

            let results;
            await table.select({
                // Selecting the first 3 records in Gallery:
                maxRecords: 3,
                view: "Gallery"
            }).eachPage(function page(records, fetchNextPage) {
                results = [...results, ...records];
            
            }, function done(err) {
                if (err) { console.error(err); return; }
            });

            return results;


        } catch (error) {
            console.log('We got an error, chief');
            console.log(error);
        }

    }
}