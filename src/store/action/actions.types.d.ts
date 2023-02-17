export interface WorkExperienceItem {
  _id?: string;
  companyName: string;
  position: string;
  description: string;
  from: string;
  to: string;
  current: string;
  location: string;
  user: string;
}

export interface EducationItem {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  from: string;
  to: string;
  user: string;
  current: true;
}

export interface UpdateUserProps {
  name: string;
  avatar: string;
  bio: string;
  title: string;
  skills: string[];
  availableFor: string[];
}

export interface Socials {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  behance: string;
  dribble: string;
  website: string;
  youtube: string;
}

export interface SocialsResponse extends Socials {
  _id: string;
  user: string;
  updatedAt: string;
  createdAt: string;
}

export interface ActivityItem {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  collaborators: string[];
  date: Date;
}

export interface ActivityItemResponse extends ActivityItem {
  _id: string;
  createdAt: string;
  updatedAt: string;
  user: string;
}

export interface EndorseItem {
  message: string;
  endorseTo: string;
}

export interface MessageItem {
  message: string;
  uid: string;
}

export interface UserResponse {
  profile: {
    username: string;
    _id: string;
    user:
      | {
          _id: string;
          email: string;
          role: string;
          firstTime: false;
        }
      | string;
    bio?: string;
    name: string;
    avatar: string;
    skills: string[];
    availableFor: string[];
    title: string;
  };
  education: (EducationItem & { _id: string })[];
  experience: WorkExperienceItem[];
  activities: ActivityItemResponse[];
  socials: SocialsResponse;
}
