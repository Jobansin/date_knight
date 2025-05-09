````markdown
# Date Knight

A college-only dating app that helps students form genuine connections before post-college life begins. Powered by:

- **Frontend:** React + Vite + Tailwind CSS
- **Backend Lambdas:** AWS Lambda (Node.js) for waitlist signup and unsubscribe flows
- **Database:** AWS DynamoDB
- **Email:** SendGrid (with fallback to AWS SES)
- **Local Dev:** Docker & Docker Compose with an Express shim

## Prerequisites

- Node.js v18+
- Docker Desktop (macOS/Windows) or Docker Engine (Linux)
- (Optional) AWS account & IAM credentials for real DynamoDB access
- SendGrid API key

## Environment Variables

Create a `.env` file at the project root (copy `.env.example`):

```bash
cp .env.example .env
# edit .env to insert your real SendGrid key
````

Contents of `.env`:

```dotenv
SENDGRID_API_KEY=SG.<your-key-here>
```

## Local Development

Spin up the full stack (frontend, Lambdas, local DynamoDB) with a single command:

```bash
docker-compose up --build
```

* Frontend available at: [http://localhost:3000](http://localhost:3000)
* POST `/join` and GET `/unsubscribe` endpoints proxied through Express to your Lambda handlers

### Commands Inside the Container

If you need to inspect the container:

```bash
docker-compose exec app sh
# Inside: ls -l dist  # verify built files
```

## Project Structure

```text
kinsubii/
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── package.json
├── server.js            # Express shim routing to Lambdas
├── dist/                # Frontend build output
├── lambda/
│   ├── SaveWaitlistEntry/
│   │   └── index.js     # Signup Lambda handler
│   └── DateKnightUnsubscribeHandler/
│       └── index.js     # Unsubscribe Lambda handler
└── src/                 # Frontend source (React + Vite)
```

## Scripts

```bash
npm run dev    # starts Vite dev server
npm run build  # builds frontend into dist/
npm run serve  # runs server.js locally (Express shim)
```

## Deployment

On each push to `main`, GitHub Actions will:

1. Build & zip both Lambda functions and update their code via AWS CLI
2. Redeploy the HTTP API Gateway (apigatewayv2)

Make sure your GitHub secrets include:

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `AWS_REGION`