import './App.scss';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <body>
	  {/*Header component  */}
	  <Nav/>
		{/* Video component */}
          <div class="video">
              <video controls class="video" poster="">

			  </video>
          </div>
		  {/* Big container under video */}
          <div class="container">
		{/* Video details component */}
              <section class="details">
                  <h1 class="details__title">BMX Rampage: 2021 Highlights</h1>
                  <div class="details">
                      <div class="details__info">
                          <h2 class="details__name">By Red Crow</h2>
                          <p class="details__date">07/11/2021</p>
                      </div>
                          <div>
                            	<img class="details__icon"></img>
                            	<p class="details__views">1,001,023</p>
                          </div>
                          <div>
                          		<img class="details__icon"></img>
                              	<p class="details__likes">110,985</p>
                          </div>
                      <div class="details__description">
                      </div>
                  </div>
              </section>
			  <section class="comments">
				  <p class="comments__number">3 Comments</p>
				  <div>
					  <img class="comments__avatar"></img>
					  <form class="comments__form">
					  		<label class="comments__label">JOIN THE CONVERSATION
								<textarea class="comments__input" placeholder="Add a new comment"></textarea>
							</label>
							<button class="button comments__button">COMMENT</button> //needs icon
					  </form>
				  </div>
				  <div class="comments__container">

				  </div>
			  </section>
			  <section class="recommendations">
				  <h2 class="recommendations__title">NEXT VIDEOS</h2>
			  </section>
          </div>
      </body>
    </>
  );
}

export default App;
