- build Docker images
```
docker build -t hodor:v3 /Users/david/IdeaProjects/kubernetes-example/got/hodor/ &&
docker build -t bran:v6 /Users/david/IdeaProjects/kubernetes-example/got/bran/
```
- start up
```
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/got/hodor/deploy.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/got/bran/deploy.yml
```

- `kubectl delete deployments,services,pods -l application=got`

- `kubectl delete deployments,services,pods -l app=bran`

- you can see the service on http://192.168.64.3:30065/

- full restart
```
kubectl delete deployments,services,pods -l application=got &&
docker build -t hodor:v3 /Users/david/IdeaProjects/kubernetes-example/got/hodor/ &&
docker build -t bran:v6 /Users/david/IdeaProjects/kubernetes-example/got/bran/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/got/hodor/deploy.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/got/bran/deploy.yml
```
