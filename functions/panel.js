const data = {
  _id: "6705c3d99e268b320ab92215",
  name: "ShinobiWarfare1053UnlockEverything",
  code: "usw1053",
  status: true,
  __v: 0
};

exports.handler = async (event, context) => {
  const { code } = event.queryStringParameters;

  if (code === data.code) {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Code not found" })
    };
  }
};
