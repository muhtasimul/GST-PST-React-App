import React, {useState, useContext} from "react";
import { Context } from "../../Context";
import {Button, ButtonGroup, Card, Form, } from "react-bootstrap"
function Total(){

    const {
        amount, 
        calculateTotalBC, 
        calculateTotalFederal,
        calculateAtlantic,
        calculateOntario,
        calculateQuebec
    } = useContext(Context)

    const [enter, updateEnter] = useState(0)
    const [province, updateProvince] = useState("")


    function handleChange(event){
        const {value} = event.target
        updateEnter(value)
    }

    function handleClickBC(event){
        event.preventDefault()
        calculateTotalBC(enter)
        updateProvince("British Columbia")
    }

    function handleClickAlberta(event){
        event.preventDefault()
        calculateTotalFederal(enter)
        updateProvince("Alberta")
    }

    function handleClickAtlantic(event){
        event.preventDefault()
        calculateAtlantic(enter)
        updateProvince("Atlantic Province")
    }

    function handleClickOntario(event){
        event.preventDefault()
        calculateOntario(enter)
        updateProvince("Ontario")
    }

    function handleClickQuebec(event){
        event.preventDefault()
        calculateQuebec(enter)
        updateProvince("Quebec")
    }

    function handleClickTerritories(event){
        event.preventDefault()
        calculateTotalFederal(enter)
        updateProvince("Territories")
    }

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Input Price</Form.Label>
                    <Form.Control
                        size="lg"
                        type="number"
                        name="enter"
                        value={enter}
                        data-testid="input-total"
                        onChange={handleChange}
                    />
                    <Form.Text>Please Enter the Price</Form.Text>
                </Form.Group>
                <ButtonGroup
                    size="md"
                >
                    <Button
                         variant="secondary"
                        onClick={handleClickBC}>British Columbia</Button>
                    <Button 
                        variant="secondary"
                        onClick={handleClickAlberta}>Alberta</Button>
                    <Button
                         variant="secondary"
                        onClick={handleClickAtlantic}>Atlantic Province</Button>
                    <Button
                        variant="secondary" 
                        onClick={handleClickOntario}>Ontario</Button>
                    <Button
                        variant="secondary" 
                        onClick={handleClickQuebec}>Quebec</Button>
                    <Button 
                        variant="secondary"
                        onClick={handleClickTerritories}>Territories</Button>
                </ButtonGroup>
            </Form>
            <br/>
            <Card>
            
            {
                amount === 0 ?
                <h3>Calculate Sales Tax</h3>:
                <div>
                    <h3 data-testid="output-total">Your total cost in {province} with sales tax is ${amount}</h3>
                </div>
            }
            </Card>
            
                  
        </div>
    )
}

export default Total