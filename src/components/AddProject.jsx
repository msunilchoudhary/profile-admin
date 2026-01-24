import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const categories = [
  "Web Application",
  "Mobile App",
  "Landing Page",
  "E-commerce",
  "Dashboard",
];

export default function AddProject() {
  const [images, setImages] = useState([]);
  const [features, setFeatures] = useState([""]);
  const [technologies, setTechnologies] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    overview: "",
    roles: "",
    client: "",
    duration: "",
    liveUrl: "",
    category: "",
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleFeatureChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addFeature = () => setFeatures([...features, ""]);

  return (
    <div className=" bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Add Project
        </h2>
      </div>

      {/* Title */}
      <Input
        label="Project Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      {/* Overview */}
      <Textarea
        label="Project Overview"
        value={formData.overview}
        onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
      />
      
      <div className="mb-4">
        <label className="flex">Upload Images</label>
        <div className="flex gap-8 items-center mt-2">
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="rounded-lg text-center w-60 p-7 bg-gray-800 text-gray-100 cursor-pointer hover:bg-amber-700"
          />
          <div className="flex gap-3 flex-wrap">
            {images.map((img, i) => (
              <div className="flex w-20 h-20 p-2 border border-gray-300 overflow-hidden rounded-lg">
                <img
                  key={i}
                  src={img}
                  alt="preview"
                  className=" object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-4">
        <label className="label mb-2 flex">Key Features</label>        
        {features.map((feature, index) => (
          <div className="flex" key={index}>
            <input
            
            value={feature}
            onChange={(e) => handleFeatureChange(index, e.target.value)}
            placeholder={`Feature ${index + 1}`}
            className="border border-gray-400 h-12 w-full rounded-lg px-4 mb-2"
          />
          </div>
          
        ))}
        <button onClick={addFeature} className="text-blue-600 text-sm mt-1 cursor-pointer">
          + Add Feature
        </button>
      </div>

      {/* Roles */}
      <Textarea
        label="Roles & Responsibilities"
        value={formData.roles}
        onChange={(e) => setFormData({ ...formData, roles: e.target.value })}
      />

      {/* Client & Duration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Client"
          value={formData.client}
          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
        />
        <Input
          label="Project Duration"
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
        />
      </div>

      {/* Live URL */}
      <Input
        label="Live URL"
        value={formData.liveUrl}
        onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
      />

      {/* Technologies */}
      <Input
        label="Technologies Used (comma separated)"
        value={technologies}
        onChange={(e) => setTechnologies(e.target.value)}
      />

      {/* Category */}
      <div className="mb-6 flex gap-5 items-center">
        <label className="label">Category</label>
        <select
          className="w-72 border border-gray-400 rounded-lg h-12 px-4"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button className="w-full py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700">
        Save Project
      </button>
    </div>
  );
}
