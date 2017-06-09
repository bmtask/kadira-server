/* eslint max-len: 0 */

var helpData = {
  "timeseries-pubsubResTime": {
    title: "About Average Response Time",
    message: "This chart shows the average response time for sending the initial data set for subscriptions.",
    options: {
      placement: "bottom"
    }
  },
  "timeseries-memory": {
    title: "About Memory Usage / Host",
    message: "This charts shows the average memory usage across all the hosts in the given time range.",
    options: {
      placement: "bottom"
    }
  },
  "timeseries-sessions": {
    title: "About Total Sessions",
    message: "This chart shows the total number of sessions in the given time range.",
    options: {
      placement: "bottom"
    }
  },
  "timeseries-methodResTime": {
    title: "About Average Response Time",
    message: "This chart shows response time for method calls for the selected date range ",
    options: {
      placement: "bottom"
    }
  },
  "timeseries-pcpu": {
    title: "About CPU Usage",
    message: "This charts shows the CPU usage in percentage of your app. CPU usage can take very low values under cloud hosting. ",
    options: {
      placement: "bottom"
    }
  },
  "timeseries-createdObservers": {
    title: "About Created Observers",
    message: "This chart shows total number of new Observers created in the given time range.",
    options: {
      placement: "bottom"
    }
  },
  "summary-dashboardOverview": {
    title: "About Dashboard Summary",
    message: "Dashboard Summary is a set of important performance metrics for your application.",
    options: {
      placement: "bottom"
    }
  }
};

InlineHelp.initHelp(helpData);
