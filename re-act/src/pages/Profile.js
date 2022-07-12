import React from 'react';
import Pap from '../Pap';

const Profile = () =>
(
  <div>
    <React.StrictMode>
      <Pap />
    </React.StrictMode>


    <div style={{ margin: '1em' }} >
      <div style={{ display: 'flex', flexDirection: 'row', flexBasis: '40%' }}>
        <h1>Profile<br /><br />
          <h3>Breathe + Bathe Soundbath Series: Venice Beach</h3>
        </h1>
        <img style={{ marginLeft: 'auto' }} className='img' src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F224393929%2F316335414213%2F1%2Foriginal.20220204-222427?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=88e986d1fc5767d89e992dccd8a4a689' />

      </div>
      < hr />
      <div style={{ display: 'flex', flexDirection: 'row' }} >
        <img className="img" src=" https://images.unsplash.com/photo-1506477559781-89f3a4337d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVuaWNlJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />


        <div>

          <p><small>The Breathe + Bathe wellness series is here! Join Avi Sherbill of SoundRx for a 75-minute journey with breathwork, meditation, & soundbath.</small></p>
          <br />
          <ul>
            <li>Event Time:
              <ul>
                <li>
                  Sunday July 17th, 6:00 pm - 7:15 pm
                </li>
                <li>
                  Sunday July 31st, 6:00 pm - 7:15 pm
                </li>
              </ul>
            </li>
            <li>Event Location: Breathe + Bathe Soundbath Series: Venice Beach
              The Electric Lodge, Venice, CA</li>
            <li>Event Type: Wellness</li>
            <li>Event Price: $22</li>
          </ul>
          <br />
          <h4>About this event</h4>
          <p>The Breathe + Bathe series is here! Join Avi Sherbill from SoundRx as he guides you through a 75-minute frequency healing session in-studio while you simply relax and close your eyes. It's like a massage on a cellular level!</p>
          <p>You'll get:
            <ul>
              <li>A spot in the studio at Electric Lodge (just off of Abbot Kinney)</li>
              <li>Personal chakra tune-up during the soundbath</li>
              <li>Free parking in the lot</li>
            </ul>
            Soundbaths are an ancient healing technique and can help you:
            <ul>
              <li>Melt away tension and stress</li>
              <li>Go into a deep meditative trance without much effort</li>
              <li>Heal on a cellular level and release natural opioids for holistic pain relief</li>
              <li>Decrease anxiety and increase sleep wellness</li>
              <li>Unblock subconscious emotions to finally release old wounds</li>
            </ul>
          </p>
          <h4>What to Expect:</h4>
          <ul>
            <li>A short guided breathing exercise and meditation followed by a soundbath with crystal bowls, Himalayan bowls, and planetary gong</li>
            <li>Wear comfortable and loose clothing</li>
            <li>All sales are final. No refunds are given for this event. Tickets may be transferred upon host approval</li>
          </ul>
          <h4>Bring Your Own:</h4>
          <ul>
            <li>Yoga mat</li>
            <li>Blanket (optional)</li>
            <li>Eye mask (optional)</li>
          </ul>

        </div>


      </div>

    </div>
  </div>
);

export default Profile;
