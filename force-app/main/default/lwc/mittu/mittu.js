import { LightningElement,wire } from 'lwc';
import getData from '@salesforce/apex/olaController.getalldata';
import saveData from '@salesforce/apex/olaController.adddetail';

export default class Mittu extends LightningElement {
    f=false;
    cab;
    phone;
    name;
    num;
    cartype;
    s;
    car;

    @wire (getData)
    getApexData({error,data}){
        if(data){
            this.cab=data;
            console.log(data);
        }
        if(error)
        {
            console.log('error in fetching data');
        }
        
    }
    get options() {
        if(this.cartype=="mini")
        return [
            { label: 'Swift', value: 'Swift' },
            { label: 'civic', value: 'civic' },
            { label: 'Alto', value: 'Alto' }
        ]
        if(this.cartype=="micro")
        return[
            { label: 'Verna', value: 'Verna' },
            { label: 'suv', value: 'suv' }
        ]
        if(this.cartype=="prime")
        return[
            { label: 'Audi', value: 'Audi' },
            { label: 'Mercedes', value: 'Mercedes' },
        ]      
        ;
    }
    mini(event)
    {
        this.cartype="mini";
        this.f=true;

    }        
    micro(event)
    {
        this.cartype="micro";
        this.f=true;
    }
    prime(event)
    {
        this.cartype="prime";
        this.f=true;
    }
    add(event)
    {
        this.f=false;
        alert(this.car);
        this.s={'ename':this.name,'enumb':this.num,'ephone':this.phone,'etype':this.cartype,'ecar':this.car}
       
        saveData(this.s);
        location.reload();

    }
    handleChange(event) {
        this.car = event.detail.value;
    }
nChange(event)
{
    this.name=event.target.value;   
}
cnChange(event)
{
    this.num=event.target.value;   
}    
pChange(event)
{
    this.phone=event.target.value;   
}

}
