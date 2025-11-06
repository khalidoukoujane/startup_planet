# Startup Planet API

A RESTful API built with Express.js that provides information about startups from around the world. Query and filter startup data by various criteria including industry, location, funding status, and more.

## Features

- 🌍 Browse startups from different countries and continents
- 🔍 Filter by industry, funding status, and MVP availability
- 📊 Comprehensive startup data including founders, employees, and mission statements
- 🚀 RESTful API with query parameters and path parameters support
- 🔒 CORS enabled for cross-origin requests

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js v5** - Web framework
- **CORS** - Cross-Origin Resource Sharing support
- **ES Modules** - Modern JavaScript module system

## Installation

1. Clone the repository:
```bash
git clone https://github.com/khalidoukoujane/startup_planet.git
cd startup_planet
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will start on `http://localhost:8000`

## API Endpoints

### 1. Get All Startups (with optional filters)

**Endpoint:** `GET /api`

**Query Parameters:**
- `industry` - Filter by industry (e.g., AI, Renewable Energy, FinTech)
- `country` - Filter by country (e.g., USA, Australia, Canada)
- `continent` - Filter by continent (e.g., North America, Europe, Asia)
- `is_seeking_funding` - Filter by funding status (true/false)
- `has_mvp` - Filter by MVP status (true/false)

**Examples:**

Get all startups:
```bash
curl http://localhost:8000/api
```

Filter by industry:
```bash
curl "http://localhost:8000/api?industry=AI"
```

Filter by country:
```bash
curl "http://localhost:8000/api?country=USA"
```

Filter by multiple criteria:
```bash
curl "http://localhost:8000/api?industry=AI&is_seeking_funding=true&has_mvp=true"
```

Filter by continent and funding status:
```bash
curl "http://localhost:8000/api?continent=North%20America&is_seeking_funding=true"
```

### 2. Search by Field and Term

**Endpoint:** `GET /api/:field/:term`

**Path Parameters:**
- `field` - Search field (allowed: `country`, `continent`, `industry`)
- `term` - Search term (case-insensitive)

**Examples:**

Search by country:
```bash
curl http://localhost:8000/api/country/USA
```

Search by continent:
```bash
curl http://localhost:8000/api/continent/Europe
```

Search by industry:
```bash
curl http://localhost:8000/api/industry/AI
```

## Response Format

Successful responses return JSON array of startup objects:

```json
[
  {
    "id": 1,
    "name": "TechNova AI",
    "industry": "AI",
    "founded": 2021,
    "country": "USA",
    "continent": "North America",
    "business_address": {
      "street": "123 Innovation Drive",
      "city": "San Francisco",
      "state": "California"
    },
    "founders": [
      { "name": "Emma Richardson", "role": "CEO" },
      { "name": "Liam Patel", "role": "CTO" }
    ],
    "employees": 50,
    "website": "https://www.technova.ai",
    "mission_statement": "Empowering businesses with cutting-edge AI-driven solutions.",
    "description": "TechNova AI specializes in developing machine learning models...",
    "is_seeking_funding": true,
    "has_mvp": true
  }
]
```

## Error Responses

**404 - Endpoint Not Found:**
```json
{
  "message": "Endpoint not found. Please check the API documentation."
}
```

**400 - Invalid Field:**
```json
{
  "message": "Search field not allowed. Please use only 'country', 'continent', 'industry'"
}
```

## Project Structure

```
startup_planet/
├── controllers/
│   ├── getAllData.js          # Controller for filtered queries
│   └── getDataByPathParams.js # Controller for path parameter searches
├── routes/
│   └── apiRoutes.js           # API route definitions
├── data.js                    # Startup data
├── server.js                  # Express server setup
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

## Testing with curl

Pretty-print JSON responses using `jq`:
```bash
curl http://localhost:8000/api | jq
```

View response headers:
```bash
curl -i http://localhost:8000/api
```

Save response to file:
```bash
curl http://localhost:8000/api -o startups.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

**Khalid Oukoujane**

## License

ISC
