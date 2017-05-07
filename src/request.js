import fetch from 'isomorphic-fetch';

export async function loadCorrData(a, b) {
  const response = await fetch(`https://shrouded-tundra-34049.herokuapp.com/price/corr/${a}.${b}`);
  const res = await response.json();
  return res;
}

export async function loadPriceData(id) {
  const response = await fetch(`https://shrouded-tundra-34049.herokuapp.com/price/${id}`);
  const res = await response.json();
  return res;
}

export async function loadProvince() {
  const response = await fetch('https://shrouded-tundra-34049.herokuapp.com/province');
  const res = response.json();
  return res;
}

export async function loadInfoData(provinceId, productId) {
  const response = await fetch(`https://shrouded-tundra-34049.herokuapp.com/crop/${provinceId}/${productId}`);
  const res = response.json();
  return res;
}
