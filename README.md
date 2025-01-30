# hng-stage-0-public-api
## Public API for HNG12 Stage 0

### Overview
This is a simple public API that returns basic information in JSON format.  
It provides:
- Your registered email address (for HNG12 Slack)
- The current datetime in UTC (ISO 8601 format)
- The GitHub URL of the project repository

### Tech Stack
- Node.js  
- Express.js  
- CORS  

### API Documentation

#### Endpoint
**GET /**  
Returns the following JSON response:

```json
{
    "email": "your-email@example.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/yourusername/hng-stage-0-public-api"
}
```

### Running Locally
Clone the repo:

```sh
git clone https://github.com/lekakenycollins8/hng-stage-0-public-api.git
cd hng-stage-0-public-api
```

Install dependencies:

```sh
npm install
yarn
```

Start the server:

```sh
npm run dev
npm start
```

Open [http://localhost:8080/](http://localhost:8080/) in your browser.

### Deployment
The API is deployed at: [your-deployed-url]

### Contribution
Feel free to fork and submit PRs.