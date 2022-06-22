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