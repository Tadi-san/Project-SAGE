const axios = require('axios');
require('dotenv').config(); // Load environment variables from a .env file

class MessageService {
  static baseURL = 'https://api.afromessage.com/api/send';
  static bulkURL = 'https://api.afromessage.com/api/send-bulk';

  static token = process.env.AFRO_MESSAGE_KEY;
  static headers = {
    Authorization: `Bearer ${this.token}`,
  };

  static async sendSingleMessage(phoneNumber, message) {
    try {
      const response = await axios.post(
        this.baseURL,
        {
          to: phoneNumber,
          message: message,
          sender_id: 'AFROMSG',
          api_key: this.token,
        },
        { headers: this.headers }
      );
      // if (response.data.acknowledge=='error') throw new Error(response.data.errors);
      // console.log(response.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  static async sendBulkMessages(payload) {
    try {
      const response = await axios.post(this.bulkURL, payload, {
        headers: this.headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MessageService;
