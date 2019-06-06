kubectl delete deployments,services,pods -l application=service-discovery-example &&
docker build --no-cache -t service-b:v1 /Users/david/IdeaProjects/kubernetes-example/service-discovery-example/service-b/ &&
docker build --no-cache -t service-a:v1 /Users/david/IdeaProjects/kubernetes-example/service-discovery-example/service-a/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/service-discovery-example/service-b/deploy.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/service-discovery-example/service-a/deploy.yml
