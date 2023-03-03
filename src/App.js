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
import aboutImage from './images/about/aboutImage.png'
import aboutArrow from './images/about/arrow.png'
import aboutVector1 from './images/about/vector1.png'
import aboutVector2 from './images/about/vector2.png'
import horizontalLine from './images/services/horizontalLine.png'
import itemIcon1 from './images/services/itemIcon1.png'
import itemIcon2 from './images/services/itemIcon2.png'
import itemIcon3 from './images/services/itemIcon3.png'
import itemIcon4 from './images/services/itemIcon4.png'
import servicesVector from './images/services/servicesVector.png'
import techButton from './images/technologies/techButton.png'
import unreal from './images/technologies/unreal.png'
import unity from './images/technologies/unity.png'
import oculus from './images/technologies/oculus.png'
import vive from './images/technologies/vive.png'
import howToArrow from './images/howTo/howToArrow.png'
import howToVector from './images/howTo/howToVector.png'
import line from './images/join/line.png'
import footerLogo from './images/footer/logo.png'
import facebook from './images/footer/facebook.png'
import twitter from './images/footer/twitter.png'
import linkedin from './images/footer/linkedin.png'
import youtube from './images/footer/youtube.png'
import instagram from './images/footer/instagram.png'
import pinterest from './images/footer/pinterest.png'
import verLine from './images/footer/verLine.png'
import horizontLine from './images/footer/horizontLine.png'
import footerVector1 from './images/footer/footerVector1.png'
import footerVector2 from './images/footer/footerVector2.png'

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
							<p className='text'>
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
							<h3>Pay Us a Visit</h3>
							<p className='text14'>
								Union St, Seattle, WA 98101, United States
							</p>
						</div>
						<img
							className='verticalLine'
							src={verticalLine}
							alt='verticalline'
						/>
						<img className='callImage' src={call} alt='callIcon' />
						<div className='call'>
							<h3>Give Us a Call</h3>
							<p className='text14'>(110) 1111-1010</p>
						</div>
						<img
							className='verticalLine'
							src={verticalLine}
							alt='verticalline'
						/>
						<img className='mailImage' src={mail} alt='mailIcon' />
						<div className='message'>
							<h3>Send Us a Message</h3>
							<p className='text14'>Contact@HydraVTech.com</p>
						</div>
					</div>

					<div className='about'>
						<img className='aboutVector1' src={aboutVector1} alt='' />
						<img className='aboutVector2' src={aboutVector2} alt='' />
						<div className='firstTitle'>
							<h2 className='firstH2'>INTRODUCTION</h2>
							<h2 className='secondH2'>TO HYDRA VR</h2>
							<img className='aboutServicesArrow' src={aboutArrow} alt='' />
						</div>
						<div className='firstDiscription'>
							<p className='text'>
								Vitae sapien pellentesque habitant morbi tristique senectus et
								netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
								lectus. Mi sit amet mauris commodo quis imperdiet massa
								tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
								lectus sit amet est placerat in. Lectus magna fringilla urna
								porttitor rhoncus vitae.
							</p>
						</div>
						<div className='aboutImage'>
							<img src={aboutImage} alt='aboutImage' />
						</div>
						<div className='imageDiscription'>
							<div className='imageDiscriptionWrapper'>
								<h2 className='firstH2'>ABOUT</h2>
								<h2 className='secondH2'>HYDRA VR</h2>
								<p className='text'>
									Eget mi proin sed libero enim sed faucibus turpis. Nisl
									rhoncus mattis rhoncus urna neque viverra justo. Vivamus at
									augue eget arcu dictum. Ultrices gravida dictum fusce ut
									placerat orci. Aenean et tortor at risus viverra adipiscing at
									in. Mattis aliquam faucibus purus in massa. Est placerat in
									egestas erat imperdiet sed. Consequat semper viverra nam
									libero justo laoreet sit amet. Aliquam etiam erat velit
									scelerisque in dictum non consectetur a. Laoreet sit amet
									cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
									Sem nulla pha retra diam sit amet nisl suscipit adipiscing
									bibendum. Leo a diam sollicitudi n tempor.
								</p>
							</div>
							<button>LET’S GET IN TOUCH</button>
						</div>
					</div>
					<div className='services'>
						<div className='servicesTitleDiscription'>
							<div className='servicesTitle'>
								<h2 className='firstH2'>WHY BUILD</h2>
								<h2 className='secondH2'>WITH HYDRA?</h2>
								<img className='aboutServicesArrow' src={aboutArrow} alt='' />
							</div>
							<div className='servicesDiscription'>
								<p className='text'>
									Vitae sapien pellentesque habitant morbi tristique senectus et
									netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
									lectus. Mi sit amet mauris commodo quis imperdiet massa
									tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
									lectus sit amet est placerat in. Lectus magna fringilla urna
									porttitor rhoncus vitae.
								</p>
							</div>
						</div>
						<ul className='servicesList'>
							<li className='servicesItem'>
								<img className='itemIcon' src={itemIcon1} alt='itemIcon1' />
								<h3 className='itemHeader'>Simulation</h3>
								<img src={horizontalLine} alt='' className='horizontalLine' />
								<p className='text12'>
									Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
									porttitor rhoncus libero justo laoreet sit amet vitae.
								</p>
								<button>TRY IT NOW</button>
							</li>
							<li className='servicesItem'>
								<img className='itemIcon' src={itemIcon2} alt='itemIcon2' />
								<h3 className='itemHeader'>Education</h3>
								<img src={horizontalLine} alt='' className='horizontalLine' />
								<p className='text12'>
									Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
									porttitor rhoncus libero justo laoreet sit amet vitae.
								</p>
								<button>TRY IT NOW</button>
							</li>
							<li className='servicesItem'>
								<img className='itemIcon' src={itemIcon3} alt='itemIcon3' />
								<h3 className='itemHeader'>self-care</h3>
								<img src={horizontalLine} alt='' className='horizontalLine' />
								<p className='text12'>
									Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
									porttitor rhoncus libero justo laoreet sit amet vitae.
								</p>
								<button>TRY IT NOW</button>
							</li>
							<li className='servicesItem'>
								<img className='itemIcon' src={itemIcon4} alt='itemIcon4' />
								<h3 className='itemHeader'>out-door</h3>
								<img src={horizontalLine} alt='' className='horizontalLine' />
								<p className='text12'>
									Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
									porttitor rhoncus libero justo laoreet sit amet vitae.
								</p>
								<button>TRY IT NOW</button>
							</li>
						</ul>
						<img className='servicesVector' src={servicesVector} alt='' />
					</div>

					<div className='technologies'>
						<div className='techHead'>
							<h2 className='firstH2'>TECHNOLOGIES & HARDWARE</h2>
							<h2 className='secondH2'>USED BY HYDRA VR.</h2>
							<button>
								<img src={techButton} alt='\/' />
							</button>
						</div>
						<ul className='techCompaniesList'>
							<li className='techCompaniesItem'>
								<img className='unreal' src={unreal} alt='unreal' />
							</li>
							<li className='techCompaniesItem'>
								<img className='unity' src={unity} alt='unity' />
							</li>
							<li className='techCompaniesItem'>
								<img className='oculus' src={oculus} alt='oculus' />
							</li>
							<li className='techCompaniesItem'>
								<img className='vive' src={vive} alt='vive' />
							</li>
						</ul>
					</div>
					<div className='howTo'>
						<div className='howToTitleDiscription'>
							<div className='howToTitle'>
								<h2 className='firstH2'>HOW WE BUILD</h2>
								<h2 className='secondH2'>WITH HYDRA VR?</h2>
								<img className='howToArrow' src={aboutArrow} alt='' />
							</div>
							<div className='howToDiscription'>
								<p className='text'>
									Vitae sapien pellentesque habitant morbi tristique senectus et
									netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
									lectus. Mi sit amet mauris commodo quis imperdiet massa
									tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
									lectus sit amet est placerat in. Lectus magna fringilla urna
									porttitor rhoncus vitae.
								</p>
							</div>
						</div>
						<ul className='howToList'>
							<img className='howToVector' src={howToVector} alt='' />
							<li>
								<button>01</button>
								<div className='arrowH3 one'>
									<img src={howToArrow} alt='' />
									<h3>3D Conception & Design</h3>
								</div>
							</li>
							<li>
								<button>02</button>
								<div className='arrowH3 two'>
									<img src={howToArrow} alt='' />
									<h3>Interaction Design</h3>
								</div>
							</li>
							<li>
								<button>03</button>
								<div className='arrowH3 three'>
									<img src={howToArrow} alt='' />
									<h3>VR World User Testing</h3>
								</div>
							</li>
							<li>
								<button>04</button>
								<div className='arrowH3 four'>
									<img src={howToArrow} alt='' />
									<h3>Hydra VR Deploy</h3>
								</div>
							</li>
						</ul>
					</div>
					<div className='join'>
						<h2 className='firstH2'>JOIN HYDRA</h2>
						<img src={line} alt='' />
						<h2 className='secondH2'>Let's Build Your VR Experience</h2>
						<form action='' className='text14'>
							<div className='forms'>
								<input type='text' name='name' placeholder='First Name' />
								<input type='text' name='surname' placeholder='Last Name' />
								<input type='text' name='mail' placeholder='Email' />
								<input type='text' name='number' placeholder='Phone Number' />
								<input
									type='text'
									name='subject'
									placeholder='Subject'
									className='col-span-2'
								/>
								<textarea
									name=''
									id=''
									cols='30'
									rows='10'
									placeholder='Telll Us Something...'
									className='col-span-2'
								></textarea>
							</div>
							<input className='button' type='submit' value='SEND TO HYDRA' />
						</form>
					</div>
				</main>
				<footer>
					<div className='topFooter'>
						<div className='logo'>
							<img src={footerLogo} alt='logo' />
						</div>
						<img className='verLine' src={verLine} alt='' />
						<nav className='footerNav'>
							<ul>
								<li>
									<a href=''>ABOUT</a>
								</li>
								<li>
									<a href=''>SERVICES</a>
								</li>
								<li>
									<a href=''>TECHNOLOGIES</a>
								</li>
								<li>
									<a href=''>HOW TO</a>
								</li>
								<li>
									<a href=''>JOIN HYDRA</a>
								</li>
							</ul>
						</nav>
						<img className='verLine' src={verLine} alt='' />
						<div className='links'>
							<ul>
								<li>
									<a href=''>F.A.Q</a>
								</li>
								<li>
									<a href=''>SITEMAP</a>
								</li>
								<li>
									<a href=''>CONDITIONS</a>
								</li>
								<li>
									<a href=''>LICENSES</a>
								</li>
							</ul>
						</div>
						<img className='verLine' src={verLine} alt='' />
						<div className='socialLinks'>
							<p>SOCIALIZE WITH HYDRA</p>
							<div className='href'>
								<a href=''>
									<img src={facebook} alt='fb' />
								</a>
								<a href=''>
									<img src={twitter} alt='tw' />
								</a>
								<a href=''>
									<img src={linkedin} alt='in' />
								</a>
								<a href=''>
									<img src={youtube} alt='utube' />
								</a>
								<a href=''>
									<img src={instagram} alt='inst' />
								</a>
								<a href=''>
									<img src={pinterest} alt='pint' />
								</a>
							</div>
							<button>BUILD YOUR WORLD</button>
						</div>
					</div>
					<img src={horizontLine} alt='' className='horizontLine' />
					<div className='bottomFooter'>
						<p className='footerText'>
							2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
							RESERVED
						</p>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default App
