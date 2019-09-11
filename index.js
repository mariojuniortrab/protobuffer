var datareports = require("./gen/datareport_pb");

var datareport = new datareports.DataReport();

datareport.setAlias('hiago');

console.log(datareport.getAlias())