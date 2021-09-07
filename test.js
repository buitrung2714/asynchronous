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
console.log(a);
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
    for (let i in repo) {
      let { title, time } = repo[i];
      const data = await func(title, time);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
action();
