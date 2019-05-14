# kubernetes-example

- start minikube locally: `minikube start`
- open dashboard: `minikube dashboard`, then go to http://192.168.64.3:30000/#!/deployment?namespace=default

- `kubectl config use-context minikube`
- `eval $(minikube docker-env)`
- `eval $(minikube docker-env -u)`
- `docker run -d -p 8080:8080 hello-world:v3`
- `kubectl run hello-world --image=hello-world:v3 --port=8080`

- build Docker images
```
docker build -t hodor:v3 /Users/david/IdeaProjects/kubernetes-example/services/got/hodor/ &&
docker build -t bran:v6 /Users/david/IdeaProjects/kubernetes-example/services/got/bran/
```
- start up
```
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/got/hodor/deploy.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/got/bran/deploy.yml
```

- `kubectl delete deployments,services,pods -l application=got`

- `kubectl delete deployments,services,pods -l app=bran`

- you can see the service on http://192.168.64.3:30065/

- full restart
```
kubectl delete deployments,services,pods -l application=got &&
docker build --no-cache -t hodor:v3 /Users/david/IdeaProjects/kubernetes-example/services/got/hodor/ &&
docker build --no-cache -t bran:v6 /Users/david/IdeaProjects/kubernetes-example/services/got/bran/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/got/hodor/deploy.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/got/bran/deploy.yml
```

FAQ

- expose a running pod: port forwarding, or exposing it as NodePort, or properly put it behind a service
- get url for a service: `minikube service <service_name> --url`