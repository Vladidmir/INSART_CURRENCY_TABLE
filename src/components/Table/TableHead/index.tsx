import React from "react";

import * as MUI from "@mui/material";

interface TableHeadProps {
  columns: string[];
}

export const TableHead: React.FC<TableHeadProps> = ({ columns }) => (
  <MUI.TableHead>
    <MUI.TableRow>
      {columns.map((column, index) => (
        <MUI.TableCell key={index}>{column}</MUI.TableCell>
      ))}
    </MUI.TableRow>
  </MUI.TableHead>
);
