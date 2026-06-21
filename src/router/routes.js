const loadComponent = view => () => import(`../views/${view}.vue`)

export default [
  {
    path: "/",
    name: "MainView",
    component: loadComponent("MainView"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "HomeView",
        component: loadComponent("HomeView")
      },
      {
        path: "bio",
        name: "BioView",
        component: loadComponent("BioView")
      },
      {
        path: "contact",
        name: "ContactView",
        component: loadComponent("ContactView")
      },
      {
        path: "projects",
        name: "ProjectsView",
        component: loadComponent("ProjectsView")
      },
      {
        path: "projects/:id",
        name: "ProjectDetailView",
        component: loadComponent("ProjectDetailView")
      },
      {
        path: '/:pathMatch(.*)*',
        name: "NoRouteView",
        redirect: "/home",
      },
    ]
  }
]