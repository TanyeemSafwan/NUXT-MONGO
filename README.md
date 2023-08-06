# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

--- IF YOU ARE USING MAC ---

The whole process can done via brew and Xcode: 

— Instal brew and Xcode if it is not installed from terminal using these commands
  * Xcode-select —install 
  * /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


— Then run the following commands in terminal:
    * brew tap mongodb/brew
    *brew update
    *brew install mongodb-community@6.0
    *brew services start mongodb/brew/mongodb-community
    *brew install --cask mongodb-compass
   

—  Open the MongoDB Compass and connect to the default connection string. The connection string should be same for all devices. So no need of modification in the connection string of the project. Running the 
Project after npm install should create the database automatically and run properly. 
