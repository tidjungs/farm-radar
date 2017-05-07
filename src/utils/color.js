const colors = ['#28BAD1', '#CB4F23', '#22AF70', '#DFBA50', '#9b59b6'];

export const mapColorWithFarm = data => (
  data.map((d, i) =>
    ({ ...d, color: colors[i] }),
  )
);

export const getInfoColor = (type) => {
  if (type === 'plantarea') {
    return '#16a085';
  } else if (type === 'harvestarea') {
    return '#DFBA50';
  }
  return '#2980b9';
};

