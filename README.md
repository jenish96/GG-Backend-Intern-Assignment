# GG-Backend Intern Assignment
Assignment : Develop a Event Management System

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- MYSQL (and a database set up, you can use XAMPP server - use gg-events.sql for database)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jenish96/GG-Backend-Intern-Assignment.git

2. Install dependencies:
   ```bash
   npm install

3. Update the connection database : "YOUR DB NAME" in config -> db.js



## Postman - API Documentaion

- Check In Repository - GG-Backend Intern Assignment.postman_collection.json file Import in Postman


## APIs

* Create - create a Event
  ```bash
  http://127.0.0.1:5000/api/v1/events
  ```

* List - Find Events
    ```bash
  http://127.0.0.1:5000/api/v1/events/find
  ```

Pass Following Query Parameter
<pre>
<b>latitude  : 40.7128</b> 
<b>longitude : -74.0060</b> 
<b>date      : 2024-03-15</b> 
<b>page      : 1 </b> 
</pre> 

