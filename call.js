let coins = Number(document.getElementById("coins").innerText);

const callBtns = document.getElementsByClassName("call-button");
for (let btn of callBtns){
    btn.addEventListener("click", function(){
        if(coins < 20){
            alert("Your Balance is Insufficiant to make a Call!");
            return
        }
        const service = btn.parentElement.parentElement.children[1].children[0].innerText;

        const number = btn.parentElement.parentElement.children[2].children[0].innerText;
        
        alert(`Calling ${service} at ${number}...`)


        coins = coins - 20;
        document.getElementById("coins").innerText = coins;

        const historyContainer = document.getElementById("history-container");

        const historyTimeDiv = document.createElement("div");
        historyTimeDiv.classList.add("mb-4", "p-3", "bg-gray-100", "rounded-xl", "shadow-sm", "flex", "items-center", "justify-between");

        const historyDiv = document.createElement("div");
        historyDiv.classList.add("text-gray-700")

        const serviceP = document.createElement("p");
        serviceP.innerText = `${service}`;

        const numberP = document.createElement("p");
        numberP.innerText = `${number}`;

        const time = new Date();
        const currentTime = document.createElement("p");
        currentTime.classList.add("text-gray-500")
        currentTime.innerText = time.toLocaleTimeString('en-GB');

        historyDiv.appendChild(serviceP);
        historyDiv.appendChild(numberP);
        historyTimeDiv.appendChild(historyDiv);
        historyTimeDiv.appendChild(currentTime);
        historyContainer.appendChild(historyTimeDiv);
    })
}