
const ServerMain = 'wss://s1.ripple.com';
const ServerTest = 'wss://s.altnet.rippletest.net:51233';

let useTestNet = true; //using test network
let network = useTestNet ? ServerTest : ServerMain;

//define configuration settings
let config = {
	server: network 
};

/**
 * Set ripple connection
 * @type {ripple}
 */
var api = new ripple.RippleAPI(config);

api.on('error', (errorCode, errorMessage) => {
  console.log(errorCode + ': ' + errorMessage);
});
/**
 * my wallet address you can change any address wallet
 * @type {String}
 */
const RIPPLE_MY_ADDRESS = 'address1';
const RIPPLE_MY_SECRET = 'secret1';


/**
 * To address, you can also change any address wallet
 * @type {String}
 */
const RIPPLE_TO_ADDRESS = 'address2';
