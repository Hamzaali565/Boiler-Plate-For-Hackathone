import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Cloudinary from "../../components/Cloudinary";
import Navbar from "./Navbar";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const AddProduct = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Box>
      <Navbar />
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ color: "blue" }}>
          Add new Item
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          {/*add image */}
          <Box
            sx={{
              bgcolor: "darkgray",
              padding: "3em 0",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <Cloudinary />
          </Box>

          {/* Item name */}
          <Box
            sx={{
              bgcolor: "darkgray",
              padding: "20px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <input
              placeholder="Item Name"
              style={{
                border: "none",
                backgroundColor: "transparent",
                borderInlineColor: "darkgray",
                width: "100%",
              }}
            />
          </Box>

          {/* Category */}
          <Box
            sx={{
              bgcolor: "darkgray",
              paddingY: "5px",
              paddingX: "10px",
              marginTop: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputLabel id="demo-multiple-name-label">
              Select Category
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Select Category" />}
              sx={{ border: "none" }}
              //   MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  //   style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Box>

          {/* Description */}
          <Box
            sx={{
              bgcolor: "darkgray",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          >
            <TextField
              id="outlined-multiline-static"
              //   label="Multiline"
              multiline
              placeholder="Describe The item"
              sx={{ width: "100%" }}
              rows={3}
              defaultValue="Default Value"
            />
          </Box>

          {/* Unit Name */}
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" sx={{ color: "blue" }}>
              User Name:
            </Typography>
            <Box
              sx={{
                backgroundColor: "darkgray",
                padding: "20px ",
                borderRadius: "10px",
              }}
            >
              <input
                placeholder="Pcs./Kg/dozen"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  width: "100%",
                }}
              />
            </Box>
          </Box>
          {/* Unit Price */}
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h6" sx={{ color: "blue" }}>
              Unit Price:
            </Typography>
            <Box
              sx={{
                backgroundColor: "darkgray",
                padding: "20px ",
                borderRadius: "10px",
              }}
            >
              <input
                placeholder="Pkr 3.22"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  width: "100%",
                }}
              />
            </Box>
          </Box>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Box
              sx={{
                bgcolor: "green",
                padding: "10px 0",
                width: "200px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Button sx={{ color: "white" }}>Add Product</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
