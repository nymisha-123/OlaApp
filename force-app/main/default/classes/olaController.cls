public with sharing class olaController {
    public olaController() {}
    @AuraEnabled(cacheable=true)
    public static List<Ola__c> getalldata(){
        List<Ola__c> l=[SELECT Car_model__c,Car_type__c,Driver_Name__c,Driver_Number__c,Vehicle_Number__c FROM Ola__c];
        return l;
    }
    @AuraEnabled
    public static void adddetail(String ecar,Integer ephone,String ename,String enumb,String etype){
        Ola__c ob=new Ola__c(Car_model__c=ecar,Driver_Name__c=ename,Driver_Number__c=ephone,Vehicle_Number__c=enumb,Car_type__c=etype);
       // Ola__c ob1=new Ola__c(Car_model__c='Hondcity',Driver_Name__c='sss',Driver_Number__c=1234,Vehicle_Number__c='ss129',Car_type__c='micro');
        insert ob;
        //insert ob1;
    }
}
