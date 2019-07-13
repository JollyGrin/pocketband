import axios from 'axios';
import airtable from 'airtable';


export default class Kit {

    // constructor(query) {
    //     this.query = query;
    // }

    async getResults() {

        const Airtable = require('airtable');
        Airtable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: 'keyhfjyDYjUlGopsT'
        });

        try {

            const base = Airtable.base('appZ7HjeS9KkAUgyu');
            const table = base('Kits');

            const results = table.select({
                view: "grid"
            }).firstPage((err, records) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log(records);
                return records;

            });

        } catch (error) {
            console.log('We got an error, chief');
            console.log(error);
        }

    }
}