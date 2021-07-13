let result = document.getElementById('result');
let filter = document.getElementById('filter');
let listItems = [];


filter.addEventListener("keyup", e => {
      getData(e)
});

const getData = (e) => {
  
    document.getElementById("loader").style.display = "block";
    fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
        .then(data => {
            result.innerHTML = '';
            listItems = [];

            if(e.target.value.length > 2){

              data.forEach(user => {

                let li = document.createElement('li');
                if (user.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                    listItems.push(li);
                    li.innerHTML = `<div class="user-info"> <p>${user.title}</p></div>`;
                    result.appendChild(li);
                    document.getElementById("loader").style.display = "none";

                }

              });

            }else{
              document.getElementById("loader").style.display = "none";
              return;
            }

            if (listItems.length <= 0) {
                result.innerHTML = "<li>داده ای یافت نشد</li>";
                document.getElementById("loader").style.display = "none";
            }

        });
}