# API Documentation

## Base URL
`http://localhost:5000/api`

## Authentication

### Login
- **Endpoint**: `POST /auth/login`
- **Body**: `{ "email": "admin@example.com", "password": "..." }`
- **Response**: `{ "token": "jwt...", "user": { ... } }`

### Get Current User
- **Endpoint**: `GET /auth/me`
- **Headers**: `Authorization: Bearer <token>`

## Tools

### Get All Tools
- **Endpoint**: `GET /tools`
- **Query Params**:
  - `category`: Filter by category
  - `platform`: Filter by OS (Windows, Linux, etc)
  - `license`: Filter by license (Free, Paid)
  - `search`: Search by name
- **Response**: Array of tool objects

### Get Single Tool
- **Endpoint**: `GET /tools/:id`

### Create Tool (Private)
- **Endpoint**: `POST /tools`
- **Headers**: `Authorization: Bearer <token>`
- **Body**: Tool Object (see Schema)

### Update Tool (Private)
- **Endpoint**: `PUT /tools/:id`
- **Headers**: `Authorization: Bearer <token>`

### Delete Tool (Private)
- **Endpoint**: `DELETE /tools/:id`
- **Headers**: `Authorization: Bearer <token>`
