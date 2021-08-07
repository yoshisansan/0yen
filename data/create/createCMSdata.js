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
    { contents } = await contentUrlData;

  return contents;
}


const createJSONdata = async() => {
  const contents = await getMicroCMSdata();
  const JSONdata = JSON.stringify(contents, null, 2);
  fs.writeFileSync('../microcms.json', JSONdata);
}

createJSONdata();