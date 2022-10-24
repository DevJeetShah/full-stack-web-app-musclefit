function addTextInput() 
{

    var div = document.createElement("div");

    var input = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    var input4 = document.createElement("input");
    var input5 = document.createElement("input");
    var input6 = document.createElement("input");

    var br1 = document.createElement("br");
    var br2 = document.createElement("br");

    var label = document.createElement("label")
    var label2 = document.createElement("label")
    var label3 = document.createElement("label")
    var label4 = document.createElement("label")
    var label5 = document.createElement("label")
    var label6 = document.createElement("label")

    var newDeleteButton = document.createElement('input');

    input.setAttribute("type", "text");
    input.setAttribute("name", "mealType");  
    input.setAttribute("id", "mealType");
    input.setAttribute("placeholder", "eg Breakfast");

    input2.setAttribute("type", "text");
    input2.setAttribute("name", "mealName");
    input.setAttribute("id", "mealName");
    input2.setAttribute("placeholder", "eg Omlette");

    input3.setAttribute("type", "text");
    input3.setAttribute("name", "calories");
    input.setAttribute("id", "calories");
    input3.setAttribute("placeholder", "");

    input4.setAttribute("type", "text");
    input4.setAttribute("name", "totalProtein");
    input.setAttribute("id", "totalProtein");
    input4.setAttribute("placeholder", "");

    input5.setAttribute("type", "text");
    input5.setAttribute("name", "totalFat");
    input.setAttribute("id", "totalFat");
    input5.setAttribute("placeholder", "");

    input6.setAttribute("type", "text");
    input6.setAttribute("name", "totalCarbs");
    input.setAttribute("id", "totalCarbs");
    input6.setAttribute("placeholder", "");

    newDeleteButton.type = 'button';
    newDeleteButton.value = "Delete";
    newDeleteButton.name = 'deleteTextInput';
    newDeleteButton.className = "btn btn-danger btn-sm"
    newDeleteButton.addEventListener("click", deleteHandler);
    

    div.appendChild(label).innerText = "Meal Type:"
    div.appendChild(label2).innerText = "Meal Name:"
    div.appendChild(label3).innerText = "Calories:"
    div.appendChild(label4).innerText = "Protein Amount:"
    div.appendChild(label5).innerText = "Carbs Amount:"
    div.appendChild(label6).innerText = "Fat Amount:"
    
    div.append(label, input, label2, input2, label3, input3, label4, input4, label5, input5, label6, input6, newDeleteButton, br1, br2)

    document.getElementById('mealplanfields').appendChild(div);

    function deleteHandler()
    {
        var parent = this.parentElement;
        parent.parentElement.removeChild(parent);
    }

}




function selectmuscle(){

    let muscleselect = document.getElementById('workoutmuscle').value
    let nodevalue = document.querySelectorAll(".wrs")

    if(muscleselect == "chest") {
      document.querySelector(".workout1").style.display = 'block'

      document.getElementById('shoulders').removeAttribute('required')
      document.getElementById('legs').removeAttribute('required')
      document.getElementById('biceps').removeAttribute('required')
      document.getElementById('triceps').removeAttribute('required')
      document.getElementById('abs').removeAttribute('required')
      document.getElementById('backMuscles').removeAttribute('required')
      document.getElementById('cardio').removeAttribute('required')


    }else
    {
      document.querySelector(".workout1").style.display = 'none'
    }


    if(muscleselect == "shoulders") {
      document.querySelector(".workout2").style.display = 'block'

      document.getElementById('chest').removeAttribute('required')
      document.getElementById('legs').removeAttribute('required')
      document.getElementById('biceps').removeAttribute('required')
      document.getElementById('triceps').removeAttribute('required')
      document.getElementById('abs').removeAttribute('required')
      document.getElementById('backMuscles').removeAttribute('required')
      document.getElementById('cardio').removeAttribute('required')

    }else
    {
      document.querySelector(".workout2").style.display = 'none'
    }

    if(muscleselect == "legs") {
        document.querySelector(".workout3").style.display = 'block'

        document.getElementById('chest').removeAttribute('required')
        document.getElementById('shoulders').removeAttribute('required')
        document.getElementById('biceps').removeAttribute('required')
        document.getElementById('triceps').removeAttribute('required')
        document.getElementById('abs').removeAttribute('required')
        document.getElementById('backMuscles').removeAttribute('required')
        document.getElementById('cardio').removeAttribute('required')
     
      }else
      {
        document.querySelector(".workout3").style.display = 'none'
      }

      if(muscleselect == "biceps") {
        document.querySelector(".workout4").style.display = 'block'

        document.getElementById('chest').removeAttribute('required')
        document.getElementById('shoulders').removeAttribute('required')
        document.getElementById('legs').removeAttribute('required')
        document.getElementById('triceps').removeAttribute('required')
        document.getElementById('abs').removeAttribute('required')
        document.getElementById('backMuscles').removeAttribute('required')
        document.getElementById('cardio').removeAttribute('required')
     
      }else
      {
        document.querySelector(".workout4").style.display = 'none'
      }

      if(muscleselect == "triceps") {
        document.querySelector(".workout5").style.display = 'block'

        document.getElementById('chest').removeAttribute('required')
        document.getElementById('shoulders').removeAttribute('required')
        document.getElementById('legs').removeAttribute('required')
        document.getElementById('biceps').removeAttribute('required')
        document.getElementById('abs').removeAttribute('required')
        document.getElementById('backMuscles').removeAttribute('required')
        document.getElementById('cardio').removeAttribute('required')
     
      }else
      {
        document.querySelector(".workout5").style.display = 'none'
      }

      if(muscleselect == "abs") {
        document.querySelector(".workout6").style.display = 'block'

        document.getElementById('chest').removeAttribute('required')
        document.getElementById('shoulders').removeAttribute('required')
        document.getElementById('legs').removeAttribute('required')
        document.getElementById('biceps').removeAttribute('required')
        document.getElementById('triceps').removeAttribute('required')
        document.getElementById('backMuscles').removeAttribute('required')
        document.getElementById('cardio').removeAttribute('required')
        
      }else
      {
        document.querySelector(".workout6").style.display = 'none'
      }

      if(muscleselect == "back muscles") {
        document.querySelector(".workout7").style.display = 'block'

        document.getElementById('chest').removeAttribute('required')
        document.getElementById('shoulders').removeAttribute('required')
        document.getElementById('legs').removeAttribute('required')
        document.getElementById('biceps').removeAttribute('required')
        document.getElementById('triceps').removeAttribute('required')
        document.getElementById('abs').removeAttribute('required')
        document.getElementById('cardio').removeAttribute('required')
      
      }else
      {
        document.querySelector(".workout7").style.display = 'none'
      }

      if(muscleselect == "cardio") {
        document.querySelector(".workout8").style.display = 'block'

        document.getElementById('chest').removeAttribute('required')
        document.getElementById('shoulders').removeAttribute('required')
        document.getElementById('legs').removeAttribute('required')
        document.getElementById('biceps').removeAttribute('required')
        document.getElementById('triceps').removeAttribute('required')
        document.getElementById('abs').removeAttribute('required')
        document.getElementById('backMuscles').removeAttribute('required')
        
      }else
      {
        document.querySelector(".workout8").style.display = 'none'
      }





        if(muscleselect == "chest" || muscleselect == "shoulders" || muscleselect == "legs" || muscleselect == "biceps" || muscleselect == "triceps" || muscleselect == "abs" || muscleselect == "back muscles" || muscleselect == "cardio"){

            nodevalue[0].style.display = 'block'
            nodevalue[1].style.display = 'block'
            nodevalue[2].style.display = 'block'
            
        
        }else {

          nodevalue[0].style.display = 'none'
          nodevalue[1].style.display = 'none'
          nodevalue[2].style.display = 'none'
          
          
        }
   }




   


  /*   var mealPlanItems = document.querySelectorAll('.mealPlanItems') */

    let confirmButton = document.getElementById("confirm")

    console.log(confirmButton)


    var allrows = document.querySelectorAll('tr')
 



   
    confirmButton.addEventListener('click', editMealPlan)






    async function editMealPlan(){

        console.log("edited items are being sent")
      
        try{

                    let mealPlanTableArr = []

                    for(var i = 1; i<=(allrows.length -1); i++){
                
                            let obj = {}
                
                        for(var j=1; j<allrows[i].cells.length; j++){
                
                            obj[allrows[i].cells[j].childNodes[1].name] = allrows[i].cells[j].childNodes[1].value;
                            obj.rowId = allrows[i].dataset.id;
                    
                        }
                
                        mealPlanTableArr.push(obj)
                    }

                        
                    const response = await fetch('/mymealplan/edit', {
                        method: 'put',
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify({
                            
                            'allMealPlanItemsfromJSFile': mealPlanTableArr

                        })
                    })                     
                    
                   
                    const data = await response.json()

                    if(data){
                        window.location.href = '/mymealplan';
                        }

                   

                    console.log("data recieved")
            
            }
        
            
        catch(err){
            console.log(err)
        }
    }



    function showsubmit(){

      document.querySelector(".submitbuttonclass").style.display = 'block'
    }