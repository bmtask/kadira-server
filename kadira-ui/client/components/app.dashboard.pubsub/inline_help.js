/* eslint max-len: 0 */

var helpData = {
  "pub-breakdown": {
    title: "About Publications Breakdown",
    message: "Using the Publication Breakdown, you can drill down into publication-specific metrics.",
    options: {
      placement: "top"
    }
  },
  "timeseries-subRate": {
    title: "About Sub Rate",
    message: "This chart shows the number of subscriptions received by minute.",
    options: {
      placement: "bottom"
    }
  },
  "timeseries-pubsubResTimeWithTraces": {
    title: "About Response Time with Traces",
    message: "Response Time chart shows how the Response Time changed with the time.",
    options: {
      placement: "bottom"
    }
  },
  "summary-dashboardPubSub": {
    title: "About PubSub Summery",
    message: "PubSub Summary shows the summary of the publications and subscriptions in the selected date range ",
    options: {
      placement: "bottom"
    }
  }
};

InlineHelp.initHelp(helpData);
