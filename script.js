const insertKey = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insertKey.innerHTML = "";
  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };
  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";
    const small = document.createElement("small");
    small.appendChild(document.createTextNode(key));
    div.appendChild(small);

    const value = document.createTextNode(keyCodes[key]);
    div.appendChild(value);
    insertKey.appendChild(div);
  }
});
