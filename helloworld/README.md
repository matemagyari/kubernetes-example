
- `kubectl delete deployments,services,pods -l app=hello-world`

- you can see the service on http://192.168.64.3:30065/

- full restart
```
kubectl delete deployments,services,pods -l app=hello-world &&
docker build --no-cache -t hello-world:v4 /Users/david/IdeaProjects/kubernetes-example/helloworld/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/helloworld/hello-world-service.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/helloworld/hello-world-deployment.yml

```
