import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CurrencySelector = ({ currency, setCurrency }) => {
  const options = ["INR", "USD", "GBP", "EUR", "AED", "CAD", "JPY", "AUD"];
  return (
    <FormControl fullWidth>
      <InputLabel>Currency</InputLabel>
      <Select
        value={currency}
        onChange={e => setCurrency(e.target.value)}
        label="Currency"
      >
        {options.map(curr => (
          <MenuItem key={curr} value={curr}>{curr}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelector;
