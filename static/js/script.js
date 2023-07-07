// POST METHOD IMPLEMENTATION
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });
  return response.json(); 
}

sendButton.addEventListener("click",async ()=>{
   questionInput = document.getElementById("questionInput").value;
    document.getElementById("questionInput").value = "";
    document.querySelector(".right2").style.display = "block"
    document.querySelector(".right1").style.display = "none"
    question1.innerHTML = questionInput;
    question2.innerHTML = questionInput;

    //Get the answer and and populate it 
let result = await postData("/api",{"question":questionInput })
solution.innerHTML = result.answer

})
sendButton1.addEventListener("click",async ()=>{
   questionInput1 = document.getElementById("questionInput1").value;
    document.getElementById("questionInput1").value = "";
    document.querySelector(".right2").style.display = "block"
    document.querySelector(".right1").style.display = "none"
    question1.innerHTML = questionInput1;
    question2.innerHTML = questionInput1;

    //Get the answer and and populate it 
let result = await postData("/api",{"question":questionInput1 })
solution.innerHTML = result.answer

})