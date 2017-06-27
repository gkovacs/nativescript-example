var Observable = require("data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.code = `
      var app = require("application");
      var activity_service = app.android.currentContext.getSystemService(android.content.Context.ACTIVITY_SERVICE);
      var app_processes = activity_service.getRunningAppProcesses();
      alert('the following apps are running: ' + app_processes.get(0).processName);
    `

    viewModel.onTap = function() {
        //alert('button was tapped v2')
        console.log('onTap called v2')
        console.log(viewModel.code)
        eval(viewModel.code)
        /*
        this.counter--;
        this.set("message", getMessage(this.counter));
        */
    }

    return viewModel;
}

exports.createViewModel = createViewModel;