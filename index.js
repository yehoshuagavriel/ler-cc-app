function init() {
  if (localStorage.getItem("followUpsCount")) {
    clickupLeadsCount = parseInt(localStorage.getItem("clickupLeadsCount"));
    openChatsCount = parseInt(localStorage.getItem("openChatsCount"));
    followUpsCount = parseInt(localStorage.getItem("followUpsCount"));
    newChatInboundCount = parseInt(localStorage.getItem("newChatInboundCount"));
    newChatOutboundCount = parseInt(
      localStorage.getItem("newChatOutboundCount")
    );
  } else {
    clickupLeadsCount = 0;
    openChatsCount = 0;
    followUpsCount = 0;
    newChatInboundCount = 0;
    newChatOutboundCount = 0;
  }

  document.getElementById("clickupLeadsCount").textContent = clickupLeadsCount;
  document.getElementById("openChatsCount").textContent = openChatsCount;
  document.getElementById("followUpsCount").textContent = followUpsCount;
  document.getElementById("newChatInboundCount").textContent =
    newChatInboundCount;
  document.getElementById("newChatOutboundCount").textContent =
    newChatOutboundCount;
  restoreListData("callsProposedList");
  restoreListData("callsProposedList2");
  restoreListData("newBookingList");
  restoreListData("newBookingList2");
  restoreListData("newBookingList3");
  restoreListData("notesList");
}

window.addEventListener("DOMContentLoaded", init);

function saveDataToLocalStorage() {
  localStorage.setItem("clickupLeadsCount", clickupLeadsCount);
  localStorage.setItem("openChatsCount", openChatsCount);
  localStorage.setItem("followUpsCount", followUpsCount);
  localStorage.setItem("newChatInboundCount", newChatInboundCount);
  localStorage.setItem("newChatOutboundCount", newChatOutboundCount);
}

let clickupLeadsCount = 0;
let openChatsCount = 0;
let followUpsCount = 0;
let newChatInboundCount = 0;
let newChatOutboundCount = 0;

const fechaActual = new Date();
const dia = String(fechaActual.getDate()).padStart(2, "0");
const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
const año = fechaActual.getFullYear();
const fechaFormateada = `${dia}-${mes}-${año}`;

function incrementClickupLeads() {
  clickupLeadsCount++;
  document.getElementById("clickupLeadsCount").textContent = clickupLeadsCount;
  saveDataToLocalStorage();
}
function decreaseClickupLeads() {
  if (clickupLeadsCount > 0) {
    clickupLeadsCount--;
    document.getElementById("clickupLeadsCount").textContent =
      clickupLeadsCount;
    saveDataToLocalStorage();
  }
}

function incrementOpenChats() {
  openChatsCount++;
  document.getElementById("openChatsCount").textContent = openChatsCount;
  saveDataToLocalStorage();
}
function decreaseOpenChats() {
  if (openChatsCount > 0) {
    openChatsCount--;
    document.getElementById("openChatsCount").textContent = openChatsCount;
    saveDataToLocalStorage();
  }
}

function incrementFollowUps() {
  followUpsCount++;
  document.getElementById("followUpsCount").textContent = followUpsCount;
  saveDataToLocalStorage();
}
function decreaseFollowUps() {
  if (followUpsCount > 0) {
    followUpsCount--;
    document.getElementById("followUpsCount").textContent = followUpsCount;
    saveDataToLocalStorage();
  }
}

function incrementNewChatInbound() {
  newChatInboundCount++;
  document.getElementById("newChatInboundCount").textContent =
    newChatInboundCount;
  saveDataToLocalStorage();
}
function decreaseNewChatInbound() {
  if (newChatInboundCount > 0) {
    newChatInboundCount--;
    document.getElementById("newChatInboundCount").textContent =
      newChatInboundCount;
    saveDataToLocalStorage();
  }
}

function incrementNewChatOutbound() {
  newChatOutboundCount++;
  document.getElementById("newChatOutboundCount").textContent =
    newChatOutboundCount;
  saveDataToLocalStorage();
}
function decreaseNewChatOutbound() {
  if (newChatOutboundCount > 0) {
    newChatOutboundCount--;
    document.getElementById("newChatOutboundCount").textContent =
      newChatOutboundCount;
    saveDataToLocalStorage();
  }
}

document.getElementById("fechaActual").textContent = fechaFormateada;
document
  .getElementById("clickupLeadsBtn")
  .addEventListener("click", incrementClickupLeads);
document
  .getElementById("clickupLeadsDecreaseBtn")
  .addEventListener("click", decreaseClickupLeads);
document
  .getElementById("openChatsBtn")
  .addEventListener("click", incrementOpenChats);
document
  .getElementById("openChatsDecreaseBtn")
  .addEventListener("click", decreaseOpenChats);
document
  .getElementById("followUpsBtn")
  .addEventListener("click", incrementFollowUps);
document
  .getElementById("followUpsDecreaseBtn")
  .addEventListener("click", decreaseFollowUps);
document
  .getElementById("newChatInboundBtn")
  .addEventListener("click", incrementNewChatInbound);
document
  .getElementById("newChatInboundDecreaseBtn")
  .addEventListener("click", decreaseNewChatInbound);
document
  .getElementById("newChatOutboundDecreaseBtn")
  .addEventListener("click", decreaseNewChatOutbound);
document
  .getElementById("newChatOutboundBtn")
  .addEventListener("click", incrementNewChatOutbound);

function addNameToList(inputId, listId) {
  const input = document.getElementById(inputId);
  const name = input.value.trim();
  if (name !== "") {
    const list = document.getElementById(listId);
    const listItem = document.createElement("li");
    listItem.textContent = name;
    const deleteButton = document.createElement("button");
    deleteButton.style.margin = ".5em 1em";
    deleteButton.style.padding = ".5em 1em";
    deleteButton.style.borderRadius = "2em";
    deleteButton.style.fontSize = "16px";
    deleteButton.style.backgroundColor = "#ee4646";
    deleteButton.style.color = "black";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
      saveListData(listId);
    });
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = "";
    saveListData(listId);
  }
}

document.getElementById("callsProposedBtn").addEventListener("click", () => {
  addNameToList("callsProposedInput", "callsProposedList");
});
document.getElementById("callsProposedBtn2").addEventListener("click", () => {
  addNameToList("callsProposedInput2", "callsProposedList2");
});
document.getElementById("newBookingBtn").addEventListener("click", () => {
  addNameToList("newBookingInput", "newBookingList");
});
document.getElementById("newBookingBtn2").addEventListener("click", () => {
  addNameToList("newBookingInput2", "newBookingList2");
});
document.getElementById("newBookingBtn3").addEventListener("click", () => {
  addNameToList("newBookingInput3", "newBookingList3");
});
document.getElementById("notesBtn").addEventListener("click", () => {
  addNameToList("notesInput", "notesList");
});

function getDataAsText() {
  let text = "";
  text += "Fecha: " + fechaFormateada + "\n\n";
  text += "Entrantes (HOY): " + clickupLeadsCount + "\n";
  text += "Pendientes a Confirmar (HOY): " + openChatsCount + "\n";
  text += "Confirmadas (AYER): " + followUpsCount + "\n";
  text += "Canceladas (AYER): " + newChatInboundCount + "\n";
  text += "Pendientes a Confirmar (AYER): " + newChatOutboundCount + "\n\n";
  text +=
    "Entrantes (HOY):\n" +
    getNumberedNamesTextFromList("callsProposedList2") +
    "\n";
  text +=
    "Confirmadas (HOY):\n" +
    getNumberedNamesTextFromList("callsProposedList") +
    "\n";
  text +=
    "Canceladas (HOY):\n" +
    getNumberedNamesTextFromList("newBookingList") +
    "\n";
  text +=
    "Propuestas (HOY):\n" +
    getNumberedNamesTextFromList("newBookingList2") +
    "\n";
  text +=
    " Agendadas (HOY):\n" +
    getNumberedNamesTextFromList("newBookingList3") +
    "\n";
  text +=
    "Notas:\n" + getNumberedNamesTextFromList("notesList") + "\n" + "\n" + "\n";
  text +=
    "Gestor de tareas creado por: https://www.linkedin.com/in/josuehoenicka/";
  return text;
}

function getNumberedNamesTextFromList(listId) {
  const list = document.getElementById(listId);
  let namesText = "";
  for (let i = 0; i < list.children.length; i++) {
    const listItem = list.children[i];
    const listItemText = listItem.innerText.replace(/^\d+\. /, "");
    namesText += `${i + 1}. ${listItemText}\n`;
  }
  return namesText;
}

document.getElementById("descargarBtn").addEventListener("click", () => {
  const textData = getDataAsText();
  const blob = new Blob([textData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fechaFormateada}.txt`;
  a.click();
});

function saveListData(listId) {
  const list = document.getElementById(listId);
  const listData = Array.from(list.children).map(
    (listItem) => listItem.textContent
  );
  localStorage.setItem(listId, JSON.stringify(listData));
}

function restoreListData(listId) {
  const listData = localStorage.getItem(listId);
  if (listData) {
    const list = document.getElementById(listId);
    const parsedListData = JSON.parse(listData);
    for (let i = 0; i < parsedListData.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = parsedListData[i];
      const deleteButton = document.createElement("button");
      deleteButton.style.margin = ".5em 1em";
      deleteButton.style.padding = ".5em 1em";
      deleteButton.style.borderRadius = "2em";
      deleteButton.style.fontSize = "16px";
      deleteButton.style.backgroundColor = "#ee4646";
      deleteButton.style.color = "black";
      deleteButton.style.border = "none";
      deleteButton.style.cursor = "pointer";
      deleteButton.innerHTML = '<i class="fas fa-times"></i>';
      deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
        saveListData(listId);
      });

      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
    }
  }
}

function resetData() {
  clickupLeadsCount = 0;
  openChatsCount = 0;
  followUpsCount = 0;
  newChatInboundCount = 0;
  newChatOutboundCount = 0;

  document.getElementById("clickupLeadsCount").textContent = clickupLeadsCount;
  document.getElementById("openChatsCount").textContent = openChatsCount;
  document.getElementById("followUpsCount").textContent = followUpsCount;
  document.getElementById("newChatInboundCount").textContent =
    newChatInboundCount;
  document.getElementById("newChatOutboundCount").textContent =
    newChatOutboundCount;

  localStorage.removeItem("callsProposedList");
  localStorage.removeItem("callsProposedList2");
  localStorage.removeItem("newBookingList");
  localStorage.removeItem("newBookingList2");
  localStorage.removeItem("newBookingList3");
  localStorage.removeItem("notesList");

  document.getElementById("callsProposedList").innerHTML = "";
  document.getElementById("callsProposedList2").innerHTML = "";
  document.getElementById("newBookingList").innerHTML = "";
  document.getElementById("newBookingList2").innerHTML = "";
  document.getElementById("newBookingList3").innerHTML = "";
  document.getElementById("notesList").innerHTML = "";
}

document.getElementById("resetBtn").addEventListener("click", resetData);
