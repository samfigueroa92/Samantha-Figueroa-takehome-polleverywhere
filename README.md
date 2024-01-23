# Take Home Assignment: Pursuit x Poll Everywhere

A coding challenge to build a Raffle app client that interacts with a RESTful API backend to allow users to create raffles and generate a random winner. This is a React.js application built with HTML/CSS, Javascript, Material UI on the frontend with an Express.js server using PostgreSQL for database management on the backend.

Resources: [Miro Wireframe](https://miro.com/app/board/uXjVN3m1XMw=/?share_link_id=475546673838)

## Deployment

[Frontend](https://rafflewizard.netlify.app/): Hosted on Netlify - a remote-first cloud computing company that offers a development platform that includes build, deploy, and serverless backend services for web applications and dynamic websites.

[Backend](https://raffle-app-n9ur.onrender.com): Hosted on Render - a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git.

## How To Run This Project

Fork and clone this repositry to your local machine.

```
git clone https://github.com/samfigueroa92/Samantha-Figueroa-takehome-polleverywhere.git
```

This is a monorepo, so you will need to have two terminals open the run the front-end and back-end simultaneously. Run these commands:

```
cd back-end
<!-- these commands will set up your postgreSQL tables and populate the sample data -->
npm run db:init
npm run db:seed
```

```
cd ..
cd front-end
npm start
```

Install the required dependencies for the front-end and back-end.

```
npm install

(front-end) npm i axios
(front-end) npm i @mui/icons-material @mui/material @emotion/styled @emotion/react
(front-end) npm i @mui/material @emotion/react @emotion/styled
(front-end) npm i react-router-dom
(front-end) npm i react-toastify

(back-end) npm i express
(back-end) npm i cors
(back-end) npm i pg-promise
```
Access the application in your web browser at `http://localhost:3000`.

### Back-end

Technologies:

- Express.js
- Node.js
- PostgreSQL

Dependencies:

- dotenv
- pg-promise
- cors

### Front-end

Technologies:

- React.js

Dependencies:

- Axios
- Material UI
- Material UI Icons
- React Toastify

