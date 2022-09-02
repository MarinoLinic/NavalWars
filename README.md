# Naval Wars

## How to Run

Go into the frontend folder, run `npm i` and then `npm run dev`.

## To Do

##### Bugs

- Updating user data fails in certain places due to caching (navigation bar, leaving page then coming back to it)
  - Solution: Something async when loading data

##### Clean up

- fix: there are duplicate environment variables for the database URL

##### Project

- ~~Implement cookie sessions~~
- ~~Create user upon first login~~
- Clean up and make components modular
- Protect pages when user isn't logged in
- Add ability to change profile picture

##### Cornelius

- Nothing yet

##### Marino

- implement loading screen and handle errors
- make global Prisma client instead of declaring it every single time
- difference between getSession() and useSession()
- figure out next auth and what you did
- https://next-auth.js.org/getting-started/client
- figure out OAuth2
- what exactly is "npx prisma generate"?
- learn difference between async and await
- learn promises
- learn all React hooks
- learn how to make a custom hook
- learn getStaticProps
- rewatch SSG/SSR/CSR
- wtf is slug when talking about APIs
- watch UI tutorial

## Project Information

### Dependencies in the Frontend Folder

- Next.js
  - `npm create-next-app@latest --typescript` or ?
  - `npx create-next-app@latest --typescript`
- Prisma
  - `npm install prisma --save-dev`
  - `npx prisma`
  - `npx prisma generate` (you should run this after migrations, idk why yet)
  - `npx prisma db pull`
  - `npx prisma db push` or ↓ (DB push doesn't have history)
  - `npx prisma migrate dev --name newMigration` or `npx prisma migrate` when not in development mode
  - `npx prisma format`
  - `npx prisma studio`
- Tailwind CSS
  - `npm i tailwindcss postcss autoprefixer` or
    - `npm install tailwindcss`
    - `npm install postcss`
    - `npm install autoprefixer`
  - `npx tailwindcss init -p`
- Next Auth
  - `npm install next-auth`
  - `npm install @next-auth/prisma-adapter`
- Auth0
  - `npm install @auth0/nextjs-auth0`
- Radix UI
  - `npm install @radix-ui/react-dropdown-menu`
- Generate key in Node
  - `node -e "console.log(crypto.randomBytes(32).toString('hex'))"`

### External Programs

- HeidiSQL (client) | (or Prisma Studio)
- MySQL (server only)
- Postman (REST API)
  - `http://localhost:3000/api/`
  - `http://localhost:3000/api/users`

### Recommended VS Code extensions

##### NECESSARY

- Prettier
- Prisma (syntax highlighting)
- Tailwind CSS IntelliSense

##### OPTIONAL

- GitLens
- Simple React Snippets
- Tabnine AI Autocomplete
- Auto Rename Tag
- Reload
- Auto Comment Blocks
- Todo Tree

### Additional Helpful Snippets

##### HTTP Status Code Responses

- 200 - OK
- 201 - Created success
- 400 - Bad Request
- 403 - Forbidden
- 404 - Not Found
