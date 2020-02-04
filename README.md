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

  ## Get User information

 | HTTP | Endpoint                |
 | -----|------------------------ |
 | Get  | /api/user/:id |
 
 sending get request with the user id in url returns all users information

 ## Get all Experiences

| HTTP | Endpoint                |
 | -----|------------------------ |
 | Get  | /api/exps |

 ## Post New Experience for an Organizer

| HTTP | Endpoint                |
 | -----|------------------------ |
 | POST  | api/exps/org/:id |
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