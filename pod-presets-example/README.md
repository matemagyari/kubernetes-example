kubectl delete podpreset,pod -l app=pod-presets-example &&
docker build --no-cache -t pod-presets-example:v1 /Users/david/IdeaProjects/kubernetes-example/pod-presets-example/ &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/pod-presets-example/pod-presets.yml &&
kubectl create -f /Users/david/IdeaProjects/kubernetes-example/pod-presets-example/pods.yml
