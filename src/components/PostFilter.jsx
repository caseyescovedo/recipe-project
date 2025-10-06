import PropTypes from 'prop-types';
export function PostFilter({ field, value, onChange }) {
  return (
    <div className="mb-4 flex items-center">
      <label
        htmlFor={`filter-${field}`}
        className="mr-2 font-medium text-gray-700"
      >
        {field}:
      </label>
      <input
        type="text"
        name={`filter-${field}`}
        id={`filter-${field}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
