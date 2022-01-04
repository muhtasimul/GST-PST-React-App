import React, {useState} from "react";
const Context = React.createContext()

function ContextProvider(props){

    const [amount, updateAmount] = useState(0)

    function calculateTotalFederal(tax){
        let totalTax = parseFloat(tax) + parseFloat(tax*0.05)
        updateAmount(totalTax)
    }

    function calculateTotalBC(tax){
        let totalTax = parseFloat(tax) + parseFloat(tax*.12)
        updateAmount(totalTax)
    }

    function calculateAtlantic(tax){
        let totalTax = parseFloat(tax) + parseFloat(tax*.15)
        updateAmount(totalTax)
    }

    function calculateOntario(tax){
        let totalTax = parseFloat(tax) + parseFloat(tax*.13)
        updateAmount(totalTax)
    }

    function calculateQuebec(tax){
        let totalTax = parseFloat(tax) + parseFloat(tax*.14975)
        updateAmount(totalTax)
    }

    function calculateSaskatchewan(tax){
        let totalTax = parseFloat(tax) + parseFloat(tax*.11)
        updateAmount(totalTax)
    }


    return(
        <Context.Provider value={
            {
                amount,
                calculateTotalBC,
                calculateTotalFederal,
                calculateAtlantic,
                calculateOntario,
                calculateQuebec,
                calculateSaskatchewan,
            }
        }>
            {props.children}
        </Context.Provider>
    )
}



export {ContextProvider, Context}