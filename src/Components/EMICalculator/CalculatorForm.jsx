import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const CalculatorForm = ({ values, onChange, onSubmit, onReset }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const { principal, interestRate, term } = values;

    if (!principal || isNaN(principal) || principal <= 0) {
      newErrors.principal = "Enter a valid loan amount";
    }
    if (!interestRate || isNaN(interestRate) || interestRate <= 0 || interestRate > 100) {
      newErrors.interestRate = "Interest rate must be between 0 and 100";
    }
    if (!term || isNaN(term) || term <= 0 || term > 30) {
      newErrors.term = "Term must be between 1 and 30 years";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Loan Amount"
            fullWidth
            name="principal"
            value={values.principal}
            onChange={onChange}
            error={!!errors.principal}
            helperText={errors.principal}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Annual Interest Rate (%)"
            fullWidth
            name="interestRate"
            value={values.interestRate}
            onChange={onChange}
            error={!!errors.interestRate}
            helperText={errors.interestRate}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Term (Years)"
            fullWidth
            name="term"
            value={values.term}
            onChange={onChange}
            error={!!errors.term}
            helperText={errors.term}
            required
          />
        </Grid>
      </Grid>
      <div className="flex gap-4 mt-4">
        <Button variant="contained" type="submit">Calculate</Button>
        <Button variant="outlined" color="secondary" onClick={onReset}>Reset</Button>
      </div>
    </form>
  );
};

export default CalculatorForm;
