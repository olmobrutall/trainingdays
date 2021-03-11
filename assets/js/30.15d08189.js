(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{737:function(e,t,a){e.exports=a.p+"assets/img/rg-created.6f8a203d.png"},738:function(e,t,a){e.exports=a.p+"assets/img/cluster-rg.d29bea96.png"},739:function(e,t,a){e.exports=a.p+"assets/img/auto-rg.db7f5b11.png"},740:function(e,t,a){e.exports=a.p+"assets/img/dashboard-login.fe616b47.png"},741:function(e,t,a){e.exports=a.p+"assets/img/all-namespaces-dashboard.1e83fb32.png"},835:function(e,t,a){"use strict";a.r(t);var s=a(45),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"create-your-first-kubernetes-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-kubernetes-cluster"}},[e._v("#")]),e._v(" Create your first Kubernetes Cluster")]),e._v(" "),s("p",[e._v("In this section we will create a Kubernetes cluster using the Azure CLI, configure your local access credentials to control your cluster using kubectl, take some first steps and run our first pod.")]),e._v(" "),s("h2",{attrs:{id:"create-the-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-cluster"}},[e._v("#")]),e._v(" Create the cluster")]),e._v(" "),s("p",[e._v("To have a clean overview of what is beeing provisioned under the hood, we create a new resource\ngroup and and create our Kubernetes cluster within.")]),e._v(" "),s("div",{staticClass:"language-zsh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ az group create --name adc-aks-rg --location westeurope\n$ az aks create --resource-group adc-aks-rg --name adc-cluster --generate-ssh-keys --kubernetes-version 1.17.13\n")])])]),s("blockquote",[s("p",[e._v("Note that we deploy Kubernetes with the latest available version on azure at the time of writing.\nIf you use a different version, you might run into trouble during the "),s("em",[e._v("Access the Dashboard")]),e._v("\nsection.")])]),e._v(" "),s("p",[e._v("Let's inspect the created resources:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(737),alt:"Created resource groups"}})]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("az aks create")]),e._v(" command created a second resource group named\n"),s("code",[e._v("MC_adc-aks-rg_adc-cluster_westeurope")]),e._v(" containing all resources provisioned for our AKS\ncluster.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(738),alt:"Resource group with AKS resource"}})]),e._v(" "),s("p",[e._v("The resource group we explicitly created only holds the AKS resource.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(739),alt:"Automatically created resource group"}})]),e._v(" "),s("p",[e._v("All other resource for the cluster are created in it's own resource group. This resource group and\nall it's containing resources will be deleted when the cluster is destroyed.")]),e._v(" "),s("h2",{attrs:{id:"establish-access-to-the-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#establish-access-to-the-cluster"}},[e._v("#")]),e._v(" Establish access to the cluster")]),e._v(" "),s("p",[e._v("Now it's time to access our cluster. To authenticate us against the cluster Kubernetes uses client\ncertificates and access tokens. To obtain these access credentials for our newly created cluster we\nuse the "),s("code",[e._v("az aks get-credentials")]),e._v(" command:")]),e._v(" "),s("div",{staticClass:"language-zsh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$ az aks get-credentials --resource-group adc-aks-rg --name adc-cluster\n$ kubectl version # check client and server version of kubernetes\nClient Version: version.Info{Major:"1", Minor:"18", GitVersion:"v1.18.6", GitCommit:"dff82dc0de47299ab66c83c626e08b245ab19037", GitTreeState:"clean", BuildDate:"2020-07-16T06:30:04Z", GoVersion:"go1.14.5", Compiler:"gc", Platform:"linux/amd64"}\nServer Version: version.Info{Major:"1", Minor:"17", GitVersion:"v1.17.7", GitCommit:"5737fe2e0b8e92698351a853b0d07f9c39b96736", GitTreeState:"clean", BuildDate:"2020-06-24T19:54:11Z", GoVersion:"go1.13.6", Compiler:"gc", Platform:"linux/amd64"}\n')])])]),s("p",[s("code",[e._v("kubectl version")]),e._v(" prints both the version of the locally runnig commandline tool as well as the\nKubernetes version running on our cluster. To inspect the access credentials and cluster\nconfiguration stored for us in our "),s("code",[e._v("~/.kube/config")]),e._v(" file run "),s("code",[e._v("kubectl config view")]),e._v(".")]),e._v(" "),s("p",[e._v("We've setup access to our Kubernetes cluster. Now we can start exploring and working with our\ncluster.")]),e._v(" "),s("h2",{attrs:{id:"access-the-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-the-dashboard"}},[e._v("#")]),e._v(" Access the dashboard")]),e._v(" "),s("p",[e._v("AKS comes with the kubernetes-dashboard installed by default. Accessing the dashboard requires us to\ncreate a "),s("code",[e._v("ServiceAccount")]),e._v(" with the "),s("em",[e._v("cluster-admin")]),e._v(" "),s("code",[e._v("ClusterRole")]),e._v(".")]),e._v(" "),s("p",[e._v("To create these "),s("code",[e._v("Resources")]),e._v(" within our Kubernetes cluster we will first declare the desired\nconfiguration for our "),s("code",[e._v("ServiceAccount")]),e._v(" in a yaml file and apply the desired configuration to our\ncluster using the "),s("code",[e._v("kubectl apply")]),e._v(" command.")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# dashboard-admin.yaml")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# First we create a new namespace for our role to live in. This way we can")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# later delete the entire namespace and remove all configurations made here.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Namespace\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dashboard\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This separates multiple resource definitions in a single file")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ServiceAccount\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a ServiceAccount named admin-user")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dashboard\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Bind the cluster-admin ClusterRole to the admin-user ServiceAccount")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" rbac.authorization.k8s.io/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ClusterRoleBinding\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("roleRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" rbac.authorization.k8s.io\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ClusterRole\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" cluster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("admin\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("subjects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ServiceAccount\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dashboard\n")])])]),s("p",[e._v("Create a new "),s("code",[e._v("dashboard-admin.yaml")]),e._v(" file and paste the above content.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("INFO:")]),e._v(" you will be creating lots of YAML files today - hooray! 😃 Create a folder called "),s("code",[e._v("yaml")]),e._v(" in the root directory of your repo and save all files you create within that location. You can apply the manifests via kubectl from that folder.")])]),e._v(" "),s("p",[e._v("We can apply the configuration using the following line:")]),e._v(" "),s("div",{staticClass:"language-zsh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ kubectl apply -f dashboard-admin.yaml\n")])])]),s("p",[e._v("We need to discover the created users secret access token, to gain access to the dashboard.")]),e._v(" "),s("div",{staticClass:"language-zsh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ kubectl -n kubernetes-dashboard get secret\n")])])]),s("p",[e._v("Find the secret that belongs to the "),s("code",[e._v("admin-user")]),e._v(" and let kubectl "),s("code",[e._v("describe")]),e._v(" it to see the content of the secret:")]),e._v(" "),s("div",{staticClass:"language-zsh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ kubectl -n kubernetes-dashboard describe secret admin-user-token-smw2j\n")])])]),s("blockquote",[s("p",[e._v("Watch out! You token will have a differnet random 5 character suffix.")])]),e._v(" "),s("p",[e._v("Copy the token to your clipboard for the next step.")]),e._v(" "),s("p",[e._v("Now we start the kubernetes proxy to access the remote api safely on our local machine:")]),e._v(" "),s("div",{staticClass:"language-zsh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ kubectl proxy\n")])])]),s("p",[e._v("The process keeps running unitl you interrupt it using "),s("code",[e._v("Ctrl-C")]),e._v(". Let's keep it running for now.")]),e._v(" "),s("p",[s("a",{attrs:{href:"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Access the dashboard"),s("OutboundLink")],1),e._v("\nand login using the token you've aquired for the "),s("em",[e._v("admin-user")]),e._v(" "),s("code",[e._v("ServiceAccount")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(740),alt:"Dashboard Login"}})]),e._v(" "),s("p",[e._v("Take your time to explore the dashboard. Make use of the "),s("code",[e._v("Namespace")]),e._v(" selector to navigate the\ndifferent namespaces.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(741),alt:"Dashboard Overview"}})]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Security Note:")]),e._v(' The dashboard component is considered a "security risk", because it is an additional way to access your cluster - and you have to take care of securing it. Normally, you would not install the dashboard component in production clusters. There is an option for disabling the dashboard, even after installation: '),s("code",[e._v("az aks disable-addons -a kube-dashboard -n my_cluster_name -g my_cluster_resource_group")]),e._v(".")])]),e._v(" "),s("h1",{attrs:{id:"run-your-first-pod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-your-first-pod"}},[e._v("#")]),e._v(" Run your first pod")]),e._v(" "),s("p",[e._v("Now we will run our first pod on our kubernetes cluster. Let's keep the "),s("code",[e._v("kubectl proxy")]),e._v(" command\nrunning and execute this in new tab in your console.")]),e._v(" "),s("div",{staticClass:"language-zsh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ kubectl run -i -t pod1 --image=busybox --restart=Never --rm=true\nIf you don't see a command prompt, try pressing enter.\n/ #\n")])])]),s("p",[e._v("We've just started a "),s("code",[e._v("Pod")]),e._v(" named "),s("em",[e._v("pod1")]),e._v(" based on the "),s("em",[e._v("busybox")]),e._v(" image.")]),e._v(" "),s("p",[e._v("To understand the different flags we've added to the command take a look at the built in\ndocumentation to "),s("code",[e._v("kubectl run")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-zsh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ kubectl run --help\n")])])]),s("h2",{attrs:{id:"questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[e._v("#")]),e._v(" Questions")]),e._v(" "),s("p",[e._v("What do the different flags ("),s("code",[e._v("-i")]),e._v(", "),s("code",[e._v("-t")]),e._v(", "),s("code",[e._v("--restart=Never")]),e._v(", "),s("code",[e._v("--rm=True")]),e._v(") used in the "),s("code",[e._v("kubectl run")]),e._v("\ncommand do?")])])}),[],!1,null,null,null);t.default=r.exports}}]);