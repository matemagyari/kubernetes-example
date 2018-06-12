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
docker build -t hodor:v3 /Users/david/IdeaProjects/kubernetes-example/services/hodor/ &&
docker build -t bran:v3 /Users/david/IdeaProjects/kubernetes-example/services/bran/
```
- start up
```
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/hodor/deploy.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/bran/deploy.yml
```
- `kubectl delete deployments,services -l application=got`

- you can see the service on http://192.168.64.3:30065/

- full restart
```
kubectl delete deployments,services -l application=got &&
docker build -t hodor:v3 /Users/david/IdeaProjects/kubernetes-example/services/hodor/ &&
docker build -t bran:v3 /Users/david/IdeaProjects/kubernetes-example/services/bran/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/hodor/deploy.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/bran/deploy.yml
```