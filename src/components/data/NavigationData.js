import React from 'react'

export const NavigationData = [
  {
    name: "Home",
    url: "/",
    id: "1",
  },
  {
    name: "A propos",
    url: "/About",
    id: "2",
  },
  {
    name: "LLD",
    url: "/lld",
    id: "3",
  },
  {
    name: "Nos services",
    url: "/",
    id: "4",
  },
  {
    name: "Nos avantages",
    url: "/",
    id: "5",
  },
  {
    name: "L'équipe",
    url: "/team",
    id: "6",
  },
  {
    name: "Fiscalité",
    url: "/",
    id: "7",
  },
  {
    name: "Restitution",
    url: "/",
    id: "8",
  },
  {
    name: "News!",
    url: "/",
    id: "9",
  },
];
export const getNavigationData = () => {
    return NavigationData;
}