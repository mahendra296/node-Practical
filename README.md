# Express.js Multi-Project Collection

A comprehensive collection of Express.js projects demonstrating different database ORM solutions (Direct MySQL, Prisma, and Drizzle) with practical URL shortener applications as the main use case.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Projects](#projects)
  - [URL Shortener (JSON Storage)](#1-url-shortener-json-storage---shortenerlexpress)
  - [URL Shortener (Prisma ORM)](#2-url-shortener-prisma-orm---shortenerlprismaexpress)
  - [URL Shortener (Drizzle + MySQL)](#3-url-shortener-drizzle--mysql---shortenerldrizzlemysqlexpress)
  - [URL Shortener (Drizzle + PostgreSQL)](#4-url-shortener-drizzle--postgresql---shortenerldrizzlepostgresexpress)
  - [Prisma MySQL Demo](#5-prisma-mysql-demo---prismamysql)
  - [Drizzle MySQL Demo](#6-drizzle-mysql-demo---drizzlemysql)
  - [Direct MySQL Demo](#7-direct-mysql-demo---mysql)
  - [Express Basics](#8-express-basics---environment)
- [Database Setup](#database-setup)
  - [MySQL Setup](#mysql-setup)
  - [PostgreSQL Setup](#postgresql-setup)
  - [Prisma Configuration](#prisma-configuration)
  - [Drizzle Configuration](#drizzle-configuration)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Database Schemas](#database-schemas)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This repository contains multiple Express.js projects that serve as educational resources for learning different approaches to building web applications with Node.js. The main focus is demonstrating different database integration patterns:

1. **Direct MySQL** - Raw SQL queries with `mysql2/promise`
2. **Prisma ORM** - Type-safe database client with migrations
3. **Drizzle ORM (MySQL)** - Lightweight TypeScript ORM with MySQL
4. **Drizzle ORM (PostgreSQL)** - Lightweight TypeScript ORM with PostgreSQL

Each approach is implemented in both a demo project and a full URL shortener application.

---

## Project Structure

```
expressJs/
├── shortenerlExpress/           # URL Shortener with JSON file storage
│   ├── config/                  # Database configuration
│   ├── controller/              # Request handlers
│   ├── data/                    # JSON data storage
│   ├── model/                   # Data access layer
│   ├── public/                  # Static assets (CSS, JS)
│   ├── routes/                  # API route definitions
│   ├── views/                   # EJS templates
│   └── index.js                 # Application entry point
│
├── shortenerlPrismaExpress/     # URL Shortener with Prisma ORM
│   ├── config/                  # Database configuration
│   ├── controller/              # Request handlers
│   ├── model/                   # Prisma data access layer
│   ├── prisma/                  # Prisma schema & migrations
│   ├── public/                  # Static assets
│   ├── routes/                  # API route definitions
│   ├── views/                   # EJS templates
│   └── index.js                 # Application entry point
│
├── shortenerlDrizzleMysqlExpress/    # URL Shortener with Drizzle ORM + MySQL
│   ├── config/                       # Database configuration
│   ├── controller/                   # Request handlers
│   ├── drizzle/                      # Drizzle schema & migrations
│   ├── model/                        # Drizzle data access layer
│   ├── public/                       # Static assets
│   ├── routes/                       # API route definitions
│   ├── views/                        # EJS templates
│   ├── drizzle.config.js             # Drizzle configuration
│   └── index.js                      # Application entry point
│
├── shortenerlDrizzlePostgresExpress/ # URL Shortener with Drizzle ORM + PostgreSQL
│   ├── config/                       # Database configuration (postgres-js)
│   ├── controller/                   # Request handlers
│   ├── drizzle/                      # Drizzle schema & migrations
│   ├── model/                        # Drizzle data access layer
│   ├── public/                       # Static assets
│   ├── routes/                       # API route definitions
│   ├── views/                        # EJS templates
│   ├── drizzle.config.js             # Drizzle configuration
│   └── index.js                      # Application entry point
│
├── prismaMysql/                 # Prisma MySQL demo project
│   ├── prisma/                  # Prisma schema & migrations
│   └── app.js                   # CRUD demo entry point
│
├── drizzleMySql/                # Drizzle MySQL demo project
│   ├── drizzle/                 # Drizzle schema & migrations
│   ├── drizzle.config.js        # Drizzle configuration
│   └── app.js                   # CRUD demo entry point
│
├── mysql/                       # Direct MySQL connection demo
│   └── app.js                   # Raw SQL demo entry point
│
├── environment/                 # Express.js basics demo
│   ├── public/                  # Static files
│   └── index.js                 # Basic Express features demo
│
└── README.md                    # This file
```

---

## Technologies Used

### Core Framework
| Package | Version | Description |
|---------|---------|-------------|
| Express.js | 5.2.1 | Fast, unopinionated web framework |

### Database & ORM
| Package | Version | Description |
|---------|---------|-------------|
| mysql2 | 3.15.3 | MySQL client for Node.js with Promise support |
| postgres | 3.4.8 | PostgreSQL client for Node.js |
| @prisma/client | 7.1.0 | Auto-generated type-safe database client |
| prisma | 7.1.0 | Prisma CLI for migrations and schema management |
| @prisma/adapter-mariadb | 7.1.0 | MariaDB adapter for Prisma |
| mariadb | 3.4.5 | MariaDB connector |
| drizzle-orm | 0.45.0 | Lightweight TypeScript ORM (MySQL & PostgreSQL) |
| drizzle-kit | 0.31.8 | Drizzle CLI for migrations |

### Templating & Utilities
| Package | Version | Description |
|---------|---------|-------------|
| EJS | 3.1.10 | Embedded JavaScript templating |
| Zod | 4.1.13 | TypeScript-first schema validation |
| dotenv | 17.2.3 | Environment variable management |
| tsx | 4.21.0 | TypeScript execution for Node.js |

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **MySQL** (v8.0 or higher) or **MariaDB** (v10.5 or higher) - For MySQL-based projects
- **PostgreSQL** (v14.0 or higher) - For PostgreSQL-based projects
- **Git** (optional) - For cloning the repository

### Verify Installation

```bash
node --version    # Should output v18.x.x or higher
npm --version     # Should output v9.x.x or higher
mysql --version   # Should output mysql Ver 8.x.x or higher
psql --version    # Should output psql 14.x or higher
```

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd expressJs
```

### 2. Install Dependencies for Each Project

```bash
# URL Shortener (JSON Storage)
cd shortenerlExpress
npm install

# URL Shortener (Prisma)
cd ../shortenerlPrismaExpress
npm install

# URL Shortener (Drizzle + MySQL)
cd ../shortenerlDrizzleMysqlExpress
npm install

# URL Shortener (Drizzle + PostgreSQL)
cd ../shortenerlDrizzlePostgresExpress
npm install

# Prisma Demo
cd ../prismaMysql
npm install

# Drizzle Demo
cd ../drizzleMySql
npm install

# MySQL Demo
cd ../mysql
npm install

# Express Basics
cd ../environment
npm install
```

### 3. Configure Environment Variables

Copy the example environment file and configure it for each project:

```bash
cp .env-example .env
# Edit .env with your database credentials
```

---

## Projects

### 1. URL Shortener (JSON Storage) - `shortenerlExpress`

A simple URL shortener that stores data in a JSON file. Perfect for learning Express.js basics without database complexity.

**Features:**
- Create shortened URLs
- Redirect to original URLs
- Delete shortened links
- View all links with click tracking

**Run:**
```bash
cd shortenerlExpress
npm run dev
```

**Access:** http://localhost:3000

---

### 2. URL Shortener (Prisma ORM) - `shortenerlPrismaExpress`

URL shortener using Prisma ORM for database operations. Demonstrates type-safe database queries and migrations.

**Features:**
- All features from JSON version
- MySQL database persistence
- Prisma migrations
- Type-safe queries

**Setup & Run:**
```bash
cd shortenerlPrismaExpress

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Start the application
npm run dev
```

**Access:** http://localhost:3000

---

### 3. URL Shortener (Drizzle + MySQL) - `shortenerlDrizzleMysqlExpress`

URL shortener using Drizzle ORM with MySQL. Demonstrates lightweight ORM approach with schema-first development.

**Features:**
- All features from JSON version
- MySQL database persistence
- Drizzle migrations
- Schema-driven development

**Setup & Run:**
```bash
cd shortenerlDrizzleMysqlExpress

# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Start the application
npm run dev
```

**Access:** http://localhost:3000

---

### 4. URL Shortener (Drizzle + PostgreSQL) - `shortenerlDrizzlePostgresExpress`

URL shortener using Drizzle ORM with PostgreSQL. Demonstrates Drizzle's PostgreSQL integration using the `postgres` (postgres.js) driver.

**Features:**
- All features from JSON version
- PostgreSQL database persistence
- Drizzle migrations with PostgreSQL dialect
- Schema-driven development using `pg-core`

**Setup & Run:**
```bash
cd shortenerlDrizzlePostgresExpress

# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Start the application
npm run dev
```

**Access:** http://localhost:3000

---

### 5. Prisma MySQL Demo - `prismaMysql`

A demonstration project showing Prisma ORM capabilities with a complete User-Post-Profile schema.

**Features:**
- User CRUD operations
- Post management with author relations
- Profile with one-to-one relation
- Role-based user types (USER, ADMIN, MODERATOR)

**Run:**
```bash
cd prismaMysql

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Execute demo
node app.js
```

---

### 6. Drizzle MySQL Demo - `drizzleMySql`

A demonstration project showing Drizzle ORM capabilities with a simple users table.

**Features:**
- User CRUD operations
- Drizzle query builder
- Migration management
- Drizzle Studio support

**Run:**
```bash
cd drizzleMySql

# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Execute demo
npm run dev

# Open Drizzle Studio (optional)
npm run db:studio
```

---

### 7. Direct MySQL Demo - `mysql`

Raw MySQL queries demonstration without ORM abstraction.

**Features:**
- Connection pooling
- Prepared statements
- Raw SQL queries
- Direct database interaction

**Run:**
```bash
cd mysql
node app.js
```

---

### 8. Express Basics - `environment`

Learn Express.js fundamentals including routing, middleware, and templating.

**Features:**
- Route parameters (`/profile/:userName`)
- Query parameters (`/product?productName=X`)
- Form handling
- Static file serving
- Environment variables

**Run:**
```bash
cd environment
npm run dev
```

**Access:** http://localhost:3000

---

## Database Setup

### MySQL Setup

#### 1. Install MySQL

**Windows:**
Download and install from [MySQL Downloads](https://dev.mysql.com/downloads/mysql/)

**macOS:**
```bash
brew install mysql
brew services start mysql
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
```

#### 2. Create Database

```sql
-- Connect to MySQL
mysql -u root -p

-- Create databases for each project
CREATE DATABASE shortener_db;
CREATE DATABASE prisma_demo;
CREATE DATABASE drizzle_demo;

-- Create a dedicated user (recommended)
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON shortener_db.* TO 'app_user'@'localhost';
GRANT ALL PRIVILEGES ON prisma_demo.* TO 'app_user'@'localhost';
GRANT ALL PRIVILEGES ON drizzle_demo.* TO 'app_user'@'localhost';
FLUSH PRIVILEGES;
```

#### 3. Create Tables (for Direct MySQL projects)

```sql
USE shortener_db;

CREATE TABLE short_links (
    id INT AUTO_INCREMENT PRIMARY KEY,
    short_code VARCHAR(255) NOT NULL UNIQUE,
    url VARCHAR(2048) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### PostgreSQL Setup

#### 1. Install PostgreSQL

**Windows:**
Download and install from [PostgreSQL Downloads](https://www.postgresql.org/download/windows/)

**macOS:**
```bash
brew install postgresql@14
brew services start postgresql@14
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

#### 2. Create Database

```sql
-- Connect to PostgreSQL
psql -U postgres

-- Create database
CREATE DATABASE shortener_postgres_db;

-- Create a dedicated user (recommended)
CREATE USER app_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE shortener_postgres_db TO app_user;

-- Connect to the new database and grant schema permissions
\c shortener_postgres_db
GRANT ALL ON SCHEMA public TO app_user;
```

#### 3. Connection String Format

```
postgresql://user:password@localhost:5432/database_name
```

---

### Prisma Configuration

#### 1. Schema Definition

Located at `prisma/schema.prisma`:

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model shortLinks {
  id         Int    @id @default(autoincrement())
  short_code String @unique
  url        String
}
```

#### 2. Initialize Prisma

```bash
# Initialize Prisma in a new project
npx prisma init

# Generate Prisma Client
npx prisma generate

# Create and apply migrations
npx prisma migrate dev --name init

# Open Prisma Studio
npx prisma studio
```

#### 3. Common Prisma Commands

| Command | Description |
|---------|-------------|
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma migrate dev` | Create and apply migrations (development) |
| `npx prisma migrate deploy` | Apply migrations (production) |
| `npx prisma db push` | Push schema changes without migrations |
| `npx prisma studio` | Open visual database editor |
| `npx prisma db seed` | Run database seeding |

---

### Drizzle Configuration

#### MySQL Schema Definition

Located at `drizzle/schema.js` (MySQL projects):

```javascript
import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const shortLinkTable = mysqlTable("short_links", {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 255 }).notNull().unique(),
});
```

#### PostgreSQL Schema Definition

Located at `drizzle/schema.js` (PostgreSQL projects):

```javascript
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const shortLinkTable = pgTable("short_links", {
  id: serial("id").primaryKey(),
  url: varchar("name", { length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 255 }).notNull().unique(),
});
```

#### Drizzle Config (MySQL)

Located at `drizzle.config.js`:

```javascript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle/migrations",
  schema: "./drizzle/schema.js",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
```

#### Drizzle Config (PostgreSQL)

Located at `drizzle.config.js`:

```javascript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
```

#### Common Drizzle Commands

| Command | Description |
|---------|-------------|
| `npm run db:generate` | Generate SQL migrations from schema |
| `npm run db:migrate` | Apply pending migrations |
| `npm run db:studio` | Open Drizzle Studio |

---

## Environment Variables

### Required Variables

Create a `.env` file in each project directory:

#### For Direct MySQL Projects

```env
# Server Configuration
PORT=3000

# Database Configuration
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=your_password
DATABASE_NAME=shortener_db
DATABASE_PORT=3306
```

#### For Prisma Projects

```env
# Server Configuration
PORT=3000

# Database URL (Prisma format)
DATABASE_URL="mysql://user:password@localhost:3306/database_name"

# Individual credentials (for adapter)
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=your_password
DATABASE_NAME=shortener_db
```

#### For Drizzle Projects (MySQL)

```env
# Server Configuration
PORT=3000

# Database URL
DATABASE_URL="mysql://user:password@localhost:3306/database_name"
```

#### For Drizzle Projects (PostgreSQL)

```env
# Server Configuration
PORT=3000

# Database URL
DATABASE_URL="postgresql://user:password@localhost:5432/database_name"
```

### Environment Variable Reference

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port number | `3000` | No |
| `DATABASE_URL` | Full database connection URL | - | Yes (Prisma/Drizzle) |
| `DATABASE_HOST` | Database server hostname | `localhost` | Yes (Direct MySQL) |
| `DATABASE_USER` | Database username | - | Yes |
| `DATABASE_PASSWORD` | Database password | - | Yes |
| `DATABASE_NAME` | Database name | - | Yes |
| `DATABASE_PORT` | Database port | `3306` | No |

---

## API Reference

### URL Shortener Endpoints

All URL shortener projects share the same API structure:

#### GET `/`

Display the main page with all shortened links.

**Response:** HTML page with form and link list

---

#### POST `/`

Create a new shortened URL.

**Request Body:**
```
Content-Type: application/x-www-form-urlencoded

url=https://example.com/very-long-url
```

**Response:** Redirect to `/` with new link displayed

---

#### GET `/shortCode/:shortCode`

Redirect to the original URL.

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `shortCode` | string | The generated short code |

**Response:** 302 Redirect to original URL

**Example:**
```
GET /shortCode/abc123
→ 302 Redirect to https://example.com/original-url
```

---

#### POST `/delete/:shortCode`

Delete a shortened link.

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `shortCode` | string | The short code to delete |

**Response:** Redirect to `/`

---

#### GET `/report`

Display the report page.

**Response:** HTML report page

---

### Express Basics Endpoints (environment project)

#### GET `/profile/:userName`

Display user profile page.

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `userName` | string | Username to display |

**Example:**
```
GET /profile/john
→ Profile page for "john"
```

---

#### GET `/product`

Display product page with query parameter.

**Query Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `productName` | string | Product name to display |

**Example:**
```
GET /product?productName=Laptop
→ Product page for "Laptop"
```

---

#### POST `/contract`

Handle contract form submission.

**Request Body:**
```
Content-Type: application/x-www-form-urlencoded

name=John&email=john@example.com&message=Hello
```

**Response:** Confirmation page

---

## Database Schemas

### Prisma Demo Schema (prismaMysql)

```prisma
model user {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  password  String
  role      user_role @default(USER)
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  post      post[]
  profile   profile?
}

model post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  Int
  createdAt DateTime @default(now())
  user      user     @relation(fields: [authorId], references: [id])
}

model profile {
  id     Int     @id @default(autoincrement())
  bio    String?
  avatar String?
  userId Int     @unique
  user   user    @relation(fields: [userId], references: [id], onDelete: Cascade)
}

enum user_role {
  USER
  ADMIN
  MODERATOR
}
```

### URL Shortener Schema (Prisma)

```prisma
model shortLinks {
  id         Int    @id @default(autoincrement())
  short_code String @unique
  url        String
}
```

### URL Shortener Schema (Drizzle - MySQL)

```javascript
export const shortLinkTable = mysqlTable("short_links", {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 255 }).notNull().unique(),
});
```

### URL Shortener Schema (Drizzle - PostgreSQL)

```javascript
export const shortLinkTable = pgTable("short_links", {
  id: serial("id").primaryKey(),
  url: varchar("name", { length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 255 }).notNull().unique(),
});
```

### Drizzle Demo Schema

```javascript
export const usersTable = mysqlTable("users_table", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
```

---

## Available Scripts

### shortenerlExpress

```bash
npm run dev      # Start with hot reload (--watch)
npm run debug    # Start with debugging (--inspect)
```

### shortenerlPrismaExpress

```bash
npm run dev      # Start with hot reload
npm run debug    # Start with debugging
```

### shortenerlDrizzleMysqlExpress

```bash
npm run dev         # Start with hot reload
npm run debug       # Start with debugging
npm run db:generate # Generate Drizzle migrations
npm run db:migrate  # Apply migrations
npm run db:studio   # Open Drizzle Studio
```

### shortenerlDrizzlePostgresExpress

```bash
npm run dev         # Start with hot reload
npm run debug       # Start with debugging
npm run db:generate # Generate Drizzle migrations
npm run db:migrate  # Apply migrations
npm run db:studio   # Open Drizzle Studio
```

### drizzleMySql

```bash
npm run dev         # Start with hot reload
npm start           # Start without hot reload
npm run db:generate # Generate migrations
npm run db:migrate  # Apply migrations
npm run db:studio   # Open Drizzle Studio
```

### environment

```bash
npm run dev      # Start with hot reload
npm run debug    # Start with debugging
```

---

## Architecture

### MVC Pattern

All projects follow the Model-View-Controller (MVC) architectural pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT                                │
│                    (Browser/HTTP)                            │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                      ROUTES                                  │
│              (routes/shortner.js)                            │
│         Define URL patterns and HTTP methods                 │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    CONTROLLER                                │
│            (controller/shortner.js)                          │
│      Handle requests, call models, render views              │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                       MODEL                                  │
│              (model/shortLinks.js)                           │
│         Data access layer (DB queries/file I/O)              │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     DATABASE                                 │
│           MySQL / MariaDB / JSON File                        │
└─────────────────────────────────────────────────────────────┘
```

### Request Flow

1. **Client** sends HTTP request
2. **Express Router** matches URL pattern to route handler
3. **Controller** processes request logic
4. **Model** interacts with database/storage
5. **View** (EJS template) renders HTML response
6. **Response** sent back to client

### Database Connection Patterns

#### Direct MySQL (mysql2/promise)

```javascript
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Usage
const [rows] = await pool.execute("SELECT * FROM short_links");
```

#### Prisma ORM

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Usage
const links = await prisma.shortLinks.findMany();
```

#### Drizzle ORM (MySQL)

```javascript
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

// Usage
const links = await db.select().from(shortLinkTable);
```

#### Drizzle ORM (PostgreSQL)

```javascript
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

// Usage
const links = await db.select().from(shortLinkTable);
```

---

## Comparison: Prisma vs Drizzle vs Raw SQL

| Feature | Raw SQL | Prisma | Drizzle |
|---------|---------|--------|---------|
| **Learning Curve** | Low | Medium | Medium |
| **Type Safety** | None | Full | Full |
| **Performance** | Best | Good | Excellent |
| **Bundle Size** | Smallest | Large | Small |
| **Migrations** | Manual | Built-in | Built-in |
| **Query Building** | Manual | Fluent API | SQL-like |
| **Schema Definition** | SQL | Prisma Schema | JavaScript/TS |
| **Visual Studio** | No | Prisma Studio | Drizzle Studio |
| **Relations** | Manual JOINs | Automatic | Manual |

### When to Use Each

**Raw SQL:**
- Simple projects
- Maximum performance needed
- Full control over queries
- Learning SQL

**Prisma:**
- Rapid development
- Complex relations
- Full type safety
- Auto-generated client

**Drizzle:**
- Lightweight applications
- SQL-like syntax preference
- Serverless/Edge deployments
- Small bundle size required
- Multi-database support (MySQL, PostgreSQL, SQLite)

---

## Troubleshooting

### Common Issues

#### 1. MySQL Database Connection Failed

```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

**Solution:**
- Ensure MySQL server is running
- Check DATABASE_URL or connection credentials
- Verify firewall settings

#### 2. PostgreSQL Database Connection Failed

```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Solution:**
- Ensure PostgreSQL server is running
- Check DATABASE_URL format: `postgresql://user:password@localhost:5432/database`
- Verify user permissions and database exists

#### 3. Prisma Client Not Generated

```
Error: @prisma/client did not initialize yet
```

**Solution:**
```bash
npx prisma generate
```

#### 4. Drizzle Migrations Not Found

```
Error: No migrations found
```

**Solution:**
```bash
npm run db:generate
npm run db:migrate
```

#### 5. Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
- Change PORT in `.env` file
- Kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F

  # macOS/Linux
  lsof -i :3000
  kill -9 <PID>
  ```

#### 6. Environment Variables Not Loading

**Solution:**
- Ensure `.env` file exists in project root
- Check file is named exactly `.env` (not `.env.txt`)
- Restart the application after changes

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use consistent indentation (2 spaces)
- Follow the existing project structure
- Add comments for complex logic
- Update documentation for new features

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Resources

### Official Documentation

- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [MySQL](https://dev.mysql.com/doc/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [postgres.js (Node.js client)](https://github.com/porsager/postgres)
- [EJS Templates](https://ejs.co/)

### Tutorials

- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Prisma Getting Started](https://www.prisma.io/docs/getting-started)
- [Drizzle Quick Start (MySQL)](https://orm.drizzle.team/docs/get-started-mysql)
- [Drizzle Quick Start (PostgreSQL)](https://orm.drizzle.team/docs/get-started-postgresql)

---

## Contact

For questions, issues, or suggestions, please open an issue in the repository.

---

**Happy Coding!**
