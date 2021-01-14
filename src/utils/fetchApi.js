import STRINGS from "@/constants/strings";

export function fetchGet(url) {
  return fetch(`${STRINGS.API_URL}${url}`).then((res) => {
    return res.json().then((jsonRes) => {
      return jsonRes.data;
    });
  });
}
