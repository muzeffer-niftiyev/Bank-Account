import "./styles/main.scss";
import BankAccount from "./bank-account";

const modal = document.querySelector(".modal");
const modalNameInput = document.querySelector(".name input");
const modalBalanceInput = document.querySelector(".start_balance input");
const modalConfirmBtn = document.querySelector(".modal button");
const overlay = document.querySelector(".overlay");

const accountsContainer = document.querySelector(".accounts");
const scroll = document.querySelector(".scroll");
const addAccountBtn = document.querySelector(".accounts button");

const balanceText = document.querySelector(".balance span");
const balanceOwner = document.querySelector(".balance p");

const depositInput = document.querySelector(".deposit input");
const depositApplyBtn = document.querySelector(".deposit button");

const withdrawInput = document.querySelector(".withdraw input");
const withdrawApplyBtn = document.querySelector(".withdraw button");

const accountDataCard = document.querySelector(".account-data");

let accountsArr = [];
let selectedAccount = null;

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

addAccountBtn.addEventListener("click", showModal);
overlay.addEventListener("click", hideModal);

modalConfirmBtn.addEventListener("click", function () {
  if (!modalBalanceInput.value || !modalNameInput.value) return;
  const nameData = modalNameInput.value;
  const editedName = nameData[0].toUpperCase() + nameData.slice(1);
  const balanceData = modalBalanceInput.value;
  const newAccount = new BankAccount(editedName, +balanceData);

  accountsArr.push(newAccount);
  selectedAccount = newAccount;

  const accountElement = `
        <div class="account">
             <p>${selectedAccount.ownerName}</p>
        </div>
    `;

  scroll.insertAdjacentHTML("beforeBegin", accountElement);
  accountDataCard.classList.remove("hidden");

  updateAccountData();

  modalNameInput.value = null;
  modalBalanceInput.value = null;
  hideModal();
});

const updateAccountData = () => {
  balanceOwner.textContent = `${selectedAccount.ownerName}'s balance: `;
  balanceText.textContent = `  ${selectedAccount.balance} $`;
};

accountsContainer.addEventListener("click", function (e) {
  const clickedAccount = e.target?.closest(".account");
  if (!clickedAccount?.classList.contains("account")) return;
  const index = Array.from(accountsContainer.children).indexOf(clickedAccount);
  selectedAccount = accountsArr[index];
  updateAccountData();
});

depositApplyBtn.addEventListener("click", function () {
  const depositValue = +depositInput.value;
  selectedAccount.deposit(depositValue);
  updateAccountData();
  depositInput.value = null;
});

withdrawApplyBtn.addEventListener("click", function () {
  const withdrawValue = +withdrawInput.value;
  selectedAccount.withdraw(withdrawValue);
  updateAccountData();
  withdrawInput.value = null;
});