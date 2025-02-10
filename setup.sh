#!/bin/sh

# Work around for Docker Images get available inside Kubernetes Cluster

eval $(minikube docker-env)

# Create Application Image

docker build -t fiap-car-store_service-fiap-car-store-api:latest .

# Create Migration Image

docker build -f migration/Dockerfile -t fiap-car-store_service-migration:latest .

# Apply Kubernetes Manifest Files

cd k8s
minikube start
kubectl apply -f .
kubectl apply -f .

# Forwarding Kubernetes to Local Port

kubectl port-forward service/fiap-car-store-api 8080:3000 -n fiap-car-store
