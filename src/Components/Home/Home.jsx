import './home.css';
import apple from '../../Images/apple.png';
import mango from '../../Images/mango.png';
import guava from '../../Images/guava.png';
import pineapple from '../../Images/pineapple.png';
import strawberry from '../../Images/strawberry.png';
import watermelon from '../../Images/watermelon.png';
import pomegranate from '../../Images/pomegranate.png';
import banana from '../../Images/banana.png';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <div class="navigation">
                <div class="navigation-left">
                    <h1>Laburnum Foods</h1>
                </div>
                <div class="navigation-right">
                    <Link to="/"><button className="login-btn">HOME</button></Link>
                    <Link to="/register"><button className="login-btn">Register</button></Link>
                </div>
            </div>
            <div className="slideWrapper">
                
                <input type="radio" name="slider" class="slide-radio1" id="slider_1"/>
                <input type="radio" name="slider" class="slide-radio2" id="slider_2" />
                <input type="radio" name="slider" class="slide-radio3" id="slider_3" />
                <input type="radio" name="slider" class="slide-radio4" id="slider_4" />
                <input type="radio" name="slider" class="slide-radio5" id="slider_5" />
                <input type="radio" name="slider" class="slide-radio6" id="slider_6" />
                <input type="radio" name="slider" class="slide-radio7" id="slider_7" />
                <input type="radio" name="slider" class="slide-radio8" id="slider_8" />
                
                    {/* Slider Pagination */}
                    <div class="slider-pagination">
                        <label for="slider_1" class="page1"></label>
                        <label for="slider_2" class="page2"></label>
                        <label for="slider_3" class="page3"></label>
                        <label for="slider_4" class="page4"></label>
                        <label for="slider_5" class="page5"></label>
                        <label for="slider_6" class="page6"></label>
                        <label for="slider_7" class="page7"></label>
                        <label for="slider_8" class="page8"></label>
                    </div>
                    
                    {/* Slider #1 */}
                    <div className="slider slide-1">
                        <img src={apple} alt=""/>
                        <div className="slider-content">
                            <h4>Apple</h4>
                            <h2>It is remarkable how closely the history of the apple tree is connected with that of man.</h2>
                    
                        </div>
                    </div>
                    
                    {/* Slider #2*/}
                    <div className="slider slide-2">
                        <img src={banana} alt=""/>
                        <div className="slider-content">
                            <h4>Banana</h4>
                            <h2>Time flies like an arrow - but fruit flies like a banana.</h2>
                        </div>
                    </div>
                    
                    {/*Slider #3*/}
                    <div className="slider slide-3">
                        <img src={guava} alt=""/>
                        <div className="slider-content">
                            <h4>Guava</h4>
                            <h2>A guava tree in bloom, for instance, lost in the pages of a good novel, can bring delight with its fictional perfume to any number of real rooms.</h2>
                    
                        </div>
                    </div>
                    
                    {/*Slider #4*/}
                    <div className="slider slide-4">
                        <img src={mango} alt="" />
                        <div className="slider-content">
                            <h4>Mango</h4>
                            <h2>Meditation is not just blissing out under a mango tree. It completely changes your brain and therefore changes what you are.</h2>
                        
                        </div>
                    </div>
                    {/* slider #5 */}
                    <div className="slider slide-5">
                        <img src={pineapple} alt="" />
                        <div className="slider-content">
                            <h4>Pineapple</h4>
                            <h2>Be a pineapple: Stand tall, wear a crown, and be sweet on the inside.</h2>
                        </div>
                    </div>

                    {/* slider #6 */}
                    <div className="slider slide-6">
                        <img src={pomegranate} alt="" />
                        <div className="slider-content">
                            <h4>Pomegranate</h4>
                            <h2>I felt my heart crack slowly like a pomegranate, spilling its seeds</h2>
                        </div>
                    </div>
                    
                    {/* slider #7 */}
                    <div className="slider slide-7">
                        <img src={strawberry} alt="" />
                        <div className="slider-content">
                            <h4>Strawberry</h4>
                            <h2>Keep calm and eat a strawberry.</h2>
                        </div>
                    </div>

                    {/* slider #8 */}
                    <div className="slider slide-8">
                        <img src={watermelon} alt="" />
                        <div className="slider-content">
                            <h4>Watermelon</h4>
                            <h2>There were happy days, with watermelon, and sad days of whiskey</h2>
                        </div>
                    </div>
            </div>
        </div>
    )
}
