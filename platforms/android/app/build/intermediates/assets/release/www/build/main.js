webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grade_options_grade_options__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_fuga_about_fuga__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__increase_gpa_increase_gpa__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToGradeOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__grade_options_grade_options__["a" /* GradeOptionsPage */]);
    };
    HomePage.prototype.goToIncreaseGPA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__increase_gpa_increase_gpa__["a" /* IncreaseGpaPage */]);
    };
    HomePage.prototype.goToAboutFUGA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_fuga_about_fuga__["a" /* AboutFugaPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n<button ion-button full style="text-transform: none;" (click)="goToGradeOptions()">Calculate GPA</button>\n<button ion-button full style="text-transform: none;" (click)="goToIncreaseGPA()">How to Increase your GPA</button>\n<button ion-button full style="text-transform: none;" (click)="goToAboutFUGA()">About FUGA</button>\n\n<div class="image-div">\n  <img src="../assets/imgs/image_one.jpg">\n</div>\n\n<div text-center>\n  <h4>A Final year project by</h4>\n    <h4>Taiwo Damilola</h4>\n      <h4>U15/CPS/1016</h4>\n        <h4>2019</h4>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__four_points_grade_four_points_grade__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__five_points_grade_five_points_grade__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GradeOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GradeOptionsPage = /** @class */ (function () {
    function GradeOptionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GradeOptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GradeOptionsPage');
    };
    GradeOptionsPage.prototype.goToFourPointsGrade = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__four_points_grade_four_points_grade__["a" /* FourPointsGradePage */]);
    };
    GradeOptionsPage.prototype.goToFivePointsGrade = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__five_points_grade_five_points_grade__["a" /* FivePointsGradePage */]);
    };
    GradeOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grade-options',template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\pages\grade-options\grade-options.html"*/'<!--\n  Generated template for the GradeOptionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Calculate GPA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <button ion-button full style="text-transform: none;" (click)="goToFourPointsGrade()">4 Points Grade</button>\n  <button ion-button full style="text-transform: none;" (click)="goToFivePointsGrade()">5 Points Grade</button>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\pages\grade-options\grade-options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GradeOptionsPage);
    return GradeOptionsPage;
}());

//# sourceMappingURL=grade-options.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FourPointsGradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FourPointsGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FourPointsGradePage = /** @class */ (function () {
    function FourPointsGradePage(toastController, navCtrl, navParams, formBuilder) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.courseCount = 1;
        // Define the FormGroup object for the form
        // (with sub-FormGroup objects for handling
        // the dynamically generated form input fields)
        this.form = this.formBuilder.group({
            technologies: this.formBuilder.array([
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
    FourPointsGradePage.prototype.initTechnologyFields = function () {
        return this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            grade: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            unit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    /**
     * Programmatically generates a new technology input field
     *
     * @public
     * @method addNewInputField
     * @return {none}
     */
    FourPointsGradePage.prototype.addNewInputField = function () {
        if (this.courseCount > 9) {
            var addTodoToast = this.toastController.create({
                message: "Only 10 courses allowed!",
                showCloseButton: true,
                position: 'middle',
                closeButtonText: 'Done',
                duration: 5000
            });
            addTodoToast.present();
            // alert("Only 10 courses allowed!");
            // return false;
        }
        else {
            this.courseCount++;
            var control = this.form.controls.technologies;
            control.push(this.initTechnologyFields());
            console.log(this.courseCount + " courses added!");
        }
    };
    /**
     * Programmatically removes a recently generated technology input field
     *
     * @public
     * @method removeInputField
     * @param i    {number}      The position of the object in the array that needs to removed
     * @return {none}
     */
    FourPointsGradePage.prototype.containsDuplicate = function (arr_names) {
        var counts = [];
        for (var i = 0; i <= arr_names.length; i++) {
            if (counts[arr_names[i]] === undefined) {
                counts[arr_names[i]] = 1;
            }
            else {
                return true;
            }
        }
        return false;
    };
    /**
     * Programmatically removes a recently generated technology input field
     *
     * @public
     * @method removeInputField
     * @param i    {number}      The position of the object in the array that needs to removed
     * @return {none}
     */
    FourPointsGradePage.prototype.removeInputField = function (i) {
        this.courseCount--;
        var control = this.form.controls.technologies;
        control.removeAt(i);
        console.log(this.courseCount + " courses left!");
    };
    /**
     * Receive the submitted form data
     *
     * @public
     * @method manage
     * @param val    {object}      The posted form data
     * @return {none}
     */
    FourPointsGradePage.prototype.manage = function (val) {
        console.dir(val);
        // var msg = '\n Multiply each numeric grade value by the number of credits the course was worth: ';
        var num = 0;
        var den = 0;
        var iGpa = 0;
        var arr_codes = new Array();
        Object.keys(val).forEach(function (key) {
            var value = val[key];
            console.dir(value);
            Object.keys(value).forEach(function (kez) {
                var valuf = value[kez];
                // console.dir(valuf);
                var code = valuf["code"];
                var unit = Number(valuf["unit"]) || 0;
                var grade = Number(valuf["grade"]) || 0;
                var gradeTimesUnit = grade * unit;
                num += gradeTimesUnit;
                den += unit;
                // arr_codes.push(code.trim());
                arr_codes.push(code.replace(/\s/g, ""));
            });
        });
        var isDuplicateCode = this.containsDuplicate(arr_codes);
        // console.log("IsDuplicateCode: " + isDuplicateCode);
        if (isDuplicateCode == true) {
            var addTodoToast = this.toastController.create({
                message: "Duplicate Course Codes!",
                showCloseButton: true,
                position: 'middle',
                closeButtonText: 'Done',
                duration: 5000
            });
            addTodoToast.present();
        }
        else if (den > 24) {
            var addTodoToast = this.toastController.create({
                message: "Total units must be less than 24!",
                showCloseButton: true,
                position: 'middle',
                closeButtonText: 'Done',
                duration: 5000
            });
            addTodoToast.present();
        }
        else {
            console.dir("num: " + num);
            console.dir("den: " + den);
            iGpa = (num / den);
            var gpa = iGpa.toFixed(2);
            console.dir("gpa: " + gpa);
            var addTodoToast = this.toastController.create({
                message: "Your GPA is " + gpa,
                showCloseButton: true,
                position: 'middle',
                closeButtonText: 'Done',
                duration: 10000
            });
            addTodoToast.present();
        }
    };
    FourPointsGradePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FourPointsGradePage');
    };
    FourPointsGradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-four-points-grade',template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\pages\four-points-grade\four-points-grade.html"*/'<!--\n  Generated template for the FourPointsGradePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>4 Points Grade</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <!-- Assign the FormGroup of form to the HTML form\n         via a property binding (allowing the component\n         class to communicate/interact with the template -->\n    <form\n       [formGroup]="form"\n       (ngSubmit)="manage(form.value)">\n        <ion-list\n           margin-bottom>\n         <!--  <ion-item\n             margin-bottom\n             no-lines>\n             <ion-label floating>4 Points Grade:</ion-label>\n             <ion-input\n                type="text"\n                maxlength="40"\n                formControlName="name"></ion-input>\n             <span>Please enter a framework name of no more than 40 characters</span>\n          </ion-item> -->\n \n \n          <!-- Assign the technologies FormArray to the form\n               where we want to track/generate new input track fields -->\n        <div\n           formArrayName="technologies"\n           margin-bottom>\n \n \n             <!-- Assign a FormGroupName property binding to track\n                  and manage each separate generated input field.\n                  Also iterate through the technologies FormArray to\n                  correctly track/render new input fields against\n                  existing fields -->\n             <section\n                [formGroupName]="i"\n                *ngFor="let tech of form.controls.technologies.controls; let i = index">\n                <ion-item-group>\n                    <ion-item-divider color="light">Course #{{ i + 1 }}</ion-item-divider>\n                   <ion-item>\n                      <ion-label floating>Course code:</ion-label>\n                      <ion-input\n                         type="text"\n                         maxlength="10"\n                         formControlName="code"></ion-input>\n                   </ion-item>\n                   <ion-item>\n                      <ion-label floating>Grade</ion-label>\n                      <ion-select value="4" ok-text="Okay" cancel-text="Dismiss" formControlName="grade">\n                        <ion-option value="4">A</ion-option>\n                        <ion-option value="3">B</ion-option>\n                        <ion-option value="2">C</ion-option>\n                        <ion-option value="1">D</ion-option>\n                        <ion-option value="0">F</ion-option>\n                      </ion-select>\n                    </ion-item>\n                   <!-- <ion-item>\n                      <ion-label floating>Grade:</ion-label>\n                      <ion-input\n                         type="text"\n                         maxlength="3"\n                         formControlName="grade"></ion-input>\n                   </ion-item> -->\n                   <!-- <ion-item>\n                      <ion-label floating>Units:</ion-label>\n                      <ion-input\n                         type="text"\n                         maxlength="3"\n                         formControlName="unit"></ion-input>\n                   </ion-item> -->\n                   <ion-item>\n                      <ion-label floating>Units</ion-label>\n                      <ion-select value="1" ok-text="Okay" cancel-text="Dismiss" formControlName="unit">\n                        <ion-option value="1">1</ion-option>\n                        <ion-option value="2">2</ion-option>\n                        <ion-option value="3">3</ion-option>\n                        <ion-option value="4">4</ion-option>\n                        <ion-option value="5">5</ion-option>\n                        <ion-option value="6">6</ion-option>\n                      </ion-select>\n                    </ion-item>\n \n \n                   <!-- Allow generated input field to be removed -->\n                   <span\n                      float-right\n                      ion-button\n                      icon-left\n                      clear\n                      *ngIf="form.controls.technologies.length > 1"\n                      (click)="removeInputField(i)">\n                      <ion-icon name="close"></ion-icon>\n                      Remove\n                   </span>\n                </ion-item-group>\n             </section>\n          </div>\n \n \n          <!-- Allow new input field to be generated/added -->\n          <span\n             ion-button\n             float-left\n             icon-left\n             clear\n             (click)="addNewInputField()">\n                <ion-icon name="add"></ion-icon>\n                Add course\n          </span>\n \n \n       </ion-list>\n \n \n       <!-- Only allow form to be submitted IF validation criteria for\n               input fields has been successfully passed -->\n          <button\n           ion-button\n           block\n           margin-top\n           color="primary"\n           text-center\n           [disabled]="!form.valid">Calculate GPA</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\pages\four-points-grade\four-points-grade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], FourPointsGradePage);
    return FourPointsGradePage;
}());

//# sourceMappingURL=four-points-grade.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FivePointsGradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FivePointsGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FivePointsGradePage = /** @class */ (function () {
    function FivePointsGradePage(toastController, navCtrl, navParams, formBuilder) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.courseCount = 1;
        // Define the FormGroup object for the form
        // (with sub-FormGroup objects for handling
        // the dynamically generated form input fields)
        this.form = this.formBuilder.group({
            technologies: this.formBuilder.array([
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
    FivePointsGradePage.prototype.initTechnologyFields = function () {
        return this.formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            grade: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            unit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    /**
     * Programmatically generates a new technology input field
     *
     * @public
     * @method addNewInputField
     * @return {none}
     */
    FivePointsGradePage.prototype.addNewInputField = function () {
        if (this.courseCount > 9) {
            var addTodoToast = this.toastController.create({
                message: "Only 10 courses allowed!",
                showCloseButton: true,
                position: 'middle',
                closeButtonText: 'Done',
                duration: 5000
            });
            addTodoToast.present();
        }
        else {
            this.courseCount++;
            var control = this.form.controls.technologies;
            control.push(this.initTechnologyFields());
            console.log(this.courseCount + " courses added!");
        }
    };
    /**
     * Programmatically removes a recently generated technology input field
     *
     * @public
     * @method removeInputField
     * @param i    {number}      The position of the object in the array that needs to removed
     * @return {none}
     */
    FivePointsGradePage.prototype.containsDuplicate = function (arr_names) {
        var counts = [];
        for (var i = 0; i <= arr_names.length; i++) {
            if (counts[arr_names[i]] === undefined) {
                counts[arr_names[i]] = 1;
            }
            else {
                return true;
            }
        }
        return false;
    };
    /**
     * Programmatically removes a recently generated technology input field
     *
     * @public
     * @method removeInputField
     * @param i    {number}      The position of the object in the array that needs to removed
     * @return {none}
     */
    FivePointsGradePage.prototype.removeInputField = function (i) {
        this.courseCount--;
        var control = this.form.controls.technologies;
        control.removeAt(i);
        console.log(this.courseCount + " courses left!");
    };
    /**
     * Receive the submitted form data
     *
     * @public
     * @method manage
     * @param val    {object}      The posted form data
     * @return {none}
     */
    FivePointsGradePage.prototype.manage = function (val) {
        console.dir(val);
        var num = 0;
        var den = 0;
        var iGpa = 0;
        var arr_codes = new Array();
        Object.keys(val).forEach(function (key) {
            var value = val[key];
            console.dir(value);
            Object.keys(value).forEach(function (kez) {
                var valuf = value[kez];
                // console.dir(valuf);
                var code = valuf["code"];
                var unit = Number(valuf["unit"]) || 0;
                var grade = Number(valuf["grade"]) || 0;
                var gradeTimesUnit = grade * unit;
                num += gradeTimesUnit;
                den += unit;
                arr_codes.push(code.replace(/\s/g, ""));
            });
        });
        var isDuplicateCode = this.containsDuplicate(arr_codes);
        if (isDuplicateCode == true) {
            var addTodoToast = this.toastController.create({
                message: "Duplicate Course Codes!",
                showCloseButton: true,
                position: 'middle',
                closeButtonText: 'Done',
                duration: 5000
            });
            addTodoToast.present();
        }
        else if (den > 28) {
            var addTodoToast = this.toastController.create({
                message: "Total units must be less than 28!",
                showCloseButton: true,
                position: 'middle',
                closeButtonText: 'Done',
                duration: 5000
            });
            addTodoToast.present();
        }
        else {
            console.dir("num: " + num);
            console.dir("den: " + den);
            iGpa = (num / den);
            var gpa = iGpa.toFixed(2);
            console.dir("gpa: " + gpa);
            var addTodoToast = this.toastController.create({
                message: "Your GPA is " + gpa,
                showCloseButton: true,
                position: 'middle',
                closeButtonText: 'Done',
                duration: 10000
            });
            addTodoToast.present();
        }
    };
    FivePointsGradePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FivePointsGradePage');
    };
    FivePointsGradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-five-points-grade',template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\pages\five-points-grade\five-points-grade.html"*/'<!--\n  Generated template for the FivePointsGradePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>5 Points Grade</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <!-- Assign the FormGroup of form to the HTML form\n         via a property binding (allowing the component\n         class to communicate/interact with the template -->\n    <form\n       [formGroup]="form"\n       (ngSubmit)="manage(form.value)">\n        <ion-list\n           margin-bottom>\n        <div\n           formArrayName="technologies"\n           margin-bottom>\n \n \n             <!-- Assign a FormGroupName property binding to track\n                  and manage each separate generated input field.\n                  Also iterate through the technologies FormArray to\n                  correctly track/render new input fields against\n                  existing fields -->\n             <section\n                [formGroupName]="i"\n                *ngFor="let tech of form.controls.technologies.controls; let i = index">\n                <ion-item-group>\n                    <ion-item-divider color="light">Course #{{ i + 1 }}</ion-item-divider>\n                   <ion-item>\n                      <ion-label floating>Course code:</ion-label>\n                      <ion-input\n                         type="text"\n                         maxlength="10"\n                         formControlName="code"></ion-input>\n                   </ion-item>\n                   <ion-item>\n                      <ion-label floating>Grade</ion-label>\n                      <ion-select value="5" ok-text="Okay" cancel-text="Dismiss" formControlName="grade">\n                        <ion-option value="5">A</ion-option>\n                        <ion-option value="4">B</ion-option>\n                        <ion-option value="3">C</ion-option>\n                        <ion-option value="2">D</ion-option>\n                        <ion-option value="1">E</ion-option>\n                        <ion-option value="0">F</ion-option>\n                      </ion-select>\n                    </ion-item>\n                   <ion-item>\n                      <ion-label floating>Units</ion-label>\n                      <ion-select value="1" ok-text="Okay" cancel-text="Dismiss" formControlName="unit">\n                        <ion-option value="1">1</ion-option>\n                        <ion-option value="2">2</ion-option>\n                        <ion-option value="3">3</ion-option>\n                        <ion-option value="4">4</ion-option>\n                        <ion-option value="5">5</ion-option>\n                        <ion-option value="6">6</ion-option>\n                      </ion-select>\n                    </ion-item>\n \n                   <!-- Allow generated input field to be removed -->\n                   <span\n                      float-right\n                      ion-button\n                      icon-left\n                      clear\n                      *ngIf="form.controls.technologies.length > 1"\n                      (click)="removeInputField(i)">\n                      <ion-icon name="close"></ion-icon>\n                      Remove\n                   </span>\n                </ion-item-group>\n             </section>\n          </div>\n \n          <!-- Allow new input field to be generated/added -->\n          <span\n             ion-button\n             float-left\n             icon-left\n             clear\n             (click)="addNewInputField()">\n                <ion-icon name="add"></ion-icon>\n                Add course\n          </span>\n \n       </ion-list>\n \n       <!-- Only allow form to be submitted IF validation criteria for\n               input fields has been successfully passed -->\n          <button\n           ion-button\n           block\n           margin-top\n           color="primary"\n           text-center\n           [disabled]="!form.valid">Calculate GPA</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\pages\five-points-grade\five-points-grade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], FivePointsGradePage);
    return FivePointsGradePage;
}());

//# sourceMappingURL=five-points-grade.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutFugaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutFugaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutFugaPage = /** @class */ (function () {
    function AboutFugaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutFugaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutFugaPage');
    };
    AboutFugaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-fuga',template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\pages\about-fuga\about-fuga.html"*/'<!--\n  Generated template for the AboutFugaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>About FUGA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div text-justify>\n      <h3>Historical Background: </h3>\n\n      <div class="image-div">\n        <img src="../assets/imgs/image_two.jpg">\n      </div>\n\n      <p>\n          In pursuance of its drive to transform the Education Sector, \n          the Federal Government had, in 2010, approved the establishment \n          of twelve (12) new Universities in the six geopolitical zones \n          of the country. This was intended to open access to tertiary \n          education for the teeming Nigerian youths. As part of the \n          effective planning, the Federal Government set up an \n          Implementation Committee comprising of the National Universities \n          Commission (NUC), the Tertiary Education Trust Fund (TETFUND) \n          and other relevant stakeholders. The Committee consulted widely \n          with the respective State Governors and paid inspection visits \n          to the proposed sites for the Universities before submitting its \n          report on 15th November, 2010.\n          The implementation of the first phase of the proposal commenced \n          in February, 2011, with the establishment of nine Universities, \n          while the second phase involving the remaining three Universities \n          including the one in Gashua commenced on 18th February, 2013 with \n          the appointment of pioneer Vice-Chancellor (Professor Shehu Abdul \n          Rahaman) and Registrar (Alhaji Sulu Dauda).\n      </p>\n    </div>\n\n    <div text-justify>\n      <h3>Location: </h3>\n      <p>\n          Federal University, Gashua is located in Gashua Local Government Area of Yobe State. \n          Yobe State was carved out of the old Borno State and made a State on 27th August, \n          1991, by the Ibrahim Badamasi Babangida Military Administration. The literacy level \n          of the State is too low compared to other states, especially those in the southern \n          part of the country. Access to basic, secondary and tertiary education is impeded by \n          a number of factors. It is this imperfection that motivated the Federal Government to \n          establish a Federal University in Yobe State. The benefits derivable from the \n          unfettered access to the University education by communities of a rural State like \n          Yobe need to be emphasized. The foresight of the Federal Government in bringing \n          tertiary education to doorstep of people of Yobe is indeed salutary.\n          Subsistence Farming is the main occupation of the vast majority of the people with \n          main agricultural products being wheat, maize, sorghum, millet, rice, onions, \n          groundnut, beans, cotton, sesame, tomatoes and gum Arabic.\n          Potiskum town is noted as one of the largest cattle market in Nigeria, while Gashua \n          is well-known for its fishery. Agricultural production is, however, not large-scale \n          nor it is mechanized.\nYobe State has a number of proven reserves of minerals. Millions of tons of gypsum, trona, \nkaoline, limestone, diatomite and episonte are known to exist, unexplored and unexploited. \nIn fact, the southern part of the State lies in a belt that envisaged to have coal, oil and gas.\nThe University is set to help fast track the process of unlocking these potentials as well as \nimpact positively on the people and Nigerians in general. Already the University has, in line \nwith Government’s policy thrust and cognizant of the local economic activities and peculiarities \nof the host environment, adopted its expected programme focus viz: agriculture, desert studies, \nirrigation studies and environmental management.\n      </p>\n    </div>\n\n    <div text-justify>\n      <h3>VISION: </h3>\n      <p>\n          To be a leading Centre of Excellence distinguished by its innovative and competitive \n          approach to teaching, learning, research and service to humanity.\n      </p>\n    </div>\n\n    <div text-justify>\n      <h3>MISSION: </h3>\n      <p>\n          To provide timely, relevant and transformational academic programme through focused \n          teaching and research that are responsive to the needs of the local, national and global \n          community in a rapidly changing world.\n      </p>\n    </div>\n\n    <div text-justify>\n      <h3>Motto: </h3>\n      <p>\n          The University motto is “Knowledge is Success” which, however, is written in Arabic \n          script ( ) translating as “Al-ilmu Falah”. The motto captures the essence of University \n          education generally and underlines the importance attached to education by the university’s \n          host community as well as the need to acquire knowledge in all its ramifications because of \n          its illuminating role to humanity. Throughout human history, the enduring key to individual \n          and collective success is knowledge. While this motto acknowledges the universal value of \n          education to society at large, it also particularly suggests the part historically played by \n          the university’s host society in the development of Islamic Education in Nigeria and a large \n          part of the West African sub-region.\n      </p>\n    </div>\n\n    <div text-justify>\n      <h3>Philosophy: </h3>\n      <p>\n          Federal University, Gashua is an institution of higher learning that seeks to be sensitive \n          and responsive to immediate needs of the society and give every person the opportunity to \n          acquire knowledge. It is also committed to excellence and integrity in the pursuit of knowledge \n          within an environment that respects diversity and gender mainstreaming.\n      </p>\n    </div>\n\n    <div text-justify>\n      <h3>Logo: </h3>\n      <div>\n\n        <div class="image-div">\n          <img src="../assets/imgs/image_three.jpg">\n        </div>\n\n        <p>\n            The University logo is an abstract concept boldly shrouded by the university name. \n            Inside the abstract are a Book, a Pen, a Camel and a Gum Arabic tree, which are \n            superimposed on the university colours. The motto is also firmly situated in the \n            centre in Arabic calligraphy. The main features of the logo are:</p>\n        <p>\n            The Books and Pen: Symbolizes the teaching, learning and research mandates of the university</p>\n        <p>\n            The Serration (the White cut into the Blue): The white which cuts into the blue background from the \n            bottom symbolize River Yobe which flows through the host State and from which the State itself got \n            its name.</p>\n        <p>\n            The Gum Arabic Tree: While Gum Arabic is just one of the major cash crops in Yobe and the adjoining States, \n            its inclusion on the logo underlines the central position of agriculture as the main economic activity of \n            the host State; and</p>\n        <p>\n            The Camel superimposed on Brown Background: Present one of the most prevalent animals used for many purposes \n            by the people of the University host State and adjoining States. Being a rugged animal, the camel also \n            symbolizes the resilience, doggedness and determination of the people.</p>\n      </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\pages\about-fuga\about-fuga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutFugaPage);
    return AboutFugaPage;
}());

//# sourceMappingURL=about-fuga.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncreaseGpaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IncreaseGpaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncreaseGpaPage = /** @class */ (function () {
    function IncreaseGpaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IncreaseGpaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncreaseGpaPage');
    };
    IncreaseGpaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-increase-gpa',template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\pages\increase-gpa\increase-gpa.html"*/'<!--\n  Generated template for the IncreaseGpaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>How to increase your GPA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div text-justify>\n  <h3>1. Go to class regularly: </h3>\n\n  <div class="image-div">\n    <img src="../assets/imgs/image_four.jpg">\n  </div>\n\n  <p>\n      I know this one is mind-numbingly obvious but it’s important. \n      Many professors lecture directly from PowerPoint and post the \n      slides to the internet. This makes it tempting to skip class, \n      download the lecture notes, and learn the material on your own. \n      Although you can probably get away with this in easy courses, \n      you’ll face problems in challenging ones. By skipping class, \n      you miss out on a few important things:\n      Detailed verbal explanations that are key to understanding the material\nThe chance to ask questions and listen to the Q&A of other students\nSpecial announcements\nOpportunities for extra credit\nIt’s also important to consider how skipping class affects your reputation. \nIn most classes, grades are somewhat subjective. \nThis means that the grader’s perception of you can make or break your grade. \nIf you frequently miss class, you’ll be perceived as someone who lacks \nrespect for the professor and the subject matter. Why should they give you \nthe benefit of the doubt or round that B+ up to an A-?\nIt sounds like a no-brainer, but it’s too important to not mention. \nSkipping class can make you look bad in the eyes of your professor. \nSince grades are somewhat subjective, it’s a good idea to avoid irritating \nthe person who will be handing out the marks. If attendance is an issue, \nyou could be stuck with a B versus the A- you deserve.\n  </p>\n</div>\n<div text-justify>\n  <h3>2. Participate in class: </h3>\n\n  <div class="image-div">\n    <img src="../assets/imgs/image_five.PNG">\n  </div>\n\n  <p>\n      If you’re shy or new to the college experience, it can be \n      difficult to muster enough courage to participate in class. \n      Nevertheless, that is exactly what you need to do. Class \n      participation shows the professor you are eager to learn. \n      It also increases the likelihood that you will remember \n      material from class to class.\n      Not only will sitting in the front row build self confidence, \n      it will automatically engage you in the lecture. You’ll appear \n      to be an eager student and highly visible\n      to the teacher. This will help your academic reputation and \n      make it more likely you’ll develop a relationship with the \n      professor. You’ll have a much easier time maintaining focus \n      and will feel more like a participant than a passive observer.\nCollege lectures tend to build on previous material. If you encounter \na lecture or concept that you do not understand, you should address \nthe issue immediately to avoid getting completely lost. \nConfusing points can be clarified with help from your professors, \nclassmates or library resources.\n  </p>\n</div>\n<div text-justify>\n  <h3>3. Organize yourself: </h3>\n  <p>\n      If you don’t have a study strategy, you can study all day \n      and night and still not get anywhere. The only sure way to \n      make the most of your study time is to employ a study \n      strategy that complements your schedule and learning style.\nGetting organized is one of the easiest ways to raise your GPA in \ncollege. When you’re organized, you automatically reduce the \namount of time and effort that it takes to do well in college.\nThings you should organize (besides your thoughts) include: your \nclass schedule, notes, study time, reading assignments and handouts.\nDifferent professors have different teaching styles. Some lecture, \nsome use power point slides and some depend on handouts and textbooks. \nThe inconsistency can make note-taking problematic from class to class. \nThe best way to handle this is to develop a note-taking system that \nworks with each professor’s teaching style.\nThe sooner you can get started on your assignments, the better. \nTry keeping a list of proven information sources, web apps and other \ndependable resources so that you can find something the second you need it.\n The saved time can be used to study, have fun or just sleep.\n  </p>\n</div>\n<div text-justify>\n  <h3>4. Do a weekly study review: </h3>\n  <p>\n      A common problem students encounter is trying to learn an \n      enormous amount of material right before the midterm or \n      final exam. This is practically impossible. You’ll find \n      it much easier if you take a gradual approach to studying. \n      At least once a week, review your notes starting from the \n      beginning of the course. This only needs to take 15 or \n      20 minutes, just enough time to build familiarity with the material.\n      By doing a weekly review you’ll gradually memorize everything and \n      will better understand how one concept builds on the next. \n      Putting in small amounts of effort on a consistent basis will \n      drastically reduce the amount of studying you need to do right \n      before the test.\n  </p>\n</div>\n<div text-justify>\n  <h3>5. Go to office hours: </h3>\n  <p>\n      Professors and TA’s usually make themselves available \n      at regular times during the week for students to ask \n      questions about assignments. Do yourself a favor by \n      taking advantage of this opportunity. First, attending \n      office hours will motivate you to get ahead on your work \n      and prepare questions to ask. This will give you a huge \n      edge in understanding problems that aren’t clearly \n      explained in the lectures. Second, it will build your \n      reputation as a high-effort student who deserves high grades.\n      If you aren’t happy with the grades you’re currently getting, \n      you may want to consider talking to your professors. \n      Just remember to be polite. Throwing out wild accusations \n      or demanding that a grade be changed is almost never a good idea. \n      You will be better off asking about possible steps you could take \n      to improve your grade in each class.\n  </p>\n</div>\n<div text-justify>\n  <h3>6. Befriend with smart students with high GPA: </h3>\n  <p>\n      In courses that involve group work, this is essential. \n      No one wants to get stuck with a bunch slackers, have \n      to do all the work themselves, and end up with a poor \n      grade to show for it. The quality of the your learning \n      experience is directly related to the attitudes of the \n      people you work with. Working with smart people will \n      facilitate discussion. The best way to understand an \n      idea is talking about it with other intelligent people. \n      Who you work with also affects your academic reputation.\n       If you associate with students that aren’t interested in \n       learning, teachers and graders will assume you feel the \n       same way. It’s also a great way to connect with people \n       who have similar interests and ambitions.\n      You’re bound to make lots of friends in college. If you can, \n      try to spend some time with a study buddy who has a high GPA. \n      Your smart friend will be able to help you out when you \n      struggle and may prove to be a good influence should you \n      feel the urge to slack.\n      Taking part in a study group is one of the best ways to stay \n      on track and raise your GPA. Study groups not only make you \n      accountable, they also force you to become more organized and \n      talk about what you have learned. If you can’t find a study \n      group to join, try forming one yourself.\n  </p>\n</div>\n<div text-justify>\n  <h3>7. Avoid all-nighters: </h3>\n  <p>\n      Generally, having to pull an all-nighter means that you slacked \n      off all semester and need to fit 3 months of learning into one day. \n      If you use a gradual study strategy this will never be necessary. \n      All-nighters don’t work! Yes, it might be possible to get a good \n      grade if the course is easy, but it’s much more likely that your \n      grade will be significantly lower. All-nighters harm performance \n      because they make you tired and stressed. You’ll also forget most \n      of what you learn right after the test, decreasing the practical \n      value of your education.\nAlthough it’s good to spend a fair amount of time studying before a test, \nit’s just as important to get enough rest. Sleep improves concentration, \nsolidifies what you have learned and improves your ability to organize \nand recall information. Poor performance in school can often be directly \nlinked to sleep deprivation.\n  </p>\n</div>\n<div text-justify>\n  <h3>8. Make use of Library: </h3>\n\n  <div class="image-div">\n    <img src="../assets/imgs/image_six.jpg">\n  </div>\n\n  <p>\n      Dorm rooms aren’t the best place to study. It’s way too easy to \n      get distracted by roommates and visitors. Your study time canl \n      be more productive if you use your school’s library or a similar \n      facility. Every time you enter that building, your mind will shift \n      into work mode and stay there until you decide to leave.\nYou should read everything that is assigned to you and then some. \nReading a lot makes you a better thinker, better writer and, most \nimportantly, better student.\nAlthough certain classes are more interesting (and more important) than \nothers, it’s essential that you take every class seriously. If you can \nmaintain a good grade in each class, it will make a huge difference on \nyour overall grade point average.\n  </p>\n</div>\n<div text-justify>\n  <h3>9. Study Smart: </h3>\n  <p>\n      Some professors and schools offer opportunities for extra credit. \n      These opportunities are GPA gold mines; try to take advantage of them. \n      Extra credit can boost your average and enhance your college experience.\n      Attending class can be a waste of time if you have a long commute or a \n      professor who likes to ramble. For this reason and many more, you may \n      want to consider taking some of your classes online. You’ll get to study \n      the same material and save time in the process.\nCollege exams can have a huge impact on your GPA. To make sure you’re ready on \ntest day, begin studying as soon as you can. Take a little time to review the \nsubject matter each day so you’ll be better prepared than you would be if you \nwaited until the last minute to cram.\n  </p>\n</div>\n<div text-justify>\n  <h3>10. Set a Goal and Reward Yourself: </h3>\n  <p>\n      Good grades are their own reward, but it doesn’t \n      hurt to have a little extra incentive. Try setting \n      a GPA goal and rewarding yourself with something \n      that you really want after you achieve it.\nThat’s all. Follow these 10 steps and you will see your \nGPA shoot through the roof. Good luck.\n  </p>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\pages\increase-gpa\increase-gpa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IncreaseGpaPage);
    return IncreaseGpaPage;
}());

//# sourceMappingURL=increase-gpa.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_fuga_about_fuga__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_five_points_grade_five_points_grade__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_four_points_grade_four_points_grade__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_grade_options_grade_options__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_help_help__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_increase_gpa_increase_gpa__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_fuga_about_fuga__["a" /* AboutFugaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_five_points_grade_five_points_grade__["a" /* FivePointsGradePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_four_points_grade_four_points_grade__["a" /* FourPointsGradePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_grade_options_grade_options__["a" /* GradeOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_increase_gpa_increase_gpa__["a" /* IncreaseGpaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_fuga_about_fuga__["a" /* AboutFugaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_five_points_grade_five_points_grade__["a" /* FivePointsGradePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_four_points_grade_four_points_grade__["a" /* FourPointsGradePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_grade_options_grade_options__["a" /* GradeOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_increase_gpa_increase_gpa__["a" /* IncreaseGpaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Projects\Mobile\gpa-calculator-app\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\Mobile\gpa-calculator-app\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map