const func = (callback) => {
  let text = "Hello";
  console.log(text);

  setTimeout(() => {
    text = "Tyson";
    callback(text, callback2);
  }, 3000);
};

const callback = (text, callback2) => {
  console.log(text);
  setTimeout(() => {
    text = "Bui";
    callback2(text);
  }, 2000);
};

const callback2 = (text) => console.log(text);

func(callback);
