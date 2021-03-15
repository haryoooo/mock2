

// No 1

function type1() {

    let num = 6

    let space = " ";

        for(let i=0; i < num; i++){

                space += `<p>*#*#*#</p>`

            }

        let input = `${space}`;

        document.getElementById("result").innerHTML = input;

}

function type2() {

    let num = 8

    let space = " ";

        for(let i=0; i <= num; i++) {

            for(let j=num; j > i; j--){

                    space += "#"

                    // if(j - 1){
                    //     space += "*"
                    // }

                }

            space += `<p>`
        }

        let input = `${space}`

        document.getElementById("result").innerHTML = input;

}


// No 2

let arrayData = [
                { 
                   No : 1,
                   Tanggal : "2020-09-02",
                   Jam : "12:10",
                   Kegiatan : "Main",
                   Lokasi :  "https://img.okezone.com/content/2019/01/11/326/2003233/-rumah-sakit-cL0izkeJa7.jpg",
                },
                {
                   No : 2,
                   Tanggal : "2020-03-09",
                   Jam : "11:50",
                   Kegiatan : "Coding",
                   Lokasi :  "https://www.google.com/url?sa=i&url=https%3Asbcibiuw%2F%2Fblog.hubspot.com%",
                }
                ];


function showData(number) {

   if (number) {

      let inputEdit = arrayData.map((value) => {

        if (value.No == number) {
           return `
               <tr>
               <td>#</td>
               <td><input type="date" name="" value="${value.Tanggal}" id="editDate"></td>
                <td><input type="time" name="" value="${value.Jam}" id="editTime"></td>
                <td><input type="text" name="" value="${value.Kegiatan}" id="editText"></td>
                <td><input type="url" name="" value="${value.Lokasi}" id="editUrl"></td>
               <td><button onclick="save(${value.No})">SAVE</button> <button onclick="cancel()">CANCEL</button></td>
               </tr>
           `
        }

      else {
         return `<tr>
                     <td>${value.No}</td>
                     <td>${value.Tanggal}</td>
                     <td>${value.Jam}</td>
                     <td>${value.Kegiatan}</td>
                     <td>${value.Lokasi}</td>
                     <td><button onclick="editUser(${value.No})">EDIT</button> <button onclick="deleteUser(${value.No})">HAPUS</button></td>
                  </tr>`
         }
      })

      document.getElementById("resultValue").innerHTML = inputEdit.join("");
   }

   else{

      let inputData = arrayData.map(value=> {

         return `<tr>
         <td>${value.No}</td>
         <td>${value.Tanggal}</td>
         <td>${value.Jam}</td>
         <td>${value.Kegiatan}</td>
         <td>${value.Lokasi}</td>
         <td><button onclick="editUser(${value.No})">EDIT</button> <button onclick="deleteUser(${value.No})">HAPUS</button></td>
      </tr>`
      });
      document.getElementById("resultValue").innerHTML = inputData.join("");
   }

}


function deleteUser(No) {
   arrayData = arrayData.filter((el) => {
     return el.No !== No;
   });
 
   showData();
 }
 
 function editUser(No) {
   showData(No);
 }
 
 function cancel() {
   showData();
 }

 function save(number) {
   let index = arrayData.findIndex((value) => value.No == number);
   let Tanggal = document.getElementById("editDate").value;
   let Jam = document.getElementById("editTime").value;
   let Kegiatan = document.getElementById("editText").value;
   let Lokasi = document.getElementById("editUrl").value;
 
   arrayData[index] = {
     ...arrayData[index],
     Tanggal,
     Jam,
     Kegiatan,
     Lokasi,
   };
 
   showData();
 }


function addData() {

   let Tanggal = document.getElementById("dateValue").value;
   let No = arrayData.length + 1;
   let Kegiatan = document.getElementById("textValue").value;
   let Jam = document.getElementById("timeValue").value;
   let Lokasi = document.getElementById("imageUrl").value;

   if (!Tanggal) {
      alert("tolong isi user name");
    } 
    
    else if (!Jam) {
      alert("tolong isi email");
    } 
    
    else if (!Kegiatan){
      alert("tolong isi kegiatan!");
    }


    else if (!Lokasi){
      alert("tolong isi kegiatan!");
    }

    else{
      arrayData.push({
        No,
        Tanggal,
        Jam,
        Kegiatan,
        Lokasi,
      });

      showData();

   }
  
   document.getElementById("dateValue").innerHTML = "";
   document.getElementById("textValue").innerHTML = "";
   document.getElementById("timeValue").innerHTML = "";
   document.getElementById("imageUrl").innerHTML = "";


}

showData();


// Nomor 3

let text = document.getElementById("textValue").value;

let arrText = [];


