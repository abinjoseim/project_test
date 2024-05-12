## Task 3

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

    
           

