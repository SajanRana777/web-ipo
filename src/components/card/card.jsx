import React from 'react'
import cardnova from '../../assets/nova card.png'
import epack from '../../assets/epaack.jpg'
import oyoroom from '../../assets/oyp.png'

const card = () => {

    return (
        <div className='Main'>   
         
        <div>
            <div>
                 <div className='maincard'>
                <div className='box'>

                    <div className='box1'>
                        <div className="img">
                            <img src={cardnova} alt="" className='nova' />
                        </div>
                        <p className='novabox'>EPACK Durable Ltd.</p>
                    </div>
                    <div className='content'>
                        <ul>PRICE BAND</ul>
                        <ul>OPEN</ul>
                        <ul>CLOSE</ul>
                    </div>
                    <div className="content2">
                        <h6>Rs 218 - 230</h6>
                        <h6>2024-01-19</h6>
                        <h6>2024-01-19</h6>
                    </div>

                    <div className='content'>
                        <ul>ISSUE SIZE</ul>
                        <ul>ISSUE TYPE</ul>
                        <ul>LISTING DATE</ul>
                    </div>
                    <div className="content2">
                        <ul>640.05 Cr.</ul>
                        <ul>BOOK Built</ul>
                        <ul>2024-01-29</ul>
                    </div>
            </div>
            
</div>
          </div>


        </div>
        <div>
        <div className='maincard'>
                <div className='box'>

                    <div className='box1'>
                        <div className="img">
                            <img src={epack} alt="" className='epack' />
                        </div>
                        <p className='novabox'>EPACK Durable Ltd.</p>
                    </div>
                    <div className='content'>
                        <ul>PRICE BAND</ul>
                        <ul>OPEN</ul>
                        <ul>CLOSE</ul>
                    </div>
                    <div className="content2">
                        <h6>Rs 218 - 230</h6>
                        <h6>2024-01-19</h6>
                        <h6>2024-01-19</h6>
                    </div>

                    <div className='content'>
                        <ul>ISSUE SIZE</ul>
                        <ul>ISSUE TYPE</ul>
                        <ul>LISTING DATE</ul>
                    </div>
                    <div className="content2">
                        <ul>640.05 Cr.</ul>
                        <ul>BOOK Built</ul>
                        <ul>2024-01-29</ul>
                    </div>



                </div>
            </div>
            
            </div>
            <div className='main3'>
                 <div className='maincard'>
                <div className='box'>

                    <div className='box1'>
                        <div className="img">
                            <img src={oyoroom} alt="" className='epack' />
                        </div>
                        <p className='novabox'>EPACK Durable Ltd.</p>
                    </div>
                    <div className='content'>
                        <ul>PRICE BAND</ul>
                        <ul>OPEN</ul>
                        <ul>CLOSE</ul>
                    </div>
                    <div className="content2">
                        <h6>Rs 218 - 230</h6>
                        <h6>2024-01-19</h6>
                        <h6>2024-01-19</h6>
                    </div>

                    <div className='content'>
                        <ul>ISSUE SIZE</ul>
                        <ul>ISSUE TYPE</ul>
                        <ul>LISTING DATE</ul>
                    </div>
                    <div className="content2">
                        <ul>640.05 Cr.</ul>
                        <ul>BOOK Built</ul>
                        <ul>2024-01-29</ul>
                    </div>
            </div>
            
</div>
          </div>
</div>



    );
}

export default card