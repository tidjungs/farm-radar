export const correlationWord = (val) => {
  if (val > 0.9) {
    return 'Perfect positive correlation';
  } else if (val >= 0.5) {
    return 'High positive correlation';
  } else if (val > 0) {
    return 'Low positive correlation';
  } else if (val === 0.0) {
    return 'No correlation';
  } else if (val > -0.5) {
    return 'Low negative correlation';
  } else if (val > -0.9) {
    return 'High negative correlation';
  }
  return 'Perfect negative correlation';
};


export const correlationColor = (val) => {
  if (val > 0.9) {
    return '#3498db';
  } else if (val >= 0.5) {
    return '#1abc9c';
  } else if (val > 0) {
    return '#2ecc71';
  } else if (val === 0.0) {
    return '#ecf0f1';
  } else if (val > -0.5) {
    return '#f1c40f';
  } else if (val > -0.9) {
    return '#e74c3c';
  }
  return '#34495e';
};


export const filterData = (data, key) => {
  if (key === 'week') {
    return data.filter(d => d.type === 'week');
  } else if (key === 'month') {
    return data.filter(d => d.type === 'week' || d.type === 'month');
  } else if (key === 'halfyear') {
    return data.filter(d => d.type !== 'year');
  }
  return data;
};
