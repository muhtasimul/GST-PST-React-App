import {screen, render, fireEvent} from "@testing-library/react"
import Federal from "../Federal"
import {ContextProvider} from "../../../Context"


const MockFederal = ()=>{
    return(
        <ContextProvider>
            <Federal/>
        </ContextProvider>
    )
}

describe('federal test', ()=>{
    test('button exist', ()=>{
        render(<MockFederal/>)
        const button = screen.getByRole('button', {name: 'Federal'})
        expect(button).toBeInTheDocument()
    })

    test('input works', ()=>{
        render(<MockFederal/>)
        const inputElement = screen.getByTestId("input-federal")
        expect(inputElement).toBeInTheDocument()
    })

    test('input writing works', ()=>{
        render(<MockFederal/>)
        const inputElement = screen.getByTestId('input-federal')
        fireEvent.change(inputElement,{target: {value: 1}})
        expect(inputElement.value).toBe("1")
    })

    test('calculation works', ()=>{
        render(<MockFederal/>)
        const buttonElement = screen.getByRole('button', {name: 'Federal'})
        const inputElement = screen.getByTestId('input-federal')
        fireEvent.change(inputElement,{target: {value: 1}})
        fireEvent.click(buttonElement)
        const outputElement = screen.getByTestId('output-federal')
        expect(outputElement.innerHTML).toBe('Your total cost with GST is $1.05')
    })
})