// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by kadira-collections.js.
import { name as packageName } from "meteor/kadira-collections";

// Write your tests here!
// Here is an example.
Tinytest.add('kadira-collections - example', function (test) {
  test.equal(packageName, "kadira-collections");
});
