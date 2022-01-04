import {screen, render, fireEvent} from "@testing-library/react"
import Total from "../Total"
import {ContextProvider} from "../../../Context"


const MockTotal = ()=>{
    return(
        <ContextProvider>
            <Total/>
        </ContextProvider>
    )
}

describe('federal test', ()=>{
    test('button exist', ()=>{
        render(<MockTotal/>)
        const buttonElement = screen.getByRole('button', {name: 'Alberta'})
        expect(buttonElement).toBeInTheDocument()
    })

    test('total buttons', ()=>{
        render(<MockTotal/>)
        const buttonElement = screen.getAllByRole('button')
        expect(buttonElement.length).toBe(6)
    })
    test('input works', ()=>{
        render(<MockTotal/>)
        const inputElement = screen.getByTestId("input-total")
        expect(inputElement).toBeInTheDocument()
    })

    test('input writing works', ()=>{
        render(<MockTotal/>)
        const inputElement = screen.getByTestId('input-total')
        fireEvent.change(inputElement,{target: {value: 1}})
        expect(inputElement.value).toBe("1")
    })

    test('calculation works', ()=>{
        render(<MockTotal/>)
        const buttonElement = screen.getByRole('button', {name: 'British Columbia'})
        const inputElement = screen.getByTestId('input-total')
        fireEvent.change(inputElement,{target: {value: 1}})
        fireEvent.click(buttonElement)
        const outputElement = screen.getByTestId('output-total')
        expect(outputElement.innerHTML).toBe('Your total cost in British Columbia with sales tax is $1.12')
    })
})