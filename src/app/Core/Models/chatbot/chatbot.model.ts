export interface ChatbotImageResponse {
  message: string;
  description: string;
  history: {
    user: string;
    bot: string;
  };
}
