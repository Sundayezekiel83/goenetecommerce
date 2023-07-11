export function SET_STORAGE_ITEM(key, value) {
  if (
    typeof window !== "undefined" &&
    localStorage.setItem(key, JSON.stringify(value))
  );
}

export function GET_STORAGE_ITEM(key) {
  if (typeof window !== "undefined" && localStorage.getItem(key) == "undefined")
    return "";
  if (typeof window !== "undefined" && localStorage.getItem(key) == undefined)
    return "";
  if (typeof window !== "undefined" && localStorage.getItem(key) == "null")
    return "";
  if (typeof window !== "undefined" && localStorage.getItem(key) == null)
    return "";
  if (typeof window !== "undefined" && !localStorage.getItem(key)) return "";
  return JSON.parse(typeof window !== "undefined" && localStorage.getItem(key));
}

export function REMOVE_STORAGE_ITEM(key) {
  return localStorage.removeItem(key);
}
