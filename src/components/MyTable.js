import React, { useState, useMemo } from 'react';
import { MaterialReactTable, createMRTColumnHelper } from 'material-react-table';

import { DATA } from '../utils/constants';
import ShowHideColumnsDrawer from './ShowHideColumnsDrawer';


const MyTable = () => {
    const columnHelper = createMRTColumnHelper();
    const data = DATA;
    const columns = useMemo(() => [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 100,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      size: 150,
    },
    {
      accessorKey: 'category',
      header: 'Category',
      size: 100,
    },
    {
      accessorKey: 'subcategory',
      header: 'Sub Category',
      size: 100,
    },
    columnHelper.accessor('createdAt', {
      header: 'Created At',
      Cell: ({ cell }) => {
        // Manipulate the data before rendering
        const date = cell.getValue();
        const formattedDate = moment(date).format("DD-MMM-YYYY");
        return <div>{formattedDate}</div>;
      },
    }),
    columnHelper.accessor('updatedAt', {
      header: 'Updated At',
      Cell: ({ cell }) => {
        // Manipulate the date before rendering
        const date = cell.getValue();
        const formattedDate = moment(date).format("DD-MMM-YYYY");
        return <div>{formattedDate}</div>;
      },
    }),
    {
      accessorKey: 'price',
      header: 'Price',
      size: 100,
    },
    {
      accessorKey: 'sale_price',
      header: 'Sale Price',
      size: 100,
    }
        ], [],);
    const [showColumnDrawer, setShowColumnDrawer] = useState(false);
    const table = MaterialReactTable({
    data,
    columns,
    renderToolbarInternalComponents: ({ ColumnVisibilityManager }) => (
      <ColumnVisibilityManager
        onClick={() => setShowColumnDrawer(true)}
        VisibleIcon={() => <span>Show/Hide Columns</span>}
      />
    ),
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <MaterialReactTable {...table} />
      <ShowHideColumnsDrawer
        open={showColumnDrawer}
        onClose={() => setShowColumnDrawer(false)}
        table={table}
      />
    </div>
  );
}

export default MyTable;