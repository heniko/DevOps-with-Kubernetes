This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Exercise 1.02

```
$ k3d cluster create -a 2
```

```
$ kubectl create deployment todo --image=heniko/todo:latest
```

```
$ kubectl get pods
```

```
$ kubectl logs -f <pod name>
```

## Exercise 1.05

```
$ kubectl port-forward <pod name> 3000:3000
```

Navigating to [http://127.0.0.1:3000/](http://127.0.0.1:3000/) shows default Next.js app homepage.

## Exercise 1.06

```
$ k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
```

```
$ kubectl apply -f manifests/deployment.yaml
```

```
$ kubectl apply -f manifests/service.yaml
```

Navigating to [http://127.0.0.1:8082/](http://127.0.0.1:8082/) shows default Next.js app homepage.

## Exercise 1.12

Path to daily picture ```/api/daily-picture```. The image stays the same after executing commands:

```
$ kubectl delete -f manifests/
$ kubectl apply -f manifests/
```