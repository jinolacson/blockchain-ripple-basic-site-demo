

document.body.innerHTML += "<p></p><button onclick='run();'>Pay 10.00 XRP to "+RIPPLE_TO_ADDRESS+"</button>" 
+"<br/><br/>Signed Transaction : <br/><textarea class='signTx'></textarea>"  
+"<br/><br/>Response : <br/><textarea class='ResponseTx'></textarea>";


async function run() {
  await api.connect();

  // Ripple payments are represented as JavaScript objects
  const payment = {
    source: {
      address: RIPPLE_MY_ADDRESS,
      maxAmount: {
        value: '10.00',
        currency: 'XRP'
      }
    },
    destination: {
      address: RIPPLE_TO_ADDRESS,
      amount: {
        value: '10.00',
        currency: 'XRP'
      }
    }
  };

  // Get ready to submit the payment
  const prepared = await api.preparePayment(RIPPLE_MY_ADDRESS, payment, {
    maxLedgerVersionOffset: 5
  });

  // Sign the payment using the sender's secret
  const { signedTransaction } = api.sign(prepared.txJSON, RIPPLE_MY_SECRET);
  console.log('Signed', signedTransaction)
  $(".signTx").text(signedTransaction)

  // Submit the payment
  const res = await api.submit(signedTransaction);

  console.log('Done', res);

 $(".ResponseTx").text(
 	JSON.stringify(res, undefined, 2)
 );
 
}