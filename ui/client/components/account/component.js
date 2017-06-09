var component = FlowComponents.define("account", function() {
  this.autorun(function() {
    var section = FlowRouter.getParam("section") || "profile";
    var component = "account." + section;

    this.set("section", section);
    this.set("component", component);
  });
});

component.state.isActive = function(querySection) {
  if(this.get("section") === querySection) {
    return "active";
  }
};