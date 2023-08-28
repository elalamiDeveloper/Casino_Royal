const filterObject = (objToFilter, ...elements) => {
  const newObject = {};

  elements.forEach((element) => {
    newObject[element] = objToFilter[element];
  });

  return newObject;
};

export default filterObject;
