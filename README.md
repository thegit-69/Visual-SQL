# Capstone Monorepo

Monorepo architecture separating the frontend and backend.

## Structure

```text
├── frontend/        # React + Vite + TypeScript + Tailwind CSS
├── backend/         # Backend service directory
├── package.json     # Root workspace configuration
└── README.md
```

## Getting Started

### Frontend Development

From the root:
```bash
npm run dev:frontend
```
Or directly within the `frontend` folder:
```bash
cd frontend
npm run dev
```

### Build

```bash
npm run build:frontend
```
