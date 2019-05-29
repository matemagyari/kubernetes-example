

- `kubectl delete deployments,services,pods -l app=configmap-example`

- you can see the service on http://192.168.64.3:30065/

- full restart
```
kubectl delete pods,configmaps -l app=configmap-example &&
docker build -t configmap-example:v1 /Users/david/IdeaProjects/kubernetes-example/configmap-example/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/configmap-example/configmap.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/configmap-example/pod.yml
```
