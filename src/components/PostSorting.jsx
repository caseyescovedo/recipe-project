import PropTypes from 'prop-types';
export function PostSorting({
  fields = [],
  value,
  onChange,
  orderValue,
  onOrderChange,
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        margin: '1rem 0',
      }}
    >
      <label htmlFor="sortBy" style={{ fontWeight: 'bold' }}>
        Sort By:
      </label>
      <select
        name="sortBy"
        id="sortBy"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '0.3rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        {fields.map((field) => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
      <label htmlFor="sortOrder" style={{ fontWeight: 'bold' }}>
        Sort Order:
      </label>
      <select
        name="sortOrder"
        id="sortOrder"
        value={orderValue}
        onChange={(e) => onOrderChange(e.target.value)}
        style={{
          padding: '0.3rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <option value={'ascending'}>ascending</option>
        <option value={'descending'}>descending</option>
      </select>
    </div>
  );
}
PostSorting.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  orderValue: PropTypes.string.isRequired,
  onOrderChange: PropTypes.func.isRequired,
};
