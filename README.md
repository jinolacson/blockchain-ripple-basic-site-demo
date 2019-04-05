# blockchain-ripple-basic-site-demo
A simple and basic web demonstration for ripple blockchain protocol

# INSTALLATION
 
1. Inside blockchain-ripple-basic-site-demo clone:
	- git clone https://github.com/ripple/ripple-lib.git
	- cd ripple-lib
	- git checkout master

2. Install dependecies using yarn:
	- yarn run build

3. Go to https://developers.ripple.com/xrp-test-net-faucet.html and generate two test accounts for:

	- const RIPPLE_MY_ADDRESS = '';
	- const RIPPLE_MY_SECRET = '';

	//Another wallet address
	- const RIPPLE_TO_ADDRESS = '';
	
2. Under js/ripple.connection-server.js change:

	//your wallet address
	- const RIPPLE_MY_ADDRESS = '';
	- const RIPPLE_MY_SECRET = '';

	//Another wallet address
	- const RIPPLE_TO_ADDRESS = '';

# More information and documentation : 
 https://developers.ripple.com/index.html
