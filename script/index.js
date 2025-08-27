let callingData = [];
// heart এক বৃদ্ধি করার ফাংশন
function countIncrease(id) {
  let heartCount = parseInt(document.getElementById(id).innerText);
  document.getElementById(id).innerText = heartCount + 1;
}

// কল নাম্বার কপি
function copyBtn(id) {
  let text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);

  alert("নাম্বার কপি হয়েছে: " + text);
}

// কল করার ফাংশন
function callingBtn(id1, id2, coinC) {
  const callHeading = document.getElementById(id1).innerText;
  const num = document.getElementById(id2).innerText;

  let coinCount = parseInt(document.getElementById(coinC).innerText);
  if (coinCount >= 20) {
    alert("Calling " + callHeading + " " + num);
    coinCount = coinCount - 20;
    document.getElementById(coinC).innerText = coinCount;

    let data = {
      name: callHeading,
      number: num,
      date: new Date().toLocaleTimeString(),
    };
    callingData.push(data);
    console.log(callingData);

    // ক্লিয়ার বাটন এ ক্লিক

    document.getElementById("clear-btn").addEventListener("click", function () {
      document.getElementById("call-history-container").innerHTML = "";
      callingData = [];
    });
  } else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
}

// হার্ট বাটন এ ক্লিক
// document.getElementById("heart-btn").addEventListener("click", function () {
//   countIncrease("heart-count");
// });

// কপি বাটন এ ক্লিক
// document.getElementById("copy-btn").addEventListener("click", function () {
//   copyBtn("national-calling-number");
//   // alert('নাম্বার কপি হয়েছে')
//   countIncrease("copy-count");
// });

// কল বাটন এ ক্লিক
// document.getElementById("calling-btn").addEventListener("click", function () {
//   callingBtn("calling-heading", "national-calling-number", "coin-count");
//   allCallBtn("call-history-container")
// });

function allCallBtn(id) {
  let callHistoryContainer = document.getElementById(id);
  callHistoryContainer.innerText = "";
  for (const data of callingData) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="flex items-center justify-between p-4 mb-2">
            <div class="">
              <h4 class="text-[18px] text-[#111]">${data.name}</h4>
              <p class="text-[18px] text-[#5C5C5C]">${data.number}</p>
            </div>
            <p class="text-[18px] text-[#111]">${data.date}</p>
          </div>
    `;
    callHistoryContainer.appendChild(div);
  }
}

const allCallButtons = document.getElementsByClassName("all-call-button");

for (let allCallButton of allCallButtons) {
  allCallButton.addEventListener("click", function () {
    const headingId =
      allCallButton.parentNode.parentNode.children[1].children[1].id;
    const numberId =
      allCallButton.parentNode.parentNode.children[1].children[2].id;
    const coinCountId =
      allCallButton.parentNode.parentNode.parentNode.parentNode.parentNode
        .children[0].children[0].children[1].children[1].children[0].id;
    const callHistoryContainerId =
      allCallButton.parentNode.parentNode.parentNode.parentNode.children[1]
        .children[1].id;

    callingBtn(headingId, numberId, coinCountId);
    allCallBtn(callHistoryContainerId);

    // console.log(callHistoryContainerId);
    // console.log(coinCountId);
    // console.log(numberId);
    // console.log(headingId);
  });
}

const allCopyButtons = document.getElementsByClassName("all-copy-button");

for (const allCopyButton of allCopyButtons) {
  allCopyButton.addEventListener("click", function () {
    const numberId =
      allCopyButton.parentNode.parentNode.children[1].children[2].id;
    const copyCountId =
      allCopyButton.parentNode.parentNode.parentNode.parentNode.parentNode
        .children[0].children[0].children[1].children[2].children[0].id;

    copyBtn(numberId);
    countIncrease(copyCountId);

    // console.log(numberId);
    // console.log(copyCountId);
  });
}

const allHeartButtons = document.getElementsByClassName("all-heart-button");

for (const allHeartButton of allHeartButtons) {
  allHeartButton.addEventListener("click", function () {
    const heartCountId =
      allHeartButton.parentNode.parentNode.parentNode.parentNode.parentNode
        .children[0].children[0].children[1].children[0].children[0].id;
    countIncrease(heartCountId);
    // console.log(heartCountId);
  });
}
