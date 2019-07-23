import axios from 'axios';
// import airtable from 'airtable';


export const getKits = async (doneBehavior) => {

    axios.get('/api/airtable/')
    .then (function (response) {
        console.log(response)
        doneBehavior(response.data);
    });

}