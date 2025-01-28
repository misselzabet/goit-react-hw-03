import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
