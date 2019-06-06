kubectl delete ingresses,services,pods -l app=ingress-example &&
docker build --no-cache -t ingress-example:v1 /Users/david/IdeaProjects/kubernetes-example/ingress-example/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/ingress-example/pod.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/ingress-example/service.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/ingress-example/ingress.yml
