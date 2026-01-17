const validPin = "3675";
const transactionsDate = [];
// Add money features
document
    .getElementById("add-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const selectedBank = document.getElementById("select-bank").value;
        const accountNumber = document.getElementById("account-number").value;
        const amount = parseInt(document.getElementById("add-amount").value);

        if (amount <= 0 || isNaN(amount)) {
            alert("Please provide valid inputs.");
            return;
        }
        const pin = document.getElementById("add-pin").value;
        const availableBalanceElem = parseInt(
            document.getElementById("available-balance").innerText
        );
        if (
            selectedBank === "Select Bank" ||
            accountNumber.length !== 11 ||
            isNaN(amount) ||
            pin.length !== 4
        ) {
            alert("Please provide valid inputs.");
            return;
        }
        if (pin !== validPin) {
            alert("Invalid PIN. Please try again.");
            return;
        }

        const newBalance = availableBalanceElem + amount;
        document.getElementById("available-balance").innerText = newBalance;

        const data = {
            name: "Add Money",
            amount: amount,
            date: new Date().toLocaleTimeString(),
        };
        transactionsDate.push(data);
    });

// Cash out feature
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const amount = parseInt(document.getElementById("cashout-amount").value);
    const pin = document.getElementById("cashout-pin").value;
    const availableBalanceElem = parseInt(
        document.getElementById("available-balance").innerText
    );
    if (agentNumber.length !== 11 || isNaN(amount) || pin.length !== 4) {
        alert("Please provide valid inputs.");
        return;
    }
    if (pin !== validPin) {
        alert("Invalid PIN. Please try again.");
        return;
    }
    if (amount > availableBalanceElem || isNaN(amount) || amount <= 0) {
        alert("Insufficient balance.");
        return;
    }
    const newBalance = availableBalanceElem - amount;
    document.getElementById("available-balance").innerText = newBalance;

    const data = {
        name: "Cash Out",
        amount: amount,
        date: new Date().toLocaleTimeString(),
    };
    transactionsDate.push(data);
});

// Transfer Money feature
document
    .getElementById("transfer-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const userAccountNumber = document.getElementById(
            "user-account-number"
        ).value;
        const amount = parseInt(
            document.getElementById("transfer-amount").value
        );
        const pin = document.getElementById("transfer-pin").value;
        const availableBalanceElem = parseInt(
            document.getElementById("available-balance").innerText
        );
        if (
            userAccountNumber.length !== 11 ||
            isNaN(amount) ||
            pin.length !== 4
        ) {
            alert("Please provide valid inputs.");
            return;
        }
        if (pin !== validPin) {
            alert("Invalid PIN. Please try again.");
            return;
        }
        if (amount > availableBalanceElem) {
            alert("Insufficient balance.");
            return;
        }
        const newBalance = availableBalanceElem - amount;
        document.getElementById("available-balance").innerText = newBalance;

        const data = {
            name: "Transfer Money",
            amount: amount,
            date: new Date().toLocaleTimeString(),
        };
        transactionsDate.push(data);
    });

// Get Bonus feature
document.getElementById("get-bonus-btn").addEventListener("click", function () {
    const availableBalanceElem = parseInt(
        document.getElementById("available-balance").innerText
    );
    const bonusAmount = 100; // Fixed bonus amount
    const newBalance = availableBalanceElem + bonusAmount;
    document.getElementById("available-balance").innerText = newBalance;

    const data = {
        name: "Get Bonus",
        amount: bonusAmount,
        date: new Date().toLocaleTimeString(),
    };
    transactionsDate.push(data);
});

// Pay Bill feature
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const billType = document.getElementById("select-bill-type").value;
    const billerAccountNumber = document.getElementById(
        "biller-account-number"
    ).value;
    const amount = parseInt(document.getElementById("bill-amount").value);
    const pin = document.getElementById("pay-bill-pin").value;
    const availableBalanceElem = parseInt(
        document.getElementById("available-balance").innerText
    );
    if (
        billType === "Select Bill Type" ||
        billerAccountNumber.length !== 11 ||
        isNaN(amount) ||
        pin.length !== 4
    ) {
        alert("Please provide valid inputs.");
        return;
    }
    if (pin !== validPin) {
        alert("Invalid PIN. Please try again.");
        return;
    }
    if (amount > availableBalanceElem) {
        alert("Insufficient balance.");
        return;
    }
    const newBalance = availableBalanceElem - amount;
    document.getElementById("available-balance").innerText = newBalance;

    const data = {
        name: "Pay Bill",
        amount: amount,
        date: new Date().toLocaleTimeString(),
    };
    transactionsDate.push(data);
});

// Transaction feature
document
    .getElementById("transactions-button")
    .addEventListener("click", function () {
        const transactionContainer = document.getElementById(
            "transaction-container"
        );
        transactionContainer.innerHTML = "";
        for (const transaction of transactionsDate) {
            const div = document.createElement("div");
            div.innerHTML = `
        <div class="bg-white rounded-2xl p-5 flex justify-between items-center mt-3">
                        <div class="flex items-center">
                            <div class="p-3 rounded-full bg-[#f4f5f7]">
                                <img
                                    src="./assets/wallet1.png"
                                    class="mx-auto"
                                    alt="wallet1"
                                />
                            </div>
                            <div class="ml-3">
                                <h1 class="text-[#080808b3] font-semibold">
                                    ${transaction.name}
                                </h1>
                                <p
                                    class="text-[#080808b3] text-[12px] font-light"
                                >
                                    ${transaction.date}
                                </p>
                            </div>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
        `;
            transactionContainer.appendChild(div);
        }
    });

// Toggling features
document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "block";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transactions-parent").style.display = "none";

    // Reset all buttons
    const formBtns = document.getElementsByClassName("form-btn");
    for (const btn of formBtns) {
        btn.style.borderColor = "#f4f5f7";
        btn.style.backgroundColor = "transparent";
    }
    // Highlight active button
    document.getElementById("add-button").style.borderColor = "#0874f2";
    document.getElementById("add-button").style.backgroundColor = "#0874f20d";
});
document
    .getElementById("cashout-button")
    .addEventListener("click", function () {
        document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("cash-out-parent").style.display = "block";
        document.getElementById("transfer-money-parent").style.display = "none";
        document.getElementById("get-bonus-parent").style.display = "none";
        document.getElementById("pay-bill-parent").style.display = "none";
        document.getElementById("transactions-parent").style.display = "none";

        const formBtns = document.getElementsByClassName("form-btn");
        for (const btn of formBtns) {
            btn.style.borderColor = "#f4f5f7";
            btn.style.backgroundColor = "transparent";
        }
        document.getElementById("cashout-button").style.borderColor = "#0874f2";
        document.getElementById("cashout-button").style.backgroundColor =
            "#0874f20d";
    });
document
    .getElementById("transfer-button")
    .addEventListener("click", function () {
        document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("cash-out-parent").style.display = "none";
        document.getElementById("transfer-money-parent").style.display =
            "block";
        document.getElementById("get-bonus-parent").style.display = "none";
        document.getElementById("pay-bill-parent").style.display = "none";
        document.getElementById("transactions-parent").style.display = "none";

        const formBtns = document.getElementsByClassName("form-btn");
        for (const btn of formBtns) {
            btn.style.borderColor = "#f4f5f7";
            btn.style.backgroundColor = "transparent";
        }
        document.getElementById("transfer-button").style.borderColor =
            "#0874f2";
        document.getElementById("transfer-button").style.backgroundColor =
            "#0874f20d";
    });
document.getElementById("bonus-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "block";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transactions-parent").style.display = "none";

    const formBtns = document.getElementsByClassName("form-btn");
    for (const btn of formBtns) {
        btn.style.borderColor = "#f4f5f7";
        btn.style.backgroundColor = "transparent";
    }
    document.getElementById("bonus-button").style.borderColor = "#0874f2";
    document.getElementById("bonus-button").style.backgroundColor = "#0874f20d";
});
document
    .getElementById("pay-bill-button")
    .addEventListener("click", function () {
        document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("cash-out-parent").style.display = "none";
        document.getElementById("transfer-money-parent").style.display = "none";
        document.getElementById("get-bonus-parent").style.display = "none";
        document.getElementById("pay-bill-parent").style.display = "block";
        document.getElementById("transactions-parent").style.display = "none";

        const formBtns = document.getElementsByClassName("form-btn");
        for (const btn of formBtns) {
            btn.style.borderColor = "#f4f5f7";
            btn.style.backgroundColor = "transparent";
        }
        document.getElementById("pay-bill-button").style.borderColor =
            "#0874f2";
        document.getElementById("pay-bill-button").style.backgroundColor =
            "#0874f20d";
    });
document
    .getElementById("transactions-button")
    .addEventListener("click", function () {
        document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("cash-out-parent").style.display = "none";

        document.getElementById("transfer-money-parent").style.display = "none";
        document.getElementById("get-bonus-parent").style.display = "none";
        document.getElementById("pay-bill-parent").style.display = "none";
        document.getElementById("transactions-parent").style.display = "block";
        const formBtns = document.getElementsByClassName("form-btn");
        for (const btn of formBtns) {
            btn.style.borderColor = "#f4f5f7";
            btn.style.backgroundColor = "transparent";
        }
        document.getElementById("transactions-button").style.borderColor =
            "#0874f2";
        document.getElementById("transactions-button").style.backgroundColor =
            "#0874f20d";
    });
