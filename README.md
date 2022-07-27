# DevOps-with-Kubernetes

Repository for course [DevOps with Kubernetes](https://devopswithkubernetes.com/).

## Creating local cluster

```
$ k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
$ docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube
$ kubectl apply -f namespaces.yaml
```

## Settintg up Google cloud cluster

```
$ gcloud container clusters create dwk-cluster --zone=europe-north1-b --cluster-version=1.22
```

*Apply secrets here*

```
$ kubectl apply -f ./manifests
```

NOTE: todo-deployment.yaml is not public!

## Deleting Google cloud cluster

```
$ gcloud container clusters delete dwk-cluster --zone=europe-north1-b
```
