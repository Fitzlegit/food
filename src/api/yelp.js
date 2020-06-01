import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer X4b39-C1_dmvBvydD-NunmaDAbKHWsVO7A_steK0zrvhMefxZw9aG0rhkmtifaOFmFkK4PtXna4uuLR4_vWt44enjQ2W1U33rfiFiHM0Z7eaVw2MQUlsIZgWyYjSXnYx'
  }
});
