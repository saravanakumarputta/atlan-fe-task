# Online SQL Query executor MVP

This project demonstrates the ability to run the sql queries via browser and get the insights of the query, multiple tabs support and history of executed queries and an option to save queries.

## Features implemented

- Execute the custom SQL queries from editor or from the saved/recently executed queries from side menu.
- Saved Queries - query can be saved and it will be displayed in the side menu bar
- Query history - all executed queries are saved for the session.
- Multiple tabs - this helps in vast cases where the multiple queries results can be maintained instead of executing different queries in a sigle tab
- Virtualisation - handling large data sets to in the result set.
- Data export - result set of a query can be exported for smaller size of data.

## Libraries used

- `React.js` - for component based development
- `Typescript` - for fully typed components and to avoid most of the human errors.
- `tailwind.css` - for handling css.
- `shadcn/ui` - component library with bult-in accessibility and lean code, no boilerplates.
- `@radix-ui/react-icons` - for icons in the buttons and tabs.
- `@tanstack/react-table` - for handling the data table functionalities like sorting etc.,
- `@tanstack/react-virtual` - for displaying large set of data

## Performance

## Scripts

- `npm run dev` to run app in dev mode.
