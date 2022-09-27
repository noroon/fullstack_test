import axios from 'axios';

export default function IMDB() {
  const hadleClick = () => {
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: { q: 'game of thr' },
      headers: {
        'X-RapidAPI-Key': '01c61ee5cemsha37f03d8ef38418p12215ejsn9965f740577d',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>

    </>
  );
}
