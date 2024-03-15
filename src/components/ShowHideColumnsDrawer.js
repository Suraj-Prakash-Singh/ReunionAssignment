import { Box, Drawer, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useState } from 'react';

const ShowHideColumnsDrawer = ({ open, onClose, table }) => {
    const [columnVisibility, setColumnVisibility] = useState(() =>
      table.getAllLeafColumns().map((column) => column.id)
    );
  
    const handleColumnVisibilityChange = (column) => {
      setColumnVisibility((prevVisibility) =>
        prevVisibility.includes(column.id)
          ? prevVisibility.filter((id) => id !== column.id)
          : [...prevVisibility, column.id]
      );
    };
  
    const handleApplyVisibility = () => {
      table.setColumnVisibility(columnVisibility);
      onClose();
    };
  
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box p={2}>
          <h2>Show/Hide Columns</h2>
          {table.getAllLeafColumns().map((column) => (
            <FormControlLabel
              key={column.id}
              control={
                <Checkbox
                  checked={columnVisibility.includes(column.id)}
                  onChange={() => handleColumnVisibilityChange(column)}
                />
              }
              label={column.header}
            />
          ))}
          <Button variant="contained" color="primary" onClick={handleApplyVisibility}>
            Apply
          </Button>
        </Box>
      </Drawer>
    );
  };

  export default ShowHideColumnsDrawer;