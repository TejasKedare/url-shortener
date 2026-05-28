# URL Shortener API

A simple and scalable URL Shortener backend built using Node.js, Express.js, MongoDB, and Mongoose.

This project allows users to:

* Shorten long URLs
* Redirect users using short URLs
* Track click counts
* Learn backend architecture concepts like redirects, indexing, caching, and scalable API design

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nano ID

---

# Features

* Generate short URLs
* Redirect using short codes
* Track URL clicks
* MongoDB indexing for fast lookup
* Unique short code generation
* REST API architecture
* Clean folder structure

---

# Project Structure

```bash
src/
│
├── controllers/
├── models/
├── routes/
├── utils/
├── config/
├── app.js
└── server.js
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
cd url-shortener
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

## Start Development Server

```bash
npm run dev
```

---

# API Endpoints

## Create Short URL

### Request

```http
POST /api/url
```

### Request Body

```json
{
  "url": "https://google.com"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "url": "http://localhost:8080/abc123"
  },
  "message": "Your Url is Shortened"
}
```

---

## Redirect To Original URL

### Request

```http
GET /:shortCode
```

### Example

```http
GET /abc123
```

### Behavior

* Finds matching short code
* Increments click count
* Redirects user to original URL

---

# Database Schema

```js
{
  originalUrl: String,
  shortCode: String,
  clicks: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

# URL Redirection Flow

```text
Client Request
      ↓
GET /abc123
      ↓
Find shortCode in MongoDB
      ↓
Increment clicks
      ↓
Redirect user to original URL
```

---

# Important Concepts Used

## 302 Redirect

The project currently uses `302 Temporary Redirect`.

Why?

* Easier for development
* Prevents aggressive browser caching
* Better for analytics tracking

---

## MongoDB Indexing

`shortCode` is indexed for faster lookups.

```js
index: true
```

This improves redirect performance significantly.

---

## Nano ID

Nano ID is used to generate short and unique URL identifiers.

Example:

```text
abc123
xYz91K
```

---

# Future Improvements

* Redis caching
* URL expiration
* Custom aliases
* Authentication
* QR code generation
* Analytics dashboard
* Rate limiting
* Docker support
* Deployment support

---

# Learning Outcomes

This project demonstrates:

* REST API development
* MongoDB schema design
* URL validation
* Redirect handling
* Backend architecture thinking
* Database indexing
* Scalable
