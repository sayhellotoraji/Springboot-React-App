import React from 'react'
import shoe1 from 'components/images/shoe1.jpg'
import shoe2 from 'components/images/shoe2.jpg'
import shoe3 from 'components/images/shoe3.jpg'

import arrowleft from 'components/assets/arrow-left.png'
import arrowright from 'components/assets/arrow-right.png'

import 'components/main.css'
import './slider.css'
import NavigationBar from 'components/NavigationBar'

function ImageSlider() {
    return (

<React.Fragment>
	<NavigationBar/>
	
    <br/>
<a  style={{marginLeft: '90px'}}className="btn btn-dark" href="/">&#x2190; Continue Shopping</a>

    <div id="content-wrapper">
		
		<div className="column">
			<img id='featured' src={shoe1} />

			<div id="slide-wrapper" >
				<img id="slideLeft" className="arrow" src={arrowleft}/>

				<div id="slider">
					<img className="sliderthumbnail active" src={shoe1} />
					<img className="sliderthumbnail" src={shoe2} />
					<img className="sliderthumbnail" src={shoe3} />

	
				</div>

				<img id="slideRight" className="arrow" src={arrowright} />
			</div>
		</div>

		<div className="column">
			<h1>Awesome Shoes</h1>
			<hr/>
			<h3>$89.99</h3>

			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

			<input value={1} type="number" />
			<a className="btn btn-dark" href="#">Add to Cart</a>
		</div>

	</div>

</React.Fragment>
    )
}

export default ImageSlider
