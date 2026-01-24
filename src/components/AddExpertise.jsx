import { useState } from "react";
import { Code2, Palette, Layout } from "lucide-react";
import Input from "./Input";
import Textarea from "./Textarea";

const iconOptions = [
  { name: "Development", icon: <Code2 size={24} /> },
  { name: "Design", icon: <Palette size={24} /> },
  { name: "UI/UX", icon: <Layout size={24} /> },
];

export default function AddExpertise() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [uploadedIcon, setUploadedIcon] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
  });

  const handleIconUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/svg+xml") {
      setUploadedIcon(URL.createObjectURL(file));
      setSelectedIcon(null);
    }
  };

  return (
    <div className="mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        Add Expertise
      </h2>
      
      <Input
        label="Expertise Title"
        placeholder="Frontend Development"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
      />

      <Textarea
        label="Description"
        placeholder="Brief description about expertise"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <Input
        label="Skills (comma separated)"
        placeholder="React, Tailwind, JavaScript"
        value={formData.skills}
        onChange={(e) =>
          setFormData({ ...formData, skills: e.target.value })
        }
      />

      {/* Icon Section */}
      <div className="mb-6">
        <label className="label">Expertise Icon</label>

        {/* Predefined Icons */}
        <div className="flex gap-3 mb-4">
          {iconOptions.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedIcon(item.icon);
                setUploadedIcon(null);
              }}
              className={`p-3 rounded border 
              ${selectedIcon === item.icon
                ? "border-blue-600 bg-blue-50 dark:bg-gray-700"
                : "border-gray-300 dark:border-gray-600"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Upload SVG */}
        <input
          type="file"
          accept=".svg"
          onChange={handleIconUpload}
          className="input"
        />

        {/* Preview */}
        {(uploadedIcon || selectedIcon) && (
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Preview:
            </span>
            {uploadedIcon ? (
              <img src={uploadedIcon} alt="Icon" className="w-8 h-8" />
            ) : (
              selectedIcon
            )}
          </div>
        )}
      </div>

      {/* Submit */}
      <button className="w-full py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
        Save Expertise
      </button>
    </div>
  );
}

