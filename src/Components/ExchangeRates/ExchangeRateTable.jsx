import React, { useState } from "react";
import { useExchangeRates } from "./useExchangeRates";
import {
  Table, TableHead, TableRow, TableCell, TableBody,
  TableContainer, Paper, TableSortLabel, CircularProgress,
  Typography, TextField, ToggleButton, ToggleButtonGroup,
  TablePagination
} from "@mui/material";

const ROWS_PER_PAGE = 10;

const ExchangeRateTable = () => {
  const {
    filteredRates,
    loading,
    error,
    sortRates,
    baseCurrency,
    setBaseCurrency,
    searchTerm,
    setSearchTerm,
  } = useExchangeRates();

  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(0);

  const handleSort = () => {
    sortRates(sortAsc ? "desc" : "asc");
    setSortAsc(!sortAsc);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedRates = filteredRates.slice(
    page * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE + ROWS_PER_PAGE
  );

  return (
    <div className="p-4 max-w-5xl mx-auto md:my-6 bg-white rounded-lg shadow-lg">
      <Typography variant="h4" className="mb-4 text-center font-poppins py-4">
        Exchange Rates - <br className="md:hidden" />Base: {baseCurrency}
      </Typography>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <TextField
          label="Search Currency"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2"
        />
        <ToggleButtonGroup
          color="primary"
          value={baseCurrency}
          exclusive
          onChange={(e, val) => val && setBaseCurrency(val)}
        >
          <ToggleButton value="USD">USD</ToggleButton>
          <ToggleButton value="INR">INR</ToggleButton>
          <ToggleButton value="EUR">EUR</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Loader / Error */}
      {loading && <CircularProgress className="mx-auto block" />}
      {error && <Typography color="error">{error}</Typography>}

      {/* Table */}
      {!loading && !error && (
        <Paper className="rounded-xl overflow-hidden">
          <TableContainer className="max-h-[500px]">
            <Table stickyHeader>
              <TableHead className="bg-gray-100">
                <TableRow>
                  <TableCell>
                    <TableSortLabel
                      active
                      direction={sortAsc ? "asc" : "desc"}
                      onClick={handleSort}
                    >
                      Currency
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="right">Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRates.map(({ currency, rate }) => (
                  <TableRow key={currency}>
                    <TableCell>{currency}</TableCell>
                    <TableCell align="right">{rate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[ROWS_PER_PAGE]}
            component="div"
            count={filteredRates.length}
            rowsPerPage={ROWS_PER_PAGE}
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      )}
    </div>
  );
};

export default ExchangeRateTable;
