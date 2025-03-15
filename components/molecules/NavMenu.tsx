"use client";

import { NavLink } from "@/components/atoms/shared/NavLink";

function NavMenu() {
  return (
    <ul className="items-center hidden space-x-8 lg:flex">
      <li>
        <NavLink
          href="/new-products"
          label="Nouveau en ce moment"
          ariaLabel="Nouveau en ce moment"
        />
      </li>
      <li>
        <NavLink 
        href="/our-products/" 
        label="Homme" 
        ariaLabel="Produit pour homme"
        />
      </li>
      <li>
        <NavLink 
        href="/our-products/" 
        label="Femme" 
        ariaLabel="Produit pour femme"
        />
      </li>
      <li>
        <NavLink 
        href="/our-products/" 
        label="Enfants" 
        ariaLabel="Produit pour homme"
        />
      </li>
      <li>
        <NavLink 
        href="/promote" 
        label="Promotions" 
        ariaLabel="Collections" 
        />
      </li>

    </ul>
  );
};

export { NavMenu }