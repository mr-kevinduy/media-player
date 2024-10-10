export const parseEntries = function (entries, selectedIndex) {
  entries = entries.map((data, index) => {
    if (data !== null && typeof data !== 'object') {
      data = {
        value: data,
        label: data
      };
    }

    let isDefault = false;
    if (typeof selectedIndex === 'undefined' && data.default === true) {
      isDefault = true;
      selectedIndex = index;
    }

    return {
      ...data,
      index,
      default: isDefault
    };
  });

  return {
    entries,
    selected: entries[selectedIndex || 0]
  };
}
