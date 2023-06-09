export interface ReviewInfiniteScrollListType {
  data: ReviewListType[];
  nextPage: number;
}

export interface ReviewListType {
  reviewId: string;
  reviewContent: string;
  reviewPosition: string;
  reviewCareerPath: string;
  totalGrade: number;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
  reviewCreatedAt: string;
  reviewModifiedAt: string;
  companyId: string;
  companyName: string;
  companyImgUrl: string;
}

export interface ReviewInfoIdType {
  reviewId: string;
  reviewContent: string;
  reviewPosition: string;
  reviewCareerPath: string;
  totalGrade: number;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
  reviewCreatedAt: string;
  reviewModifiedAt: string;
  writerId: string;
  memberNickName: string;
  memberSocialId: string;
  memberImageUrl: string;
}

export interface ReviewPostResponse {
  reviewId: {
    id: string;
  };
  reviewDetails: {
    content: string;
    position: string;
    careerPath: string;
    createdAt: string;
    modifiedAt: string;
  };
  reviewGrades: {
    totalGrade: number;
    salaryAndBenefits: number;
    workLifeBalance: number;
    organizationalCulture: number;
    careerAdvancement: number;
  };
  memberId: {
    id: string;
  };
  companyId: {
    id: string;
  };
}
