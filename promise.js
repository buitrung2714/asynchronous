const func = () => {
  let text, status;
  console.log("Hello");

  const promise = new Promise((resolve, reject) => {
    status = true;

    setTimeout(() => {
      if (status) {
        text = "Tyson";
        resolve(text);
      } else {
        text = "Error";
        reject(text);
      }
    }, 3000);
  });

  //return promise
  return promise;
};

const load = () => {
  let statusLoad;

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      statusLoad = true;
      statusLoad ? resolve() : reject("Not Found");
    }, 3000);
  });

  return promise2;
};

const firstName = (name) => console.log(`Mr.${name}`);

//RESULT
func()
  .then((result) => {
    load()
      .then(() => firstName(result))
      .catch((err2) => console.log(err2));
  })
  .catch((err) => console.log(err));
