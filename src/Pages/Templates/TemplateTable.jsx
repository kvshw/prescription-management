import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#03A48A",
      light: "#defff9",
      contrastText: "#fff",
      dark: "#03A48A",
      contrastTextDark: "#000",
    },
  },
});

const tableHeaderStyle = {
  bgcolor: "primary.light",
  color: "primary.contrastTextDark",
  fontWeight: "bold",
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function TemplateTable() {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeaderStyle}>
                Dessert (100g serving)
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="right">
                Calories
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="right">
                Fat&nbsp;(g)
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="right">
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="right">
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default TemplateTable;
