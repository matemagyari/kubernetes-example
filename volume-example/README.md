kubectl delete pods -l app=volume-example &&
docker build --no-cache -t volume-example:v1 /Users/david/IdeaProjects/kubernetes-example/volume-example/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/volume-example/pod.yml
