const fs = require('fs');
const axios = require('axios').default;
require('dotenv').config();

const getMicroCMSdata = async() => {
  const url = `https://0yen.microcms.io/api/v1/0yen`;
  const apiKeyHeaderOption = { headers : {"X-API-KEY": process.env.MICROCMS_API_KEY }};

  const getUrlOption = (number, url) => {
    const UrlandOption = url + `?limit=${number}`;

    return String(UrlandOption);
  }

  // microCMSのコンテンツを引っ張ろうとするとデフォルトでlimit=10のオプションがついており全てのコンテンツを引っ張ってこれない。totalCountでコンテンツ総数をチェック
  const getTotalCountUrl = getUrlOption(0, url),
    totalCountUrlData = await axios.get(getTotalCountUrl, apiKeyHeaderOption).then(r => r.data),
    { totalCount } = await totalCountUrlData;

  const getContentUrl = getUrlOption(totalCount, url),
    contentUrlData = await axios.get(getContentUrl, apiKeyHeaderOption).then(r => r.data),
    { contents } = await contentUrlData

  return contents;
}


const createJSONdata = async() => {
  const contents = await getMicroCMSdata();
  const JSONdata = JSON.stringify(contents, null, 2);
  fs.writeFileSync('../microcms.json', JSONdata);
}

createJSONdata();

// createJSONdata();
// const getMicroCMSdata = async() => {
//   const fetchTarget = {
//     url: `https://0yen.microcms.io/api/v1/0yen`,
//     option: {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "X-API-KEY": process.env.MICROCMS_API_KEY,
//       },
//     },
//   }

//   console.log(await fetch(fetchTarget.url, fetchTarget.option).then(r => console.log(r.json())));

//   const getUrlOption = (number, url) => {
//     const UrlandOption = String(url + `?limit=${number}`)
//     return String(UrlandOption)
//   }

//   // microCMSのコンテンツを引っ張ろうとするとデフォルトでlimit=10のオプションがついており全てのコンテンツを引っ張ってこれない。totalCountでコンテンツ総数をチェック
//   const { url, option } = fetchTarget,
//     getTotalCountUrl = getUrlOption(0, url),
//     totalCountUrlData = await fetch(getTotalCountUrl, option),
//     { totalCount } = await totalCountUrlData.json()

//     console.log(totalCount);

//   const getContentUrl = getUrlOption(totalCount, url),
//     contentUrlData = await fetch(getContentUrl, option),
//     { contents } = await contentUrlData.json()

//   return contents;
// }

// const tes = getMicroCMSdata().then( (r) => console.log(r));