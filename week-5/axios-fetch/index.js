async function fetchPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET",
  });
  const data = await response.json();
  document.getElementById(
    "fetchContent"
  ).innerHTML = `<b>Title: </b> ${data.title}<br><b>Body:</b> ${data.body}`;
}

async function fetchPostAxios() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/2"
  );
  document.getElementById(
    "axiosContent"
  ).innerHTML = `<b>Title: </b> ${response.data.title}<br><b>Body:</b> ${response.data.body}`;
}

fetchPost();
fetchPostAxios();
