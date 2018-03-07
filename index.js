var dotenv = require('dotenv');
dotenv.load();

var util = require('util');
var azure = require('azure-storage');

var blobService = azure.createBlobService();

blobService.listContainersSegmented(null, function (error, results) {
    if (error) {
        // List container error
    } else {
        for (var i = 0, container; container = results.entries[i]; i++) {
            // Deal with container object
            console.log(util.format('- %s (type: %s)'), results.entries[i].name, results.entries[i].blobType);
        }
    }
});


blobService.listBlobsSegmentedWithPrefix('boc', 'output-data/server', null, {delimiter: ""}, function (error, results) {
    if (error) {
        // List blobs error
    } else {
        for (var i = 0, blob; blob = results.entries[i]; i++) {
            // Deal with blob object
            console.log(results.entries[i].name);
        }
    }
});


