# kubernetes-example

- start minikube locally: `minikube start`
- open dashboard: `minikube dashboard`, then go to http://192.168.64.3:30000/#!/deployment?namespace=default

- `kubectl config use-context minikube`
- `eval $(minikube docker-env)`
- `eval $(minikube docker-env -u)`
- from kubernetes-example/services/helloworld run `docker build -t hello-world:v3 .`
- `docker run -d -p 8080:8080 hello-world:v3`
- `kubectl run hello-world --image=hello-world:v3 --port=8080`
- `kubectl create -f /Users/david/IdeaProjects/kubernetes-example/services/helloworld/hello-world-pod.yml`
- `kubectl create -f /Users/david/IdeaProjects/kubernetes-example/hello-world-deployment.yml`
- `kubectl create -f /Users/david/IdeaProjects/kubernetes-example/hello-world-service.yml`
- `kubectl delete deployments hello-world`

- you can see the service on http://192.168.64.3:30065/