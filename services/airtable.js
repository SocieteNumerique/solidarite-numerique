import Airtable from 'airtable';

const fetchResources = airTableCategory => {
  return new Promise((resolve, reject) => {
    const DB = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_APP
    );
    let results = [];
    DB('ressources')
      .select({
        view: 'Grid view',
        filterByFormula: `AND({Statut} = 'publié', FIND("${airTableCategory}", {Domaines}) > 0)`,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(record => {
            results.push(record.fields);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          resolve(results);
          if (err) {
            console.error(err);
            reject([500]);
          }
        }
      );
  });
};

export default fetchResources;
