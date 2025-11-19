# API Service

### Docker Build Instructions

```sh
docker build -f apps/api/Dockerfile.prod -t api .
```

### Running the API Service

```sh
docker run  \
  --name api \
  -p 3333:3333 \
  --env-file apps/api/.env \
  api
```
