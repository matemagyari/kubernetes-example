```
kubectl delete pods,configmaps -l app=configmap-example &&
docker build -t configmap-example:v1 /Users/david/IdeaProjects/kubernetes-example/configmap-example/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/configmap-example/configmap.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/configmap-example/pod.yml
```
