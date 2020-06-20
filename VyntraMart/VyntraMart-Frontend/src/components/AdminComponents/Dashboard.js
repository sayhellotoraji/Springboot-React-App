import React from 'react'
import AdminNavigationBar from './AdminNavigationBar'
import { Card, CardDeck } from 'react-bootstrap'
import './admin.css'

function Dashboard() {
    return (
<React.Fragment>

    <AdminNavigationBar />

    {/* <div className="box-element"> */}
    <CardDeck>
        <Card
        bg={'primary'}
        text={'white'}
        className='text-center'
        style={{margin: '20px', height: '200px'}}
        className="mb-2"
    >
        <Card.Header style={{fontSize: '30px', textAlign: 'center'}}>Total Orders</Card.Header>
            <Card.Body>
            
            <Card.Text style={{fontSize: '50px', textAlign: 'center'}}>
                1000
            </Card.Text>
            </Card.Body>
        </Card>


        <Card
        bg={'success'}
        text={'white'}
        className='text-center'
        style={{margin: '20px', height: '200px', width: '10rem'}}
        className="mb-2"
    >
        <Card.Header style={{fontSize: '30px', textAlign: 'center'}}>Orders Delivered</Card.Header>
            <Card.Body>
            
            <Card.Text style={{fontSize: '50px', textAlign: 'center'}}>
                750
            </Card.Text>
            </Card.Body>
        </Card>


        <Card
        bg={'danger'}
        text={'white'}
        className='text-center'
        style={{margin: '20px', height: '200px'}}
        
    >
        <Card.Header style={{fontSize: '30px', textAlign: 'center'}}>Orders Pending</Card.Header>
            <Card.Body>
            
            <Card.Text style={{fontSize: '50px', textAlign: 'center'}}>
                250
            </Card.Text>
            </Card.Body>
        </Card>

    </CardDeck>

    {/* </div> */}
 
</React.Fragment>
    )
}

export default Dashboard
