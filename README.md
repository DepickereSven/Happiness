# Happiness
HTTP API and simple web app that tracks employee happiness


## API

### Overview

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
POST      |```/api/v1/vote```   	|  employees vote anonymously how there day was
GET      |```/api/v1/stats/day```   	|  managers can see an overview of the current day
GET      |```/api/v1/stats/week```   	|  managers can see an overview of the current week
GET      |```/api/v1/stats/month```   	|  managers can see an overview of the current month



### BASE ADDRESS FOR VOTE

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

Format of `date` is `YYYY-MM-DD` \
Possible `happinessIndicator` values are `'happy', 'ok', 'sad'`

response will be (if there where no errors) :
```json

{
    "status": true,
    "message": "ok"
}

```

### BASE ADDRESS FOR VOTE - WEEK

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
GET      |```/api/v1/stats/week```   	|  managers can see an overview of the current week

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


### BASE ADDRESS FOR VOTE - day

HTTP verb | Endpoint                                        	| Description                          | 
----------|-----------------------------------------------------|---------------------------------------|
GET      |```/api/v1/stats/day```   	|  managers can see an overview of the current day

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

