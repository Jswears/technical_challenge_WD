# Mobile Phone Catalog Backend

This is a Node.js and Express backend for a mobile phone catalog web application. It provides several endpoints to retrieve information about mobile phones.

## Technologies Used

- Node.js
- Express

## Endpoints

### All Phones

- **Endpoint:** `/phones`
- **Description:** Returns a list of all mobile phones available in the catalog.

### Phone Details

- **Endpoint:** `/phones/:id`
- **Description:** Returns detailed information about a specific mobile phone based on its unique ID.

### Health Check

- **Endpoint:** `/`
- **Description:** A simple health check endpoint that returns "All good in here" to verify that the server is running.

## Installation and Running

To run this backend locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Jswears/technical_challenge_WD
   ```

2. Navigate to the project directory:

   ```bash
   cd phones-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm run start
   ```

The server will run on port 5005 by default.

## Usage

You can use this backend to serve data to your frontend application. Configure your frontend to make API requests to the endpoints mentioned above to retrieve mobile phone information.

## Error Handling

- If a requested phone ID does not exist, the endpoint `/phones/:id` will return a 404 error with a message: "Phone not found."

- If there's an internal server error, such as a failure to fetch data, the endpoint will return a 500 error with the message: "Internal server error."

## Contact

For questions or feedback, please contact [j.swearssalinas@gmail.com](mailto:j.swearssalinas@gmail.com).
