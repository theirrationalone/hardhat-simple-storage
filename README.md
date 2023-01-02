# SimpleStorage Hardhat Project

This project demonstrates SimpleStorage Hardhat use case. It comes with SimpleStorage contract, a test for that contract, and a script that deploys that contract.

# If You want to run this project on "GOERLI" testnet and don't know how to get Ready Your Project to work with "GOERLI TESTNET" and Having ETH fund/balance Issue. click <a href="https://github.com/theirrationalone/solidity-smart-contract-ethersjs/blob/main/README.md" target="blank">here</a>

<br />
<br />
<br />

## **SETTING ENVIRONMENT VARIABLES**

#### **Create a file .env and add keys given below with your credentials**

-   GOERLI_RPC_URL=your-rpc-from-alchemy-app

-   METAMASK_PRIVATE_KEY=your-metamask-private-key

-   COINMARKETCAP_API_KEY=your-coinmarketcap-api-key

-   ETHERSCAN_API_KEY=your-etherscan-api-key

<br />
if you don't have etherscan api key then Go [here](https://etherscan.io/register) and signup/login here. After signing up or logging in click on 'API KEYS' then click on 'Add' you would've your etherscan api key.

if you don't have coinmarketcap api key then Go [here](https://pro.coinmarketcap.com/signup) and signup/login here. After signing up or logging in you would've your coinmarketcap api key.

<br />
<br />
<hr>

## **RUNNING SCRIPTS**

# **Note**: <h1 style="color: yellow;">Follow Steps below if You are running your project on vs code otherwise open your <span style="color: blue; font-weight: bold; font-size: 48px;">terminal / shell / bash / cmd</span>, with admin privileges then go to your project's directory i.e. as on windows "C:/users/username/documents/your_project/" and then paste and run commands given below in sequence.</h1>

<br />
<br />
<br />

# Copy code below, Go to Your Project, Open Terminal then paste it into terminal.

```shell
npm install
```

<br />

# Try running some of the following tasks: 🚀🚀🚀

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat node
npx hardhat run scripts/deploy.js
npx hardhat run scripts/deploy.js --network goerli
```

<br />

# Try running Command Given Below...

## <div style="color: purple; font-weight: bolder;">Shows all available command: </div>

```shell
npx hardhat
```

<br />
<br />

## <div style="color: purple; font-weight: bolder;">Prints Number of accounts to work with local Project development on local/hardhat node: </div>

```shell
npx hardhat accounts
```

<br />
<br />

## <div style="color: purple; font-weight: bolder;">Prints Number of accounts to work with local Project development on Goerli testnet: </div>

```shell
npx hardhat accounts --network goerli
```

<br />
<br />

## <div style="color: purple; font-weight: bolder;">Prints Current Block Number that can be used for Transaction(s) to be Mined on local/hardhat node: </div>

```shell
npx hardhat block-number
```

<br />
<br />

## <div style="color: purple; font-weight: bolder;">Prints Current Block Number that can be used for Transaction(s) to be Mined on Goerli testnet: </div>

```shell
npx hardhat block-number --network goerli
```

<br />
<br />

### <p style="font-weight: bolder; color: #cc0000;">Whilst interacting with Project you'll probably get the idea how a smart contract works, how current scripts are working and how easy working with smart contract with hardhat support is and why i write these scripts in such a way.</p>

# <h1 style="color: #129900;">THANK YOU! <span style="font-weight: bolder; font-size: 48px; color: #1d0ed1">:)</span> <span style="font-size: 52px;">🏴‍☠️</span></h1>
