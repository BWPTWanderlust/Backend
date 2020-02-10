# Backend
Wanderlust Node Backend

Backend url
## https://bewanderlust.herokuapp.com


# Endpoints
----------------------------


 ## User Registration

 | HTTP | Endpoint                |
 | -----|------------------------ |
 | POST | /api/auth/register/user |
 | Fields      |          Data            |
 |-------------|------------------------- |
 | username    | unique string (required) |
 | password    | string (required)        |
 | name        | string (required)        |
 | email       | string (optional)        |
 | bio         | string (optional)        |


## Organizer Registration  

 | HTTP | Endpoint                |
 | -----|------------------------ |
 | POST | /api/auth/register/org |
 | Fields      |          Data            |
 |-------------|------------------------- |
 | username    | unique string (required) |
 | password    | string (required)        |
 | name        | string (required)        |
 | email       | string (optional)        |
 | bio         | string (optional)        |

 user and org registration both return  
 id of user/org  
 username of user/org  
 org boolean equal to 1 if an organizer or 
 0 if a user 


  ## User Login

 | HTTP | Endpoint                |
 | -----|------------------------ |
 | POST | /api/auth/login/user    |
 | Fields      |          Data            |
 |-------------|------------------------- |
 | username    | unique string (required) |
 | password    | string (required)        |

 

  ## Organizer Login

 | HTTP | Endpoint                |
 | -----|------------------------ |
 | POST | /api/auth/login/org |
 | Fields      |          Data            |
 |-------------|------------------------- |
 | username    | unique string (required) |
 | password    | string (required)        |

 
Both user and organizer login returns
a Json message containing the message "User {username} Logged in"
along with a token

 ## Get all Organizers

 | HTTP | Endpoint                | Token Needed |
 | -----|------------------------ | ---  |
 | Get  | /api/org/               | no token |
 | Get  | /api/authorized/org     | token  |
  ## Get all Users

 | HTTP | Endpoint                | Token Needed |
 | -----|------------------------ |  ---        |
 | Get  | /api/user/              | no token |
 | Get  | /api/authorized/user    | token |
 
  ## Get User information

 | HTTP | Endpoint                | Token Needed |
 | -----|------------------------ |-----
 | Get  | /api/user/:id           | no token  |
 | Get  | /api/authorized/user/:id | token |

 sending get request with the user id in url returns all of the information
on that user

 # Experiences Endpoints

 ## Post New Experience for an Organizer

| HTTP | Endpoint                |
 | -----|------------------------ |
 | POST  | api/exps/org/:id |
 | Post  | api/authorized/exps/org/:id |
 |-------|---------------------------------|
  | Fields      |          Data            |
 |-------------|------------------------- |
 | location    | string (required) |
 | lat    | float (optional)        |
 | long        | float (optional)        |
 | date       | date (optional)        |
 | description | string (required)
 | private     | boolean (defaults to false)
 | type        | string (required)
 | imgurl      | string (optional)
 | duration    | string (required)
 | title       | string (required)

## Delete Exp by its Id

 | HTTP | Endpoint                |
 | -----|------------------------ |
 | DELETE  | api/exps/:id |
 | DELETE  | api/authorized/exps/:id | 

 ## Update Exp by its Id

 | HTTP | Endpoint                |
 | -----|------------------------ |
 | PUT  | api/exps/:id |
 | PUT  | api/authorized/exps/:id
  send any updated values to this endpoint with id of exp
  
## Get all Experiences

| HTTP | Endpoint                |
 | -----|------------------------ |
 | Get  | /api/exps |
 | Get  | /api/authorized/exps

 ## Get an Experience by id

| HTTP | Endpoint                |
 | -----|------------------------ |
 | Get  | /api/exps/:id |
 

 ## Get all Experiences from a given Organizer
 | HTTP | Endpoint                |
 | -----|------------------------ |
 | GET  | api/exps/org/:id |
 | GET  | api/authorized/exps/org/:id
 
