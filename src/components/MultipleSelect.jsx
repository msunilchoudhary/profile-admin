import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

export default function MultipleSelect({items, handleChange, itemName}) {

  return (
    <div>
      <FormControl className="w-full!">
        <InputLabel id="multiple-skills" className="text-sm!">
          Skills
        </InputLabel>
        <Select
          labelId="multiple-skills-label"
          id="multiple-skills-checkbox"
          multiple
          value={itemName}
          onChange={handleChange}
          input={<OutlinedInput label="Skills" className="text-sm!" />}
          renderValue={(selected) => selected.join(", ")}
          className="rounded-lg! text-[12px]!"
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={itemName.includes(item)} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
