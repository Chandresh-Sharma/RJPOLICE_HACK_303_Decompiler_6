import { Box, Typography, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataModel } from "../data/mockDataModels";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import EditIcon from '@mui/icons-material/Edit';
import Header from "../components/Header";

const Models = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "size",
      headerName: "Size",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "lastUpdated", // Corrected field name
      headerName: "Last Updated",
      flex: 1,
    },
    {
      field: "comment", // Corrected field name
      headerName: "Comments",
      flex: 1,
    },
    {
      field: "configure",
      headerName: "Configure",
      flex: 1,
      renderCell: ({ row: { configure } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
                configure === "edit"
                ? colors.greenAccent[600]
                : configure === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {configure === "edit" && <EditIcon />}
            {configure === "manager" && <SecurityOutlinedIcon />}
            {configure === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {configure}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Models" subtitle="Managing the Models" />
      <Box
        m="20px 0 0 0"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Models</Typography>
        <Link to="/add-model">  {/* Specify the path for the "Add" page */}
          <Button variant="contained" color="primary">
            Add
          </Button>
        </Link>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataModel} columns={columns} />
      </Box>
    </Box>
  );
};

export default Models;