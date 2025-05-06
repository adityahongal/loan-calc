import { Card, CardContent, Typography } from "@mui/material";

const SummaryCard = ({ emi, currency }) => (
  <Card className="mt-6 bg-blue-100">
    <CardContent>
      <Typography variant="h6">Monthly EMI</Typography>
      <Typography variant="h4" className="text-blue-600 font-bold">
        {currency} {emi.toFixed(2)}
      </Typography>
    </CardContent>
  </Card>
);

export default SummaryCard;
