const colors = ['#9b59b6', '#e74c3c', '#f1c40f', '#2ecc71'];

const mapColorWithFarm = data => (
  data.map((d, i) =>
    ({ ...d, color: colors[i] }),
  )
);

export default mapColorWithFarm;
