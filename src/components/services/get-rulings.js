export const getRulingList = async () => {
  const response = await fetch('/assets/data.json');
  const {data} = await response.json();
  return data;
}
