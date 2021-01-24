let personProfile = {
  
    weight: "",
    height: "",
  
    calcBmi: function() {
        Bmi = this.weight / (this.height * this.height);
        if(Bmi <= 18.5){
            return "Your BMI is : " + Bmi.toFixed(2) +" and you are Underweight";
        }
     else if(Bmi >= 18.5 && Bmi <= 24.9){
            return "Your BMI is : " +Bmi.toFixed(2) +" and you are Normal ";
        }
        else if(Bmi >= 25 && Bmi <= 29.9){
            return "Your BMI is : " +Bmi.toFixed(2) +" and you are overweight ";
        }
        else if(Bmi >= 30){
            return "Your BMI is : " + Bmi.toFixed(2) +" and you are Obese ";
        }



    }

   

    };

    personProfile.weight = prompt("Your Weight in Kg ? ");
    personProfile.height = prompt("Your Height in M ? ");
 
(function() {


alert(personProfile.calcBmi());
})();

