# API Service
### Docker Build Instructions

```sh
docker build -f apps/api/Dockerfile.prod -t api .
```

### Running the API Service

```sh
docker run -d \
  --name api \
  -p 3333:3333 \
  -e NODE_ENV=production \
  --env-file apps/api/.env \
  api
```