# Users & Posts Dashboard

## Installation
1. Clone the repo: `git clone https://github.com/pallavigowdasn/next-users-and-posts.git`
2. Navigate to the folder: `cd users-posts-dashboard`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open `http://localhost:3000` in your browser.

## Technologies Used
- Next.js
- React Query (for caching API data)
- Axios (for API calls)

## Features
- Fetch and display users.
- Select a user to view their posts.
- Optimized state management with React Query.
- Responsive UI.

## design and functionality
- UI Layout: The application displays a list of users in a flex grid. When a user is selected, their posts are shown below.
- API Handling: The app uses React Query to fetch users and posts. Errors are handled by displaying messages if API requests fail.


## Overview and Assumption
- the application is built with Next.js to leverage both server-side rendering (SSR) and client-side rendering (CSR) for optimal performance and SEO.
- React Query is used for fetching data and managing API calls for users and their posts, providing features like caching, synchronization, and automated retries.
- The app displays a list of users in a flexible grid layout, and upon selecting a user, their associated posts are fetched and displayed.


- The API provides endpoints for fetching users (GET /users) and posts (GET /posts?userId={id}), where userId filters posts by the selected user.
- the data structure includes:
 Users: Contain an id and name and address and company.
 Posts: Contain id, title, body, and userId to link posts to specific users.



