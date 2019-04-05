
/**
 * Get account details 
 * @param  {Function} ).then(() [description]
 * @return {[type]}             [description]
 */
api.connect().then(() => {
  console.log('getting account info for', RIPPLE_MY_ADDRESS);
  return api.getAccountInfo(RIPPLE_MY_ADDRESS);

}).then(info => {

  console.log(info);
  console.log('getAccountInfo done');

  document.body.innerHTML += "<p>My Account information</p>" +
	"      <table>" +
	"        <tr><th>PreviousAffectingTransactionLedgerVersion</th>" +
	"          <td>" + info.previousAffectingTransactionLedgerVersion + "</td></tr>" +
	"        <tr><th>My XRP balance</th>" +
	"          <td>" + info.xrpBalance + "</td></tr>" +
	"        <tr><th>PreviousAffectingTransactionID</th>" +
	"          <td>" + info.previousAffectingTransactionID + "</td></tr>" +
	"        <tr><th>Sequence</th>" +
	"          <td>" + info.sequence + "</td></tr>" +
	"        <tr><th>OwnerCount</th>" +
	"          <td>" + info.ownerCount + "</td></tr>" +
	"      </table>";

}).then(() => {

  return api.disconnect();

}).then(() => {

  console.log('done and disconnected.');

}).catch(console.error);
