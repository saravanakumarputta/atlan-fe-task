# Online SQL Query executor MVP

This project demonstrates the ability to run the sql queries via browser and get the insights of the query, multiple tabs support and history of executed queries and an option to save queries.

[Walkthrough](https://www.loom.com/share/201252257f9d45b89e3de8e9c8300188?sid=40ac74ec-9f58-471b-bd44-251688406b76)

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
- Intial Performance was show below, Report generated via Lighthouse
<img width="1512" alt="Screenshot 2024-05-23 at 11 45 33 AM" src="https://github.com/saravanakumarputta/atlan-fe-task/assets/19649856/afa7ed3a-b4b3-4f0b-9c1d-b40420a5e8c5">
- Buid Statistics
<img width="718" alt="Screenshot 2024-05-23 at 11 47 00 AM" src="https://github.com/saravanakumarputta/atlan-fe-task/assets/19649856/8d12a08f-c75d-4cd8-9f89-7d7524fa1585">


### Optimisations made
- Implemented lazy loading for the heavy components 
- Adde useCallback whereever necessary to avoid the memory spikes.


## After performance
- Lightouse report
<img width="1511" alt="Screenshot 2024-05-23 at 11 56 24 AM" src="https://github.com/saravanakumarputta/atlan-fe-task/assets/19649856/dc7a6f0e-8c96-4127-8963-464bfacc6edd">
<img width="732" alt="Screenshot 2024-05-23 at 11 56 33 AM" src="https://github.com/saravanakumarputta/atlan-fe-task/assets/19649856/23442e1f-3f85-48d6-8268-b9b7425f9e37">
- Build Statistics
<img width="792" alt="Screenshot 2024-05-23 at 11 54 34 AM" src="https://github.com/saravanakumarputta/atlan-fe-task/assets/19649856/b5bc4074-5034-49fe-b6ff-f175a5e1bda6">


## Scripts

- `npm run dev` to run app in dev mode.
