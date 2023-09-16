
// Topic: lexical Scope --------------------
// =========================

function emergencySituation() {
    const personnels = ['Police', 'Citizens', 'Medical Personnel']

    function askForHelp() {
        for (let personnel of personnels) {
            console.log(`Help me, ${personnel.toUpperCase()}`)
        }
    }
    askForHelp() //with these call on inner functions , help me action wont run,
}

emergencySituation()










// =========================