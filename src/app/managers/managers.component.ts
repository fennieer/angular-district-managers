import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {
  managers;
  userAgeData: any = [];
  filteredManagers = [];
  filterAgeOption: any = [];
  
  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    // console.log('test');
    this.managers = this.managerService.getManagers();
    this.getAges();

  }

  filteredAgeOption = [
    {
      "option": "All",
      "value": 0,
    },
    {
      "option": "20 and below",
      "value": 1,
    },
    {
      "option": "21 to 39",
      "value": 2,
    },
    {
      "option": "40 and above",
      "value": 3,
    }

  ]
  // Age filter options:
  // - All
  // - 20 and below
  // - 21 to 39
  // - 40 and above

  getAges(){

    this.managerService.getManagers().subscribe((res)=>{
      //console.log('called data age');
      this.userAgeData = res;
      // console.log('userAges',this.userAgeData.length);

      for(let x = 0; x < this.userAgeData.length; x++){
        //console.log(this.userAgeData[x].age);
        const userAges = this.userAgeData[x].age;

        if(userAges<=20){

          //console.log(userAges,'20 and below')
          this.filterAgeOption.value = 1;
          //console.log('this.filterAgeOption.value',this.filterAgeOption.value);
          //console.log(this.userAgeData[x]);

        } else if(userAges >= 40 ) {

          this.filterAgeOption.value = 2;
          // console.log('this.filterAgeOption.value',this.filterAgeOption.value);
          // console.log(this.userAgeData[x]);

        } else if(userAges > 21 || userAges <= 39 ){

          this.filterAgeOption.value = 3;
          // console.log('this.filterAgeOption.value',this.filterAgeOption.value);
          // console.log(this.userAgeData[x]);

        } else {

          // console.log('all ages');
          this.userAgeData;
          
        }
      }

    });
  }


  

}
