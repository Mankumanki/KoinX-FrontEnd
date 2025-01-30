# KoinX FrontEnd

In the project directory, you can run:

Implementation:
1) Instead of creating seperate page for coins data based on ID. I have updated the trading View graph by passing the data from the selected trending coin from the Trending Coin Panel.
2) So now the graph on top will be updated along with coin data on top to the selected trending coin no need to route to seperate page.

npm run dev
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

Steps To Run:

1) Pull the github repo.
2) Create .env file inside root folder
3) Create variable inside it as VITE_GECKO_API_KEY="";
4) Provide your CoinGeckio API Key for website to access coins data.
5) type npm run dev on terminal of VS Code to run on localhost.

Deployment:

Deployed on Netlify
https://thriving-pudding-4bfb49.netlify.app/


