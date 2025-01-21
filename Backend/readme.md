# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, required): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain account. Must be at least 8 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (integer, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be at least 3 characters long.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "Sedan"
  }
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "Sedan"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Last name must be at least 3 characters long",
        "param": "fullname.lastname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 8 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Vehicle type must be at least 3 characters long",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First Name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized Access"
  }
  ```

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint is used to log out the authenticated user and blcklist the token provided in cookie or headers.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized Access"
  }
  ```

# Authorization

## Middleware

### Description
The authorization middleware is used to protect routes that require authentication. It checks for a valid JWT token in the request cookies or headers.

### Example Usage
```javascript
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);
router.get("/logout", authMiddleware.authUser, userController.logoutUser);
```

### Responses

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized Access"
  }
  ```