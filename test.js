const repo = [
  {
    title: "content 1",
    time: 3000,
  },
  {
    title: "content 2",
    time: 2000,
  },
  {
    title: "content 3",
    time: 4000,
  },
];

const func = (title, time) => {
  const promise = new Promise((resolve, reject) => {
    if (repo.length > 0) {
      setTimeout(() => {
        resolve(title);
      }, time);
    } else reject("No data...");
  });

  return promise;
};

//Action
const action = async () => {
  try {
    for (let { title, time } of repo) {
      const data = await func(title, time);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
action();
