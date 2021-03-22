import axios from "axios";

const endPoint = "a2vbinpzyoo8p8-ats.iot.ap-northeast-1.amazonaws.com";
const thingName = "esp8266";

export const getShadow = async () => {
  // console.log(endPoint);
  const getUrl = `https://${endPoint}:8443/things/${thingName}/shadow`;
  console.log(getUrl);
  const response = await axios.get(getUrl).then((res) => {
    console.log(res);
    return res;
  });
  return response;
};
