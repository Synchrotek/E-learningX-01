// Initialize Ace Editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
// Function to run the code
function runCode() {
    var code = editor.getValue(); // Get the code from the editor
    // You can execute the code here and display the output
    // For example, you can use JavaScript's eval() function to run the code
    try {
      var result = eval(code);
      document.getElementById("output-display").textContent = result;
    } catch (error) {
      document.getElementById("output-display").textContent = "Error: " + error.message;
    }
  }
  
// Add an event listener to the "Run Code" button
document.getElementById("run-button").addEventListener("click", runCode);
