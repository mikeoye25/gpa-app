import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the FivePointsGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-five-points-grade',
  templateUrl: 'five-points-grade.html',
})
export class FivePointsGradePage {

  // public myForm: FormGroup;
  public form 	: FormGroup;
  private courseCount: number = 1;

  constructor(private toastController: ToastController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder) {

      // Define the FormGroup object for the form
      // (with sub-FormGroup objects for handling
      // the dynamically generated form input fields)
      this.form = this.formBuilder.group({
         technologies     : this.formBuilder.array([
            this.initTechnologyFields()
         ])
      });
  
    }
    
/**
 * Generates a FormGroup object with input field validation rules for
 * the technologies form object
 *
 * @public
 * @method initTechnologyFields
 * @return {FormGroup}
 */
initTechnologyFields() : FormGroup
{
   return this.formBuilder.group({
      code : ['', Validators.required],
      grade : ['', Validators.required],
      unit : ['', Validators.required]
   });
}

/**
 * Programmatically generates a new technology input field
 *
 * @public
 * @method addNewInputField
 * @return {none}
 */
addNewInputField() : void
{
  if (this.courseCount > 9) {
    let addTodoToast = this.toastController.create({
      message: "Only 10 courses allowed!",
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Done',
      duration: 5000
    });
    addTodoToast.present();
  }
  else{
    this.courseCount++;
     const control = <FormArray>this.form.controls.technologies;
     control.push(this.initTechnologyFields());
     console.log(this.courseCount + " courses added!");
  }
}

/**
 * Programmatically removes a recently generated technology input field
 *
 * @public
 * @method removeInputField
 * @param i    {number}      The position of the object in the array that needs to removed
 * @return {none}
 */
containsDuplicate(arr_names:string[]) : boolean
{
  var counts = [];
    for(var i = 0; i <= arr_names.length; i++) {
        if(counts[arr_names[i]] === undefined) {
            counts[arr_names[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

/**
 * Programmatically removes a recently generated technology input field
 *
 * @public
 * @method removeInputField
 * @param i    {number}      The position of the object in the array that needs to removed
 * @return {none}
 */
removeInputField(i : number) : void
{
  this.courseCount--;
   const control = <FormArray>this.form.controls.technologies;
   control.removeAt(i);
   console.log(this.courseCount + " courses left!");
}

/**
 * Receive the submitted form data
 *
 * @public
 * @method manage
 * @param val    {object}      The posted form data
 * @return {none}
 */
manage(val : any) : void
{
   console.dir(val);
   var num = 0; 
   var den = 0;
   var iGpa = 0;
   var arr_codes = new Array();

   Object.keys(val).forEach(key => {
    let value = val[key];
    console.dir(value);
    Object.keys(value).forEach(kez => {
      let valuf = value[kez];
      // console.dir(valuf);
      let code = valuf["code"];
      let unit = Number(valuf["unit"]) || 0;
      let grade = Number(valuf["grade"]) || 0;
      let gradeTimesUnit = grade * unit;
      num += gradeTimesUnit;
      den += unit;
      arr_codes.push(code.replace(/\s/g, ""));
    });
  });

  var isDuplicateCode = this.containsDuplicate(arr_codes);

  if(isDuplicateCode == true){
    let addTodoToast = this.toastController.create({
      message: "Duplicate Course Codes!",
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Done',
      duration: 5000
    });
    addTodoToast.present();
  }
  else if (den > 28) {
    let addTodoToast = this.toastController.create({
      message: "Total units must be less than 28!",
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Done',
      duration: 5000
    });
    addTodoToast.present();
  }
  else{
    console.dir("num: " + num);
    console.dir("den: " + den);
    iGpa = (num / den);
    var gpa = iGpa.toFixed(2); 
    console.dir("gpa: " + gpa);
    let addTodoToast = this.toastController.create({
      message: "Your GPA is " + gpa,
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Done',
      duration: 10000
    });
    addTodoToast.present();
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FivePointsGradePage');
  }

}

