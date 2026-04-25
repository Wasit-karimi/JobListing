export interface Job {
  owner: Owner
  locationAddress: string
  title: string
  type: string
  url: string
  createdAt: string
  skills_suggest: string[]
  descriptionBreakdown: DescriptionBreakdown
  locationCoordinates: LocationCoordinates
  department: string
  seniority: string
  updatedAt: string
  _id: string
}

export interface Owner {
  benefits: Benefits
  funding: string
  companyName: string
  rating: string
  evaluatedSize: number
  photo: string
  locationAddress: string
  teamSize: number
  _id: string
  locationCoordinates: LocationCoordinates
  isClaimed: boolean
  sector: string
  slug: string
  activated: boolean
}

export interface Benefits {
  benefits: string[]
  title: string
}

export interface DescriptionBreakdown {
  oneSentenceJobSummary: string
  keywords: string[]
  employmentType: string
  workModel: string
  salaryRangeMinYearly: number
  skillRequirements: string[]
  salaryRangeMaxYearly: number
}

export interface LocationCoordinates {
  lon: number
  lat: number
}
