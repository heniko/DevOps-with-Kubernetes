# Logger

## Exercise 1.01

```
$ k3d cluster create -a 2
```

```
$ kubectl create deployment logger --image=heniko/logger:latest
```

```
$ kubectl get pods
```

```
$ kubectl logs -f <pod name>
```

## Exercise 1.03

```
$ kubectl apply -f manifests/deployment.yaml
```

```
$ kubectl get pods
```

```
$ kubectl logs -f <pod name>
```