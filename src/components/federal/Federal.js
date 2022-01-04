import React, {useState, useContext} from "react";
import {Button, Card, Form } from "react-bootstrap"
import { Context } from "../../Context";

function Federal(){

    const {amount, calculateTotalFederal} = useContext(Context)
    const [enter, updateEnter] = useState(0)
    
    function handleChange(event){
        const {value} = event.target
        updateEnter(value)
    }

    function handleClick(event){
        event.preventDefault()
        calculateTotalFederal(enter)
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
                        data-testid="input-federal"
                        onChange={handleChange}
                    />
                    <Form.Text>Please Enter the Price</Form.Text>
                </Form.Group>
                    <Button
                        size="md"
                         variant="secondary"
                        onClick={handleClick}>Federal</Button>
            </Form>
            <br/>
            <Card>
            {
                amount === 0 ?
                <h3>Calculate Sales Tax</h3>:
                <div>
                    <h3 data-testid="output-federal">Your total cost with GST is ${amount}</h3>
                </div>
            }
            </Card>
        </div>
    )
}

export default Federal