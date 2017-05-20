// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";


//handshake

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyqGtSAOwpL9x1Tx'}).base('appX7l2d6izOrMORA');




//make sure airtable is working

//console.log(base);


base('Products').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Product'));
        
        var products = `<a href="https://airtable.com/shrsiQhPO5B86zfxE">${record.get('Product')}</a>`
        var options = `<p>${record.get('Options')}</p>`
        
        //console.log(options);
        
        $('#products').append(products, options);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});