fetchData();
async function myAsyncFunction() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();