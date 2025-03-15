import { BarChart, Bot, Store, List, ClipboardList, Settings } from "lucide-react";


export const adminNavMainData = [
    {
      title: "Tableau de board",
      url: "/admin/tb",
      icon: BarChart,
      isActive: true,
      items: [],
    },
    {
      title: "Clients",
      url: "/admin/customers",
      icon: Bot,
      isActive: true,
      items: [],
    },
    {
      title: "Produits",
      url: "#",
      icon: Store,
      isActive: true,
      items: [
        {
          title: "Liste des produits",
          url: "/admin/products",
        },
        {
          title: "Out stock",
          url: "/admin/products/outOfStock"
        },
        {
          title: "Ajouter un produit",
          url: "/admin/products/new"
        }
      ],
    },
    {
      title: "Collections",
      url: "/admin/products/categories",
      icon: List,
      isActive: true,
      items:[]
    },
    {
      title: "Commandes",
      url: "#",
      icon: ClipboardList,
      isActive: true,
      items: [
        {
          title: "Tout les commandes",
          url: "/admin/orders",
        },
        {
          title: "Commandes à livrer",
          url: "/admin/delivery",
        },
      ],
    },
    {
      title: "Paramètres",
      url: "/settings",
      icon: Settings,
      items: [],
    }
  ];