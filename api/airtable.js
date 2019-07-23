module.exports = (req, res) => {

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
        if (err) { res.send(err); return; }
        res.send(acc);
    });
}

// https://zeit.co/guides/deploying-a-mongodb-powered-api-with-node-and-now/?query=api