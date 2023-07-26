# 📄 SponsoredGigs Content Management System (CMS)

Welcome to SponsoredGigs CMS! This is an integral part of the SponsoredGigs ecosystem, designed specifically to manage jobs, posts, and the admin panel user data with ease.

Built on the robust Payload framework, this CMS offers a feature-rich platform for content management, complete with a RESTful API for interacting with different data collections, a GraphQL API for advanced querying, and even a webhook setup for seamless content updates.

For more technical details of Payload, check out the [official documentation](https://payloadcms.com/docs).

## 💡 How to Use
### Interacting with the REST API
Below are the key RESTful operations you can perform on the `jobs`, `posts`, and `users` endpoints:

| Endpoint | Operation | Description | Authentication |
| :--- | :--- | :--- | :--- |
| `/api/jobs` | GET | Fetch a list of jobs | No |
| `/api/jobs/{documentId}` | GET | Retrieve a specific job entry | No |
| `/api/jobs` | POST | Create a new job entry | Yes |
| `/api/jobs/{documentId}` | PATCH | Update a specific job entry | Yes |
| `/api/jobs/{documentId}` | DELETE | Delete a specific job entry | Yes |
| `/api/posts` | GET | Retrieve a list of posts | No |
| `/api/posts/{documentId}` | GET | Fetch a specific post entry | No |
| `/api/posts` | POST | Create a new post entry | Yes |
| `/api/post/{documentId}` | PATCH | Update a specific post entry | Yes |
| `/api/post/{documentId}` | DELETE | Delete a specific post entry | Yes |
| `/api/users` | GET | Retrieve a list of Editors | No |
| `/api/users/{documentId}` | GET | Fetch a specific user entry | No |
| `/api/users` | POST | Create a new user entry | Yes |
| `/api/user/{documentId}` | PATCH | Update a specific user entry | Yes |
| `/api/user/{documentId}` | DELETE | Delete a specific user entry | Yes |

### Querying the GraphQL API
Our CMS also provides a GraphQL API. To learn more about this, run the development build on your local machine and navigate to `/api/graphql`. You can also try the playground at `/api/graphql-playground`.

### Webhook
The CMS will trigger a new static site generation for [SponsoredGigs.com](https://www.sponsoredgigs.com) whenever there's any content update.

## 📋 Collection Schemas
Below are the schemas for the `Job`, `Post`, and `User` collections:

### 📂 Job
| Field | Required | Description |
| :--- | :---: | :--- |
| `title` | Yes | Job title |
| `level` | Yes | Job level: Internship, Entry Level, Associate, Mid-Senior Level, Director, Executive, Other |
| `industry` | Yes | Job industry: Information Technology, Healthcare and Medical Services, Education and Training, etc. |
| `url` | Yes | Job application URL |
| `description` | No | Job description |
| `company` | Yes | Hiring company |
| `companyUrl` | Yes | Hiring company's profile URL |
| `location` | Yes | Job location |
| `salary` | No | Job salary |

### 📄 Post
| Field | Required | Description |
| :--- | :---: | :--- |
| `title` | Yes | Post title |
| `content` | Yes | Post content |
| `media` | No | Post illustration |
| `slug` | Yes | URL path to the post |
| `minutesToRead` | Yes | Estimated read time (in minutes) |
| `author` | Yes | Post author (linked to `User` entity) |

### 👥 User
| Field | Required | Description |
| :--- | :---: | :--- |
| `fullName` | Yes | User's full name |
| `email` | Yes | User's email |
| `bio` | Yes | User's short information |
| `avatar` | No | User's profile picture |
| `role` | Yes | User role: Admin, Editor |


## 🛠️ Getting Started with Development
Here is how to start the CMS on your local machine with auto-reload enabled, then build and serve the CMS:

```sh
# Copy the example environment variables
cp .env.example .env

# Install dependencies
npm install
# or
yarn install

# Start a development server with auto-reload
npm run develop
# or
yarn develop

# Build and serve CMS (auto-reload disabled)
npm run build && npm run serve
# or
yarn build && yarn serve
```

Schema migration and plugins installation can only be done on the development server.

### Environment Variables
| Variable | Description |
| :--- | :--- |
| `MONGODB_URI` | MongoDB connection string |
| `PAYLOAD_SECRET` | Secret token for security |
| `PAYLOAD_PUBLIC_AWS_REGION` | AWS region |
| `AWS_KEY` | AWS access key ID |
| `AWS_SECRET` | AWS secret access key |
| `MAIL_HOST` | SMTP host |
| `MAIL_PORT` | SMTP port |
| `MAIL_USER` | SMTP username |
| `MAIL_PASS` | SMTP password |
| `MAIL_FROM_NAME` | SMTP sender email address |
| `MAIL_FROM_ADDRESS` | SMTP sender name |

### Plugins installed
- [Lexical](https://github.com/alessiogr/payload-plugin-lexical) - Rich text field using [lexical.dev](https://lexical.dev/)
- [S3 Upload](https://github.com/jeanbmar/payload-s3-upload) - Media storage

## 🚀 Continuous Integration and Delivery (CI/CD)
Each push to the `main` branch triggers the [publish workflow](.github/workflows/publish-ghcr.yaml), which builds and pushes a Docker image to a private registry. The CMS server then picks up this new build and updates itself with the latest image version.
