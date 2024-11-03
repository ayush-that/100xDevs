const axios = require("axios");

async function main() {
  const response = await axios.post(
    "https://www.postb.in/1730533078267-5082187100779"
  );
  console.log(response.data);
}

main();
