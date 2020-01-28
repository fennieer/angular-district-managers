import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Manager } from '../manager';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {
  manager: Manager;
  managers;
  userAgeData: any = [];
  filteredManagers = [];
  filterAgeOption: any = [];
  copySelectedFilter: any = [];
  selectedFilter;
  managersData: any = [];
  testData: any = [];
  errorMessage: string;
  managerData: any = [];

  
  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    // console.log('test');
    this.managers = this.managerService.getManagers();
    this.loadManagers();
    //this.selectedFilter;
  }

filteredAgeOption = [
    {
      "option": "All",
    },
    {
      "option": "20 and below",
    },
    {
      "option": "21 to 39",
    },
    {
      "option": "40 and above",
    }
]

    

  // Age filter options:
  // - All
  // - 20 and below
  // - 21 to 39
  // - 40 and above

loadManagers(){
    console.log('load managers');
    this.managerService.getManagers().subscribe((res)=>{
      this.userAgeData = res;
      this.selectedFilter = res;
      const testData: Manager[] = this.userAgeData;
      console.log(res);
      this.setAgeGroup(res);
    });
}

setAgeGroup(data: any){

  console.log('call setAgeGroup');
  const managersData = data;
  //console.log(managersData);

  for(let x = 0; x < managersData.length; x++){
    //console.log(this.userAgeData[x].age);
    const userAges = managersData[x].age;

    if(userAges<=20){

      //console.log(ageGroup,'20 and below')
      managersData[x].ageGroup = "20 and below";

    } else if(userAges >= 40 ) {

      //console.log(ageGroup,'40 and above')
      managersData[x].ageGroup = "40 and above";


    } else if(userAges > 21 || userAges <= 39 ){

      //console.log(ageGroup,'21 to 39')
      managersData[x].ageGroup = "21 to 39";

    } else {

      // console.log('all ages');
      this.managersData = managersData;
      console.log('managersData',managersData);
      
    }
  }

}

filterBy(filter: string){

console.log('before filter', this.selectedFilter.length)
if(this.selectedFilter.length != 10){
  console.log('if is not 10');
 
  let completeData = this.userAgeData;
  this.selectedFilter = completeData;
  console.log(this.selectedFilter);
}

    switch(filter){
      case 'All':
        console.log('All ages clicked');
        return this.selectedFilter;
        break;
      case '20 and below':
        this.selectedFilter = this.selectedFilter.filter(ages => {
          return ages.ageGroup.toLowerCase().includes('20 and below');
        });
        console.log(this.selectedFilter);
        break;
      case '21 to 39':
        this.selectedFilter = this.selectedFilter.filter(ages => {
          return ages.ageGroup.toLowerCase().includes('21 to 39');
        });
        console.log(this.selectedFilter);
        break;
      case '40 and above':

        this.selectedFilter = this.selectedFilter.filter(ages => {
          return ages.ageGroup.toLowerCase().includes('40 and above');
        });
        console.log('40 and above');
        console.log(this.selectedFilter);
       break;

    }
}

}
