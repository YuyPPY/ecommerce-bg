import PageHeader from "@/components/backend/form/PageHeader";
import TableAction from "@/components/backend/TableAction";
import React from "react";


export default function page() {
  return (
    <div>
    {/* Header */}
    <PageHeader
      heading="Staff"
      href="/dashboard/staff/new"
      linkTitle="Add Staff "
    />

    {/* Table  Actions */}
    {/* Export || Search || Bulk Delete */}
    <TableAction />
    <div className="py-8">
      <h2>Table</h2>
    </div>

  </div>
  );
}
