
# Resell Suite Starter

A monorepo for multi-app Expo (React Native) clients with a shared TypeScript workspace and a simple Express backend stub.

## Structure

```
resell-suite-starter/
├── apps/
│   ├── etsy/         # Expo app shell with placeholder screen
│   └── ebay/         # Second Expo shell (same scaffold)
├── backend/          # Express + TypeScript backend stub
├── packages/
│   ├── ui/           # Shared UI (Button component)
│   ├── config/       # Shared API base URL, constants
│   └── utils/        # Shared helpers
├── tooling/          # Lint config
├── package.json      # Root scripts and workspaces
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## First steps in Cursor (as discussed)

### 1) Unzip and open
Unzip and open the **resell-suite-starter/** folder in Cursor.

You should see `apps`, `packages`, `backend`, plus `package.json` and `tsconfig.base.json`.

### 2) Install everything
In the Cursor terminal:

```bash
npm install -g pnpm expo-cli eas-cli
pnpm install
```

### 3) Verify it runs

```bash
pnpm dev:etsy
```

This opens Expo’s Metro bundler. Press `a` for Android emulator or scan the QR code with Expo Go on iOS.
You should see:

> **ResellSnap – etsy**  
> A button labeled **Start Listing**

### 4) (Optional) Run the backend stub

```bash
cd backend
pnpm install
pnpm run dev
```

Visit <http://localhost:4000/v1/listings/test/generate> — it should return a JSON placeholder listing.

### 5) Type-check and lint

```bash
pnpm run typecheck
pnpm run lint
```

---

> Tip: This repo uses pnpm workspaces to link `packages/*` into apps and backend.
