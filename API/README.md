## API

### Endpoint Overview

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
POST      |```/api/v1/vote```   	|  employees vote anonymously how there day was
POST      |```/api/v1/login```   	|  manager login so he can access `api/v1/stats`
GET      |```/api/v1/stats/day```   	|  managers can see an overview of the current day
GET      |```/api/v1/stats/week```   	|  managers can see an overview of the current week
GET      |```/api/v1/stats/month```   	|  managers can see an overview of the current month

___

#### BASE ADDRESS FOR VOTE

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
POST      |```/api/v1/vote```   	|  employees vote anonymously how there day was

Example of request body:
```json

{
    "date": "2019-10-20",
    "happinessIndicator": "happy" 
}

```


#### BASE ADDRESS FOR LOGIN

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
POST      |```/api/v1/login```   	|  manager login so he can access `api/v1/stats`

Example of request body:
```json

{
	"userName": "user",
	"password": "user"
}

```


response will be (if there where no errors) :
```json

{
    "status": true,
    "message": "ok",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InVzZXIiLCJ1c2VySWQiOjAsImlhdCI6MTU3MTY2MDY4MSwiZXhwIjoxNTcxNjY0MjgxfQ.4pO0zWbdSrFPg5C7rHwV0xEE3b0xHkhB6qxexo0b5pM"
}

```


#### BASE ADDRESS FOR VOTE - day

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
GET      |```/api/v1/stats/day```   	|  managers can see an overview of the current day

You need to add the token from the `api/v1/login` to the headers in the request like this:

```json

"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InVzZXIiLCJ1c2VySWQiOjAsImlhdCI6MTU3MTY2MDY4MSwiZXhwIjoxNTcxNjY0MjgxfQ.4pO0zWbdSrFPg5C7rHwV0xEE3b0xHkhB6qxexo0b5pM"

```

format is `Bearer + " " + token`

response will be (if there where no errors) :

```json

{
    "status": true,
    "message": "ok",
    "data": [
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 1,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 2,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 3,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 4,
            "happinessIndicator": "happy"
        }
    ]
}
```


#### BASE ADDRESS FOR VOTE - WEEK

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
GET      |```/api/v1/stats/week```   	|  managers can see an overview of the current week

You need to add the token from the `api/v1/login` to the headers in the request like this:

```json

"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InVzZXIiLCJ1c2VySWQiOjAsImlhdCI6MTU3MTY2MDY4MSwiZXhwIjoxNTcxNjY0MjgxfQ.4pO0zWbdSrFPg5C7rHwV0xEE3b0xHkhB6qxexo0b5pM"

```

format is `Bearer + " " + token`

response will be (if there where no errors) :

```json

{
    "status": true,
    "message": "ok",
    "data": [
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 1,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 2,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 3,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 4,
            "happinessIndicator": "happy"
        }
    ]
}

```


### BASE ADDRESS FOR VOTE - MONTH

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
GET      |```/api/v1/stats/month```   	|  managers can see an overview of the current month

You need to add the token from the `api/v1/login` to the headers in the request like this:

```json

"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InVzZXIiLCJ1c2VySWQiOjAsImlhdCI6MTU3MTY2MDY4MSwiZXhwIjoxNTcxNjY0MjgxfQ.4pO0zWbdSrFPg5C7rHwV0xEE3b0xHkhB6qxexo0b5pM"

```

format is `Bearer + " " + token`__

response will be (if there where no errors) :

```json

{
    "status": true,
    "message": "ok",
    "data": [
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 1,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 2,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 3,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-19T22:00:00.000Z",
            "id": 4,
            "happinessIndicator": "happy"
        },
        {
            "date": "2019-10-18T22:00:00.000Z",
            "id": 5,
            "happinessIndicator": "sad"
        },
        {
            "date": "2019-10-18T22:00:00.000Z",
            "id": 6,
            "happinessIndicator": "sad"
        },
        {
            "date": "2019-10-18T22:00:00.000Z",
            "id": 7,
            "happinessIndicator": "sad"
        },
        {
            "date": "2019-10-18T22:00:00.000Z",
            "id": 8,
            "happinessIndicator": "ok"
        },
        {
            "date": "2019-10-18T22:00:00.000Z",
            "id": 9,
            "happinessIndicator": "ok"
        },
        {
            "date": "2019-10-17T22:00:00.000Z",
            "id": 10,
            "happinessIndicator": "ok"
        },
        {
            "date": "2019-10-17T22:00:00.000Z",
            "id": 11,
            "happinessIndicator": "ok"
        }
    ]
}

```