//for input file
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//declaring variable
var input, inputArray, length, square, sum, mean, root;

//get the input file data
function init() {
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
};

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
};

function handleFileLoad(event){
  console.log(event);
  input = event.target.result;
};

//calculating the rms 
function calculation() {
  //converting input data from string to array
  inputArray = input.split("\n");

  //determining input data length
  length = inputArray.length;

  //calculating square of each input data
  square = "";
  for (i = 0; i < length; i++) {
    square += Math.pow(inputArray[i],2) + ",";
  };
  square = square.split(",");
  square.pop();

  //calculating sum of square of input data
  sum = eval(square.join("+"));

  //calculating the mean square of input data
  mean = sum/length;

  //calculating the root mean square of input data
  root = Math.sqrt(mean);

  //deciding either the data is correct or wrong
  if (length <= 1) {
    //warning that the data doesn't meet the requierments
    document.getElementById("input").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("square").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("length").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("sum").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("mean").innerHTML = "Your data doesn't meet the requierments";
    document.getElementById("root").innerHTML = "Your data doesn't meet the requierments";
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").removeClass("border-primary");
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").addClass("border-danger");
    $("#dataReq").removeClass("text-secondary");
    $("#dataReq").addClass("text-danger font-weight-bold");
    $("#input, #square, #length, #sum, #mean, #root").addClass("text-danger");
  }
  else {
    //showing the data result
    document.getElementById("input").innerHTML = inputArray.join("<p></p>");
    document.getElementById("square").innerHTML = square.join("<p></p>");
    document.getElementById("length").innerHTML = length;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("mean").innerHTML = mean;
    document.getElementById("root").innerHTML = root;
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").removeClass("border-danger text-danger");
    $("#fileLabel, #input, #square, #length, #sum, #mean, #root").addClass("border-primary");
    $("#dataReq").removeClass("text-danger font-weight-bold");
    $("#dataReq").addClass("text-secondary");
  };
};
