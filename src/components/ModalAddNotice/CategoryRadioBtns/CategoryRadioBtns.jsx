export const CategoryRadioBtns = ({ onChange, category }) => {
  const onChangeHandler = e => {
    onChange(e.target.value, 'category');
  };

  return (
    <div>
      <label category={category} value={'lost-found'}>
        <input
          type="radio"
          name="category"
          value="lost-found"
          onChange={onChangeHandler}
        />
        lost-found
      </label>
      <label category={category} value={'in-good-hands'}>
        <input
          type="radio"
          name="category"
          value="in-good-hands"
          onChange={onChangeHandler}
        />
        in good hands
      </label>
      <label category={category} value={'sell'}>
        <input
          type="radio"
          name="category"
          value="sell"
          onChange={onChangeHandler}
        />
        sell
      </label>
    </div>
  );
};
