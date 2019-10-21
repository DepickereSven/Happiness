# Happiness
HTTP API and simple web app that tracks employee happiness

[Readme](./API/README.md) about how the API endpoints work

## Setup

Execute the following SQL scripts:
* happiness_users.sql
* happiness_votes.sql

You will need to change your SQL connection details in the following file
* [API/config/config.env.sql.js](API/config/config.env.sql.js)

The API can be started by the following commands:

```

\Happiness\API> npm install

\Happiness\API> npm run dev

 ``` 

To setup the webapp run the following command:
```

\Happiness\webapp> npm install 

```

to use the webapp run the following command: 

```

\Happiness\webapp> npm run serve 

```

then you can visit the webapp to the address that is in your command line.