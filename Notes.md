## Task 1

### Notes on current state of Database

- All Tables have primary key with data type character varying.
- Implemented indexing for the primary key column.
- Booking table doesn't have any foreign keys which relates to Parc and Users table. Without this data booking table doesn't make any sense.
- There is no relation between dumped data in table which make it difficult to run join query to get required data.
- Character varying data type is used everywhere without using appropriate data types based on value holding it.
- As there is no foreign key, foreign key indexing is not added.
- NOT NULL constraint is used to ensure field is not empty.

<br />

### Ways to improve Database

- When selecting primary keys, prioritize narrower data types to minimize storage requirements and enhance query performance, particularly in indexed columns.
- Consider using data types like SERIAL, BIGSERIAL or UUID data type for primary key. Using integer value will improve indexing.
- Introduce foreign keys in the booking table to establish associations with the User and Parc tables, thereby ensuring data integrity and enhancing overall data quality.
- Provide indexing for Foreign keys especially if it is frequently used in join query operations to speedup lookup process. Indexing frequently used fields will help improve query performance.
- Consider providing actions like ON UPDATE and ON DELETE clauses for foreign keys to maintain data integrity.
- Consider using correct data type for fields.For example, comments field in booking table can hold long comments, so we can USE TEXT data type.
- Incorporating a DEFAULT value constraint can ensure that non-null fields have a predetermined default value assigned to them.
- Postgres supports point-in-time-recovery(PITR), which will help recover database in a spcific point of time before an issue happens. Configure this to handle database recovery.
- Try using various tools to monitor database activities like performance, resource utilisation and backup status.

  
<br />
<br />
<br />

## Task 2


<br />
<br />
<br />


## Task 3 - [Frontend role]

### Project details

This Angular web application contains following routes:

  - `/bookings` <br />
  
     Route navigates to home page where user can create/list/delete bookings.
    
  - `/booking/:id` <br />
  
     Page provides booking details of booking Id provided as `:id`.
    
  - `/users`

      Route navigates to users page where user can see list of users.
     
  - `/parc`

      Route navigates to parc page where user can see list of parc.

<br />    

Modular approach is used to develop this application. It contains 5 main modules

 - `app.module.ts` - parent module.
 - `booking.module.ts` - booking module holds all booking features.
 - `users.module.ts` - users module holds all user features.
 - `parc.module.ts` - parc module holds all parc features.
 - `shared.module.ts` - shared module holds all reusable components, common service/helpers/interceptors to support application features

<br />  

All these modules are lazy loaded dynamically through routing (`app.routing.module.ts`). Whenever user navigates through different routes, corresponding modules will be loaded to help improve app performance.

<br />  

Tailwind CSS is utilized for styling and ensuring responsiveness within the application. Most of the styles are added in component template itself, but this can be improved by moving common styles in style.scss and component styling files.

<br />  

Application will retry api call one more time, if it fail with `500, 502` status codes (`http.interceptor.ts`). If it fails again after retry an error notification message will shown to user and it's corresponding data table will be empty.

<br />

Users have the capability to create bookings via a pop-up modal featuring dropdown menus populated with parc and user details retrieved from the database. Bookings are displayed in a table and can be deleted with the assistance of a confirmation modal.

<br />

`skeleton` and `spinner` are reusable components which can used in all modules.

<br />

- `http.interceptor.ts` - interceptor service to intercept all api calls made in this application. It can be used to add token, headers that are related to api. It can also include any logic that needs to done before and after api call is made.
- `http.service.ts` - service where http methods are defined.
- `error-handler.service.ts` - service used to process errors occurs is application.
- `response-handler.service.ts` - service used to translate response from api
    
           

