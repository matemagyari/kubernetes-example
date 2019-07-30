kubectl create ns kubeless &&
kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.4/kubeless-v1.0.4.yaml &&
kubectl get pods -n kubeless