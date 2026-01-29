# System Architecture

## Overview
The OSINT Tool Management System follows a classic MVC (Model-View-Controller) architecture on the backend and a Component-based architecture on the frontend.

## Diagram (Textual)

[ Client (React) ] <---> [ REST API (Express) ] <---> [ Database (MongoDB) ]

## Database Schema

### User (Admin)
- `username`: String
- `email`: String (Unique)
- `password`: String (Hashed)
- `role`: String ('admin')

### Tool
- `tool_name`: String
- `category`: String (e.g., 'People OSINT')
- `description`: String
- `platform_supported`: Array[String]
- `license_type`: String
- `download_link`: String
- `user`: Ref(User)

## Security
- **Authentication**: JWT Strategy.
- **Password Has**: Bcrypt.
- **Route Protection**: Middleware ensures only valid Tokens can access Admin routes.
- **CORS**: Enabled for frontend communication.
