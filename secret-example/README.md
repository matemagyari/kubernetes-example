kubectl delete pods,secrets -l app=secret-example &&
docker build -t secret-example:v1 /Users/david/IdeaProjects/kubernetes-example/secret-example/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/secret-example/secret.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/secret-example/pod.yml
