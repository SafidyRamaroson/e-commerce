"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client";


export const CustomersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "#ID",
    cell: ({ row }) => (
        <span className="font-medium text-base">{row.original.id}</span>
    )
  },
  {
    accessorKey: "name",
    header: "Nom",
    cell: ({ row }) => (
      <span className="font-medium text-base">{row.original.name}</span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <a
        href={`mailto:${row.original.email}`}
        className="font-medium text-base"
      >
        {row.original.email}
      </a>
    ),
  },
  {
    accessorKey: "password",
    header: "Mot de passe crypté",
    cell: ({ row }) => (
        <span className="font-medium text-base">{row.original.password}</span>
    )
  },
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-full ${
          'active' === "active"
            ? "bg-secondary text-white"
            : "bg-yellow-200 text-white"
        }`}
      >
        active
      </span>
    ),
  },
  {
    accessorKey: "role",
    header: "Rôle",
    cell: ({ row }) => (
      <span className="font-medium text-base">{ row.original.role} </span>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
    
      </div>
    ),
  },
];
