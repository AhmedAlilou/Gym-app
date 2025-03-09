import React from "react";

function Descriptionform() {
  return (
    <div className="flex-3">
      <label htmlFor="Description" className="block text-white mb-2">
        Description
      </label>
      <input
        type="text"
        id="Description"
        name="Description"
        placeholder="Workout Description"
        className="w-full bg-neutral-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
    </div>
  );
}

export default Descriptionform;
