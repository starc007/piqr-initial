export interface WorkExperienceItem {
  companyName: string;
  position: string;
  description: string;
  from: string;
  to: string;
  current: string;
  location: string;
}

export interface EducationItem {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  from: string;
  to: string;
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

export type UserResponse = {
  profile: {
    _id:string 
    user: {
      _id:string 
      email:string 
      role:string 
      firstTime:false
    }
    bio?:string
    name:string 
    avatar:string 
    skills: string[]
    availableFor:string[]
  }
  education:EducationItem[]
  experience:WorkExperienceItem[]
  activities:unknown[]
}