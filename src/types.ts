export interface Announcement {
  _id?: string;
  category: string;
  description: string;
  date?: string;
}

export interface AnnouncementsResponse {
  data: Announcement[] | Announcement;
  success: boolean;
  message?: string;
}

export interface AnnouncementsResult {
  data: Announcement[] | Announcement | Boolean;
}

export interface Quiz {
  _id?: string;
  title: string;
  topic: string;
  course: string;
  type: string;
  createdAt?: string;
}

export interface QuizzesResponse {
  data: Quiz[] | Quiz;
  success: boolean;
  message?: string;
}

export interface QuizzesResult {
  data: Quiz[] | Quiz | Boolean;
}
