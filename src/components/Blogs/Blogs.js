import React from 'react'
import './Blogs.css'
import Linkstrip from '../Linkstrip/Linkstrip'
function Blogs() {
  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <Linkstrip Pagename="The Blogs" ComponentName="Blogs" />
      <div className="cards-container">
        <div className="card blogs-card" >
          <img src="https://www.srmholidays.in/wp-content/uploads/2021/06/mehrangarh_fort_jodhpur-700x500.jpg" className="card-img-top card-img" alt="..." />
          <div className="card-tag">Lifestyle</div>
          <div className="card-body">
            <h3>The Classic Art Of Jodhpur</h3>
            <p className="card-text">Mehrangarh Fort is a formal palace that's now a museum, displaying royal palanquins {"(sedon chair.)"}</p>
          </div>
        </div>
        <div className="card blogs-card" >
          <img src="https://hikerwolf.com/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-04-at-9.22.20-PM.jpeg" className="card-img-top card-img" alt="..." />
          <div className="card-tag">Destinations</div>
          <div className="card-body">
            <h3>Umaid Bhavan Palace</h3>
            <p className="card-text">It was a great visite to the great Umaid Bhawan palace. we hired a guied even though it was a relatively smaller exibition and that was  really good decision.</p>
          </div>
        </div>
        <div className="card blogs-card" >
          <img src="https://lp-cms-production.imgix.net/2019-06/iStock_000026994380XLarge.jpg?sharp=10&vib=20&w=1200" className="card-img-top card-img" alt="..." />
          <div className="card-tag">Beaches</div>
          <div className="card-body">
            <h3>Popular Beach in the Goa</h3>
            <p className="card-text">Shaped like the new moon, Goa's beaches are known the wolrd over. why shouldn't doubt why Goa is famouse among Indian tourists</p>
          </div>
        </div>
        <div className="card blogs-card" >
          <img src="https://ihplb.b-cdn.net/wp-content/uploads/2019/04/dec-500x367.jpg" className="card-img-top card-img" alt="..." />
          <div className="card-tag">Food & Drink</div>
          <div className="card-body">
            <h3>The Famous Streets Of India</h3>
            <p className="card-text">Every city in India has the streets bustling with energy and colours. There is never a lull anywhere.</p>
          </div>
        </div>
        <div className="card blogs-card" >
          <img src="https://th.bing.com/th?id=OIP.YbSfNrF-GgygmzUAkCkhigHaFG&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top card-img" alt="..." />
          <div className="card-tag">Destinations</div>
          <div className="card-body">
            <h3>Delhi The Capital of India</h3>
            <p className="card-text">Delhi ia a destination of every traveller's dream. Its mystical presence makes it a favourite desitination for both domestic as well as international tourists</p>
          </div>
        </div>
        <div className="card blogs-card" >
          <img src="https://th.bing.com/th?id=OIP.GXD1f0KrvIeOjwgBGhVHgQHaFE&w=302&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top card-img" alt="..." />
          <div className="card-tag">Lifestyle</div>
          <div className="card-body">
            <h3>The Beauty of Taj Mahal</h3>
            <p className="card-text">The Taj Mahal is the most beautiful architectural masterpieces in the world. A Symbolic of love And tragedy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
