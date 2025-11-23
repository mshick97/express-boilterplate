# Express TypeScript Boilerplate

An Express backend boilerplate setup with TypeScript, using Node.js native type stripping.

## Prerequisites

- Node.js 20.6+ (required for `--experimental-strip-types` for HMR development)
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mshick97/express-boilterplate.git
cd express-boilterplate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and configure your environment variables.

### 4. Run the development server

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or your configured PORT).

The dev server uses Node.js's experimental type stripping feature with watch mode, so it will automatically restart when you make changes.

## Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Compile TypeScript to JavaScript (output in `./dist`)
- **`npm test`** - Run tests

## Project Structure

```
.
├── src/
│   ├── app.ts          # Main application entry point
│   ├── routes/         # Route handlers
│   └── middleware/     # Express middleware (auth, validation, error handling, etc.)
├── dist/               # Compiled JavaScript (generated)
├── .env                # Environment variables (not in git)
├── .env.example        # Environment variables template
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Testing API Endpoints

### GET /

Test endpoint to verify the server is running.

**Response:**

```json
{
  "message": "Hello, World! Request IP: ::1"
}
```

## TypeScript Configuration

This project uses a strict TypeScript configuration to enforce best practices and catch common errors. Key features:

- Strict null checks
- No implicit any types
- No unused variables or parameters
- Consistent casing in file names

## Environment Variables

| Variable | Description        | Default |
| -------- | ------------------ | ------- |
| `PORT`   | Server port number | `3000`  |

## Development Notes

### Using Native Type Stripping

This project uses Node.js's `--experimental-strip-types` flag, which allows running TypeScript directly without a separate build step during development. This provides:

- Faster startup times
- No separate build watcher needed
- Simpler development workflow

### Production Build

For production, compile TypeScript to JavaScript:

```bash
npm run build
node dist/app.js
```
