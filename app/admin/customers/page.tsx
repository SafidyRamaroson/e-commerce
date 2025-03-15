"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { StatsOverviewCustomers } from "@/components/organisms/admin/customers/StatsOverviews/StatsOverviewCustomers";
import { CustomersColumns } from "@/components/organisms/admin/customers/Columns";
import CustomersDataTable from "@/components/organisms/shared/Data-table";



type ProductsImages = {
    public_id: string;
    format: string;
    resource_type: string;
    type: string;
    original_filename: string;
}

export default function CustomersListePage() {
    return (
        <>
            <LayoutSectionHeader
                title="Gestion des Utilisateurs"
                subtitle="Bienvenue dans l'outil de gestion des utilisateurs"
            />
            <StatsOverviewCustomers
                activeCustomersNumbers={12}
                notConnectedCustomersNumbers={14}
            />
            <CustomersDataTable
                columns={CustomersColumns}
                emptyTableMessage="Aucun client trouvé"
                data={[]}
            />
        </>
    )
}