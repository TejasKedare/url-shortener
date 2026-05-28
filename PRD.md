# Product Requirements Document (PRD)

# Project Name

URL Shortener & Analytics Platform

---

# Overview

A scalable URL Shortener platform that allows users to create, manage, and track shortened URLs with authentication, role-based access control, analytics, and subscription tiers.

The platform focuses on backend architecture, redirect performance, analytics tracking, caching strategies, authentication flows, and scalable API design.

---

# Goals

* Allow users to shorten long URLs
* Support secure user authentication
* Provide analytics for shortened URLs
* Implement role and tier-based authorization
* Build scalable redirect architecture
* Learn real-world backend engineering concepts

---

# Target Users

## Guest Users

* Can access redirected URLs
* Cannot create/manage URLs

## Normal Users

* Register/Login
* Create short URLs
* View limited analytics
* Manage personal URLs

## Pro Users

* Advanced analytics
* Custom aliases
* Higher rate limits
* URL expiration control
* QR code generation

## Super Admin

* Manage users
* View platform analytics
* Ban/deactivate users
* Manage plans and permissions
* Monitor system activity

---

# Core Features

# Authentication & Authorization

## Register

Users can create accounts using:

* Name
* Email
* Password

### Requirements

* Email uniqueness validation
* Password hashing
* JWT authentication

---

## Login

Users can authenticate using:

* Email
* Password

### Requirements

* Access token generation
* Refresh token support
* Secure cookie/token handling

---

## Forgot Password

Users can request password reset links.

### Flow

User Email
↓
Generate Reset Token
↓
Send Email
↓
Reset Password

---

## Change Password

Authenticated users can change their password.

### Requirements

* Verify current password
* Validate new password strength

---

# URL Shortening

## Create Short URL

### Input

Long URL

### Output

Short URL

### Example

Original:
https://google.com/some/very/long/url

Short:
https://domain.com/abc123

---

## Redirect Handling

### Flow

GET /abc123
↓
Find URL Mapping
↓
Increment Click Count
↓
Redirect User

### Requirements

* Fast lookup
* Database indexing
* Optimized redirect response

---

# URL Management

Users can:

* View all created URLs
* Delete URLs
* Edit destination URLs
* Enable/disable URLs

---

# Analytics

## Basic Analytics

* Total clicks
* Created date
* Last visited date

## Advanced Analytics (Pro)

* Country tracking
* Device tracking
* Browser tracking
* Referrer tracking
* Daily click statistics

---

# Role-Based Authorization

## Roles

### USER

Basic access

### PRO

Premium feature access

### SUPER_ADMIN

Full platform control

---

# Tier Permissions

| Feature            | User | Pro | Super Admin |
| ------------------ | ---- | --- | ----------- |
| Create Short URLs  | Yes  | Yes | Yes         |
| Custom Alias       | No   | Yes | Yes         |
| Advanced Analytics | No   | Yes | Yes         |
| URL Expiration     | No   | Yes | Yes         |
| User Management    | No   | No  | Yes         |
| Platform Analytics | No   | No  | Yes         |

---

# Technical Requirements

# Backend Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Nano ID
* Redis (Future)

---

# Database Collections

## Users Collection

Fields:

* name
* email
* password
* role
* refreshToken
* createdAt

---

## URLs Collection

Fields:

* originalUrl
* shortCode
* clicks
* createdBy
* expiresAt
* isActive
* lastVisitedAt
* createdAt

---

# API Modules

## Auth Module

* Register
* Login
* Logout
* Forgot Password
* Reset Password
* Change Password

## URL Module

* Create URL
* Redirect URL
* Delete URL
* Update URL
* Get User URLs

## Admin Module

* Get all users
* Ban users
* Manage plans
* View analytics

---

# Security Requirements

* Password hashing using bcrypt
* JWT authentication
* Role-based middleware
* Input validation
* Rate limiting
* Secure HTTP headers
* URL protocol validation
* CORS protection

---

# Performance Requirements

* Indexed shortCode lookups
* Optimized redirect performance
* Redis caching for redirects
* Efficient analytics queries

---

# Future Enhancements

* Redis caching
* QR code generation
* Team collaboration
* Custom domains
* Subscription payments
* API usage limits
* Dashboard UI
* Geo analytics
* Link previews

---

# Non-Functional Requirements

* Scalable architecture
* Clean folder structure
* Modular controllers/services
* Proper error handling
* Reusable middleware
* RESTful API design

---

# Suggested Folder Structure

```bash
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── validators/
├── jobs/
├── cache/
└── app.js
```

---

# Learning Outcomes

This project demonstrates understanding of:

* Authentication systems
* Authorization systems
* REST APIs
* Redirect architecture
* MongoDB indexing
* Backend scalability
* Analytics tracking
* Caching strategies
* Secure backend development
* System design fundamentals

---

# Success Metrics

* Fast redirect response time
* Secure authentication flow
* Stable API architecture
* Accurate analytics tracking
* Scalable database queries
* Clean maintainable codebase
