# Wanderlust

Wanderlust is a web application designed to facilitate property rental listings, inspired by Airbnb. It allows property owners to list their accommodations, such as houses, hotels, apartments, etc., while users can search for and book these rentals. The platform provides a user-friendly interface for seamless property management and booking experiences.

## Live Link

Check out the live application: [Wanderlust](https://wanderlust-a-hospitality-service-platform.onrender.com/listings)

## Purpose of Project

The primary purpose of Wanderlust is to simplify the process of renting accommodations for both property owners and travelers. By providing a centralized platform for listing and booking properties, the project aims to enhance the overall rental experience and streamline property management tasks.

## For Whom You Developed It

Wanderlust was developed for property owners who wish to rent out their accommodations and for travelers seeking rental properties for short-term stays. The platform caters to both parties, providing property owners with a platform to market their properties and users with a convenient way to discover and book accommodations.

## Features

Wanderlust offers a range of features to meet the needs of property owners and users, including:

- **Property listing management**: Owners can list various types of accommodations, maintain listing details, and perform CRUD operations on their listings.
- **User authentication and authorization**: Secure user accounts are implemented with hashing, salting, and authentication middleware using Passport.js.
- **Review system**: Users can leave reviews on listings, providing valuable feedback to property owners and helping other users make informed decisions.
- **Location functionality**: The project integrates geocoding and GeoJSON for efficient property searches based on location.
- **Error handling and form validation**: Middleware components handle errors gracefully and ensure data integrity through form validation using Joi.
- **Session management**: Web cookies and Express sessions are utilized for managing user sessions securely.

## Impact of Project

Wanderlust simplifies the process of renting accommodations, making it easier for property owners to market their properties and for travelers to find suitable rentals. The platform's user-friendly features enhance the overall rental experience, resulting in increased convenience and satisfaction for users.

## Tech Stack

Wanderlust utilizes a variety of technologies and frameworks, including:

- **Frontend**: HTML, CSS, Bootstrap, JavaScript, and EJSmate for templating.
- **Backend**: Node.js and Express.js for server-side logic and API endpoints.
- **Database**: MongoDB for storing data related to user accounts, property listings, reviews, and more.
- **Additional Libraries**: Multer for handling multipart form data, Passport.js for authentication middleware, and other middleware components for enhanced functionality.

## Challenges and Solutions

One of the challenging aspects of the project was implementing location functionality. This involved integrating geocoding and GeoJSON for efficient property searches. To overcome this challenge, thorough research and understanding of geocoding APIs and GeoJSON data structures were conducted. Proper integration and testing of location-related features were also essential for seamless functionality.

## Future Scope

Wanderlust has significant potential for future enhancements, such as integrating with external APIs for additional features, implementing advanced search filters, incorporating messaging functionality, and expanding to support multiple languages and currencies for global accessibility.

## Learning from the Project

Through Wanderlust, valuable learning experiences were gained in frontend and backend development, user experience design, data validation, security measures, and problem-solving skills. The project provided a comprehensive understanding of building scalable and user-centric web applications, preparing for future endeavors in web development.
