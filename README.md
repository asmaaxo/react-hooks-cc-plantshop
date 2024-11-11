## Plantsy Admin App
Welcome to the Plantsy Admin App! This application allows you to manage a plant store's inventory, including adding, updating, and deleting plant items, marking items as "sold out," and searching for plants by name.

## Table of Contents
Project Overview
Features
Setup Instructions
Core Deliverables
Advanced Deliverables
Deployment
Contributing
License
Project Overview
Plantsy Admin App is designed to streamline the management of plant inventory for store administrators. With the provided user interface, admins can:

Add new plants
Update plant information
Mark plants as "sold out"
Filter plants by name
This app includes a backend server and a frontend interface built with React.
##Live link ## 
This is the deployed link: [live link](https://rad-speculoos-4d7e2e.netlify.app)



## Features
## Core Features
View All Plants: Displays a list of all available plants in the store.
Add a New Plant: Allows admins to add a new plant to the inventory via a form.
Mark as Sold Out: Marks plants as sold out.
Search: Filters plants based on a search term.
Advanced Features
Update Plant Price: Enables admins to modify the price of each plant.
Delete a Plant: Allows the removal of plants from the inventory.
Setup Instructions
Backend Setup
Install dependencies:
npm install
Run the backend server:
npm run server
The backend server will be accessible at http://localhost:6001.
Frontend Setup
Open a new terminal.
Start the React app:
npm start
This will open the frontend at http://localhost:3000.
Endpoints
GET /plants: Fetches all plants.
POST /plants: Adds a new plant to the database.
PATCH /plants/
: Updates the price of a specific plant.
DELETE /plants/
: Deletes a specific plant.
Core Deliverables
View All Plants: Fetches and displays all plants from the backend.
Add a New Plant: Adds a new plant via the /plants POST endpoint.
Mark as Sold Out: Toggles a plant’s availability.
Search: Filters plants based on a search input.
Advanced Deliverables
Update Plant Price: Edits a plant's price and persists the change.
Delete a Plant: Removes a plant from the database.
Deployment
To deploy the app, follow these steps:

Deploy the frontend on platforms like Netlify or Vercel.
Deploy the backend on Heroku or any server that can run Node.js applications.
Update the fetch requests in your frontend to point to the live backend URL instead of localhost:6001.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.


