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
  console.log("Loading...");
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
const action = async () => {
  try {
    const name = await func();
    try {
      await load();
      firstName(name);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

action();
