
  export function filterData(searchInput, restaurants) {
    const filteredData = restaurants.filter((restaurant) => {
      const name = restaurant?.data?.data?.name;
      if (name) {
        return name.toLowerCase().includes(searchInput.toLowerCase());
      }
      return false;
    });
    return filteredData;
  }
  