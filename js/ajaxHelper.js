// Make a request to server, func to take the successful response
var loadProducts = function(serverURL, numAttemps = 1, func, timeout) {
  var sendRequest = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', serverURL);
    xhr.responseType = 'json';

    var reAttempt = function() {
      numAttemps--;
      console.log('numAttemps : ' + numAttemps);
      if (numAttemps > 0) {
        sendRequest();
      };
    };

    xhr.onload = function() {
      if (xhr.status === 200) {
        if (xhr.response) {
          console.log('onload 200: success');
          // console.log(xhr.response);
          func(xhr.response);
        } else {
          console.log('onload 200: failed');
          reAttempt();
        };
      } else {
        // debugger;
        console.log('onload not 200. its ' + xhr.status);
        reAttempt();
      };
    };

    xhr.onprogress = function(e) {
      // e should have the total number of bytes to transfer 
      // as well as the number of bytes transferred so far in the event's total and loaded fields.
      console.log('on progress');
      if (e.lengthComputable) {
        var percentComplete = e.loaded / e.total;
        console.log('percentComplete: ' + percentComplete);
      } else {
        // Unable to compute progress information since the total size is unknown
        console.log('Unable to compute progress information since the total size is unknown');
      }
    };

    xhr.timeout = timeout;
    xhr.ontimeout = function() {
      console.log('ajax is timed out.');
      reAttempt();
    };

    xhr.onerror = function() {
      console.log('ajax has error.');
      reAttempt();
    };

    xhr.onabort = function() {
      console.log('ajax canceled by user.');
      reAttempt();
    };

    if (numAttemps > 0) {
      xhr.send();
    } else {
      alert('Please try again later');
    };
  };
  sendRequest();
};


export {
  loadProducts
};