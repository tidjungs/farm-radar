const colors = ['#28BAD1', '#CB4F23', '#22AF70', '#DFBA50', '#9b59b6'];

const mapColorWithFarm = data => (
  data.map((d, i) =>
    ({ ...d, color: colors[i] }),
  )
);

export default mapColorWithFarm;
