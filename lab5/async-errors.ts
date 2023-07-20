
interface Resp {
  status: string,
  data : number[]
}

async function fetchData  (url : string){
  return new Promise<Resp>((resolve, reject) => {
    setTimeout(() => {
      if(url === "success"){
        resolve({
          status: "success",
          data: [1, 2, 3, 4, 5]
        })
      }else if(url === "error"){
        reject("Failed fetching data")
      }
    }, 2000);
  })
}

async function processData (data : number[]){
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      const processedData = data.map((value, index) => (value * 2))
      resolve(processedData);
    }, 1000);
  })  
    
}

async function displayData (data : number[]){
  return new Promise<void>((resolve, reject) => {
    data.forEach(element => {
      console.log(element);
    });
    resolve();
  })
}

async function fetchAndProcessData(url : string){
  try {
    const data = await fetchData(url);
    const processedData = await processData(data.data);
    await displayData(processedData);
    displayData(processedData)
  } catch (error) {
    console.log(error);
  }
}

fetchAndProcessData("success");
fetchAndProcessData("error");
