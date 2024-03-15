import {
  MaterialReactTable, useMaterialReactTable,
  createMRTColumnHelper, MRT_TablePagination, MaterialReactTable
} from 'material-react-table';
import { useMemo } from 'react';
import { DATA } from '../utils/constants';
import moment from 'moment';
import ShowHide from './ShowHide';

const Example = () => {
  const data = DATA;
  const columnHelper = createMRTColumnHelper();
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


  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions:false,
  });

  return <div style={{ height: 400, width: '100%' }}>
      <MaterialReactTable table={table} />
      <ShowHide
        open={true}
        // onClose={() => setShowColumnDrawer(false)}
        table={table}
      />
  </div>
}

export default Example;

