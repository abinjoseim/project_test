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
- Postgres supports point-in-time-recovery (PITR), which will help recover database in a specific point of time before an issue happens. Configure this to handle database recovery.
- Try using various tools to monitor database activities like performance, resource utilisation and backup status.

  
<br />
<br />
<br />

## Task 2

As a Frontend Developer, I design and develop responsive, mobile-first, user-friendly interfaces for diverse projects such as SaaS platforms, ecommerce websites, and managed service products. My tasks include creating mockups and prototypes, adhering to best practices and coding standards during implementation. I collaborate with UX designers to enhance user experience based on feedback and maintain consistant communication with backend engineers to ensure smooth data flow. Additionally, I mentor junior developer, document frontend code and actively participate in requirement gathering and project planning with product owners and stakeholders to ensure successful project delivery.

<br />

My expertise lies in TypeScript, JavaScript, Tailwind and in frameworks like Angular and React. Here is some of my latest practices using these technologies to enhance user experience and improve performance:

- Microfrontend Architecture
  - This architecture facilitate the decomposition of the entire user interface into smaller, more manageable modules, promoting scalability and facilitating cross-application integration. I have implemented this architecture using React to seamlessly integrate a builder tool(tool used to build adverts) into our main SaaS platform. Additionally, I have developed UI for two managed service platforms for analytics and campaign creation using React and Angular frameworks.

- Component based Architecture
  - Utilizing React and Angular, I've identified reusable components and structured them to seamlessly integrate across multiple modules, enhancing efficiency and minimizing code redundancy. For instance, components like buttons, cards, spinners, and pagers can be employed across various sections of the application.
 
- Responsive web design
  - By using frameworks like Tailwind and Bootstrap I make sure users have a seamless experience across various devices and screen sizes.

- Performance Optimisation
  - Have implemented lazy loading, assets optimisation and enable caching to reduce lod time and improve performance. Made use of bundler like Webpack to support code splitting to load multiple bundles dynamically to improve performance.

- State management
  - Have implemented state management using Redux with React/Angular in large application to manage state of different complex user journeys such as Advertisement campaign creation and Advert building.

- Test Driven Development
  - Employing Test Driven Development (TDD), I constructed a managed service product in React. This involved identifying components, writing tests for their intended functionality, developing the components, running tests, and refining until they passed the test cases. For instance, I implemented a form component that submits data upon clicking the submit button.
 
- CI/CD
  - Implemented pipelines for building, testing and deploying application frontend using tools like GitLab CI/CD Actions.

- Best practices and coding standards
  - Make use of semantic HTML, Accessibility checks by following WCAG standards, consistent formatting, and naming convention etc. Ensure application is cross browser compactable and use version control tool like Git. And finally write documentation for easier understanding by other developers who work on it.

<br />

Furthermore, I possess proficiency in Node.js and databases such as MySQL and SQLite, as the projects I've engaged with utilized Node.js for their backend. In previous roles, I contributed to the development of REST APIs in Node.js for feature modules, encompassing CRUD operations to oversee products on an ecommerce platform.

In my daily workflow, I utilize tools like Figma to craft prototype screens for my projects, particularly within various microfrontend contexts. These created screens are then shared with the design team for review and approval.


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

Application will retry api call one more time, if it fail with `500, 502` status codes (`http.interceptor.ts`). If it fails again after retrying an error notification message will be shown to user and it's corresponding data table will be empty.

<br />

Users have the capability to create bookings via a pop-up modal featuring dropdown menus populated with parc and user details retrieved from the database. Bookings are displayed in a table and can be deleted with the assistance of a confirmation modal.

<br />

`skeleton` and `spinner` are reusable components which can used in all modules.

<br />

- `http.interceptor.ts` - interceptor service to intercept all api calls made in this application. It can be used to add token, headers that are related to api. It can also include any logic that needs to do before and after api call is made.
- `http.service.ts` - service where http methods are defined.
- `error-handler.service.ts` - service used to process errors occurs is application.
- `response-handler.service.ts` - service used to translate response from api
    
           

