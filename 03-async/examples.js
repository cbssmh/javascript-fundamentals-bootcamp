// Promise 예제
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("데이터 수신 완료");
    }, 1000);
  });
}

// async / await 예제
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();
