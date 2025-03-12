# URL Shortener API

## Overview

This is a URL Shortener API built with **NestJS**, **TypeORM**, and **PostgreSQL**. It allows users to shorten long URLs and retrieve the original URL using the generated short code.

## Features

- Shorten a long URL and get a short code.
- Redirect to the original URL when accessing the short link.
- Store short URLs in a **PostgreSQL** database using **TypeORM**.
- Use **Docker Compose** to manage the application and database.
- Includes **pgAdmin** for database management.

## Tech Stack

- **NestJS** (Node.js Framework)
- **TypeORM** (ORM for PostgreSQL)
- **PostgreSQL** (Relational Database)
- **Docker & Docker Compose** (Containerization)
- **pgAdmin** (Database Management UI)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd shortener-api
   ```

2. **Create an `.env` file** in the project root and add the following:

   ```env
   PORT={YOUR_PORT}
   VERSION={YOUR_VERSION}
   DB_HOST={YOUR_DB_HOST}
   DB_PORT={YOUR_DB_PORT}
   DB_USER={YOUR_DB_USER}
   DB_PASS={YOUR_DB_PASS}
   DB_NAME={YOUR_DB_NAME}
   BASE_URL={YOUR_DB_BASE_URL}
   PGADMIN_DEFAULT_EMAIL={YOUR_DB_PGADMIN_DEFAULT_EMAIL}
   PGADMIN_DEFAULT_PASSWORD={YOUR_DB_PGADMIN_DEFAULT_PASSWORD}
   POSTGRES_PASSWORD={YOUR_DB_POSTGRES_PASSWORD}
   ```

3. **Run the project using Docker Compose**

   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - API: `${BASE_URL}/api/v1`
   - pgAdmin: `${BASE_URL}:5050`
     - Email: `${PGADMIN_DEFAULT_EMAIL}`
     - Password: `${PGADMIN_DEFAULT_PASSWORD}`

## API Endpoints

### 1. Shorten a URL

**Endpoint:** `POST /shorten`

**Request Body:**

```json
{
  "longUrl": "https://www.example.com/some/very/long/url"
}
```

**Response:**

```json
{
  "message": "Shortener created successfully",
  "statusCode": 201,
  "data": {
    "shortUrl": "412292"
  }
}
```

### 2. Redirect to the Original URL

**Endpoint:** `GET /:shortCode`

**Example:** `GET /412292`

This will redirect the user to `https://www.example.com/some/very/long/url`.

## Connecting to PostgreSQL with pgAdmin

1. Open `${BASE_URL}:5050` in your browser.
2. Log in with:
   - Email: `admin@admin.com`
   - Password: `pgadmin4`
3. Click **Add New Server** and enter:
   - **Name:** `Postgres` (any name you prefer)
   - **Host:** `db`
   - **Port:** `5432`
   - **Username:** `postgres`
   - **Password:** `postgres`
4. Click **Save** to connect.

## Stopping the Application

To stop and remove all containers, run:

```bash
docker-compose down
```

## License

This project is licensed under the **MIT License**.

## Author

[Emmanuel Dushime](https://github.com/dushimeemma)
