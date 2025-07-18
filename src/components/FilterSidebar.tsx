import React from "react";
import { Typography, TextField, FormControl, InputLabel, Select, MenuItem, Slider, Stack, Paper } from "@mui/material";

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
      elevation={3}
      sx={{
        width: "250px",
        p: 3,
        borderRadius: "12px",
        backgroundColor: "#fefefe",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        height: "fit-content",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filtrele
      </Typography>

      <TextField
        label="Ürün Ara"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Kategori</InputLabel>
        <Select
          value={selectedCategory}
          label="Kategori"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <MenuItem value="">Tümü</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography gutterBottom>Fiyat Aralığı</Typography>
      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={2000}
        sx={{ mb: 2 }}
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
        />
        <TextField
          label="Max"
          type="number"
          value={priceRange[1]}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (!isNaN(val)) onPriceRangeChange([priceRange[0], val]);
          }}
        />
      </Stack>
    </Paper>
  );
};

export default FilterSidebar;
