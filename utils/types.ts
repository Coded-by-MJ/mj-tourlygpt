export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface TourInput {
  city: string;
  country: string;
}

export interface TourObj {
  city: string;
  country: string;
  title: string;
  image?: string;
  description: string;
  stops: string[];
}
