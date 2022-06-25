#!/bin/bash
export IMAGE_NAME=express-poc:latest

echo "================="
echo "Image name set to $IMAGE_NAME"
echo "================="

docker build -t $IMAGE_NAME .
docker compose up -d
