import React, { useState, useMemo } from "react";
import {
  Table, TableHead, TableRow, TableCell, TableBody,
  TableContainer, Paper, TablePagination, Typography,
  Box, Container
} from "@mui/material";

const ROWS_PER_PAGE = 12;

const AmortizationTable = ({ data, currency }) => {
  const [page, setPage] = useState(0);

  const paginatedData = data.slice(
    page * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE + ROWS_PER_PAGE
  );

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Container maxWidth="lg" className="py-8 font-poppins">
      <Box className="p-4 sm:p-6 max-w-full md:max-w-5xl mx-auto bg-white dark:bg-[#23272f] text-text-main dark:text-purple-dark rounded-lg shadow-md transition-colors duration-300">
        <Typography
          variant="h5"
          className="mb-6 pb-6 text-center tracking-wide font-semibold"
        >
          Amortization Schedule
        </Typography>

        <Paper className="rounded-xl overflow-hidden bg-white dark:bg-[#23272f] transition-colors duration-300">
          <TableContainer className="max-h-[500px]">
            <Table stickyHeader size="small">
              <TableHead className="bg-gray-100 dark:bg-[#23272f]">
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
                      <span className="font-mono text-blue-500 dark:text-purple-dark">
                        {currency} {row.emi.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-mono text-green-500 dark:text-purple-dark">
                        {currency} {row.principal.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-mono text-red-500 dark:text-purple-dark">
                        {currency} {row.interest.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-mono text-gray-600 dark:text-pink-400 font-semibold">
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
            count={data.length}
            rowsPerPage={ROWS_PER_PAGE}
            page={page}
            onPageChange={handleChangePage}
            className="bg-gray-50 dark:bg-[#23272f] transition-colors duration-300"
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default AmortizationTable;
