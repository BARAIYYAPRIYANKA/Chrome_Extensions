document.addEventListener('DOMContentLoaded', function() {
    var enableButton = document.getElementById('enableButton');
    var disableButton = document.getElementById('disableButton');

    // Function to enable button
    function enablebtn() {
        chrome.storage.sync.set({ Enabled: true }, function() {
            console.log('LinkedIn voice assistant enabled');
            alert('LinkedIn voice assistant enabled');
        });
    }

    // Function to disable 
    function disablebtn() {
        chrome.storage.sync.set({ Enabled: false }, function() {
            console.log('LinkedIn voice assistant disabled');
            alert('LinkdIn voice assistant disabled');
        });
    }

    enableButton.addEventListener('click', enablebtn);
    disableButton.addEventListener('click', disablebtn);
});
