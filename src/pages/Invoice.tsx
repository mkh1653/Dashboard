import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { styled, useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faPrint } from "@fortawesome/free-solid-svg-icons/faPrint";

const MyCard = styled(Card)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.common.white
      : theme.palette.common.black,
}));

const InvoiceTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const Invoice: React.FC = () => {
  const theme = useTheme();

  const InvoiceTacle = (
    <TableContainer
      component={Paper}
      sx={{ background: "none", boxShadow: "none" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align='right'>Quantity</TableCell>
            <TableCell align='right'>Unit</TableCell>
            <TableCell align='right'>Unit Price</TableCell>
            <TableCell align='right'>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component='th' scope='row'>
              Creative Design
            </TableCell>
            <TableCell align='right'>2</TableCell>
            <TableCell align='right'>Hours</TableCell>
            <TableCell align='right'>40000</TableCell>
            <TableCell align='right'>80000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2} colSpan={3} sx={{ border: "none" }} />
            <TableCell align='right'>Subtotal</TableCell>
            <TableCell align='right'>80000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>Total</TableCell>
            <TableCell align='right'>80000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
          padding: `0 ${theme.spacing(2)} ${theme.spacing(2)} 0`,
        }}
        spacing={2}>
        <Grid item xs={12} md={8}>
          <Card sx={{ background: "none", boxShadow: "none" }}>
            <CardContent>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={{ xs: "flex-start", md: "space-between" }}>
                <div>LOGO</div>
                <Typography paragraph variant='h5'>
                  Invoice #635345
                </Typography>
              </Stack>
              <Grid container>
                <Grid container item mb={3}>
                  <Grid item xs={12} md={6}>
                    <InvoiceTitle paragraph variant='subtitle2'>
                      Issue Date:
                    </InvoiceTitle>
                    <Typography variant='body1'>12 Apr 2022</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InvoiceTitle paragraph variant='subtitle2'>
                      Due Date:
                    </InvoiceTitle>
                    <Typography variant='body1'>02 May 2022</Typography>
                  </Grid>
                </Grid>
                <Grid container item mb={3}>
                  <Grid item xs={12} md={6}>
                    <InvoiceTitle paragraph variant='subtitle2'>
                      Bill From:
                    </InvoiceTitle>
                    <Typography variant='body1'>
                      <strong>CodeLab Inc.</strong>
                      <br />
                      9858 South 53rd Ave. Matthews, NC 28104
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InvoiceTitle paragraph variant='subtitle2'>
                      Bill To:
                    </InvoiceTitle>
                    <Typography variant='body1'>
                      <strong>KeenThemes Inc.</strong>
                      <br />
                      8692 Wild Rose Drive Livonia, MI 48150
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {InvoiceTacle}
            </CardContent>
            <CardActions>
              <Button
                variant='outlined'
                startIcon={<FontAwesomeIcon icon={faDownload} />}>
                PDF
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<FontAwesomeIcon icon={faPrint} />}>
                Print
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <MyCard>
            <CardContent>
              <Stack direction='row' spacing={2}>
                <Chip
                  variant='outlined'
                  color='success'
                  label='Approved'
                  size='small'
                />
                <Chip
                  variant='outlined'
                  color='warning'
                  label='Pending Payment'
                  size='small'
                />
              </Stack>
              <Stack>
                <Typography
                  paragraph
                  variant='subtitle1'
                  my={3}
                  color={theme.palette.text.secondary}>
                  <strong>PAYMENT DETAILS</strong>
                </Typography>
                <Box mb={3}>
                  <InvoiceTitle paragraph variant='body2'>
                    Number Card:
                  </InvoiceTitle>
                  <Typography variant='body1'>6037 9918 5371 9029</Typography>
                </Box>
                <Box mb={3}>
                  <InvoiceTitle paragraph variant='body2'>
                    Payment Term:
                  </InvoiceTitle>
                  <Typography variant='body1'>14 days</Typography>
                </Box>
              </Stack>
              <Stack>
                <Typography
                  paragraph
                  variant='subtitle1'
                  my={3}
                  color={theme.palette.text.secondary}>
                  <strong>PROJECT OVERVIEW</strong>
                </Typography>
                <Box mb={3}>
                  <InvoiceTitle paragraph variant='body2'>
                    Project Name:
                  </InvoiceTitle>
                  <Typography variant='body1'>
                    Create React Dashboars
                  </Typography>
                </Box>
                <Box mb={3}>
                  <InvoiceTitle paragraph variant='body2'>
                    Time Spent:
                  </InvoiceTitle>
                  <Typography variant='body1'>230 Hours</Typography>
                </Box>
              </Stack>
            </CardContent>
          </MyCard>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Invoice;
