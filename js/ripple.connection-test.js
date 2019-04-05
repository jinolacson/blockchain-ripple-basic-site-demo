/**
 * Get connection state
 */

api.connect().then(function() {
    return api.getServerInfo();
}).then(function(server_info) {

document.body.innerHTML += "<p>Connected to ripple "+( useTestNet ? 'test' : 'main' )+" server!</p>" +
	"      <table>" +
	"        <tr><th>Version</th>" +
	"          <td>" + server_info.buildVersion + "</td></tr>" +
	"        <tr><th>Ledgers available</th>" +
	"          <td>" + server_info.completeLedgers + "</td></tr>" +
	"        <tr><th>hostID</th>" +
	"          <td>" + server_info.hostID + "</td></tr>" +
	"        <tr><th>Most Recent Validated Ledger Seq.</th>" +
	"          <td>" + server_info.validatedLedger.ledgerVersion + "</td></tr>" +
	"        <tr><th>Most Recent Validated Ledger Hash</th>" +
	"          <td>" + server_info.validatedLedger.hash + "</td></tr>" +
	"        <tr><th>Seconds since last ledger validated</th>" +
	"          <td>" + server_info.validatedLedger.age + "</td></tr>" +
	"      </table>";

}).then(() => {

  return api.disconnect();

}).then(() => {

  console.log('done and disconnected.');

}).catch(console.error);


