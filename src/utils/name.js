const getName = (data, ids) => {
  const name = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].id === ids[0]) {
      name.push(data[i].name);
    }
  }
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].id === ids[1]) {
      name.push(data[i].name);
    }
  }
  return name;
};

export default getName;
