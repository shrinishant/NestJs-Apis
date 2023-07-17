<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Tech Stack

**Server:** NestJs, Docker, MySql, TypeScript
**tools:** Swagger, Prisma

## Installation
Make sure you have these installed :

```bash
  docker
  nodeJs
  nestJs
```

create .env file in the root directory :

```bash
  DATABASE_URL="<Your MySql Url>"
  DB_USER="<Your DB Username>"
  DB_PASS="<Your DB Password>"
  DB_NAME="<Your DB Name>"
```

Now, run the following commands :
```bash
docker compose up nest-db -d

npm i

npx prisma generate
npx prisma migrate dev
``` 

Finally, to run :
```bash
npm run start
```
## Roadmap
- API endpoint: http://localhost:3333/
- To get the swagger documentation: http://localhost:3333/api


