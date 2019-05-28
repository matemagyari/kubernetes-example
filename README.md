# kubernetes-example

- start minikube locally: `minikube start`
- open dashboard: `minikube dashboard`, then go to http://192.168.64.3:30000/#!/deployment?namespace=default

- `kubectl config use-context minikube`
- `eval $(minikube docker-env)`
- `eval $(minikube docker-env -u)`
- `docker run -d -p 8080:8080 hello-world:v3`
- `kubectl run hello-world --image=hello-world:v3 --port=8080`

FAQ

- expose a running pod: port forwarding, or exposing it as NodePort, or properly put it behind a service
- get url for a service: `minikube service <service_name> --url`