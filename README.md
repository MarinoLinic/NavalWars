# Naval Wars

## How to Run

Go into the frontend folder, run `npm i` and then `npm run dev`.

## To Do

Project

- Implement cookie sessions
- Create user upon first login

Cornelius

Marino

- learn difference between async and await
- learn promises
- learn all React hooks
- learn how to make a custom hook
- watch UI tutorial

## Project Information

### Dependencies in the Frontend Folder

- Next.js
  - `npm create-next-app@latest --typescript` or ?
  - `npx create-next-app@latest --typescript`
- Prisma
  - `npm install prisma --save-dev`
  - `npx prisma`
  - `npx prisma generate`
  - `npx prisma db pull`
  - `npx prisma db push` or ↓ (DB push doesn't have history)
  - `npx prisma migrate dev --name newMigration` or `npx prisma migrate` when not in development mode
  - `npx prisma format`
  - `npx prisma studio`
- Tailwind CSS
  - `npm install tailwindcss`
  - `npm install postcss`
  - `npm install autoprefixer`
  - `npx tailwindcss init -p`
- Auth0
  - `npm install @auth0/nextjs-auth0`
- Radix UI
  - `npm install @radix-ui/react-dropdown-menu`
- Generate key in Node
  - `node -e "console.log(crypto.randomBytes(32).toString('hex'))"`

### External Programs

- HeidiSQL (client)
- MySQL (server only)
- Postman (REST API)
  - `http://localhost:3000/api/`
  - `http://localhost:3000/api/users`

### Recommended VS Code extensions

NECESSARY

- Prettier
- Prisma (syntax highlighting)
- Tailwind CSS IntelliSense

OPTIONAL

- GitLens
- Simple React Snippets
- Tabnine AI Autocomplete
- Auto Rename Tag
