function submitForm (e){
    e.preventDefault();
    let name = document.forms["enter_your_name"]["name"].value;
    //store nanme of people that took the quizz

    sessionStorage.setItem("name", name);
    console.log(name);
    location.href = "quizz.html";
}