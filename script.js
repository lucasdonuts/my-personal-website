document.getElementById("first-button").addEventListener('click', addSecondButtonSet);

function addSecondButtonSet() {
  const element = document.createElement("p");
  element.class = "button-row";

  const buttonOne = document.createElement("button");
  buttonOne.className = "second-button-set";
  buttonOne.id = "red-on-click";
  buttonOne.innerText = "I turn red";
  buttonOne.style.marginRight = "10px";
  element.append(buttonOne);

  buttonOne.addEventListener('click', function() {
    buttonOne.style.backgroundColor = "red";
  })

  const buttonTwo = document.createElement("button");
  buttonTwo.className = "second-button-set";
  buttonTwo.id = "yellow-on-click";
  buttonTwo.innerText = "I turn yellow";
  element.append(buttonTwo);

  buttonTwo.addEventListener('click', function() {
    buttonTwo.style.backgroundColor = "yellow";
  })

  const buttonsDiv = document.getElementById("buttons-div");
  buttonsDiv.append(element);
}

{/* <p class="button-row">
          <button type="button" class="second-button-set">Button 1</button>
          <button type="button" class="second-button-set">Button 2</button>
        </p> */}