import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { jobQuery } from "../api/job"

const JobDetails = () => {

  const {id} = useParams()

  const {data} = useQuery(jobQuery(id!))

  if(!data) return <div>error</div>

  return (
    <div>{data}</div>
  )
}

export default JobDetails