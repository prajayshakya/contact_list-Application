var module = angular.module('ContactApp',[]);

module.constant('AppData',{
    "name": "Contact App",
    "author": "prajay shakya",
    "company": "corridoor"
});



module.value('loggingServ', function(){
    console.log("hello from value");
})




module.controller('contactCtrl', contactCtrl);
function contactCtrl(contactService)
{
    this.noContacts = false;
    this.contacts = contactService.contacts;
    
    this.clickContacts = function(index)
    {
        this.noContacts = true;
        this.selectContact = this.contacts[index];
    }
    
}

module.controller('headerCtrl', headerCtrl);
function headerCtrl(AppData)
{
    this.header = AppData.name;
}

module.controller('footerCtrl', footerCtrl);
function footerCtrl(AppData, loggingServ)
{
    this.author = AppData.author;
    this.company = AppData.company;
}






