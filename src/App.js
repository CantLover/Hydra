import './App.scss'
import logoImg from './images/header/logoImg.png'
import logoText from './images/header/logoText.png'
import homeRightSide from './images/home/homeRightSide.png'
import arrow from './images/home/arrow.png'
import verticalLine from './images/homeContacts/verticalline.png'
import location from './images/homeContacts/location.png'
import call from './images/homeContacts/call.png'
import mail from './images/homeContacts/mail.png'
import vector1 from './images/home/vector1.png'
import vector2 from './images/home/vector2.png'
import vector3 from './images/home/vector3.png'
import vector4 from './images/home/vector4.png'
function App() {
	return (
		<div className='App'>
			<div className='appWrapper'>
				<header>
					<div className='logo'>
						<img className='logoImg' src={logoImg} alt='logoImg' />
						<img className='logoText' src={logoText} alt='logoText' />
					</div>
					<nav className='headerNav'>
						<a href='#'>about</a>
						<a href='#'>services</a>
						<a href='#'>technologies</a>
						<a href='#'>how to</a>
					</nav>
					<div className='buttons'>
						<button>contact us</button>
						<button>join hydra</button>
					</div>
				</header>
				<main>
					<div className='home'>
						<img className='vector1' src={vector1} alt='' />
						<img className='vector2' src={vector2} alt='' />
						<img className='vector3' src={vector3} alt='' />
						<img className='vector4' src={vector4} alt='' />

						<div className='leftSide'>
							<h1>
								<span className='spanFirst'>Dive</span> Into The Depths Of{' '}
								<span className='spanSecond'>Virtual Reality</span>
							</h1>
							<p className='text homeText'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore nisl tincidunt
								eget. Lectus mauris eros in vitae .
							</p>
							<div className='buttonArrow'>
								<button className='homeButton'>build your world</button>
								<img src={arrow} alt='' />
							</div>
						</div>
						<div className='rightSide'>
							<img src={homeRightSide} alt='homeImage' />
						</div>
					</div>

					<div className='homeContacts'>
						<img className='locationImage' src={location} alt='locationIcon' />
						<div className='visit'>
							<div className='contactsText'>
								<h3>Pay Us a Visit</h3>
								<p className='text14'>
									Union St, Seattle, WA 98101, United States
								</p>
							</div>
						</div>

						<img
							className='verticalLine'
							src={verticalLine}
							alt='verticalline'
						/>

						<img className='callImage' src={call} alt='callIcon' />
						<div className='call'>
							<div className='contactsText'>
								<h3>Give Us a Call</h3>
								<p className='text14'>(110) 1111-1010</p>
							</div>
						</div>

						<img
							className='verticalLine'
							src={verticalLine}
							alt='verticalline'
						/>

						<img className='mailImage' src={mail} alt='mailIcon' />
						<div className='message'>
							<div className='contactsText'>
								<h3>Send Us a Message</h3>
								<p className='text14'>Contact@HydraVTech.com</p>
							</div>
						</div>
					</div>
					<div className='about'></div>
					<div className='services'></div>
					<div className='technologies'></div>
					<div className='howTo'></div>
					<div className='join'></div>
				</main>
				<footer>
					<div className='logo'></div>
					<nav className='footerNav'></nav>
					<div className='links'></div>
					<div className='socialLinks'></div>
				</footer>
			</div>
		</div>
	)
}

export default App
