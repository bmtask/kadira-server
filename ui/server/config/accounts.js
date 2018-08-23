Accounts.emailTemplates.siteName =  i18n("common.site_name");
Accounts.emailTemplates.from = "Kadira <no-reply@kadira.io>";
Accounts.emailTemplates.resetPassword.subject = function () {
  return i18n("emails.reset_password_subject");
};
if (Meteor.users.find({roles:["admin"]}).fetch().length === 0) {
  var userObj = {
    email:"admin@admin.com",
    password:"admin",
    profile:{name:"admin"}
  };
  Accounts.createUser(userObj);
}