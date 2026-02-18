const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const response = await fetch("https://equran.id/api/v2/imsakiyah", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        provinsi: "Jawa Timur",
        kabkota: "Kab. Pamekasan"
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Gagal mengambil data" })
    };
  }
};
