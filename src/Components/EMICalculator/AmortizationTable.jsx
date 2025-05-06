import React, { useState, useMemo } from "react";
import {
  Table, TableHead, TableRow, TableCell, TableBody,
  TableContainer, Paper, TablePagination, Typography,
  Box, Container, TextField, ToggleButton, ToggleButtonGroup
} from "@mui/material";

const ROWS_PER_PAGE = 12;

const AmortizationTable = ({ data, currency, setCurrency }) => {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      row.month.toString().includes(searchTerm.trim())
    );
  }, [searchTerm, data]);

  const paginatedData = filteredData.slice(
    page * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE + ROWS_PER_PAGE
  );

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Container maxWidth="lg" className="py-8 font-poppins">
      <Box className="p-4 sm:p-6 max-w-full md:max-w-5xl mx-auto bg-white rounded-lg shadow-md">
        <Typography
          variant="h5"
          className="mb-6 text-center tracking-wide font-semibold"
        >
          Amortization Schedule
        </Typography>


        <Paper className="rounded-xl overflow-hidden">
          <TableContainer className="max-h-[500px]">
            <Table stickyHeader size="small">
            <TableHead className="bg-gray-100">
                <TableRow>
                    <TableCell className="font-semibold px-4 py-3">Month</TableCell>
                    <TableCell align="right" className="font-semibold px-4 py-3">EMI</TableCell>
                    <TableCell align="right" className="font-semibold px-4 py-3">Principal</TableCell>
                    <TableCell align="right" className="font-semibold px-4 py-3">Interest</TableCell>
                    <TableCell align="right" className="font-semibold px-4 py-3">Balance</TableCell>
                </TableRow>
                </TableHead>

              <TableBody>
                {paginatedData.map((row) => (
                  <TableRow key={row.month} hover>
                    <TableCell>{row.month}</TableCell>
                    <TableCell align="right">
                      <span className="font-mono text-blue-700">
                        {currency} {row.emi.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-mono text-green-700">
                        {currency} {row.principal.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-mono text-red-700">
                        {currency} {row.interest.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-mono text-gray-700">
                        {currency} {row.balance.toFixed(2)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[ROWS_PER_PAGE]}
            component="div"
            count={filteredData.length}
            rowsPerPage={ROWS_PER_PAGE}
            page={page}
            onPageChange={handleChangePage}
            className="bg-gray-50"
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default AmortizationTable;
