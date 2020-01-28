import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageGroup'
})
export class AgeGroupPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //console.log(value);
    let managerAges = value;
    
    let managerAgeGroup;
    
    if(managerAges<=20){

      //console.log(managerAges,'20 and below')
      managerAgeGroup = "20 and below";

    } else if(managerAges >= 40 ) {

      //console.log(ageGroup,'40 and above')
      managerAgeGroup = "40 and above";


    } else if(managerAges > 21 || managerAges <= 39 ){

      //console.log(ageGroup,'21 to 39')
      managerAgeGroup = "21 to 39";

    } else {

      //console.log('all ages');
      managerAgeGroup = "All";
     
      
    }

    return managerAgeGroup;
  }

}
