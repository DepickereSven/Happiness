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