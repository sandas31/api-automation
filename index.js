
//Program 1
// async function getPost(){
//      let response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
//      console.log("status",response.status);
//      let data= await response.json();
//       console.log("title",data.title);
// }
// getPost();

 //Program 2
  async function getPost(){
     let response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if(response.status=='200'){
        console.log("successfull")
      }else{
        console.log("failed");
      }
  }
  getPost();