# single-factory-contract
  single factory to deploy contract

## Prerequisites

Ensure the following prerequisites are met:

- Node.js
- npm (Node Package Manager)
  
## Installation

Follow these installation steps:

1. Clone the repository to your local machine:

```bash
git clone git@github.com:NovaSwapFinance/single-factory-contract.git
```

2. Navigate to the project directory:

```bash
cd single-factory-contract
```

3. Install dependencies:

```bash
npm install --force
```

4. Create an `.env` file by copying `.env.example`:

```bash
cp .env.example .env
```

5. Compile all Smart contracts

```bash
npm run compile
```

## Deployment

### Configuration

Before deployment, configure the `.env` file:

- Obtain the wallet private key from Metamask and insert it into `WALLET_PRIVATE_KEY` in the `.env` file.

### Deployments

#### Deploy SingleFactory

1. Run `npm run deploy`.

```bash
npm run deploy
```