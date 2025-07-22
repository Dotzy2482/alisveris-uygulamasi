import React from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Stack,
  Paper,
} from "@mui/material";

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
  priceRange: number[];
  onPriceRangeChange: (value: number[]) => void;
}

const FilterSidebar: React.FC<Props> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  priceRange,
  onPriceRangeChange,
}) => {
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      onPriceRangeChange(newValue);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "250px",
        p: 3,
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        color: "#fff",
        boxShadow: `
          0 4px 16px 0 rgba(31, 38, 135, 0.2),
          inset 0 1px 1px rgba(255, 255, 255, 0.08),
          inset 0 -1px 1px rgba(0, 0, 0, 0.05)
        `,
        height: "fit-content",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
        Filtrele
      </Typography>

      <TextField
        label="Ürün Ara"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          mb: 2,
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            background: "rgba(255,255,255,0.05)",
            borderRadius: "12px",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.2)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.4)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255, 255, 255, 0.6)",
            },
          },
        }}
        InputLabelProps={{ sx: { color: "#fff" } }}
      />
      
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel sx={{ color: "#fff" }}>Kategori</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          label="Kategori"
          sx={{
            color: "#fff",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "12px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.2)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.4)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255,255,255,0.6)",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#ffffff", // Açılır menü opak beyaz
                color: "#000000",           // Siyah yazı
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            },
          }}
        >
          <MenuItem value="">Tümü</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography gutterBottom sx={{ color: "#fff" }}>
        Fiyat Aralığı
      </Typography>
      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={2000}
        sx={{
          mb: 2,
          color: "#fff",
        }}
      />

      <Stack direction="row" spacing={2}>
        <TextField
          label="Min"
          type="number"
          value={priceRange[0]}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (!isNaN(val)) onPriceRangeChange([val, priceRange[1]]);
          }}
          InputProps={{ sx: { color: "#fff" } }}
          sx={{
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              background: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.2)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255,255,255,0.4)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(255,255,255,0.6)",
              },
            },
          }}
          InputLabelProps={{ sx: { color: "#fff" } }}
        />
        <TextField
          label="Max"
          type="number"
          value={priceRange[1]}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (!isNaN(val)) onPriceRangeChange([priceRange[0], val]);
          }}
          InputProps={{ sx: { color: "#fff" } }}
          sx={{
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              background: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.2)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255,255,255,0.4)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(255,255,255,0.6)",
              },
            },
          }}
          InputLabelProps={{ sx: { color: "#fff" } }}
        />
      </Stack>
    </Paper>
  );
};

export default FilterSidebar;
