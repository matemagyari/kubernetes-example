
- you can see the service on http://192.168.64.3:30066/

- full restart
```
docker build --no-cache -t hello-service:v1 /Users/david/IdeaProjects/kubernetes-example/helm-example/hello-service/ &&
helm install ./helm-example/

```
